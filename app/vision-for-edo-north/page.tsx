// app/vision-for-edo-north/page.tsx
"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { VisionHeroSection } from "@/components/sections/vision/vision-hero-section";
import { VisionIntroSection } from "@/components/sections/vision/vision-intro-section";
import { SharedFutureSection } from "@/components/sections/vision/shared-future-section";
import { VisionAgendaSection } from "@/components/sections/vision/vision-agenda-section";
import { FinalVisionSection } from "@/components/sections/vision/final-vision-section";
import { VisionCtaSection } from "@/components/sections/vision/vision-cta-section";

const agendas = [
  {
    id: "youth",
    icon: "⚡",
    title: "A Future for Our Youth",
    lead: "Our young people are the heartbeat of Edo North.",
    directions: [
      "A digitally skilled youth population ready for global opportunities",
      "Entrepreneurship ecosystems across all local governments",
      "Innovation hubs supporting technology, creativity, and business",
      "Strong partnerships between government, private sector, and training institutions",
    ],
    punch: "I see an Edo North where youth no longer leave in search of survival, but stay to build success.",
  },
  {
    id: "education",
    icon: "📚",
    title: "Education That Transforms Lives",
    lead: "Education is the foundation of all development.",
    directions: [
      "Modern, well-equipped schools across Edo North",
      "Teachers empowered and supported",
      "Equal access to quality learning in rural and urban areas",
      "Strong technical and vocational training systems",
      "Scholarship pathways for brilliant but disadvantaged students",
    ],
    punch: "I envision education that prepares our children not just for exams, but for life.",
  },
  {
    id: "infrastructure",
    icon: "🛣️",
    title: "Modern Infrastructure for Growth",
    lead: "Development must be visible in everyday life.",
    directions: [
      "Well-connected road networks linking all communities",
      "Stable rural electrification powering homes and businesses",
      "Clean water access in every community",
      "Functional markets that support trade and local enterprise",
      "Digital infrastructure that connects Edo North to the world",
    ],
    punch: "A developed Edo North is one where no community is left isolated.",
  },
  {
    id: "agriculture",
    icon: "🌳",
    title: "Agriculture & Economic Prosperity",
    lead: "Edo North has the land and strength to feed and sustain prosperity.",
    directions: [
      "Modern farming supported by technology and training",
      "Strong agricultural value chains and processing industries",
      "Youth involvement in agribusiness innovation",
      "Easy access to agricultural finance and markets",
      "Edo North positioned as a key food production hub",
    ],
    punch: "Agriculture must move from survival to sustainable wealth creation.",
  },
  {
    id: "security",
    icon: "🛡️",
    title: "Peaceful and Secure Communities",
    lead: "Development cannot thrive without peace.",
    directions: [
      "Strong collaboration between communities and security agencies",
      "Early warning and community safety systems",
      "Youth engagement programs to reduce vulnerability",
      "Peacebuilding initiatives across all local governments",
      "Safer rural and urban environments for families and businesses",
    ],
    punch: "I envision Edo North where every citizen sleeps in peace and wakes in safety.",
  },
  {
    id: "governance",
    icon: "📋",
    title: "People-Centered Governance",
    lead: "Leadership must belong to the people.",
    directions: [
      "Constant engagement with communities through town halls",
      "Open communication between citizens and their representative",
      "Transparent reporting of constituency activities",
      "Responsive leadership that listens and acts",
      "Representation that reflects the true voice of Edo North",
    ],
    punch: "A senator who is present, accountable, and accessible.",
  },
];

export default function VisionPage() {
  useScrollReveal();

  return (
    <>
      <VisionHeroSection />
      <VisionIntroSection />
      <SharedFutureSection />
      {agendas.map((agenda, i) => (
        <VisionAgendaSection key={agenda.id} {...agenda} index={i} />
      ))}
      <FinalVisionSection />
      <VisionCtaSection />
    </>
  );
}
