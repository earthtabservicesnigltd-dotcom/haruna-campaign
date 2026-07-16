// app/donate/page.tsx
"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { DonateHeroSection } from "@/components/sections/donate/donate-hero-section";
import { GiveSection } from "@/components/sections/donate/give-section";
import { ImpactSection } from "@/components/sections/donate/impact-section";
import { TransparencySection } from "@/components/sections/donate/transparency-section";
import { DonateFaqSection } from "@/components/sections/donate/donate-faq-section";

export default function DonatePage() {
  useScrollReveal();

  return (
    <>
      <DonateHeroSection />
      <GiveSection />
      <ImpactSection />
      <TransparencySection />
      <DonateFaqSection />
    </>
  );
}
