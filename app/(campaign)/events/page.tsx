// app/events/page.tsx
"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { EventsHeroSection } from "@/components/sections/events/events-hero-section";
import { SpotlightSection } from "@/components/sections/events/spotlight-section";
import { EventsListSection } from "@/components/sections/events/events-list-section";
import { EventsMapSection } from "@/components/sections/events/events-map-section";
import { EventsCtaSection } from "@/components/sections/events/events-cta-section";
import { NewsletterSection } from "@/components/sections/events/newsletter-section";

export default function EventsPage() {
  useScrollReveal();

  return (
    <>
      <EventsHeroSection />
      <SpotlightSection />
      <EventsListSection />
      <EventsMapSection />
      <EventsCtaSection />
      <NewsletterSection />
    </>
  );
}
