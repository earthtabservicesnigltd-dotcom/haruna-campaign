// components/sections/institute/portal-section.tsx
"use client";

import Link from "next/link";
import { SectionHead } from "../section-head";
import { delay } from "@/lib/animation";

const features = [
  { icon: "📊", text: "Dashboard of enrolled courses" },
  { icon: "📹", text: "Live class links (Google Meet)" },
  { icon: "📤", text: "Assignment upload system" },
  { icon: "📈", text: "Progress tracker" },
  { icon: "📥", text: "Certificate downloads" },
  { icon: "💬", text: "Group discussion links" },
  { icon: "📅", text: "Weekly schedule calendar" },
  { icon: "🏅", text: "Digital badges earned" },
];

export function PortalSection() {
  return (
    <section className="py-25" id="portal">
      <div className="max-w-site mx-auto px-8 grid lg:grid-cols-[0.9fr_1.1fr] gap-14 items-center">
        <div className="rise">
          <h2 className="font-display font-semibold text-[clamp(28px,3vw,40px)] leading-tight mb-4">
            One Login, <span className="text-forest italic">Everything You Need</span>
          </h2>
          <p className="text-base leading-relaxed text-slate max-w-[52ch] mb-7">
            Live classes, assignments, progress tracking, and certificates all in a single portal.
          </p>
          <Link href="/login-signup" className="inline-flex items-center gap-2 bg-orange text-white px-7 py-4 rounded-site font-semibold text-[15px] hover:bg-orange-dark transition-colors">
            Enroll Today →
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-0.5 bg-ink/10 border border-ink/10 rise" style={delay(120)}>
          {features.map((f) => (
            <div key={f.text} className="bg-white p-5 md:p-6 flex gap-3 items-center">
              <span className="text-lg text-orange shrink-0">{f.icon}</span>
              <span className="text-sm font-medium text-ink">{f.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
