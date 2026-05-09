"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Announcement Bar */}
      <div className="bg-orange-600 text-white text-xs py-2 text-center font-semibold tracking-wide px-4">
        🏆 GEICO Certified &middot; Free Estimates &middot; Brooklyn&apos;s #1 Rated Shop
      </div>

      {/* Main Nav */}
      <div className="bg-[#0a1628]/95 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                <span className="text-white font-black text-lg leading-none">A</span>
              </div>
              <div className="leading-tight">
                <div className="text-white font-black text-lg tracking-tight" style={{ fontFamily: "Montserrat, system-ui, sans-serif" }}>ACES AUTO</div>
                <div className="text-orange-400 text-xs font-semibold tracking-widest uppercase">Bodyshop</div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              <Link href="/" className="text-slate-300 hover:text-orange-400 transition-colors text-sm font-medium">Home</Link>
              <Link href="/services" className="text-slate-300 hover:text-orange-400 transition-colors text-sm font-medium">Services</Link>
              <Link href="/about" className="text-slate-300 hover:text-orange-400 transition-colors text-sm font-medium">About</Link>
              <Link href="/contact" className="text-slate-300 hover:text-orange-400 transition-colors text-sm font-medium">Contact</Link>
              <Link href="/#estimate" className="text-slate-300 hover:text-orange-400 transition-colors text-sm font-medium">Free Estimate</Link>
              <a
                href="tel:7186764600"
                className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors flex items-center min-h-[44px]"
              >
                (718) 676-4600
              </a>
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-white p-2 min-h-[48px] min-w-[48px] flex items-center justify-center"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-6 flex flex-col gap-1.5">
                <span className={`block h-0.5 bg-white transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
                <span className={`block h-0.5 bg-white transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
                <span className={`block h-0.5 bg-white transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#0a1628] border-t border-white/10 px-4 py-6">
            <nav className="flex flex-col gap-1">
              {[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
                { label: "Free Estimate", href: "/#estimate" },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-slate-300 hover:text-orange-400 py-3 font-medium min-h-[48px] flex items-center border-b border-white/5"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:7186764600"
                className="bg-orange-500 text-white px-5 py-4 rounded-lg font-bold text-center mt-4 min-h-[56px] flex items-center justify-center text-lg"
                onClick={() => setMenuOpen(false)}
              >
                📞 Call (718) 676-4600
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
