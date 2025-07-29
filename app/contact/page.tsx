"use client";

import React, { useState } from 'react';


function Toast({ message, onClose }: { message: string, onClose: () => void }) {
  React.useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);
  return (
    <div className="fixed bottom-6 right-6 z-50 bg-green-600 text-white px-4 py-3 rounded shadow-lg flex items-center space-x-2 animate-fade-in">
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
      <span>{message}</span>
    </div>
  );
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();


    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setShowToast(true);
      } else {
        const errorData = await response.json();
        console.error("Erreur lors de l'envoi du formulaire :", errorData);
      }
    } catch (error) {
      console.error("Erreur inattendue lors de l'envoi du formulaire :", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <head>
        <title>Me contacter | alexm00n.dev 🌙</title>
        <meta name="description" content="Contacter AlexM00n" />
      </head>
      <div className="max-w-4xl mx-auto px-4 pb-8">
        {showToast && (
          <Toast
            message="Votre message a bien été envoyé !"
            onClose={() => setShowToast(false)}
          />
        )}

        <h1
          className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent drop-shadow-lg mb-10 animate-fade-in"
        >
          Me contacter
          <p className="text-center text-lg animate-fade-in-slow mt-3 lg:max-w-[50vw] md:max-w-[70vw] max-w-[90vw] mx-auto">
            Vous avez une question, une suggestion ou besoin d'aide ? N'hésitez pas à me contacter !
          </p>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">Informations de contact</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 text-primary mt-1">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M12 22a2 2 0 002-2H10a2 2 0 002 2zm6-6V9a6 6 0 00-12 0v7l-2 2h16l-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Support réactif</h3>
                    <p className="text-muted-foreground">Notifications en temps réel</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 text-primary mt-1">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Temps de réponse</h3>
                    <p className="text-muted-foreground">Maximum 24 heures</p>
                    <p className="text-muted-foreground">Réponse par email</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card border border-foreground/20 rounded-lg p-6">
              <h3 className="font-semibold text-foreground mb-3">Autre manière de me contacter ?</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="mailto:alex.m00n1.contact@gmail.com" className="hover:underline text-primary hover:text-tertiary">Mon mail</a></li>
                <li><a href="https://discord.com/users/916694024973340672" target='_blank' className="hover:underline text-primary hover:text-tertiary">Mon discord</a></li>
              </ul>
            </div>

            <div className="bg-card border border-foreground/20 rounded-lg p-6">
              <h3 className="font-semibold text-foreground mb-3">Pourquoi me contacter ?</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Prendre contact pour une collaboration</li>
                <li>• Discuter d’un projet ou d’une idée</li>
                <li>• Signaler un bug sur un de mes projets</li>
                <li>• Donner des conseils</li>
                <li>• Demander des conseils</li>
                <li>• Autre</li>
              </ul>
            </div>
          </div>
          <div className="bg-card border border-foreground/20 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-foreground mb-6">Envoyez-moi un message</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Nom *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-foreground/20 rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-foreground/20 rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="votre.email@exemple.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Sujet *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-3 py-2 border border-foreground/20 rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent`}
                >
                  <option value="" disabled>
                    -- Sélectionnez un sujet --
                  </option>
                  <option value="contact">Prendre contact pour une collaboration</option>
                  <option value="projects">Discuter d’un projet ou d’une idée</option>
                  <option value="bug">Signaler un bug sur un de mes projets</option>
                  <option value="giveadvice">Donner des conseils</option>
                  <option value="askadvice">Demander des conseils</option>
                  <option value="other">Autre</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-3 py-2 border border-foreground/20 rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  placeholder="Décrivez votre question ou problème en détail..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground py-2 px-4 rounded-md font-medium hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
} 