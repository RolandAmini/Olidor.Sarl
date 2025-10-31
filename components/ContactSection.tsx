"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar'; // si tu veux afficher ta nav

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      console.log('Form submitted:', formData);
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-green-700 py-12 md:py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12 text-center">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Nous sommes là pour simplifier votre travail.
            </h2>
            <p className="text-lg md:text-xl text-white">
              Nous sommes à votre disposition pour vous accompagner. Laissez-nous un message.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-base font-medium text-white">Nom complet</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                disabled={isSubmitting}
                placeholder="Entrez votre nom complet"
                className="w-full px-0 py-3 bg-transparent border-b-2 border-gray-400 focus:border-orange-400 focus:outline-none transition-colors text-white text-lg placeholder-gray-300 disabled:opacity-50"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-base font-medium text-white">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                disabled={isSubmitting}
                placeholder="votre@email.com"
                className="w-full px-0 py-3 bg-transparent border-b-2 border-gray-400 focus:border-gray-100 focus:outline-none transition-colors text-white text-lg placeholder-gray-300 disabled:opacity-50"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-base font-medium text-white">Message</label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                disabled={isSubmitting}
                placeholder="Écrivez votre message ici..."
                rows={5}
                className="w-full px-0 py-3 bg-transparent border-b-2 border-gray-400 focus:border-gray-100 focus:outline-none transition-colors text-white text-lg resize-none placeholder-gray-300 disabled:opacity-50"
              ></textarea>
            </div>

            {submitStatus === 'success' && (
              <div className="p-4 bg-green-100 border-l-4 border-green-500 text-green-700 rounded">
                <p className="font-medium">Message envoyé avec succès !</p>
                <p className="text-sm">Nous vous répondrons dans les plus brefs délais.</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="p-4 bg-red-100 border-l-4 border-red-500 text-red-700 rounded">
                <p className="font-medium">Erreur lors de l'envoi</p>
                <p className="text-sm">Veuillez réessayer plus tard.</p>
              </div>
            )}

            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto px-12 py-4 bg-green-400 hover:bg-gray-800 text-white font-bold rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform text-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
