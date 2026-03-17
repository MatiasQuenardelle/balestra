"use client";

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hola, soy ${name}. ${message}`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/5500000000000?text=${encoded}`, "_blank");
  };

  return (
    <section id="contacto" className="py-28 bg-surface">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center mb-12 section-divider pt-8">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-primary mb-4">
            Contactanos
          </h2>
          <p className="text-muted max-w-2xl mx-auto text-lg">
            Escribinos tu consulta y te respondemos al instante por WhatsApp.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="card-premium p-10 space-y-6"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Tu nombre
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Ej: Juan Pérez"
              className="w-full px-5 py-3.5 bg-surface border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Tu consulta
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={4}
              placeholder="Ej: Quiero consultar por la Ford Ranger..."
              className="w-full px-5 py-3.5 bg-surface border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white px-6 py-4 rounded-xl font-semibold text-lg hover:bg-green-600 transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-green-500/20"
          >
            <FaWhatsapp size={22} />
            Enviar por WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
