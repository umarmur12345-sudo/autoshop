import Link from "next/link";
import Image from "next/image";
import EstimateForm from "@/components/EstimateForm";
import FAQAccordion from "@/components/FAQAccordion";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";

const trustBadges = [
  { icon: "🏆", title: "GEICO ARX Trusted", subtitle: "Official GEICO Partner" },
  { icon: "⭐", title: "I-CAR Gold Certified", subtitle: "Industry Highest Standard" },
  { icon: "🌟", title: "4.9 Stars on Google", subtitle: "400+ Verified Reviews" },
  { icon: "📅", title: "11 Years in Business", subtitle: "Serving Brooklyn Since 2014" },
];

const services = [
  {
    title: "Collision Repair",
    desc: "Full structural and cosmetic collision repair for all vehicle types, restored to factory spec.",
    href: "/collision-repair-brooklyn",
    icon: "🔧",
  },
  {
    title: "Paint & Color Match",
    desc: "State-of-the-art spray booth with digital color match technology for a flawless finish.",
    href: "/auto-paint-shop-brooklyn",
    icon: "🎨",
  },
  {
    title: "Dent Removal",
    desc: "From minor door dings to major damage — all restored to factory condition.",
    href: "/dent-repair-brooklyn",
    icon: "🚗",
  },
  {
    title: "Insurance Claims",
    desc: "We work directly with all major insurance companies including GEICO, making it stress-free.",
    href: "/geico-auto-body-shop-brooklyn",
    icon: "📋",
  },
  {
    title: "Lease Returns",
    desc: "Specialized lease return preparation — pass your inspection with complete confidence.",
    href: "/services#lease",
    icon: "🔑",
  },
  {
    title: "Free Estimates",
    desc: "Walk in or call for a free, no-obligation estimate. Also available via photo inspection.",
    href: "/#estimate",
    icon: "💬",
  },
];

const beforeAfterCards = [
  {
    label: "Collision Repair",
    beforeNote: "T-bone collision, crumpled door panel, broken side mirror",
    afterNote: "Fully restored, color-matched, like it never happened",
  },
  {
    label: "Paint Restoration",
    beforeNote: "Severe oxidation, faded clear coat, dull finish throughout",
    afterNote: "Mirror-quality finish, protected clear coat, factory color",
  },
  {
    label: "Dent Removal",
    beforeNote: "Hail damage, multiple dents across hood and roof",
    afterNote: "Paintless dent removal — zero signs of damage remain",
  },
];

const shopPhotos = [
  {
    label: "Shop Exterior",
    alt: "auto body shop Brooklyn exterior — Aces Auto Bodyshop Gravesend",
    icon: "🏢",
    note: "60 Gravesend Neck Rd, Brooklyn",
  },
  {
    label: "Technicians at Work",
    alt: "auto body technicians working on vehicle in Brooklyn shop",
    icon: "👨‍🔧",
    note: "I-CAR Gold certified technicians",
  },
  {
    label: "Paint Spray Booth",
    alt: "professional auto paint spray booth Brooklyn auto body shop",
    icon: "🎨",
    note: "Downdraft spray booth — factory finish every time",
  },
  {
    label: "Owner & Team",
    alt: "Aces Auto Bodyshop owner and team Brooklyn NY",
    icon: "👥",
    note: "Family-owned and operated in Brooklyn since 2014",
  },
];

const whyChooseUs = [
  {
    icon: "✅",
    title: "GEICO Certified Repair Facility",
    desc: "One of Brooklyn's select GEICO ARX Trusted Shops — your repairs are backed by both us and GEICO.",
  },
  {
    icon: "🏆",
    title: "I-CAR Gold Class Technicians",
    desc: "The highest technician certification in collision repair. Our team continuously trains to stay current.",
  },
  {
    icon: "📅",
    title: "11+ Years of Experience",
    desc: "Serving Gravesend and all of Brooklyn since 2014. Thousands of vehicles restored to factory condition.",
  },
  {
    icon: "🛡️",
    title: "Lifetime Paint Warranty",
    desc: "We stand behind our work with a lifetime warranty on all paint and bodywork — no fine print.",
  },
  {
    icon: "📋",
    title: "Insurance Claims Assistance",
    desc: "We work directly with all major insurers. We handle the paperwork — you just drop off your car.",
  },
];

