import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#060d1a] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center">
                <span className="text-white font-black text-lg">A</span>
              </div>
              <div>
                <div className="text-white font-black text-lg font-heading">ACES AUTO</div>
                <div className="text-orange-400 text-xs font-semibold tracking-widest uppercase">Bodyshop</div>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Brooklyn&apos;s most trusted auto body shop. Serving the community since 2014 with GEICO-certified, I-CAR Gold quality repairs.
            </p>
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
                { label: "Free Estimate", href: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-slate-400 hover:text-orange-400 text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Our Services</h3>
            <ul className="space-y-3">
              {[
                "Collision Repair",
                "Paint & Color Match",
                "Dent Removal",
                "Insurance Claims",
                "Lease Returns",
                "Free Estimates",
              ].map((service) => (
                <li key={service} className="text-slate-400 text-sm">{service}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Contact Info</h3>
            <ul className="space-y-4">
              <li>
                <p className="text-slate-400 text-sm">60 Gravesend Neck Rd</p>
                <p className="text-slate-400 text-sm">Brooklyn, NY 11223</p>
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
              <li className="text-slate-400 text-sm">
                <p>Mon–Thu: 8AM–6PM</p>
                <p>Fri: 8AM–5PM</p>
                <p>Sat–Sun: Closed</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Aces Auto Bodyshop. All rights reserved.
          </p>
          <div className="flex gap-2">
            <span className="text-slate-600 text-xs bg-white/5 px-3 py-1 rounded-full">GEICO ARX Trusted</span>
            <span className="text-slate-600 text-xs bg-white/5 px-3 py-1 rounded-full">I-CAR Gold Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
