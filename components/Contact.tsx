"use client"

import React, { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simuler l'envoi du formulaire
      console.log('Form submitted:', formData);
      
      // Remplacez cette partie par votre logique d'envoi réelle
      // Exemple avec fetch:
      /*
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Erreur lors de l\'envoi');
      */

      // Simulation d'un délai d'envoi
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
    <section className="min-h-screen bg-green-700 py-12 md:py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Nous sommes là pour simplifier votre travail.
          </h2>
          <p className="text-lg md:text-xl text-white">
            Nous sommes à votre disposition pour vous accompagner. Laissez-nous un message.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
          
          {/* Name */}
          <div className="space-y-2">
            <label htmlFor="name" className="block text-base font-medium text-white">
              Nom complet <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              disabled={isSubmitting}
              placeholder="Entrez votre nom complet"
              className="w-full px-0 py-3 bg-transparent border-b-2 border-gray-400 focus:border-gray-900 focus:outline-none transition-colors text-gray-900 text-lg placeholder-gray-500 disabled:opacity-50"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label htmlFor="email" className="block text-base font-medium text-white">
              Email <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              disabled={isSubmitting}
              placeholder="votre@email.com"
              className="w-full px-0 py-3 bg-transparent border-b-2 border-gray-400 focus:border-gray-900 focus:outline-none transition-colors text-gray-900 text-lg placeholder-gray-500 disabled:opacity-50"
            />
          </div>

          {/* Message */}
          <div className="space-y-2">
            <label htmlFor="message" className="block text-base font-medium text-white">
              Message <span className="text-red-600">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              disabled={isSubmitting}
              placeholder="Écrivez votre message ici..."
              className="w-full px-0 py-3 bg-transparent border-b-2 border-gray-400 focus:border-gray-900 focus:outline-none transition-colors text-gray-900 text-lg resize-none placeholder-gray-500 disabled:opacity-50"
            ></textarea>
          </div>

          {/* Status Messages */}
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

          {/* Submit Button */}
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
  );
}