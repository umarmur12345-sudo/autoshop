import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Collision Repair in Brooklyn, NY | Aces Auto Bodyshop",
  description:
    "Expert collision repair in Brooklyn, NY. GEICO ARX Trusted & I-CAR Gold Certified. Free estimates, lifetime warranty, all insurance accepted. Call (718) 676-4600.",
};

const steps = [
  { num: "01", title: "Free Damage Assessment", desc: "Walk in or submit photos online. We inspect the structural and cosmetic damage and provide a detailed, no-obligation estimate." },
  { num: "02", title: "Insurance Coordination", desc: "We work directly with GEICO, State Farm, Allstate, Progressive, and all major insurers. We handle the claims paperwork for you." },
  { num: "03", title: "Expert Repair", desc: "Our I-CAR Gold certified technicians use OEM-quality parts and advanced frame straightening equipment to restore your vehicle." },
  { num: "04", title: "Quality Check & Delivery", desc: "Every repair passes a multi-point quality inspection before delivery. Your car leaves looking factory-new — guaranteed." },
];

const features = [
  "Full structural & frame alignment",
  "OEM-quality parts for all makes & models",
  "Downdraft paint spray booth",
  "Digital color match technology",
  "I-CAR Gold certified technicians",
  "Lifetime warranty on all repairs",
  "All major insurance companies accepted",
  "GEICO ARX Direct Repair Program",
];

export default function CollisionRepairBrooklyn() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 bg-gradient-to-br from-[#060d1a] to-[#0f2040] overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-4">Brooklyn Collision Repair</p>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight" style={{ fontFamily: "Montserrat, system-ui, sans-serif" }}>
              Collision Repair in<br />
              <span className="text-orange-400">Brooklyn, NY</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              From minor fender benders to major accident damage — Aces Auto Bodyshop restores every vehicle to factory condition. GEICO ARX Trusted. I-CAR Gold Certified. Serving Gravesend, Bay Ridge, Bensonhurst, and all of Brooklyn since 2014.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/#estimate"
                className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all min-h-[56px]"
              >
                Get a Free Estimate
              </Link>
              <a
                href="tel:7186764600"
                className="inline-flex items-center justify-center gap-2 border border-white/30 hover:bg-white/10 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all min-h-[56px]"
              >
                📞 (718) 676-4600
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What is Collision Repair */}
      <section className="py-20 bg-[#0a1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6" style={{ fontFamily: "Montserrat, system-ui, sans-serif" }}>
                What Does Collision Repair Involve?
              </h2>
              <p className="text-slate-400 leading-relaxed mb-5">
                Collision repair goes far beyond cosmetic fixes. After an accident, your vehicle may have hidden structural damage — bent frames, misaligned suspension, or compromised safety systems — that isn&apos;t visible to the naked eye.
              </p>
              <p className="text-slate-400 leading-relaxed mb-5">
                At Aces Auto Bodyshop in Brooklyn, our I-CAR Gold certified technicians perform a complete vehicle assessment using computerized frame measurement equipment. We restore everything: structural integrity, body panels, paint, glass, and mechanical components — so your car is as safe as it was before the accident.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Whether you drive a compact, sedan, SUV, or luxury vehicle, we service all makes and models. Our Gravesend shop has served Brooklyn neighborhoods including Bay Ridge, Bensonhurst, Sheepshead Bay, Flatbush, and beyond for over 11 years.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <h3 className="text-white font-bold text-xl mb-2" style={{ fontFamily: "Montserrat, system-ui, sans-serif" }}>Our Collision Repair Includes:</h3>
              <div className="grid grid-cols-1 gap-3">
                {features.map((f) => (
                  <div key={f} className="flex items-center gap-3 bg-[#0f2040] border border-white/10 rounded-xl px-5 py-3">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-300 text-sm">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-[#0f2040]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4" style={{ fontFamily: "Montserrat, system-ui, sans-serif" }}>
              Our Collision Repair Process
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">Simple, transparent, and stress-free from drop-off to pickup.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="bg-[#0a1628] border border-white/10 rounded-2xl p-6">
                <div className="text-4xl font-black text-orange-500/30 mb-4" style={{ fontFamily: "Montserrat, system-ui, sans-serif" }}>{step.num}</div>
                <h3 className="text-white font-bold text-lg mb-3" style={{ fontFamily: "Montserrat, system-ui, sans-serif" }}>{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance section */}
      <section className="py-20 bg-[#0a1628]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6" style={{ fontFamily: "Montserrat, system-ui, sans-serif" }}>
            We Handle Your Insurance Claim
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            As a GEICO ARX Trusted Shop, Aces Auto Bodyshop has a direct billing relationship with GEICO — no out-of-pocket hassle. We also work with State Farm, Allstate, Progressive, Liberty Mutual, Travelers, and all other major insurers. We handle the paperwork so you can focus on getting back on the road.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {["GEICO", "State Farm", "Allstate", "Progressive", "Liberty Mutual", "Travelers"].map((ins) => (
              <span key={ins} className="bg-[#0f2040] border border-white/10 text-slate-300 text-sm px-5 py-2.5 rounded-full">{ins}</span>
            ))}
          </div>
          <Link
            href="/#estimate"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-10 py-4 rounded-xl text-lg transition-all min-h-[56px]"
          >
            Start Your Free Estimate →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0f2040]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/5 border border-orange-500/20 rounded-3xl p-10 md:p-14 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4" style={{ fontFamily: "Montserrat, system-ui, sans-serif" }}>
              Brooklyn&apos;s Trusted Collision Repair Shop
            </h2>
            <p className="text-slate-300 text-lg mb-8 max-w-xl mx-auto">
              GEICO Certified. I-CAR Gold. 4.9★ on Google. 11+ Years in Gravesend, Brooklyn.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/#estimate"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-10 py-4 rounded-xl text-lg transition-all min-h-[56px]"
              >
                Free Estimate
              </Link>
              <a href="tel:7186764600" className="text-white font-bold text-xl min-h-[48px] flex items-center">
                (718) 676-4600
              </a>
            </div>
            <p className="text-slate-500 text-sm mt-6">60 Gravesend Neck Rd, Brooklyn, NY 11223 · Mon–Fri 8AM–6PM · Sat 9AM–3PM</p>
          </div>
        </div>
      </section>
    </>
  );
}
