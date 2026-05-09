import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Auto Paint Shop in Brooklyn, NY | Aces Auto Bodyshop",
  description:
    "Professional auto paint shop in Brooklyn, NY. Digital color matching, clear coat, custom color, lifetime warranty. GEICO certified. Call (718) 676-4600 for a free estimate.",
};

const paintServices = [
  {
    icon: "🎨",
    title: "Precision Color Matching",
    desc: "Our computerized color-matching system reads your vehicle's factory paint code and blends a perfect match — even for aged or faded finishes. You won't be able to tell where the original paint ends and ours begins.",
  },
  {
    icon: "💧",
    title: "Clear Coat Restoration",
    desc: "Faded or peeling clear coat makes your car look old and damages the base paint underneath. We remove failed clear coat, respray the base, and apply fresh clear for a deep, glossy finish.",
  },
  {
    icon: "✨",
    title: "Full Panel & Full-Car Respray",
    desc: "Whether you need one panel re-sprayed after a repair or want a complete color refresh for your whole vehicle, our downdraft paint booth delivers a factory-quality finish every time.",
  },
  {
    icon: "🔒",
    title: "Paint Protection & Clear Bra",
    desc: "Protect your fresh paint from road debris, UV rays, and minor scratches with our protective clear film application. Ideal for hoods, mirrors, and door edges on new or recently repainted vehicles.",
  },
];

const boothFeatures = [
  "Temperature-controlled downdraft spray booth",
  "UV-cured clear coat for maximum durability",
  "VOC-compliant waterborne paint system",
  "Computerized color spectrophotometry",
  "3-stage paint application (primer, base, clear)",
  "Lifetime warranty on all paint work",
];

export default function AutoPaintShopBrooklyn() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 bg-gradient-to-br from-[#060d1a] to-[#0f2040] overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-4">Brooklyn Auto Paint</p>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight" style={{ fontFamily: "Montserrat, system-ui, sans-serif" }}>
              Auto Paint Shop<br />
              <span className="text-orange-400">in Brooklyn, NY</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              Aces Auto Bodyshop is Brooklyn&apos;s go-to auto paint shop for collision repairs, full resprays, clear coat restoration, and custom color work. Our state-of-the-art downdraft spray booth and digital color matching deliver results that are indistinguishable from the factory.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/#estimate"
                className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all min-h-[56px]"
              >
                Get a Free Paint Estimate
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

      {/* Paint Services */}
      <section className="py-20 bg-[#0a1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4" style={{ fontFamily: "Montserrat, system-ui, sans-serif" }}>
              Our Auto Paint Services
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              From single-panel resprays to full-vehicle color changes — we do it all with precision.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {paintServices.map((s) => (
              <div key={s.title} className="bg-[#0f2040] border border-white/10 rounded-2xl p-8 hover:border-orange-500/30 transition-colors">
                <div className="text-4xl mb-5">{s.icon}</div>
                <h3 className="text-white font-bold text-xl mb-3" style={{ fontFamily: "Montserrat, system-ui, sans-serif" }}>{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spray Booth */}
      <section className="py-20 bg-[#0f2040]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6" style={{ fontFamily: "Montserrat, system-ui, sans-serif" }}>
                State-of-the-Art Paint Booth
              </h2>
              <p className="text-slate-400 leading-relaxed mb-5">
                Our temperature-controlled downdraft spray booth is the same technology used by factory OEM manufacturers. The controlled environment eliminates dust contamination, ensures perfect paint adhesion, and enables UV-cured clear coat that lasts for years.
              </p>
              <p className="text-slate-400 leading-relaxed mb-8">
                Combined with our digital color spectrophotometry system, we achieve a paint match that&apos;s perfect to the naked eye — even when matching factory finishes that have aged or faded over years of Brooklyn sun and salted winter roads.
              </p>
              <div className="space-y-3">
                {boothFeatures.map((f) => (
                  <div key={f} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-orange-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-300 text-sm">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#0a1628] border border-white/10 rounded-2xl p-8">
              <h3 className="text-white font-bold text-xl mb-6" style={{ fontFamily: "Montserrat, system-ui, sans-serif" }}>
                Lifetime Paint Warranty
              </h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                Every paint job performed at Aces Auto Bodyshop comes with a <strong className="text-white">lifetime warranty</strong> covering defects in workmanship and materials. If the paint fades, peels, or bubbles due to our application — we fix it for free.
              </p>
              <p className="text-slate-400 leading-relaxed mb-8">
                That&apos;s how confident we are in our process and materials. No asterisks. No time limits. Just a straightforward guarantee from a Brooklyn shop that cares about its reputation.
              </p>
              <Link
                href="/#estimate"
                className="inline-flex items-center justify-center w-full gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-4 rounded-xl transition-all min-h-[56px]"
              >
                Get a Free Paint Estimate
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Color Matching section */}
      <section className="py-20 bg-[#0a1628]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6" style={{ fontFamily: "Montserrat, system-ui, sans-serif" }}>
            Perfect Color Match — Every Time
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Worried your car&apos;s paint won&apos;t match after a repair? With our computerized spectrophotometer, we measure your vehicle&apos;s exact paint formulation and mix a perfect custom blend. This technology accounts for sun fade, age, and natural color variation between batches — so the repainted panel blends seamlessly with the rest of your car.
          </p>
          <p className="text-slate-400 leading-relaxed mb-10 max-w-2xl mx-auto">
            We paint vehicles for customers across Brooklyn — from Gravesend and Sheepshead Bay to Bay Ridge, Flatbush, Canarsie, and East New York. Bring your vehicle to us or submit photos online for a fast remote estimate.
          </p>
          <Link
            href="/#estimate"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-10 py-4 rounded-xl text-lg transition-all min-h-[56px]"
          >
            Request a Free Paint Estimate →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0f2040]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/5 border border-orange-500/20 rounded-3xl p-10 md:p-14 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4" style={{ fontFamily: "Montserrat, system-ui, sans-serif" }}>
              Brooklyn&apos;s Trusted Auto Paint Shop
            </h2>
            <p className="text-slate-300 text-lg mb-8">
              Factory-quality results. Lifetime warranty. Free estimates. Located in Gravesend, Brooklyn.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/#estimate" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-10 py-4 rounded-xl text-lg transition-all min-h-[56px]">
                Free Estimate
              </Link>
              <a href="tel:7186764600" className="text-white font-bold text-xl min-h-[48px] flex items-center">(718) 676-4600</a>
            </div>
            <p className="text-slate-500 text-sm mt-6">60 Gravesend Neck Rd, Brooklyn, NY 11223 · Mon–Fri 8AM–6PM · Sat 9AM–3PM</p>
          </div>
        </div>
      </section>
    </>
  );
}
