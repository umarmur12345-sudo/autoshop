"use client";

export default function StickyCallButton() {
  return (
    <div className="fixed bottom-6 right-5 z-40 md:hidden">
      <a
        href="tel:7186764600"
        aria-label="Call Aces Auto Bodyshop"
        className="relative flex items-center gap-2.5 bg-orange-500 hover:bg-orange-600 text-white font-bold px-5 py-4 rounded-full shadow-2xl shadow-orange-500/60 transition-colors min-h-[56px]"
      >
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-orange-500 animate-ping opacity-25 pointer-events-none" />
        <svg
          className="w-5 h-5 relative z-10 flex-shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
          />
        </svg>
        <span className="relative z-10 text-sm font-bold">Call Now</span>
      </a>
    </div>
  );
}
