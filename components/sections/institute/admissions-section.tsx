// components/sections/institute/admissions-section.tsx
"use client";

import Link from "next/link";
import { delay } from "@/lib/animation";

export function AdmissionsSection() {
  return (
    <section className="py-22 bg-paper">
      <div className="max-w-site mx-auto px-8">
        <div className="bg-forest text-white rounded-site p-10 md:p-14 grid md:grid-cols-[1fr_auto] gap-8 items-center relative overflow-hidden rise">
          <div className="relative z-10">
            <span className="font-mono text-[11.5px] tracking-widest text-white/80 block mb-3.5">ADMISSIONS OPEN</span>
            <h3 className="font-display font-semibold text-[clamp(24px,2.8vw,34px)] leading-tight max-w-[22ch]">
              The next weekly batch starts Monday. Claim your seat.
            </h3>
            <p className="text-[15px] text-white/82 mt-3.5 max-w-[52ch] leading-relaxed">
              Pick one of six disciplines, learn Monday to Saturday, and finish with a project and certificate.
            </p>
          </div>
          <div className="relative z-10 flex flex-col gap-3 items-center">
            <Link href="/login-signup" className="inline-flex items-center gap-2 bg-orange text-white px-8 py-4 rounded-site font-semibold text-[15px] hover:bg-orange-dark transition-colors whitespace-nowrap">
              🎓 Begin Enrollment
            </Link>
            <span className="font-mono text-[11px] tracking-wide text-white/70">FULLY ONLINE · MON–SAT · ALL LEVELS</span>
          </div>
        </div>
      </div>
    </section>
  );
}
