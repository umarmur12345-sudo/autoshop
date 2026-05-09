"use client";

import { useState, useEffect, useCallback } from "react";

const reviews = [
  {
    name: "Mae",
    text: "Best body shop in Brooklyn! Service is fast and they do an exceptional job! The price is fair and they will work with you. Ask for Jack!",
    stars: 5,
  },
  {
    name: "Val P.",
    text: "Amazing service as usual. Jack explained everything clearly and made the whole process super easy. Great communication and professional service all around.",
    stars: 5,
  },
  {
    name: "Marina B.",
    text: "My car looks just like new after the accident. They are professional and work quickly. I'm very happy with the results — highly recommend!",
    stars: 5,
  },
  {
    name: "Kevin R.",
    text: "One of the best honest body shops there is. The owner is very knowledgeable and staff is super helpful and professional!",
    stars: 5,
  },
  {
    name: "Sandra M.",
    text: "Aces took care of my car after a fender bender — you literally cannot tell there was ever any damage. GEICO certified shop made the whole insurance process painless.",
    stars: 5,
  },
  {
    name: "James T.",
    text: "Brought my BMW in for a full repaint on the driver's side. Color match was absolutely perfect. Hassan and the team did a phenomenal job.",
    stars: 5,
  },
];

function StarRow() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % reviews.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 4500);
    return () => clearInterval(id);
  }, [paused, next]);

  const getCard = (offset: number) => reviews[(current + offset) % reviews.length];

  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      {/* Desktop: 3 cards / Mobile: 1 card */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
        {[0, 1, 2].map((offset) => {
          const review = getCard(offset);
          return (
            <div
              key={`${current}-${offset}`}
              className={`bg-[#0a1628] border rounded-2xl p-7 transition-all duration-300 ${
                offset === 0
                  ? "border-orange-500/40 shadow-lg shadow-orange-500/10"
                  : "border-white/10 hover:border-orange-500/20"
              } ${offset > 0 ? "hidden md:block" : ""}`}
            >
              <StarRow />
              <p className="text-slate-300 text-sm leading-relaxed mt-4 mb-6 italic">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400 font-bold">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{review.name}</p>
                    <p className="text-slate-500 text-xs">— Via Google Reviews</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Dot navigation */}
      <div className="flex justify-center gap-2">
        {reviews.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? "bg-orange-500 w-6" : "bg-white/20 hover:bg-white/40 w-2"
            }`}
            aria-label={`Review ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
