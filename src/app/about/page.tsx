import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Aces Auto Bodyshop Brooklyn",
  description:
    "Aces Auto Bodyshop has served Brooklyn since 2014. GEICO ARX Trusted Shop & I-CAR Gold Certified. Meet our team and learn our story.",
};

const stats = [
  { number: "11+", label: "Years in Business" },
  { number: "400+", label: "5-Star Reviews" },
  { number: "GEICO", label: "ARX Certified" },
  { number: "I-CAR", label: "Gold Certified" },
];

const certifications = [
  {
    title: "GEICO ARX Trusted Shop",
    desc: "Selected by GEICO as a trusted collision repair partner — meaning we meet the highest standards for quality, customer service, and repair processes.",
    icon: "🏆",
  },
  {
    title: "I-CAR Gold Certified",
    desc: "I-CAR Gold Class is the highest recognition in collision repair training. Our technicians maintain continuous education to stay current with the latest repair techniques.",
    icon: "⭐",
  },
  {
    title: "Certified Collision Repair Center",
    desc: "Fully certified collision repair facility equipped to handle all types of damage — from structural repairs to cosmetic finishing.",
    icon: "🛡️",
  },
  {
    title: "Digital Color Match Technology",
    desc: "Our state-of-the-art downdraft spray booth and spectrophotometer color-match system ensures a seamless, factory-quality paint finish every time.",
    icon: "🎨",
  },
];

const values = [
  {
    title: "Honesty First",
    desc: "We give you a straight assessment and a fair price. No surprises, no upselling — just the truth about what your car needs.",
    icon: "🤝",
  },
  {
    title: "Craftsmanship",
    desc: "Every vehicle that comes through our doors gets the same attention to detail, whether it's a $5,000 repair or a $500 touch-up.",
    icon: "✨",
  },
  {
    title: "Speed & Efficiency",
    desc: "We know you need your car back. We work efficiently without cutting corners, keeping you updated throughout the process.",
    icon: "⚡",
  },
  {
    title: "Community",
    desc: "We've been serving Brooklyn for over 11 years. Our neighbors trust us — and we take that responsibility seriously.",
    icon: "🏘️",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] to-[#0f2040]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
            <div className="pb-16">
              <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-4">Since 2014</p>
              <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-6" style={{ fontFamily: "Montserrat, system-ui, sans-serif" }}>
                Brooklyn&apos;s Auto Body<br />
                <span className="text-orange-400">Experts Since 2014</span>
              </h1>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                Aces Auto Bodyshop has been serving the Brooklyn community for over 11 years. We started with a simple mission: give every customer the same honest, high-quality repair we&apos;d want for our own vehicles.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all"
              >
                Get Your Free Estimate
              </Link>
            </div>

            <div className="relative h-80 lg:h-[500px] rounded-t-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=900&q=80"
                alt="Professional auto body technicians at Aces Auto Bodyshop"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/60 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-orange-500 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-black text-white mb-1" style={{ fontFamily: "Montserrat, system-ui, sans-serif" }}>
                  {stat.number}
                </div>
                <div className="text-orange-100 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-[#0a1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80"
                alt="Mechanic working professionally in auto body shop"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/50 to-transparent" />
            </div>
            <div>
              <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-4">Our Story</p>
              <h2 className="text-4xl font-black text-white mb-6" style={{ fontFamily: "Montserrat, system-ui, sans-serif" }}>
                Built on Trust, Backed by Results
              </h2>
              <div className="space-y-5 text-slate-300 text-base leading-relaxed">
                <p>
                  Aces Auto Bodyshop was founded in 2014 in the heart of Gravesend, Brooklyn. From day one, our focus has been on delivering honest, professional collision repair that treats every customer the way we&apos;d want our own family treated.
                </p>
                <p>
                  Located at 60 Gravesend Neck Road, we are a GEICO ARX Trusted Shop and I-CAR Gold Certified collision repair center. Our team of skilled technicians uses state-of-the-art equipment and advanced techniques to restore every vehicle to its original condition.
                </p>
                <p>
                  We handle everything from minor scratches to major collision damage, and we work directly with all major insurance companies to make the process as smooth as possible for you. Hundreds of five-star reviews speak to our commitment — especially the customers who ask for Jack and Hassan by name.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-[#0f2040]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-3">Meet the Team</p>
            <h2 className="text-4xl font-black text-white mb-4" style={{ fontFamily: "Montserrat, system-ui, sans-serif" }}>
              The People Behind the Shop
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              Our team is what makes us Brooklyn&apos;s most trusted shop. Ask any customer — they&apos;ll mention the same names.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              {
                name: "Jack",
                role: "Customer Relations & Estimating",
                desc: "Jack is the face of Aces — the person hundreds of customers rave about. He explains every detail clearly, advocates for fair insurance coverage, and makes a stressful situation feel manageable.",
                initial: "J",
              },
              {
                name: "Hassan",
                role: "Operations & Bodywork",
                desc: "Hassan runs the shop floor with precision and pride. His expertise in structural repair and attention to detail ensures every vehicle that leaves Aces looks and drives as good as new.",
                initial: "H",
              },
            ].map((member) => (
              <div
                key={member.name}
                className="bg-[#0a1628] border border-white/10 rounded-2xl p-8 hover:border-orange-500/30 transition-colors"
              >
                <div className="w-16 h-16 rounded-full bg-orange-500/20 border-2 border-orange-500/40 flex items-center justify-center text-orange-400 font-black text-2xl mb-5" style={{ fontFamily: "Montserrat, system-ui, sans-serif" }}>
                  {member.initial}
                </div>
                <h3 className="text-white font-bold text-xl mb-1" style={{ fontFamily: "Montserrat, system-ui, sans-serif" }}>{member.name}</h3>
                <p className="text-orange-400 text-sm mb-4">{member.role}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-[#0a1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-3">Credentials</p>
            <h2 className="text-4xl font-black text-white mb-4" style={{ fontFamily: "Montserrat, system-ui, sans-serif" }}>
              Our Certifications
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              We invest in the certifications and equipment that make a real difference in the quality of your repair.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="bg-[#0f2040] border border-white/10 rounded-2xl p-8 hover:border-orange-500/30 transition-colors"
              >
                <div className="text-4xl mb-4">{cert.icon}</div>
                <h3 className="text-white font-bold text-xl mb-3" style={{ fontFamily: "Montserrat, system-ui, sans-serif" }}>{cert.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[#0f2040]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-3">What We Stand For</p>
            <h2 className="text-4xl font-black text-white" style={{ fontFamily: "Montserrat, system-ui, sans-serif" }}>
              Our Values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="text-center p-6">
                <div className="text-5xl mb-5">{value.icon}</div>
                <h3 className="text-white font-bold text-lg mb-3" style={{ fontFamily: "Montserrat, system-ui, sans-serif" }}>{value.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0a1628]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black text-white mb-4" style={{ fontFamily: "Montserrat, system-ui, sans-serif" }}>
            Come See Why Brooklyn Trusts Us
          </h2>
          <p className="text-slate-400 text-lg mb-8">
            Drop in, call, or send us photos. We&apos;re here to help — no pressure, no judgment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all"
            >
              Get Free Estimate
            </Link>
            <a
              href="tel:7186764600"
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-xl transition-all text-lg"
            >
              Call (718) 676-4600
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
