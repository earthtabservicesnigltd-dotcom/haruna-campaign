// app/about/page.tsx
"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { AboutHeroSection } from "@/components/sections/about/about-hero-section";
import { BioSection } from "@/components/sections/about/bio-section";
import { TimelineSection } from "@/components/sections/about/timeline-section";
import { LeadershipSection } from "@/components/sections/about/leadership-section";
import { PhilosophySection } from "@/components/sections/about/philosophy-section";
import { AboutValuesSection } from "@/components/sections/about/about-values-section";
import { AboutCtaSection } from "@/components/sections/about/about-cta-section";

export default function AboutPage() {
  useScrollReveal();

  return (
    <>
      <AboutHeroSection />
      <BioSection />
      <TimelineSection />
      <LeadershipSection />
      <PhilosophySection />
      <AboutValuesSection />
      <AboutCtaSection />
    </>
  );
}
