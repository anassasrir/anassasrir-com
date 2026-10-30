import Link from "next/link";
import { ArrowRight, Terminal } from "lucide-react";

export function Hero() {
  const stats = [
    { number: "8+", label: "Années d'Expérience" },
    { number: "30+", label: "Projets & Suites Livrés" },
    { number: "90%", label: "Temps Manuel Économisé" },
    { number: "2 500+", label: "Bugs Critiques Évités" },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-between pt-28 pb-16 px-6 max-w-7xl mx-auto border-b border-[#222222]"
    >
      {/* Background architectural grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111111_1px,transparent_1px),linear-gradient(to_bottom,#111111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10 opacity-70" />

      {/* Top Banner Tag */}
      <div className="flex items-center justify-between">
        <div className="inline-flex items-center gap-2.5 border border-[#222222] bg-[#0a0a0a] px-3.5 py-1.5 text-xs font-[family-name:var(--font-space-mono)] text-[#999999]">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="tracking-widest uppercase text-[11px]">
            DISPONIBLE POUR MISSIONS STRATÉGIQUES
          </span>
        </div>
        <div className="hidden md:flex items-center gap-2 text-xs font-[family-name:var(--font-space-mono)] text-[#666666]">
          <Terminal size={14} />
          <span>SDET ARCHITECT // DIGITAL CRAFTSMAN</span>
        </div>
      </div>

      {/* Main Display Typography */}
      <div className="my-auto py-12">
        <div className="text-xs font-[family-name:var(--font-space-mono)] tracking-[0.25em] text-[#777777] uppercase mb-4">
          PORTFOLIO & LAB // 2026
        </div>

        <h1 className="font-[family-name:var(--font-space-grotesk)] text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter uppercase leading-[0.92] text-white">
          CRÉATEUR DE <br />
          <span className="text-[#666666] hover:text-[#888888] transition-colors">
            SOLUTIONS
          </span>{" "}
          <br />
          DIGITALES.
        </h1>

        <p className="mt-8 max-w-2xl font-[family-name:var(--font-space-mono)] text-sm md:text-base text-[#aaaaaa] leading-relaxed">
          Architecte SDET Senior & Développeur Fullstack. Je conçois des
          infrastructures d&apos;assurance qualité industrielle (Shift-Left, IA,
          Playwright, CI/CD) et développe des applications web modulaires,
          minimalistes et à fort impact produit.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-wrap items-center gap-4 font-[family-name:var(--font-space-mono)] text-xs tracking-wider">
          <Link
            href="#projets"
            className="group inline-flex items-center gap-3 border border-white bg-transparent text-white px-7 py-3.5 uppercase font-medium hover:bg-white hover:text-black transition-all duration-200"
          >
            <span>VOIR LES PROJETS</span>
            <ArrowRight
              size={15}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 border border-[#333333] bg-[#0a0a0a] text-[#cccccc] px-7 py-3.5 uppercase font-medium hover:border-white hover:text-white transition-all duration-200"
          >
            <span>DISCUTER D&apos;UN PROJET</span>
          </Link>
        </div>
      </div>

      {/* Bottom Metrics Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-[#1a1a1a]">
        {stats.map((stat, i) => (
          <div key={i} className="flex flex-col">
            <span className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              {stat.number}
            </span>
            <span className="font-[family-name:var(--font-space-mono)] text-xs text-[#777777] uppercase tracking-wider mt-1">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
