// components/sections/events/spotlight-section.tsx
"use client";

import Image from "next/image";
import { delay } from "@/lib/animation";

export function SpotlightSection() {
  return (
    <section className="py-16 pb-10">
      <div className="max-w-site mx-auto px-8">
        <span className="font-mono text-[11px] tracking-widest text-orange mb-5 block rise">Up Next</span>

        <div className="grid md:grid-cols-[0.9fr_1.1fr] bg-ink text-white rounded-site overflow-hidden rise" style={delay(100)}>
          <div className="relative min-h-[260px] md:min-h-[420px] bg-field overflow-hidden">
            <Image src="/images/34.png" alt="Campaign rally" fill className="object-cover hover:scale-105 transition-transform duration-700" />
            <span className="absolute top-4 left-4 font-mono text-[10.5px] tracking-wider uppercase text-white bg-orange/94 px-3 py-1.5 rounded-full">
              Campaign Rally
            </span>
          </div>

          <div className="p-8 md:p-12 flex flex-col justify-center">
            <span className="font-mono text-[11px] tracking-wider text-orange mb-4">Our Biggest Event Yet</span>
            <h2 className="font-display font-semibold text-[clamp(26px,2.8vw,38px)] leading-tight mb-6">
              Edo North Grand Rally: A New Direction
            </h2>

            <div className="space-y-3.5 mb-8">
              {[
                { icon: "📅", label: "Date & Time", value: "Saturday, July 18, 2026 · 10:00 AM" },
                { icon: "📍", label: "Location", value: "Auchi Township Stadium, Etsako West" },
                { icon: "👥", label: "Attendance", value: "Open to all · Free entry" },
              ].map((r) => (
                <div key={r.label} className="flex gap-3.5 items-start">
                  <span className="text-lg shrink-0">{r.icon}</span>
                  <div>
                    <span className="font-mono text-[10px] tracking-wider uppercase text-white/50 block mb-0.5">{r.label}</span>
                    <span className="text-[15.5px] text-white/92">{r.value}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-3 flex-wrap">
              <a href="#rsvp" className="inline-flex items-center gap-2 bg-orange text-white px-7 py-3.5 rounded-site font-semibold text-[14.5px] hover:bg-ink border border-orange transition-colors">
                RSVP Now
              </a>
              <a href="#map" className="inline-flex items-center gap-2 border border-white/30 text-white px-7 py-3.5 rounded-site font-semibold text-[14.5px] hover:border-orange hover:text-orange transition-colors">
                View on Map
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
