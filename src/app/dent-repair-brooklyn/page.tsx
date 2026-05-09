import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dent Repair & Removal in Brooklyn, NY | Aces Auto Bodyshop",
  description:
    "Professional dent repair and removal in Brooklyn, NY. Paintless dent repair (PDR), hail damage, door dings. Free estimates. Call Aces Auto Bodyshop (718) 676-4600.",
};

const dentTypes = [
  {
    icon: "🔧",
    title: "Paintless Dent Repair (PDR)",
    desc: "The least invasive method — our technicians use specialized tools to gently massage dents out from behind the panel, preserving your factory paint. Ideal for door dings, small hail damage, and minor creases.",
    bestFor: "Door dings, minor hail damage, small creases",
  },
  {
    icon: "🚗",
    title: "Traditional Dent Repair",
    desc: "For larger dents or damage that has broken the paint, we use body filler, panel replacement, and color-matched paint to restore your vehicle to factory condition.",
    bestFor: "Large dents, broken paint, panel damage",
  },
  {
    icon: "☁️",
    title: "Hail Damage Repair",
    desc: "Brooklyn hailstorms can leave dozens of dents across your hood, roof, and trunk. We use PDR and traditional techniques to eliminate every dent without replacing panels.",
    bestFor: "Multiple dents across panels, hail storms",
  },
  {
    icon: "💥",
    title: "Bumper Dent & Scratch",
    desc: "Plastic bumper dents and scratches are our specialty. We repair, fill, and color-match your bumper to look factory-new — far more cost-effective than replacement.",
    bestFor: "Parking lot damage, minor rear-end impacts",
  },
];

export default function DentRepairBrooklyn() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 bg-gradient-to-br from-[#060d1a] to-[#0f2040] overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-4">Brooklyn Dent Repair</p>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight" style={{ fontFamily: "Montserrat, system-ui, sans-serif" }}>
              Dent Repair &amp; Removal<br />
              <span className="text-orange-400">in Brooklyn, NY</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              From a single door ding to full hail damage across your entire vehicle — Aces Auto Bodyshop in Gravesend, Brooklyn has the skill and equipment to make every dent disappear. Fast turnaround, competitive pricing, and results that speak for themselves.
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

      {/* PDR vs Traditional */}
      <section className="py-20 bg-[#0a1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4" style={{ fontFamily: "Montserrat, system-ui, sans-serif" }}>
              PDR vs. Traditional Dent Repair
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Not all dents are created equal. We choose the right technique based on your specific damage — maximizing quality while minimizing cost.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-[#0f2040] border border-green-500/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-xl" style={{ fontFamily: "Montserrat, system-ui, sans-serif" }}>Paintless Dent Repair (PDR)</h3>
              </div>
              <ul className="space-y-3 text-slate-400 text-sm">
                {["Preserves factory paint — no color match needed", "Faster turnaround — often same or next day", "More affordable than traditional repair", "Maintains your vehicle's resale value", "Ideal for dents where paint is not broken"].map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {i}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#0f2040] border border-orange-500/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63" />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-xl" style={{ fontFamily: "Montserrat, system-ui, sans-serif" }}>Traditional Dent Repair</h3>
              </div>
              <ul className="space-y-3 text-slate-400 text-sm">
                {["Required for dents with broken or cracked paint", "Handles larger, deeper damage", "Panel replacement when needed", "Color-matched paint with factory finish", "Lifetime warranty on all repairs"].map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Dent Types */}
      <section className="py-20 bg-[#0f2040]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4" style={{ fontFamily: "Montserrat, system-ui, sans-serif" }}>
              Types of Dent Repair We Handle
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {dentTypes.map((type) => (
              <div key={type.title} className="bg-[#0a1628] border border-white/10 rounded-2xl p-7 hover:border-orange-500/30 transition-colors">
                <div className="text-4xl mb-4">{type.icon}</div>
                <h3 className="text-white font-bold text-xl mb-3" style={{ fontFamily: "Montserrat, system-ui, sans-serif" }}>{type.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{type.desc}</p>
                <p className="text-xs text-orange-400/80 font-medium">Best for: <span className="text-slate-400 font-normal">{type.bestFor}</span></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing context */}
      <section className="py-20 bg-[#0a1628]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6" style={{ fontFamily: "Montserrat, system-ui, sans-serif" }}>
            Honest, Competitive Pricing
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Dent repair pricing in Brooklyn depends on the size, depth, location, and paint condition of the damage. PDR typically runs <strong className="text-white">$75–$300 per dent</strong>. Traditional repair varies based on panel size and paint work. We always provide a full written estimate before starting — no surprises.
          </p>
          <p className="text-slate-400 leading-relaxed mb-10 max-w-2xl mx-auto">
            If you&apos;re going through insurance, we work directly with your carrier and can help determine whether the claim is worth filing based on your deductible.
          </p>
          <Link
            href="/#estimate"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-10 py-4 rounded-xl text-lg transition-all min-h-[56px]"
          >
            Get Your Free Estimate →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0f2040]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/5 border border-orange-500/20 rounded-3xl p-10 md:p-14 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4" style={{ fontFamily: "Montserrat, system-ui, sans-serif" }}>
              Brooklyn&apos;s Dent Repair Specialists
            </h2>
            <p className="text-slate-300 text-lg mb-8">
              Walk in or submit photos. Free estimate. Same-day PDR available for minor damage.
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
