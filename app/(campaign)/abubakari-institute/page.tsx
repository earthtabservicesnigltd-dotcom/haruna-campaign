// app/abubakari-institute/page.tsx
"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { InstituteHeroSection } from "@/components/sections/institute/institute-hero-section";
import { OverviewSection } from "@/components/sections/institute/overview-section";
import { ProgrammesSection } from "@/components/sections/institute/programmes-section";
import { ScheduleSection } from "@/components/sections/institute/schedule-section";
import { SystemSection } from "@/components/sections/institute/system-section";
import { PortalSection } from "@/components/sections/institute/portal-section";
import { AdmissionsSection } from "@/components/sections/institute/admissions-section";
import { InstituteFaqSection } from "@/components/sections/institute/institute-faq-section";

export default function InstitutePage() {
  useScrollReveal();

  return (
    <>
      <InstituteHeroSection />
      <OverviewSection />
      <ProgrammesSection />
      <ScheduleSection />
      <SystemSection />
      <PortalSection />
      <AdmissionsSection />
      <InstituteFaqSection />
    </>
  );
}
