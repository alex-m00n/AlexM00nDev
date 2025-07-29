import { NextRequest, NextResponse } from 'next/server';
import discordService from '@/lib/discord';

export async function POST(request: NextRequest) {
  try {
    if (!process.env.DISCORD_BOT_TOKEN || !process.env.DISCORD_CHANNEL_ID) {
      console.error('Variables d\'environnement Discord manquantes');
      return NextResponse.json(
        { message: 'Configuration Discord manquante' },
        { status: 500 }
      );
    }

    let body;
    try {
      body = await request.json();
    } catch (err) {
      console.error("Erreur lors du parsing du JSON du formulaire :", err);
      return NextResponse.json(
        { message: "Format de données invalide." },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      console.error("Erreur lors de l'envoi du formulaire : { champs manquants }");
      return NextResponse.json(
        { message: 'Tous les champs sont requis' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.error("Erreur lors de l'envoi du formulaire : { email invalide }");
      return NextResponse.json(
        { message: 'Adresse email invalide' },
        { status: 400 }
      );
    }

    console.log('📧 Envoi du message de contact via Discord...');

    await discordService.sendContactMessage({
      name,
      email,
      subject,
      message
    });

    console.log('✅ Message Discord envoyé avec succès');

    return NextResponse.json(
      { message: 'Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.' },
      { status: 200 }
    );

  } catch (error: any) {
    if (error && error.status === 400) {
      console.error(`Erreur lors de l'envoi du formulaire : ${JSON.stringify(error)}`);
    } else {
      console.error('❌ Erreur lors de l\'envoi du message de contact:', error);
    }

    if (error instanceof Error) {
      if (error.message.includes('Discord')) {
        return NextResponse.json(
          { message: 'Erreur de configuration Discord. Contactez l\'administrateur.' },
          { status: 500 }
        );
      }
      if (error.message.includes('Canal Discord introuvable')) {
        return NextResponse.json(
          { message: 'Erreur de configuration du canal Discord.' },
          { status: 500 }
        );
      }
    }

    if (error && error.status === 400) {
      return NextResponse.json(
        { message: error.message || 'Erreur lors de l\'envoi du formulaire.' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: 'Erreur lors de l\'envoi du message. Veuillez réessayer.' },
      { status: 500 }
    );
  }
}