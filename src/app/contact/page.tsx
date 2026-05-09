"use client";

import { useState } from "react";
import type { FormEvent } from "react";

const hours = [
  { day: "Monday", time: "8:00 AM – 6:00 PM", open: true },
  { day: "Tuesday", time: "8:00 AM – 6:00 PM", open: true },
  { day: "Wednesday", time: "8:00 AM – 6:00 PM", open: true },
  { day: "Thursday", time: "8:00 AM – 6:00 PM", open: true },
  { day: "Friday", time: "8:00 AM – 5:00 PM", open: true },
  { day: "Saturday", time: "Closed", open: false },
  { day: "Sunday", time: "Closed", open: false },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    vehicle: "",
    damage: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-[#0a1628] to-[#0f2040]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-4">Get in Touch</p>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6" style={{ fontFamily: "Montserrat, system-ui, sans-serif" }}>
            Contact Us
          </h1>
          <p className="text-slate-300 text-xl max-w-2xl mx-auto">
            Free estimates. No obligation. Fill out the form below or give us a call — we&apos;ll get back to you fast.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-[#0a1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-[#0f2040] border border-white/10 rounded-2xl p-8 md:p-10">
                <h2 className="text-2xl font-black text-white mb-2" style={{ fontFamily: "Montserrat, system-ui, sans-serif" }}>
                  Request a Free Estimate
                </h2>
                <p className="text-slate-400 text-sm mb-8">
                  Fill out the form and we&apos;ll get back to you within the same business day.
                </p>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4">✅</div>
                    <h3 className="text-2xl font-black text-white mb-3" style={{ fontFamily: "Montserrat, system-ui, sans-serif" }}>
                      Message Sent!
                    </h3>
                    <p className="text-slate-400">
                      Thank you! We&apos;ll be in touch shortly. For urgent matters, call us at{" "}
                      <a href="tel:7186764600" className="text-orange-400 font-semibold">(718) 676-4600</a>.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-slate-300 text-sm font-medium mb-2" htmlFor="name">
                          Full Name *
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="John Smith"
                          className="w-full bg-[#0a1628] border border-white/15 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-orange-500/60 transition-colors text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-slate-300 text-sm font-medium mb-2" htmlFor="phone">
                          Phone Number *
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="(718) 000-0000"
                          className="w-full bg-[#0a1628] border border-white/15 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-orange-500/60 transition-colors text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-slate-300 text-sm font-medium mb-2" htmlFor="email">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full bg-[#0a1628] border border-white/15 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-orange-500/60 transition-colors text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-300 text-sm font-medium mb-2" htmlFor="vehicle">
                        Vehicle Make & Model *
                      </label>
                      <input
                        id="vehicle"
                        name="vehicle"
                        type="text"
                        required
                        value={form.vehicle}
                        onChange={handleChange}
                        placeholder="e.g. 2022 Toyota Camry"
                        className="w-full bg-[#0a1628] border border-white/15 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-orange-500/60 transition-colors text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-300 text-sm font-medium mb-2" htmlFor="damage">
                        Description of Damage *
                      </label>
                      <textarea
                        id="damage"
                        name="damage"
                        required
                        rows={5}
                        value={form.damage}
                        onChange={handleChange}
                        placeholder="Describe the damage to your vehicle. You can also email photos to Acesbodyshop718@yahoo.com"
                        className="w-full bg-[#0a1628] border border-white/15 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-orange-500/60 transition-colors text-sm resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl text-lg transition-all hover:shadow-lg hover:shadow-orange-500/30"
                    >
                      Submit Request
                    </button>

                    <p className="text-slate-500 text-xs text-center">
                      Or email photos directly to{" "}
                      <a href="mailto:Acesbodyshop718@yahoo.com" className="text-orange-400 hover:underline">
                        Acesbodyshop718@yahoo.com
                      </a>
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* Sidebar Info */}
            <div className="space-y-6">
              {/* Call Cards */}
              <a
                href="tel:7186764600"
                className="flex items-center gap-4 bg-orange-500 hover:bg-orange-600 rounded-2xl p-6 transition-all group"
              >
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white/80 text-xs font-medium uppercase tracking-wider">Main Line</p>
                  <p className="text-white font-black text-xl" style={{ fontFamily: "Montserrat, system-ui, sans-serif" }}>(718) 676-4600</p>
                </div>
              </a>

              <a
                href="tel:9176503061"
                className="flex items-center gap-4 bg-[#0f2040] hover:bg-[#152a52] border border-white/10 rounded-2xl p-6 transition-all"
              >
                <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <p className="text-slate-400 text-xs font-medium uppercase tracking-wider">Secondary Line</p>
                  <p className="text-white font-black text-xl" style={{ fontFamily: "Montserrat, system-ui, sans-serif" }}>(917) 650-3061</p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:Acesbodyshop718@yahoo.com"
                className="flex items-center gap-4 bg-[#0f2040] hover:bg-[#152a52] border border-white/10 rounded-2xl p-6 transition-all"
              >
                <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <p className="text-slate-400 text-xs font-medium uppercase tracking-wider">Email</p>
                  <p className="text-white text-sm font-semibold truncate">Acesbodyshop718@yahoo.com</p>
                </div>
              </a>

              {/* Address */}
              <div className="bg-[#0f2040] border border-white/10 rounded-2xl p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-1">Address</p>
                    <p className="text-white font-semibold text-sm">60 Gravesend Neck Rd</p>
                    <p className="text-white text-sm">Brooklyn, NY 11223</p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-[#0f2040] border border-white/10 rounded-2xl p-6">
                <h3 className="text-white font-bold text-base mb-4 flex items-center gap-2">
                  <span className="text-orange-400">🕐</span> Business Hours
                </h3>
                <div className="space-y-2.5">
                  {hours.map((h) => (
                    <div key={h.day} className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">{h.day}</span>
                      <span className={h.open ? "text-white font-medium" : "text-slate-500"}>
                        {h.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-[#0f2040] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-black text-white mb-6 text-center" style={{ fontFamily: "Montserrat, system-ui, sans-serif" }}>
            Find Us in Brooklyn
          </h2>
          <div className="rounded-2xl overflow-hidden border border-white/10 h-80 md:h-[420px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3029.2254!2d-73.9810!3d40.5975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24474c4e9b0d5%3A0x0!2s60+Gravesend+Neck+Rd%2C+Brooklyn%2C+NY+11223!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Aces Auto Bodyshop location map"
            />
          </div>
          <p className="text-center text-slate-400 text-sm mt-4">
            60 Gravesend Neck Rd, Brooklyn, NY 11223 —{" "}
            <a
              href="https://maps.google.com/?q=60+Gravesend+Neck+Rd,+Brooklyn,+NY+11223"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 hover:underline"
            >
              Get Directions
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
