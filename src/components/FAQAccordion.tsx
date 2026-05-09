"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Do you work with insurance companies?",
    a: "Yes — we work directly with all major insurance companies including GEICO, State Farm, Allstate, Progressive, Liberty Mutual, and more. As a GEICO ARX Trusted Shop, we have a direct billing relationship with GEICO that eliminates most of the paperwork on your end. We handle the insurance process from estimate to payment so you can focus on getting back on the road.",
  },
  {
    q: "How long do repairs typically take?",
    a: "Repair time depends on the extent of the damage. Minor dent repairs and paint touch-ups are often completed in 1–3 business days. More extensive collision repairs typically take 5–10 business days. We provide an accurate time estimate before we begin and keep you updated throughout the process with photos upon request.",
  },
  {
    q: "Do you offer free estimates?",
    a: "Absolutely — free estimates are one of our most popular services. Walk in any time during business hours for an in-person estimate, or submit photos through our online estimate form and we'll respond within 2 business hours. There is no obligation and no pressure. Estimates are 100% free for all Brooklyn customers.",
  },
  {
    q: "Are you GEICO certified?",
    a: "Yes. Aces Auto Bodyshop is a GEICO ARX (Auto Repair Xpress) Trusted Shop — one of a select number of certified body shops in Brooklyn. GEICO's certification verifies our repair quality, technician training, and customer service standards. If you have GEICO insurance, your repairs at our shop are covered under GEICO's satisfaction guarantee in addition to our own lifetime warranty.",
  },
  {
    q: "Do you offer a warranty on repairs?",
    a: "Yes, we offer a lifetime warranty on all paint and bodywork performed at our shop. The warranty covers defects in workmanship and materials for as long as you own the vehicle. Our I-CAR Gold certified technicians take pride in every repair, and we stand behind our work 100% — no asterisks.",
  },
  {
    q: "Can I get a rental car while my vehicle is being repaired?",
    a: "Many insurance policies include rental car coverage. We work with all major insurers and can help coordinate rental car arrangements through your claim. Please let us know when you drop off your vehicle, and we'll assist in setting it up. Enterprise, Hertz, and other major rental agencies are nearby our Brooklyn location.",
  },
  {
    q: "Do you serve customers outside Brooklyn?",
    a: "While we're located in Gravesend, Brooklyn at 60 Gravesend Neck Rd, we serve customers from across all five NYC boroughs — including Staten Island, Queens, the Bronx, and Manhattan — as well as nearby New Jersey. Our GEICO certification and 4.9-star Google rating bring customers from far and wide who want the best collision repair available.",
  },
];

export default function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div key={i} className="border border-white/10 rounded-xl overflow-hidden bg-[#0f2040]">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-white/5 transition-colors min-h-[64px]"
            aria-expanded={open === i}
          >
            <span className="text-white font-semibold text-base pr-4 leading-snug">{faq.q}</span>
            <svg
              className={`w-5 h-5 text-orange-400 flex-shrink-0 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {open === i && (
            <div className="px-6 pb-6 border-t border-white/10 pt-4">
              <p className="text-slate-400 leading-relaxed">{faq.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
