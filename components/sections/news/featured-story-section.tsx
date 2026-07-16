// components/sections/news/featured-story-section.tsx
"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { delay } from "@/lib/animation";

export function FeaturedStorySection() {
  return (
    <section className="py-16 pb-10">
      <div className="max-w-site mx-auto px-8">
        <span className="font-mono text-[11px] tracking-widest text-orange mb-5 block rise">Latest Story</span>

        <div className="grid md:grid-cols-[1.15fr_0.85fr] border border-ink/12 rounded-site overflow-hidden rise" style={delay(100)}>
          <a href="#" className="relative min-h-[260px] md:min-h-[380px] bg-paper group">
            <Image src="/images/25.png" alt="Town hall" fill className="object-cover" />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="w-16 h-16 rounded-full bg-orange/92 text-white flex items-center justify-center pl-0.5 shadow-lg group-hover:scale-110 transition-transform">
                <Play className="w-6 h-6 fill-current" />
              </span>
            </span>
          </a>

          <div className="p-8 md:p-11 flex flex-col justify-center">
            <span className="inline-flex items-center gap-1.5 font-mono text-[10.5px] tracking-wider uppercase text-forest bg-emerald/8 px-3 py-1.5 rounded-full mb-4 self-start">
              📺 Events
            </span>
            <h2 className="font-display font-semibold text-[clamp(24px,2.6vw,34px)] leading-tight text-ink mb-4">
              Thousands Turn Out as Aruna Opens Etsako Town Hall Tour
            </h2>
            <p className="text-[15.5px] leading-relaxed text-slate mb-5">
              The campaign kicked off its seven-LGA listening tour in Auchi, drawing residents, market leaders, and youth groups for an unscripted conversation on jobs, roads, and security.
            </p>
            <div className="flex gap-3.5 font-mono text-[11px] tracking-wide text-slate mb-6">
              <span>📅 July 6, 2026</span>
              <span>🕐 4 min read</span>
            </div>
            <a href="#" className="inline-flex items-center gap-2 font-semibold text-sm text-orange hover:gap-3 transition-all self-start">
              Read the full story →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
