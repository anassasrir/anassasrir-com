"use client";

import { useState } from "react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { Check, Mail, Send } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate direct contact dispatch / mailto fallback
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      window.location.href = `mailto:asrir.anass@hotmail.fr?subject=Contact via Portfolio - ${encodeURIComponent(
        formData.name
      )}&body=${encodeURIComponent(
        `Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
    }, 600);
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left Column: Direct Info & Socials */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <span className="font-[family-name:var(--font-space-mono)] text-xs text-[#777777] uppercase tracking-[0.2em] block mb-2">
              CONTACT & COLLABORATION
            </span>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl sm:text-5xl font-bold tracking-tight uppercase text-white leading-tight">
              DISCUTONS DE VOTRE PROJET.
            </h2>
          </div>

          <p className="font-[family-name:var(--font-space-mono)] text-xs sm:text-sm text-[#aaaaaa] leading-relaxed">
            Je suis toujours ouvert à de nouvelles opportunités : audit de maturité
            qualité, architecture d&apos;automatisation (Shift-Left / Playwright),
            intégration d&apos;agents IA ou développement produit.
          </p>

          {/* Social Links */}
          <div className="pt-4 space-y-3 font-[family-name:var(--font-space-mono)] text-xs">
            <a
              href="mailto:asrir.anass@hotmail.fr"
              className="flex items-center gap-3 p-3 bg-[#0a0a0a] border border-[#222222] hover:border-white text-white transition-colors"
            >
              <Mail size={16} />
              <span>asrir.anass@hotmail.fr</span>
            </a>

            <div className="grid grid-cols-2 gap-3">
              <a
                href="https://github.com/anassasrir"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-3 bg-[#0a0a0a] border border-[#222222] hover:border-white text-white transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GITHUB ↗</span>
              </a>

              <a
                href="https://linkedin.com/in/anassasrir"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-3 bg-[#0a0a0a] border border-[#222222] hover:border-white text-white transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LINKEDIN ↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Underline Inputs Form */}
        <div className="lg:col-span-7 bg-[#0a0a0a] border border-[#222222] p-8 sm:p-12">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-12 h-12 bg-white text-black flex items-center justify-center mx-auto">
                <Check size={24} />
              </div>
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold uppercase text-white">
                Message Préparé avec Succès
              </h3>
              <p className="font-[family-name:var(--font-space-mono)] text-xs text-[#999999] max-w-md mx-auto">
                Votre client de messagerie a été ouvert avec les informations
                saisies. Si ce n&apos;est pas le cas, vous pouvez m&apos;écrire
                directement à{" "}
                <a
                  href="mailto:asrir.anass@hotmail.fr"
                  className="text-white underline"
                >
                  asrir.anass@hotmail.fr
                </a>
                .
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-6 border border-[#444444] text-white px-6 py-2.5 font-[family-name:var(--font-space-mono)] text-xs uppercase hover:border-white transition-colors cursor-pointer"
              >
                Envoyer un autre message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name */}
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="font-[family-name:var(--font-space-mono)] text-xs text-[#888888] uppercase tracking-wider block"
                >
                  01 // NOM COMPLET
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Ex : Alexandre Martin"
                  className="w-full bg-transparent border-b border-[#333333] focus:border-white py-3 text-white font-[family-name:var(--font-space-mono)] text-sm outline-none transition-colors placeholder:text-[#444444]"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="font-[family-name:var(--font-space-mono)] text-xs text-[#888888] uppercase tracking-wider block"
                >
                  02 // ADRESSE EMAIL PROFESSIONNELLE
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="nom@entreprise.com"
                  className="w-full bg-transparent border-b border-[#333333] focus:border-white py-3 text-white font-[family-name:var(--font-space-mono)] text-sm outline-none transition-colors placeholder:text-[#444444]"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="font-[family-name:var(--font-space-mono)] text-xs text-[#888888] uppercase tracking-wider block"
                >
                  03 // MESSAGE & CADRAGE DU BESOIN
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Décrivez votre besoin : audit QA, automatisation, développement ou mission..."
                  className="w-full bg-transparent border-b border-[#333333] focus:border-white py-3 text-white font-[family-name:var(--font-space-mono)] text-sm outline-none transition-colors resize-none placeholder:text-[#444444]"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white text-black font-[family-name:var(--font-space-mono)] font-bold text-xs uppercase tracking-widest py-4 hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>ENVOI EN COURS...</span>
                ) : (
                  <>
                    <span>ENVOYER LE MESSAGE</span>
                    <Send size={14} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
