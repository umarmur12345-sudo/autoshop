"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy-900/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center">
              <span className="text-white font-black text-lg leading-none">A</span>
            </div>
            <div className="leading-tight">
              <div className="text-white font-black text-lg tracking-tight font-heading">ACES AUTO</div>
              <div className="text-orange-400 text-xs font-semibold tracking-widest uppercase">Bodyshop</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-slate-300 hover:text-orange-400 transition-colors text-sm font-medium">Home</Link>
            <Link href="/services" className="text-slate-300 hover:text-orange-400 transition-colors text-sm font-medium">Services</Link>
            <Link href="/about" className="text-slate-300 hover:text-orange-400 transition-colors text-sm font-medium">About</Link>
            <Link href="/contact" className="text-slate-300 hover:text-orange-400 transition-colors text-sm font-medium">Contact</Link>
            <a
              href="tel:7186764600"
              className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors"
            >
              (718) 676-4600
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`block h-0.5 bg-white transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-0.5 bg-white transition-all ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-navy-900 border-t border-white/10 px-4 py-6">
          <nav className="flex flex-col gap-4">
            <Link href="/" className="text-slate-300 hover:text-orange-400 py-2 font-medium" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link href="/services" className="text-slate-300 hover:text-orange-400 py-2 font-medium" onClick={() => setMenuOpen(false)}>Services</Link>
            <Link href="/about" className="text-slate-300 hover:text-orange-400 py-2 font-medium" onClick={() => setMenuOpen(false)}>About</Link>
            <Link href="/contact" className="text-slate-300 hover:text-orange-400 py-2 font-medium" onClick={() => setMenuOpen(false)}>Contact</Link>
            <a
              href="tel:7186764600"
              className="bg-orange-500 text-white px-5 py-3 rounded-lg font-semibold text-center mt-2"
              onClick={() => setMenuOpen(false)}
            >
              Call (718) 676-4600
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
