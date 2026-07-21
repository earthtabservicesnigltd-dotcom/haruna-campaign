// components/sections/institute/programmes-section.tsx
"use client";

import { SectionHead } from "../section-head";
import { delay } from "@/lib/animation";

const programmes = [
  { icon: "🏢", title: "Estate Management", text: "Property valuation, land administration, facility management, and the business of real estate in Nigeria." },
  { icon: "🌳", title: "Agro-Allied & Agricultural Business", text: "Turn farming into enterprise: value chains, agro-processing, storage, and market access across Edo North." },
  { icon: "📈", title: "Entrepreneurship & Wealth Creation", text: "Build, fund, and grow a business. From idea validation to cash flow, pricing, and scaling." },
  { icon: "💻", title: "Digital Skills & Technology", text: "The skills that pay online: web, design, data, and digital tools for remote and freelance work." },
  { icon: "📦", title: "Import & Export Strategies", text: "Sourcing, logistics, documentation, and trade finance for cross-border business." },
  { icon: "⚙️", title: "Engineering Technology", text: "Applied engineering fundamentals and hands-on technical problem-solving for a practical trade." },
];

export function ProgrammesSection() {
  return (
    <section className="py-25 bg-paper" id="programmes">
      <div className="max-w-site mx-auto px-8">
        <SectionHead number="6 CORE SCHOOLS" title={<>Programmes <span className="accent">Offered</span></>} />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0.5 bg-ink/10 border border-ink/10">
          {programmes.map((p, i) => (
            <div key={p.title} className="bg-white p-8 md:p-9 hover:-translate-y-1 transition-transform rise" style={delay(i * 60)}>
              <span className="text-2xl text-orange block mb-4">{p.icon}</span>
              <h3 className="font-display font-semibold text-[21px] leading-tight mb-2.5">{p.title}</h3>
              <p className="text-sm leading-relaxed text-slate">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
