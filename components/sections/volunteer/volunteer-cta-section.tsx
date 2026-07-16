// components/sections/volunteer/volunteer-cta-section.tsx
"use client";

import Link from "next/link";
import { delay } from "@/lib/animation";

export function VolunteerCtaSection() {
  return (
    <section className="bg-ink text-white py-22 text-center rise">
      <div className="max-w-site mx-auto px-8">
        <span className="font-mono text-[11px] tracking-widest text-orange uppercase block mb-4">Every Hand Counts</span>
        <h2 className="font-display font-semibold text-[clamp(28px,3.4vw,46px)] leading-tight max-w-[760px] mx-auto mb-4">
          The Change We Seek <span className="text-orange italic">Starts With You</span>
        </h2>
        <p className="text-base text-white/70 max-w-[540px] mx-auto mb-8 leading-relaxed">
          Edo North&apos;s future won&apos;t be built by one person. It&apos;ll be built by thousands who decided to show up.
        </p>
        <Link href="#join-form" className="inline-flex items-center gap-2.5 bg-orange text-white px-10 py-4 rounded-site font-semibold text-base shadow-lg hover:bg-orange-dark transition-colors">
          👥 Become a Volunteer
        </Link>
      </div>
    </section>
  );
}
