// components/sections/vision/final-vision-section.tsx
"use client";

import { delay } from "@/lib/animation";

const swaps = [
  { from: "unemployment", to: "Opportunity" },
  { from: "neglect", to: "Infrastructure" },
  { from: "limitation", to: "Education" },
  { from: "poverty", to: "Agriculture" },
  { from: "fear", to: "Security" },
  { from: "silence", to: "Leadership" },
];

export function FinalVisionSection() {
  return (
    <section className="bg-ink text-white py-25">
      <div className="max-w-site mx-auto px-8 grid lg:grid-cols-[1fr_1.2fr] gap-16">
        <div className="rise">
          <span className="font-mono text-xs tracking-widest text-orange block mb-5">FINAL VISION STATEMENT</span>
          <h2 className="font-display font-semibold text-[clamp(28px,3.2vw,40px)] leading-tight mb-6">
            A Region of <span className="text-orange italic">Achievement</span>
          </h2>
          <blockquote className="font-display italic text-[22px] leading-relaxed text-white border-l-[3px] border-orange py-4 pl-7 mt-7">
            &ldquo;I envision an Edo North that stands tall in Nigeria, not as a region of potential, but as a region of achievement.&rdquo;
            <cite className="block font-mono text-xs not-italic text-orange mt-3 tracking-wide">— Abubakar Aruna</cite>
          </blockquote>
        </div>

        <div className="rise space-y-6" style={delay(160)}>
          <p className="text-base leading-[1.9] text-white/70">This is the Edo North we will build together. A place where:</p>

          <div className="space-y-0.5 bg-white/12">
            {swaps.map((s) => (
              <div key={s.to} className="flex gap-3.5 items-baseline bg-ink py-3.5 px-1 text-base text-white/85">
                <span className="text-orange shrink-0">→</span>
                <span><strong className="text-white">{s.to}</strong> replaces {s.from}</span>
              </div>
            ))}
          </div>

          <div className="font-mono text-xs tracking-wide text-orange">ADC – Edo North Senatorial Candidate</div>
          <em className="text-white/70 not-italic">&ldquo;A New Direction. A Better Future.&rdquo;</em>
        </div>
      </div>
    </section>
  );
}