function StarRow() {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* ─── 1. HERO ─────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1920&q=80"
            alt="Professional auto body shop — Brooklyn collision repair and paint"
            fill
            className="object-cover"
            priority
            loading="eager"
          />
          {/* Primary dark overlay */}
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.55)" }} />
          {/* Directional gradient for text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/90 via-[#0a1628]/50 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 rounded-full px-4 py-1.5 mb-6">
              <div className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
              <span className="text-orange-300 text-sm font-medium">Now Accepting Walk-Ins & Appointments</span>
            </div>

            {/* H1 */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-4" style={{ fontFamily: "Montserrat, system-ui, sans-serif" }}>
              Brooklyn&apos;s Most
              <span className="block text-orange-400">Trusted Auto</span>
              <span className="block">Body Shop</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-slate-200 font-semibold mb-8">
              GEICO Certified &nbsp;·&nbsp; I-CAR Gold &nbsp;·&nbsp; 11 Years in Business
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                href="/#estimate"
                className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5 min-h-[56px]"
              >
                Get a Free Estimate
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <a
                href="tel:7186764600"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all border border-white/30 min-h-[56px]"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                Call Now — (718) 676-4600
              </a>
            </div>

            {/* Trust badge row */}
            <div className="flex flex-wrap gap-3 pt-6 border-t border-white/20">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                <span className="text-xs font-bold text-orange-300">GEICO</span>
                <span className="text-slate-300 text-xs">ARX Certified</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                <span className="text-xs font-bold text-orange-300">I-CAR</span>
                <span className="text-slate-300 text-xs">Gold Class</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                <span className="text-yellow-400 text-xs">★★★★★</span>
                <span className="text-slate-300 text-xs">4.9 Google</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                <span className="text-xs font-bold text-slate-200">BBB</span>
                <span className="text-slate-300 text-xs">Accredited</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ─── 2. TRUST BADGES STRIP ───────────────────────────────────── */}
      <section className="bg-[#0f2040] border-y border-white/10 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {trustBadges.map((badge) => (
              <div key={badge.title} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-3xl flex-shrink-0">{badge.icon}</div>
                <div>
                  <p className="text-white font-bold text-sm leading-tight">{badge.title}</p>
                  <p className="text-slate-400 text-xs mt-0.5">{badge.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3. BEFORE / AFTER GALLERY ───────────────────────────────── */}
      <section id="gallery" className="py-20 bg-[#0a1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-3">Real Results</p>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4" style={{ fontFamily: "Montserrat, system-ui, sans-serif" }}>
              See Real Repairs Completed in Brooklyn
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              Every vehicle that leaves our shop looks like it came straight from the factory.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {beforeAfterCards.map((card) => (
              <div key={card.label} className="bg-[#0f2040] border border-white/10 rounded-2xl overflow-hidden hover:border-orange-500/30 transition-colors">
                {/* Before / After panels */}
                <div className="flex h-52 sm:h-64">
                  {/* BEFORE */}
                  <div className="flex-1 flex flex-col items-center justify-center gap-3 bg-[#1a0a0a] border-r border-white/10 p-4">
                    <span className="text-xs font-black uppercase tracking-widest text-red-400/80 bg-red-500/10 border border-red-500/20 px-3 py-1 rounded-full">Before</span>
                    <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center">
                      <svg className="w-6 h-6 text-red-400/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                      </svg>
                    </div>
                    <p className="text-slate-500 text-xs text-center leading-relaxed">{card.beforeNote}</p>
                  </div>
                  {/* AFTER */}
                  <div className="flex-1 flex flex-col items-center justify-center gap-3 bg-[#0a1a0a] p-4">
                    <span className="text-xs font-black uppercase tracking-widest text-green-400/80 bg-green-500/10 border border-green-500/20 px-3 py-1 rounded-full">After</span>
                    <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-400/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-slate-400 text-xs text-center leading-relaxed">{card.afterNote}</p>
                  </div>
                </div>
                {/* Card footer */}
                <div className="px-5 py-4 border-t border-white/10">
                  <p className="text-white font-bold text-sm mb-0.5">{card.label}</p>
                  <p className="text-slate-500 text-xs italic">Real car. Real repair. Real Brooklyn customer.</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-slate-500 text-sm mt-8">
            📸 Real customer photo gallery coming soon — ask us to see examples in shop
          </p>
        </div>
      </section>

      {/* ─── 4. SERVICES PREVIEW ─────────────────────────────────────── */}
      <section className="py-20 bg-[#0f2040]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-3">What We Do</p>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4" style={{ fontFamily: "Montserrat, system-ui, sans-serif" }}>
              Complete Auto Body Services
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              From minor scratches to major collision damage — our certified technicians handle it all.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group bg-[#0a1628] border border-white/10 rounded-2xl p-7 hover:border-orange-500/50 hover:-translate-y-1 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10"
              >
                <div className="text-4xl mb-5">{service.icon}</div>
                <h3 className="text-white font-bold text-xl mb-3" style={{ fontFamily: "Montserrat, system-ui, sans-serif" }}>
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">{service.desc}</p>
                <div className="mt-5 flex items-center gap-1 text-orange-400 text-sm font-medium">
                  Learn more
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 border border-orange-500/50 text-orange-400 hover:bg-orange-500 hover:text-white font-semibold px-8 py-3.5 rounded-xl transition-all min-h-[48px]"
            >
              View All Services
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 5. INSIDE OUR BROOKLYN SHOP ─────────────────────────────── */}
      <section className="py-20 bg-[#0a1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-3">Our Facility</p>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4" style={{ fontFamily: "Montserrat, system-ui, sans-serif" }}>
              Inside Our Brooklyn Shop
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              State-of-the-art equipment. Professional environment. Certified technicians.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {shopPhotos.map((photo) => (
              <div
                key={photo.label}
                className="relative bg-[#0f2040] border border-white/10 rounded-2xl overflow-hidden hover:border-orange-500/30 transition-colors group"
                aria-label={photo.alt}
              >
                <div className="placeholder-shimmer h-56 sm:h-64 flex flex-col items-center justify-center gap-4">
                  <div className="text-5xl opacity-30 group-hover:opacity-50 transition-opacity">{photo.icon}</div>
                  <div className="text-center px-6">
                    <p className="text-slate-400 text-sm font-semibold">{photo.label}</p>
                    <p className="text-slate-600 text-xs mt-1">Photo coming soon</p>
                  </div>
                </div>
                <div className="px-5 py-4 border-t border-white/10">
                  <p className="text-white font-semibold text-sm">{photo.label}</p>
                  <p className="text-slate-500 text-xs mt-0.5 italic">{photo.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 6. WHY BROOKLYN TRUSTS US ───────────────────────────────── */}
      <section className="py-20 bg-[#0f2040]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-3">Our Difference</p>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4" style={{ fontFamily: "Montserrat, system-ui, sans-serif" }}>
              Why Brooklyn Trusts Us
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="bg-[#0a1628] border border-white/10 rounded-2xl p-7 hover:border-orange-500/30 transition-colors">
                <div className="text-4xl mb-5">{item.icon}</div>
                <h3 className="text-white font-bold text-lg mb-3" style={{ fontFamily: "Montserrat, system-ui, sans-serif" }}>
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
            {/* Sixth card — CTA */}
            <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/5 border border-orange-500/25 rounded-2xl p-7 flex flex-col justify-between">
              <div>
                <div className="text-4xl mb-5">📞</div>
                <h3 className="text-white font-bold text-lg mb-3" style={{ fontFamily: "Montserrat, system-ui, sans-serif" }}>
                  Ready to Get Started?
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Get a free estimate today — walk in, call, or submit photos online.
                </p>
              </div>
              <div className="mt-6 flex flex-col gap-3">
                <Link
                  href="/#estimate"
                  className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white font-bold px-5 py-3 rounded-xl text-sm transition-all min-h-[48px]"
                >
                  Free Estimate →
                </Link>
                <a
                  href="tel:7186764600"
                  className="inline-flex items-center justify-center text-orange-400 hover:text-orange-300 font-semibold text-sm min-h-[48px]"
                >
                  (718) 676-4600
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 7. ABOUT BANNER ─────────────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1920&q=80"
            alt="Professional auto body shop technicians at work in Brooklyn"
            fill
            className="object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-[#0a1628]/88" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-4">Trusted Since 2014</p>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6" style={{ fontFamily: "Montserrat, system-ui, sans-serif" }}>
              Brooklyn&apos;s Auto Body<br />Experts Since 2014
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Aces Auto Bodyshop has been serving the Brooklyn community for over 11 years. Located in Gravesend, we are a GEICO ARX Trusted Shop and I-CAR Gold Certified collision repair center. Our skilled technicians use state-of-the-art equipment to restore every vehicle to its original condition.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
              {[
                { number: "11+", label: "Years in Business" },
                { number: "400+", label: "5-Star Reviews" },
                { number: "GEICO", label: "ARX Certified" },
                { number: "I-CAR", label: "Gold Certified" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-black text-orange-400" style={{ fontFamily: "Montserrat, system-ui, sans-serif" }}>{stat.number}</div>
                  <div className="text-slate-400 text-xs mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-7 py-3.5 rounded-xl transition-all min-h-[48px]"
            >
              Our Story
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 8. ESTIMATE FORM ────────────────────────────────────────── */}
      <section id="estimate" className="py-20 bg-[#0a1628]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-3">100% Free · No Obligation</p>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4" style={{ fontFamily: "Montserrat, system-ui, sans-serif" }}>
              Request a Free Estimate Online
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              Submit photos of your damage and we&apos;ll respond within 2 business hours with a detailed estimate.
            </p>
          </div>

          <div className="bg-[#0f2040] border border-white/10 rounded-2xl p-6 md:p-10">
            <EstimateForm />
          </div>
        </div>
      </section>

      {/* ─── 9. TESTIMONIALS CAROUSEL ────────────────────────────────── */}
      <section className="py-20 bg-[#0f2040]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-3">Real Reviews</p>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4" style={{ fontFamily: "Montserrat, system-ui, sans-serif" }}>
              What Brooklyn Drivers Are Saying
            </h2>
            <div className="flex items-center justify-center gap-3 mb-2">
              <StarRow />
              <span className="text-white font-bold text-lg">4.9 / 5</span>
              <span className="text-slate-400 text-sm">(400+ Reviews)</span>
            </div>
          </div>

          <TestimonialsCarousel />

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <a
              href="https://www.google.com/search?q=Aces+Auto+Bodyshop+Brooklyn+reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-orange-500/50 text-slate-300 hover:text-orange-400 px-6 py-3 rounded-xl text-sm font-medium transition-all min-h-[48px]"
            >
              See All Google Reviews →
            </a>
            <a
              href="https://www.carwise.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-orange-500/50 text-slate-300 hover:text-orange-400 px-6 py-3 rounded-xl text-sm font-medium transition-all min-h-[48px]"
            >
              View on CarWise →
            </a>
          </div>
        </div>
      </section>

      {/* ─── 10. FAQ ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#0a1628]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-3">Got Questions?</p>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4" style={{ fontFamily: "Montserrat, system-ui, sans-serif" }}>
              Frequently Asked Questions
            </h2>
            <p className="text-slate-400 text-lg">
              Everything you need to know before bringing in your vehicle.
            </p>
          </div>

          <FAQAccordion />

          <div className="text-center mt-10">
            <p className="text-slate-400 text-sm mb-4">Still have questions? We&apos;re here to help.</p>
            <a
              href="tel:7186764600"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all min-h-[56px]"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              Call (718) 676-4600
            </a>
          </div>
        </div>
      </section>

      {/* ─── 11. GOOGLE MAPS ─────────────────────────────────────────── */}
      <section className="py-20 bg-[#0f2040]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-3">Find Us</p>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4" style={{ fontFamily: "Montserrat, system-ui, sans-serif" }}>
              Visit Our Brooklyn Shop
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Map */}
            <div className="lg:col-span-2 rounded-2xl overflow-hidden border border-white/10 shadow-2xl h-80 lg:h-96">
              <iframe
                title="Aces Auto Bodyshop location — 60 Gravesend Neck Rd, Brooklyn, NY"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://maps.google.com/maps?q=60+Gravesend+Neck+Rd+Brooklyn+NY+11223&output=embed&t=m&z=15"
              />
            </div>

            {/* Info sidebar */}
            <div className="flex flex-col gap-6">
              <div className="bg-[#0a1628] border border-white/10 rounded-2xl p-6">
                <h3 className="text-white font-bold text-lg mb-4" style={{ fontFamily: "Montserrat, system-ui, sans-serif" }}>Shop Info</h3>
                <ul className="space-y-4 text-sm">
                  <li className="flex gap-3">
                    <svg className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <div>
                      <p className="text-white font-medium">60 Gravesend Neck Rd</p>
                      <p className="text-slate-400">Brooklyn, NY 11223</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <svg className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    <div>
                      <a href="tel:7186764600" className="text-orange-400 hover:text-orange-300 font-medium block">(718) 676-4600</a>
                      <a href="tel:9176503061" className="text-orange-400 hover:text-orange-300 block">(917) 650-3061</a>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <svg className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div className="text-slate-400">
                      <p>Mon–Fri: <span className="text-white">8AM–6PM</span></p>
                      <p>Sat: <span className="text-white">9AM–3PM</span></p>
                      <p>Sun: <span className="text-red-400">Closed</span></p>
                    </div>
                  </li>
                </ul>
              </div>

              <a
                href="https://maps.google.com/maps?q=60+Gravesend+Neck+Rd+Brooklyn+NY+11223&dirflg=d"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-4 rounded-xl transition-all min-h-[56px] text-center"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                </svg>
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 12. FINAL CTA ───────────────────────────────────────────── */}
      <section className="py-24 bg-[#0a1628]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/5 border border-orange-500/20 rounded-3xl p-10 md:p-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4" style={{ fontFamily: "Montserrat, system-ui, sans-serif" }}>
              Ready to Get Your Car<br />
              <span className="text-orange-400">Looking Like New?</span>
            </h2>
            <p className="text-slate-300 text-lg mb-10 max-w-xl mx-auto">
              Free estimates. No obligation. Walk in or call today — we&apos;ll take care of the rest.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <Link
                href="/#estimate"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white font-bold px-10 py-4 rounded-xl text-lg transition-all hover:shadow-lg hover:shadow-orange-500/30 min-h-[56px]"
              >
                Get Free Estimate
              </Link>
              <a
                href="tel:7186764600"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 text-white font-bold text-xl min-h-[56px]"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                (718) 676-4600
              </a>
            </div>
            <p className="text-slate-500 text-sm mt-8">
              60 Gravesend Neck Rd, Brooklyn, NY 11223 &middot; Mon–Fri 8AM–6PM &middot; Sat 9AM–3PM
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
