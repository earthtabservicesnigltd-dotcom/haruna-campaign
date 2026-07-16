// app/volunteer/page.tsx
"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { VolunteerHeroSection } from "@/components/sections/volunteer/volunteer-hero-section";
import { VolunteerTypesSection } from "@/components/sections/volunteer/volunteer-types-section";
import { JoinFormSection } from "@/components/sections/volunteer/join-form-section";
import { WhosInSection } from "@/components/sections/volunteer/whos-in-section";
import { VolunteerCtaSection } from "@/components/sections/volunteer/volunteer-cta-section";

export default function VolunteerPage() {
  useScrollReveal();

  return (
    <>
      <VolunteerHeroSection />
      <VolunteerTypesSection />
      <JoinFormSection />
      <WhosInSection />
      <VolunteerCtaSection />
    </>
  );
}
