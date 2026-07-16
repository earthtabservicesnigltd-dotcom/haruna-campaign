// components/sections/manifesto/principles-section.tsx
"use client";

import { delay } from "@/lib/animation";

const principles = [
  { icon: "👥", title: "People First Governance", text: "Every policy must serve the people." },
  { icon: "✅", title: "Transparency & Accountability", text: "Leadership without hidden interests." },
  { icon: "🌍", title: "Inclusive Development", text: "No community left behind." },
  { icon: "⚡", title: "Youth Empowerment", text: "Unlocking the energy of our young population." },
  { icon: "💬", title: "Community Participation", text: "Governance with the people, not above them." },
  { icon: "🌱", title: "Sustainable Growth", text: "Development that lasts beyond political cycles." },
];

export function PrinciplesSection() {
  return (
    <section className="py-22 bg-paper">
      <div className="max-w-site mx-auto px-8">
        <h2 className="font-display font-semibold text-[clamp(30px,3.4vw,44px)] text-ink mb-11 border-t border-ink/15 pt-2.5">
          Our <span className="text-forest italic">Core Principles</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {principles.map((p, i) => (
            <div key={p.title} className="bg-white border border-ink/10 rounded-site p-7 rise" style={delay(i * 80)}>
              <span className="text-2xl block mb-3.5">{p.icon}</span>
              <h5 className="font-display font-semibold text-[16.5px] mb-2">{p.title}</h5>
              <p className="text-[13.5px] leading-relaxed text-slate">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
