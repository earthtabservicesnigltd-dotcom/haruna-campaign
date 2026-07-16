// components/sections/events/events-cta-section.tsx
"use client";

import Link from "next/link";
import { delay } from "@/lib/animation";

export function EventsCtaSection() {
  return (
    <section className="bg-ink text-white py-22 text-center rise">
      <div className="max-w-site mx-auto px-8">
        <span className="font-mono text-[11px] tracking-widest text-orange uppercase block mb-4">Support the Movement</span>
        <h2 className="font-display font-semibold text-[clamp(28px,3.4vw,44px)] leading-tight max-w-[720px] mx-auto mb-4">
          Lend Your Strength or Your Support <span className="text-orange italic">Progress Is a Team Effort</span>
        </h2>
        <p className="text-base text-white/70 max-w-[540px] mx-auto mb-8 leading-relaxed">
          Whether you give your time or your resources, every contribution brings us closer to a new Edo North.
        </p>
        <div className="flex gap-3.5 justify-center flex-wrap">
          <Link href="/volunteer" className="inline-flex items-center gap-2 bg-orange text-white px-8 py-4 rounded-site font-semibold hover:bg-orange-dark transition-colors">
            🤝 Volunteer Now
          </Link>
          <Link href="/donate" className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-4 rounded-site font-semibold hover:border-orange hover:text-orange transition-colors">
            ❤️ Make a Donation
          </Link>
        </div>
      </div>
    </section>
  );
}
