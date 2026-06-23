import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-24">
      <div className="max-w-2xl w-full text-center">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-orange-500/10 border border-orange-500/20 mb-8">
          <svg className="w-12 h-12 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
          </svg>
        </div>

        <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-3">Page Not Found</p>

        <h1
          className="text-6xl md:text-8xl font-black text-white mb-4"
          style={{ fontFamily: "Montserrat, system-ui, sans-serif" }}
        >
          404
        </h1>

        <p className="text-slate-300 text-lg mb-10 leading-relaxed">
          Looks like this page drove off. Let&apos;s get you back on the road.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl text-base transition-all hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5"
          >
            Back to Home
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl text-base transition-all border border-white/20"
          >
            Get a Free Estimate
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { label: "Services", href: "/services" },
            { label: "About Us", href: "/about" },
            { label: "Contact", href: "/contact" },
          ].map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-orange-500/30 rounded-xl py-3 px-5 text-slate-300 hover:text-orange-400 text-sm font-medium transition-all"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <p className="text-slate-600 text-sm mt-12">
          Need immediate help?{" "}
          <a href="tel:7186764600" className="text-orange-400 hover:text-orange-300 transition-colors">
            Call (718) 676-4600
          </a>
        </p>
      </div>
    </section>
  );
}
