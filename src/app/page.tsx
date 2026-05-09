import Link from "next/link";
import Image from "next/image";

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
    href: "/services#collision",
    icon: "🔧",
  },
  {
    title: "Paint & Color Match",
    desc: "State-of-the-art spray booth with digital color match technology for a flawless finish.",
    href: "/services#paint",
    icon: "🎨",
  },
  {
    title: "Dent Removal",
    desc: "From minor door dings to major damage — all restored to factory condition.",
    href: "/services#dent",
    icon: "🚗",
  },
  {
    title: "Insurance Claims",
    desc: "We work directly with all major insurance companies including GEICO, making it stress-free.",
    href: "/services#insurance",
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
    href: "/contact",
    icon: "💬",
  },
];

const testimonials = [
  {
    name: "Mae",
    source: "Google Review",
    text: "Best body shop in Brooklyn! Service is fast and they do an exceptional job! The price is fair and they will work with you. Ask for Jack!",
    stars: 5,
  },
  {
    name: "Val P",
    source: "Google Review",
    text: "Amazing service as usual. Jack explained everything clearly and made the whole process super easy. Great communication and professional service all around.",
    stars: 5,
  },
  {
    name: "Google Reviewer",
    source: "Google Review",
    text: "One of the best honest body shops there is. The owner is very knowledgeable and staff is super helpful and professional!",
    stars: 5,
  },
  {
    name: "Marina B",
    source: "Google Review",
    text: "My car looks just like new after the accident. They are professional and work quickly.",
    stars: 5,
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1920&q=80"
            alt="Auto body shop — professional car paint and repair"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/97 via-[#0a1628]/80 to-[#0a1628]/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 rounded-full px-4 py-1.5 mb-6">
              <div className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
              <span className="text-orange-300 text-sm font-medium">Now Accepting Walk-Ins & Appointments</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6" style={{ fontFamily: "Montserrat, system-ui, sans-serif" }}>
              Brooklyn&apos;s Most
              <span className="block text-orange-400">Trusted Auto</span>
              <span className="block">Body Shop</span>
            </h1>

            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              GEICO Certified. I-CAR Gold. 11 Years of Excellence.
              <br />
              Serving Gravesend &amp; all of Brooklyn since 2014.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5"
              >
                Get Your Free Estimate
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <a
                href="tel:7186764600"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all border border-white/20"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                (718) 676-4600
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-6 mt-10 pt-10 border-t border-white/10">
              <div className="flex -space-x-2">
                {["bg-blue-400", "bg-green-400", "bg-purple-400", "bg-orange-400"].map((color, i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded-full ${color} border-2 border-[#0a1628] flex items-center justify-center text-white text-xs font-bold`}
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-300 text-sm">4.9/5 from 400+ Google Reviews</p>
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

      {/* Trust Badges */}
      <section className="bg-[#0f2040] border-y border-white/10 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {trustBadges.map((badge) => (
              <div
                key={badge.title}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10"
              >
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

      {/* Services Preview */}
      <section className="py-24 bg-[#0a1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-3">What We Do</p>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4" style={{ fontFamily: "Montserrat, system-ui, sans-serif" }}>
              Complete Auto Body Services
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              From minor scratches to major collision damage — our certified technicians handle it all.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group bg-[#0f2040] border border-white/10 rounded-2xl p-7 hover:border-orange-500/50 hover:-translate-y-1 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10"
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

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 border border-orange-500/50 text-orange-400 hover:bg-orange-500 hover:text-white font-semibold px-8 py-3.5 rounded-xl transition-all"
            >
              View All Services
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* About Banner */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1920&q=80"
            alt="Professional auto body shop technicians at work"
            fill
            className="object-cover"
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
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-7 py-3.5 rounded-xl transition-all"
            >
              Our Story
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#0f2040]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-3">Real Reviews</p>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4" style={{ fontFamily: "Montserrat, system-ui, sans-serif" }}>
              What Our Customers Say
            </h2>
            <div className="flex items-center justify-center gap-1.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-white font-bold ml-2">4.9/5</span>
              <span className="text-slate-400 text-sm">(400+ Reviews)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((review) => (
              <div
                key={review.name}
                className="bg-[#0a1628] border border-white/10 rounded-2xl p-8 hover:border-orange-500/30 transition-colors"
              >
                <div className="flex items-center gap-0.5 mb-5">
                  {[...Array(review.stars)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-300 text-base leading-relaxed mb-6 italic">&ldquo;{review.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400 font-bold text-sm">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{review.name}</p>
                    <p className="text-slate-500 text-xs">{review.source}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0a1628]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/5 border border-orange-500/20 rounded-3xl p-12 md:p-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4" style={{ fontFamily: "Montserrat, system-ui, sans-serif" }}>
              Ready to Get Your Car<br />
              <span className="text-orange-400">Looking Like New?</span>
            </h2>
            <p className="text-slate-300 text-lg mb-10 max-w-xl mx-auto">
              Free estimates. No obligation. Walk in or call today — we&apos;ll take care of the rest.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white font-bold px-10 py-4 rounded-xl text-lg transition-all hover:shadow-lg hover:shadow-orange-500/30"
              >
                Get Free Estimate
              </Link>
              <a
                href="tel:7186764600"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 text-white font-bold text-xl"
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
              60 Gravesend Neck Rd, Brooklyn, NY 11223 · Mon–Thu 8AM–6PM · Fri 8AM–5PM
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
