import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white selection:bg-white selection:text-black">
      <Navbar />

      <main className="flex-1 pt-24">
        {/* Placeholder Hero for Milestone 2 testing */}
        <section
          id="hero"
          className="min-h-[85vh] flex items-center justify-center border-b border-[#222222] px-6"
        >
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 border border-[#333333] px-3.5 py-1 text-xs font-[family-name:var(--font-space-mono)] text-[#999999] uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Disponible pour missions & collaborations
            </div>

            <h1 className="font-[family-name:var(--font-space-grotesk)] text-5xl md:text-8xl font-bold tracking-tight uppercase leading-[0.95]">
              CRÉATEUR DE <br />
              <span className="text-[#666666]">SOLUTIONS</span> <br />
              DIGITALES.
            </h1>

            <p className="max-w-2xl mx-auto font-[family-name:var(--font-space-mono)] text-sm md:text-base text-[#999999] leading-relaxed">
              Senior SDET Architect & Développeur Fullstack. Spécialiste de
              l&apos;automatisation industrielle, de la stratégie Shift-Left et
              de la conception d&apos;expériences numériques performantes.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4 font-[family-name:var(--font-space-mono)] text-xs tracking-wider">
              <Link
                href="#projets"
                className="bg-white text-black px-8 py-3.5 font-bold uppercase hover:bg-neutral-200 transition-colors flex items-center gap-2"
              >
                <span>VOIR LES RÉALISATIONS</span>
                <ArrowRight size={14} />
              </Link>
              <Link
                href="#contact"
                className="border border-[#444444] text-white px-8 py-3.5 font-medium uppercase hover:border-white transition-colors"
              >
                DISCUTER DU PROJET
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
