"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "ACCUEIL", href: "#hero" },
    { label: "RÉALISATIONS", href: "#projets" },
    { label: "EXPÉRIENCE", href: "#experience" },
    { label: "BLOG", href: "#blog" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-[#222222]">
      <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="#hero"
          className="group flex items-center gap-2 text-white font-bold tracking-tighter text-lg md:text-xl font-[family-name:var(--font-space-grotesk)] hover:opacity-80 transition-opacity"
        >
          <span className="w-2.5 h-2.5 bg-white inline-block"></span>
          <span>ANASS ASRIR</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-[family-name:var(--font-space-mono)] text-xs tracking-widest">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[#999999] hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="border border-white px-5 py-2 text-white hover:bg-white hover:text-black transition-all duration-200 font-medium tracking-wider"
          >
            CONTACT
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-white hover:text-[#999999] transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black border-b border-[#222222] px-6 py-6 flex flex-col gap-5 font-[family-name:var(--font-space-mono)] text-sm tracking-widest">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#999999] hover:text-white py-1 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="border border-white text-center py-2.5 text-white hover:bg-white hover:text-black transition-all"
          >
            CONTACT
          </Link>
        </div>
      )}
    </header>
  );
}
