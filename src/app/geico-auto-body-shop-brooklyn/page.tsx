import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "GEICO Certified Auto Body Shop in Brooklyn, NY | Aces Auto Bodyshop",
  description:
    "GEICO ARX Trusted Shop in Brooklyn, NY. Certified for GEICO direct repair — we handle your claim, coordinate with GEICO, and restore your car. Call (718) 676-4600.",
};

const geicoBenefits = [
  {
    icon: "📋",
    title: "Direct Insurance Billing",
    desc: "As a GEICO ARX Trusted Shop, we bill GEICO directly. You don't need to handle any paperwork or payment coordination — we do it all.",
  },
  {
    icon: "🔍",
    title: "On-Site Damage Assessment",
    desc: "No need to visit a separate GEICO inspection center. We inspect, document, and estimate your damage right in our shop — faster and more convenient.",
  },
  {
    icon: "🛡️",
    title: "Dual Warranty Coverage",
    desc: "Repairs performed at our GEICO-certified shop are covered by both our lifetime workmanship warranty AND GEICO's satisfaction guarantee.",
  },
  {
    icon: "⚡",
    title: "Faster Repair Timeline",
    desc: "The GEICO ARX program streamlines approvals and parts ordering. We start repairs faster and get you back on the road sooner than non-certified shops.",
  },
  {
    icon: "📱",
    title: "Hassle-Free Process",
    desc: "File your GEICO claim, then drop off your car with us. We communicate directly with your adjuster — you just pick up your repaired vehicle.",
  },
  {
    icon: "🏆",
    title: "Verified Quality Standards",
    desc: "GEICO only partners with shops that meet rigorous standards for technician training, equipment, and customer satisfaction. We're proud to qualify.",
  },
];

const claimSteps = [
  { step: "1", title: "File Your GEICO Claim", desc: "Report your accident through GEICO's app, website, or by calling 1-800-841-3000. Mention you want to use Aces Auto Bodyshop." },
  { step: "2", title: "Schedule a Drop-Off", desc: "Call us at (718) 676-4600 or walk in. We'll coordinate directly with your GEICO adjuster to get the repair authorized quickly." },
  { step: "3", title: "We Handle Everything", desc: "Our team inspects the damage, creates a detailed repair plan, orders parts, and begins the restoration — all while keeping GEICO updated." },
  { step: "4", title: "Pick Up Your Car", desc: "Once your vehicle passes our quality inspection, we notify you for pickup. Clean, restored, and covered by our lifetime warranty." },
];

export default function GeicoAutoBodyShopBrooklyn() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 bg-gradient-to-br from-[#060d1a] to-[#0f2040] overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 rounded-full px-4 py-2 mb-6">
              <span className="text-orange-300 text-sm font-bold">🏆 GEICO ARX Trusted Shop</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight" style={{ fontFamily: "Montserrat, system-ui, sans-serif" }}>
              GEICO Certified Auto<br />Body Shop in{" "}
              <span className="text-orange-400">Brooklyn, NY</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              Aces Auto Bodyshop is a GEICO ARX (Auto Repair Xpress) Trusted Shop — one of a select few certified collision repair centers in Brooklyn. We handle your GEICO claim from start to finish so you don&apos;t have to deal with the paperwork.
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

      {/* What GEICO Certification Means */}
      <section className="py-20 bg-[#0a1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6" style={{ fontFamily: "Montserrat, system-ui, sans-serif" }}>
                What Does GEICO Certification Mean?
              </h2>
              <p className="text-slate-400 leading-relaxed mb-5">
                GEICO&apos;s ARX (Auto Repair Xpress) program is one of the most rigorous certification programs in the auto insurance industry. To become an ARX Trusted Shop, a body shop must meet GEICO&apos;s standards for:
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "I-CAR Gold Class technician certification",
                  "State-of-the-art repair equipment and facilities",
                  "Documented quality control processes",
                  "Customer satisfaction ratings",
                  "OEM or equivalent parts usage",
                  "Ongoing GEICO performance audits",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-300 text-sm">
                    <svg className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-slate-400 leading-relaxed">
                Aces Auto Bodyshop has earned and maintained this certification since we opened our Gravesend, Brooklyn location. It represents our commitment to quality, transparency, and customer service — values that have earned us 400+ five-star Google reviews.
              </p>
            </div>

            <div className="bg-[#0f2040] border border-orange-500/20 rounded-2xl p-8">
              <h3 className="text-white font-bold text-xl mb-6" style={{ fontFamily: "Montserrat, system-ui, sans-serif" }}>
                GEICO Direct Repair Program
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-5">
                The GEICO Direct Repair Program means we have a pre-approved relationship with GEICO. This eliminates the typical back-and-forth between you, the shop, and the insurance adjuster.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed mb-5">
                When you bring your GEICO-insured vehicle to our shop:
              </p>
              <ul className="space-y-3 text-sm">
                {[
                  "We contact GEICO directly to begin the claims process",
                  "No separate inspection appointment required",
                  "Parts are ordered and approved faster",
                  "Repair timeline is typically 30–50% shorter",
                  "You pay only your deductible — we bill the rest to GEICO",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-300">
                    <svg className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits grid */}
      <section className="py-20 bg-[#0f2040]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4" style={{ fontFamily: "Montserrat, system-ui, sans-serif" }}>
              Benefits of Choosing a GEICO Certified Shop
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {geicoBenefits.map((b) => (
              <div key={b.title} className="bg-[#0a1628] border border-white/10 rounded-2xl p-7 hover:border-orange-500/30 transition-colors">
                <div className="text-3xl mb-4">{b.icon}</div>
                <h3 className="text-white font-bold text-lg mb-3" style={{ fontFamily: "Montserrat, system-ui, sans-serif" }}>{b.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Claim Process */}
      <section className="py-20 bg-[#0a1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4" style={{ fontFamily: "Montserrat, system-ui, sans-serif" }}>
              How the GEICO Claims Process Works at Our Shop
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {claimSteps.map((s) => (
              <div key={s.step} className="bg-[#0f2040] border border-white/10 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400 font-black text-xl mx-auto mb-5" style={{ fontFamily: "Montserrat, system-ui, sans-serif" }}>
                  {s.step}
                </div>
                <h3 className="text-white font-bold text-base mb-3" style={{ fontFamily: "Montserrat, system-ui, sans-serif" }}>{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0f2040]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/5 border border-orange-500/20 rounded-3xl p-10 md:p-14 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4" style={{ fontFamily: "Montserrat, system-ui, sans-serif" }}>
              Brooklyn&apos;s GEICO ARX Trusted Shop
            </h2>
            <p className="text-slate-300 text-lg mb-4">
              Have a GEICO claim? Bring your car to Aces — we handle everything from inspection to delivery.
            </p>
            <p className="text-slate-400 text-sm mb-8">
              Not insured through GEICO? No problem — we work with all major insurers.
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
