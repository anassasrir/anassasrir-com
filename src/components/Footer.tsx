import Link from "next/link";
import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export function Footer() {
  return (
    <footer className="border-t border-[#222222] bg-black text-[#999999] py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 font-[family-name:var(--font-space-mono)] text-xs">
        {/* Left: Identity */}
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 bg-white inline-block"></span>
          <span className="text-white font-medium tracking-wider">
            © 2026 ANASS ASRIR
          </span>
          <span className="text-[#444444] hidden sm:inline">|</span>
          <span className="text-[#777777] hidden sm:inline">
            SDET ARCHITECT & DIGITAL CRAFT
          </span>
        </div>

        {/* Center: Social Links */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/anassasrir"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1.5"
            aria-label="GitHub"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">GITHUB</span>
          </a>
          <a
            href="https://linkedin.com/in/anassasrir"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1.5"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">LINKEDIN</span>
          </a>
          <a
            href="mailto:asrir.anass@hotmail.fr"
            className="hover:text-white transition-colors flex items-center gap-1.5"
            aria-label="Email"
          >
            <Mail size={15} />
            <span className="hidden sm:inline">EMAIL</span>
          </a>
        </div>

        {/* Right: Back to top */}
        <Link
          href="#hero"
          className="flex items-center gap-1 text-white hover:text-[#999999] transition-colors"
        >
          <span>RETOUR EN HAUT</span>
          <ArrowUp size={14} />
        </Link>
      </div>
    </footer>
  );
}
