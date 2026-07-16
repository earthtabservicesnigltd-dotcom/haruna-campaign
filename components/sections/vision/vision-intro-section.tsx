// components/sections/vision/vision-intro-section.tsx
"use client";

import { SectionHead } from "../section-head";
import { delay } from "@/lib/animation";

export function VisionIntroSection() {
  return (
    <section className="py-20">
      <div className="max-w-site mx-auto px-8">
        <SectionHead
          number="Introduction"
          title={<>The Edo North <span className="accent">We Believe In</span></>}
        />

        <div className="space-y-5 max-w-[760px] lg:max-w-none rise" style={delay(120)}>
          <p className="text-base leading-[1.9] text-slate">
            I envision an Edo North that is not defined by its challenges, but by its potential. Today, our communities are filled with hardworking people, talented youth, rich agricultural land, and strong cultural heritage. Yet, too many families still struggle with limited opportunities, weak infrastructure, and underutilized resources.
          </p>
          <p className="text-base leading-[1.9] text-slate">
            My vision is to transform Edo North into a <strong className="text-ink">model of inclusive development, opportunity, and dignity</strong>, where every citizen can live, work, and thrive with pride.
          </p>
          <p className="text-base leading-[1.9] text-slate">
            This is not just a political aspiration. It is a commitment to a better future.
          </p>
        </div>
      </div>
    </section>
  );
}
