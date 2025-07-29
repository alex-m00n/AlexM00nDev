interface DiscordEmbed {
  title?: string;
  description?: string;
  color?: number;
  fields?: Array<{
    name: string;
    value: string;
    inline?: boolean;
  }>;
  timestamp?: string;
  footer?: {
    text: string;
  };
}

interface DiscordMessage {
  content?: string;
  embeds?: DiscordEmbed[];
}

class DiscordService {
  private botToken: string;
  private channelId: string;

  constructor() {
    this.botToken = process.env.DISCORD_BOT_TOKEN || '';
    this.channelId = process.env.DISCORD_CHANNEL_ID || '';
  }

  private async sendMessage(message: DiscordMessage): Promise<boolean> {
    try {
      if (!this.botToken || !this.channelId) {
        throw new Error('Configuration Discord manquante');
      }

      const response = await fetch(`https://discord.com/api/v10/channels/${this.channelId}/messages`, {
        method: 'POST',
        headers: {
          'Authorization': `Bot ${this.botToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(message),
      });

      if (!response.ok) {
        const error = await response.text();
        throw new Error(`Erreur Discord API: ${response.status} - ${error}`);
      }

      console.log('✅ Message Discord envoyé avec succès');
      return true;
    } catch (error) {
      console.error('❌ Erreur lors de l\'envoi du message Discord:', error);
      throw error;
    }
  }

  async sendContactMessage(data: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }) {
    const embed: DiscordEmbed = {
      title: '📧 Nouveau message de contact - AlexM00nDev',
      description: 'Un nouveau message a été envoyé depuis le formulaire de contact.',
      color: 0x007bff,
      fields: [
        { name: '👤 Nom', value: data.name, inline: true },
        { name: '📧 Email', value: data.email, inline: true },
        { name: '📝 Sujet', value: data.subject, inline: false },
        { 
          name: '💬 Message', 
          value: data.message.length > 1024 ? data.message.substring(0, 1021) + '...' : data.message, 
          inline: false 
        }
      ],
      timestamp: new Date().toISOString(),
      footer: { text: 'AlexM00nDev - Système de contact' }
    };

    return this.sendMessage({
      embeds: [embed]
    });
  }
}

const discordService = new DiscordService();

export default discordService; 