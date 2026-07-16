// components/sections/manifesto/manifesto-cta-section.tsx
"use client";

import Link from "next/link";
import { delay } from "@/lib/animation";

export function ManifestoCtaSection() {
  return (
    <section className="py-22 text-center">
      <div className="max-w-site mx-auto px-8">
        <h2 className="font-display font-semibold text-[clamp(28px,3.4vw,42px)] text-ink max-w-[720px] mx-auto mb-4 leading-tight rise">
          Together, We Can Build <span className="text-forest italic">a New Edo North</span>
        </h2>
        <p className="text-base text-slate max-w-[560px] mx-auto mb-8 leading-relaxed rise" style={delay(100)}>
          Edo North deserves leadership that understands its people and fights for its progress. This is our mission.
        </p>
        <div className="flex gap-3.5 justify-center flex-wrap rise" style={delay(200)}>
          <Link href="#" className="btn-solid">📄 Download Full Manifesto</Link>
          <Link href="/donate" className="btn-ghost">Support the Campaign</Link>
        </div>
        <p className="mt-8 text-sm text-slate rise" style={delay(280)}>
          <strong className="font-display text-[17px] text-ink">Abubakar Aruna</strong><br />
          ADC – Edo North Senatorial Candidate<br />
          <em className="text-orange">&ldquo;People First. Progress Always.&rdquo;</em>
        </p>
      </div>
    </section>
  );
}
