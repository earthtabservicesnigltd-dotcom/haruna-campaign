// app/contact/page.tsx
"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { ContactHeroSection } from "@/components/sections/contact/contact-hero-section";
import { ContactFormSection } from "@/components/sections/contact/contact-form-section";
import { FieldOfficesSection } from "@/components/sections/contact/field-offices-section";
import { ContactFaqSection } from "@/components/sections/contact/contact-faq-section";

export default function ContactPage() {
  useScrollReveal();

  return (
    <>
      <ContactHeroSection />
      <ContactFormSection />
      <FieldOfficesSection />
      <ContactFaqSection />
    </>
  );
}
