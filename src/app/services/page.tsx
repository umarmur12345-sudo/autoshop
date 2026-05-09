import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auto Body Services | Aces Auto Bodyshop Brooklyn",
  description:
    "Collision repair, paint & color match, dent removal, insurance claims, lease returns, and free estimates. GEICO certified. I-CAR Gold. Brooklyn, NY.",
};

const services = [
  {
    id: "collision",
    title: "Collision Repair",
    subtitle: "Full Structural & Cosmetic Restoration",
    desc: "From minor fender benders to severe collision damage, our I-CAR Gold certified technicians perform complete structural and cosmetic collision repair for all vehicle makes and models. We use the latest frame straightening equipment and OEM or equivalent parts to restore your vehicle to pre-accident condition — guaranteed.",
    image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Collision repair — car being restored after accident",
    features: [
      "Frame and structural alignment",
      "All vehicle makes and models",
      "OEM-quality parts",
      "I-CAR Gold certified technicians",
      "Lifetime warranty on workmanship",
    ],
    icon: "🔧",
  },
  {
    id: "paint",
    title: "Paint & Color Matching",
    subtitle: "State-of-the-Art Digital Color Match",
    desc: "Our state-of-the-art downdraft spray booth combined with advanced digital color-match technology delivers a finish that is completely seamless and factory-perfect. Every paint job is precisely mixed and applied by master painters trained to match your vehicle's original color code — no matter how rare.",
    image: "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Car paint booth — professional automotive painting",
    features: [
      "Digital spectrophotometer color match",
      "Downdraft spray booth",
      "Clear coat finishes",
      "Pearl, metallic & matte paints",
      "Spot, panel & full-vehicle painting",
    ],
    icon: "🎨",
  },
  {
    id: "dent",
    title: "Dent & Scratch Removal",
    subtitle: "From Door Dings to Major Damage",
    desc: "Whether it's a small parking-lot door ding or a large crease from a significant impact, our technicians restore every dent and scratch to factory condition. We use a combination of paintless dent repair (PDR) techniques and conventional body work to achieve the best result for your specific damage.",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Auto body technician performing dent repair",
    features: [
      "Paintless dent repair (PDR)",
      "Conventional body work",
      "Scratch & scuff removal",
      "Bumper repair & replacement",
      "Panel replacement when needed",
    ],
    icon: "🚗",
  },
  {
    id: "insurance",
    title: "Insurance Claims",
    subtitle: "We Handle It All — Stress Free",
    desc: "As a GEICO ARX Trusted Shop, we work directly with GEICO and all other major insurance companies. We handle the paperwork, coordinate with adjusters, and advocate for you to ensure your vehicle gets the full scope of repairs it deserves. You just drop off your car — we take it from there.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Insurance claim paperwork for auto body repair",
    features: [
      "GEICO ARX Trusted Shop",
      "All major insurance carriers",
      "Direct billing to insurance",
      "Supplement negotiation",
      "Rental car coordination",
    ],
    icon: "📋",
  },
  {
    id: "lease",
    title: "Lease Returns",
    subtitle: "Pass Your Inspection with Confidence",
    desc: "Returning a leased vehicle with excess wear and tear can cost thousands. Our lease return specialists assess and repair all damage — dents, scratches, wheel curb rash, interior scuffs — so you pass your lease inspection and avoid excessive dealer charges. A small investment now saves a big bill later.",
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Clean car ready for lease return inspection",
    features: [
      "Pre-inspection assessment",
      "Dent & scratch repair",
      "Wheel & rim restoration",
      "Interior touch-ups",
      "Avoid excess wear charges",
    ],
    icon: "🔑",
  },
  {
    id: "estimates",
    title: "Free Estimates",
    subtitle: "No Obligation, Walk-Ins Welcome",
    desc: "Getting an estimate at Aces is always free, fast, and no-pressure. Walk in any time during business hours or call to schedule. We also offer photo inspections — just send us clear photos of the damage and we'll send you a same-day remote estimate, so you can plan without even coming in.",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Auto body shop free estimate consultation",
    features: [
      "Free in-person estimates",
      "Photo inspection available",
      "Same-day remote estimates",
      "No obligation",
      "Transparent pricing",
    ],
    icon: "💬",
  },
];

const perks = [
  { icon: "📡", label: "Free WiFi" },
  { icon: "🅿️", label: "Free Parking" },
  { icon: "📸", label: "Photo Inspections" },
  { icon: "🤝", label: "All Insurance" },
  { icon: "⚡", label: "Fast Turnaround" },
  { icon: "🛡️", label: "Warranty" },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0f2040] to-[#0a1628]" />
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1920&q=80"
            alt="Auto body shop interior"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-4">Brooklyn&apos;s Best</p>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6" style={{ fontFamily: "Montserrat, system-ui, sans-serif" }}>
            Our Services
          </h1>
          <p className="text-slate-300 text-xl max-w-2xl mx-auto mb-8">
            GEICO-certified. I-CAR Gold. Every service backed by 11+ years of expertise and a commitment to excellence.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all"
          >
            Get a Free Estimate
          </Link>
        </div>
      </section>

      {/* Perks Bar */}
      <section className="bg-[#0f2040] border-y border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8">
            {perks.map((perk) => (
              <div key={perk.label} className="flex items-center gap-2 text-slate-300">
                <span className="text-xl">{perk.icon}</span>
                <span className="text-sm font-medium">{perk.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-[#0a1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              {/* Image */}
              <div className={`relative h-72 md:h-96 rounded-2xl overflow-hidden ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/60 to-transparent" />
                <div className="absolute bottom-4 left-4 bg-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
                  {service.subtitle}
                </div>
              </div>

              {/* Content */}
              <div>
                <div className="text-5xl mb-5">{service.icon}</div>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-4" style={{ fontFamily: "Montserrat, system-ui, sans-serif" }}>
                  {service.title}
                </h2>
                <p className="text-slate-400 text-base leading-relaxed mb-8">{service.desc}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-slate-300 text-sm">
                      <div className="w-5 h-5 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-xl transition-all text-sm"
                >
                  Get a Free Estimate
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0f2040]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black text-white mb-4" style={{ fontFamily: "Montserrat, system-ui, sans-serif" }}>
            Not Sure What You Need?
          </h2>
          <p className="text-slate-400 text-lg mb-8">
            Bring your car in or send us photos. We&apos;ll assess the damage and give you a free, honest estimate — no pressure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl transition-all text-lg"
            >
              Schedule a Free Estimate
            </Link>
            <a
              href="tel:7186764600"
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-xl transition-all text-lg"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              (718) 676-4600
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
