// app/talk-to-abubakari/page.tsx
"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { TalkHeroSection } from "@/components/sections/talk/talk-hero-section";
import { AskSection } from "@/components/sections/talk/ask-section";
import { AnsweredSection } from "@/components/sections/talk/answered-section";
import { TalkFaqSection } from "@/components/sections/talk/talk-faq-section";

export default function TalkPage() {
  useScrollReveal();

  return (
    <>
      <TalkHeroSection />
      <AskSection />
      <AnsweredSection />
      <TalkFaqSection />
    </>
  );
}
