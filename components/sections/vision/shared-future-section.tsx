// components/sections/vision/shared-future-section.tsx
"use client";

import { SectionHead } from "../section-head";
import { delay } from "@/lib/animation";

const futures = [
  { icon: "⚡", text: <>Youth are not job seekers alone, but <strong className="text-forest">job creators and innovators</strong></> },
  { icon: "🛣️", text: <>Communities are connected by <strong className="text-forest">good roads, reliable electricity, and clean water</strong></> },
  { icon: "🎓", text: <>Schools produce not just graduates, but <strong className="text-forest">leaders and problem-solvers</strong></> },
  { icon: "🌳", text: <>Farmers are empowered and agriculture becomes a <strong className="text-forest">source of wealth and export strength</strong></> },
  { icon: "🛡️", text: <>Security is strengthened so every community is <strong className="text-forest">safe and peaceful</strong></> },
  { icon: "👥", text: <>Leadership is transparent, accountable, and <strong className="text-forest">truly people-driven</strong></> },
];

export function SharedFutureSection() {
  return (
    <section className="py-22 bg-paper">
      <div className="max-w-site mx-auto px-8">
        <SectionHead
          number="Our Shared Future"
          title={<>A New <span className="accent">Edo North</span></>}
        />

        <p className="text-[17px] leading-relaxed text-slate max-w-[640px] mb-10 rise" style={delay(100)}>
          In the Edo North I envision, potential becomes achievement in every home, on every road, and in every classroom.
        </p>

        <div className="grid md:grid-cols-2 gap-0.5 bg-ink/10 max-w-[920px]">
          {futures.map((f, i) => (
            <div key={i} className="bg-white p-7 flex gap-4 items-start rise" style={delay(i * 80)}>
              <span className="text-orange text-lg shrink-0 mt-0.5">{f.icon}</span>
              <p className="text-[15px] leading-relaxed text-ink">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
