import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#060d1a] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                <span className="text-white font-black text-lg">A</span>
              </div>
              <div>
                <div className="text-white font-black text-lg" style={{ fontFamily: "Montserrat, system-ui, sans-serif" }}>ACES AUTO</div>
                <div className="text-orange-400 text-xs font-semibold tracking-widest uppercase">Bodyshop</div>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              Brooklyn&apos;s most trusted auto body shop. Serving the community since 2014 with GEICO-certified, I-CAR Gold quality repairs.
            </p>
            {/* Google Review Stars */}
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-yellow-400 font-bold text-sm">4.9</span>
              <span className="text-slate-500 text-xs">(400+ Google Reviews)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: "About Us", href: "/about" },
                { label: "Contact", href: "/contact" },
                { label: "Free Estimate", href: "/#estimate" },
                { label: "Before & After", href: "/#gallery" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-slate-400 hover:text-orange-400 text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Pages */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Our Services</h3>
            <ul className="space-y-3">
              {[
                { label: "Collision Repair Brooklyn", href: "/collision-repair-brooklyn" },
                { label: "Dent Repair Brooklyn", href: "/dent-repair-brooklyn" },
                { label: "Auto Paint Shop Brooklyn", href: "/auto-paint-shop-brooklyn" },
                { label: "GEICO Certified Repairs", href: "/geico-auto-body-shop-brooklyn" },
                { label: "Insurance Claims", href: "/services#insurance" },
                { label: "Lease Returns", href: "/services#lease" },
              ].map((service) => (
                <li key={service.label}>
                  <Link href={service.href} className="text-slate-400 hover:text-orange-400 text-sm transition-colors">
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <div>
                  <p className="text-slate-400 text-sm">60 Gravesend Neck Rd</p>
                  <p className="text-slate-400 text-sm">Brooklyn, NY 11223</p>
                </div>
              </li>
              <li>
                <a href="tel:7186764600" className="text-orange-400 hover:text-orange-300 text-sm font-medium block">(718) 676-4600</a>
                <a href="tel:9176503061" className="text-orange-400 hover:text-orange-300 text-sm font-medium block">(917) 650-3061</a>
              </li>
              <li>
                <a href="mailto:Acesbodyshop718@yahoo.com" className="text-slate-400 hover:text-orange-400 text-sm transition-colors break-all">
                  Acesbodyshop718@yahoo.com
                </a>
              </li>
              <li className="text-slate-400 text-sm space-y-0.5">
                <p>Mon–Fri: 8AM–6PM</p>
                <p>Sat: 9AM–3PM</p>
                <p>Sun: Closed</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Certifications row */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {[
              "✓ GEICO ARX Trusted Shop",
              "✓ I-CAR Gold Certified",
              "✓ BBB Accredited Business",
              "✓ Lifetime Paint Warranty",
              "✓ All Insurance Accepted",
            ].map((cert) => (
              <span key={cert} className="text-slate-400 text-xs bg-white/5 border border-white/10 px-4 py-2 rounded-full">
                {cert}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm text-center sm:text-left">
              © {new Date().getFullYear()} Aces Auto Bodyshop · 60 Gravesend Neck Rd, Brooklyn, NY 11223
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/collision-repair-brooklyn" className="text-slate-600 hover:text-slate-400 text-xs transition-colors">Collision Repair</Link>
              <Link href="/dent-repair-brooklyn" className="text-slate-600 hover:text-slate-400 text-xs transition-colors">Dent Repair</Link>
              <Link href="/auto-paint-shop-brooklyn" className="text-slate-600 hover:text-slate-400 text-xs transition-colors">Auto Paint</Link>
              <Link href="/geico-auto-body-shop-brooklyn" className="text-slate-600 hover:text-slate-400 text-xs transition-colors">GEICO Shop</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
