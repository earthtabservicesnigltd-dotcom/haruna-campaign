// app/manifesto/page.tsx
"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { ManifestoHeroSection } from "@/components/sections/manifesto/manifesto-hero-section";
import { PrinciplesSection } from "@/components/sections/manifesto/principles-section";
import { PillarSection } from "@/components/sections/manifesto/pillar-section";
import { PromiseSection } from "@/components/sections/manifesto/promise-section";
import { ManifestoCtaSection } from "@/components/sections/manifesto/manifesto-cta-section";

const pillars = [
  {
    id: "youth",
    icon: "⚡",
    title: "Youth Empowerment & Job Creation",
    lead: "The youth of Edo North are not a burden — they are our greatest asset. No young person should feel abandoned or without opportunity.",
    commitments: [
      { title: "Edo North Skills & Innovation Centres", desc: "Establish dedicated centres for digital skills training, ICT, remote work, and tech skills development across the district." },
      { title: "Private Sector Job Placement", desc: "Partner with private sector employers to create job placement programmes linking trained youth to employment." },
      { title: "Youth Enterprise Funding & Micro-Grants", desc: "Create enterprise funding support systems and provide micro-grants with training for young business owners." },
      { title: "Federal Youth Employment Advocacy", desc: "Advocate for federal youth employment initiatives to prioritise Edo North's young population." },
    ],
    metric: { value: "Goal", label: "No young person left behind" },
  },
  {
    id: "education",
    icon: "📚",
    title: "Education & Human Capital Development",
    lead: "Education remains the foundation of progress. Education must prepare our people not just to learn, but to lead.",
    commitments: [
      { title: "Quality Basic & Secondary Education", desc: "Improve access to quality education across all seven LGAs, with focus on rural communities." },
      { title: "Teacher Training & Welfare", desc: "Support teacher training programmes and advocate for improved welfare to attract quality educators." },
      { title: "Digital Learning in Rural Schools", desc: "Facilitate deployment of digital learning tools and ICT infrastructure in rural schools." },
      { title: "Scholarships & Technical Pathways", desc: "Establish scholarship support for brilliant but disadvantaged students and promote vocational education." },
    ],
    metric: { value: "Vision", label: "Education that prepares for life, not just exams" },
  },
  {
    id: "infrastructure",
    icon: "🛣️",
    title: "Infrastructure & Rural Development",
    lead: "Development must be visible in roads, communities, and daily life. Edo North must not be left behind.",
    commitments: [
      { title: "Federal Road Network Advocacy", desc: "Advocate for improved federal road networks across Edo North, prioritising deteriorated highways." },
      { title: "Rural Electrification Projects", desc: "Push for rural electrification in communities currently without reliable grid access." },
      { title: "Water Access & Market Modernisation", desc: "Improve water access in underserved communities and support market modernisation for traders." },
      { title: "ICT Infrastructure Expansion", desc: "Facilitate ICT infrastructure expansion in rural areas to bridge the digital divide." },
    ],
    metric: { value: "Promise", label: "No community left isolated" },
  },
  {
    id: "agriculture",
    icon: "🌳",
    title: "Agriculture & Economic Empowerment",
    lead: "Agriculture remains the backbone of our economy. We will move from subsistence farming to profitable agribusiness.",
    commitments: [
      { title: "Modern Farming Tools & Training", desc: "Support farmers with modern farming tools, equipment, and training to improve productivity." },
      { title: "Agricultural Funding Advocacy", desc: "Advocate for federal and state agricultural funding accessible to smallholder farmers." },
      { title: "Agro-Processing & Market Linkages", desc: "Promote agro-processing industries and create farmer-to-market linkage systems." },
      { title: "Youth in Agribusiness", desc: "Encourage youth participation in agribusiness through mentorship, funding, and land access." },
    ],
    metric: { value: "Mission", label: "From subsistence to sustainable wealth creation" },
  },
  {
    id: "security",
    icon: "🛡️",
    title: "Security & Community Safety",
    lead: "No development can thrive without security. Every community deserves to live in safety and dignity.",
    commitments: [
      { title: "Security Agency Collaboration", desc: "Strengthen collaboration with security agencies to improve response times and coverage." },
      { title: "Community-Based Security Awareness", desc: "Support community-based security awareness programmes and neighbourhood watch initiatives." },
      { title: "Rural Security Infrastructure", desc: "Advocate for improved rural security infrastructure including lighting, police posts, and communication tools." },
      { title: "Peacebuilding & Youth Engagement", desc: "Promote peacebuilding and youth engagement to address root causes of insecurity." },
    ],
    metric: { value: "Belief", label: "Every community deserves safety and dignity" },
  },
  {
    id: "accountability",
    icon: "📋",
    title: "Accountability & Representation",
    lead: "True leadership is service, not privilege. I will not be a distant senator — I will be a present one.",
    commitments: [
      { title: "Regular Town Hall Meetings", desc: "Maintain regular town hall meetings across all constituencies — open, unscripted, and transparent." },
      { title: "Legislative Activity Updates", desc: "Provide consistent public updates on legislative activities, votes, and committee work." },
      { title: "Transparent Constituency Projects", desc: "Ensure constituency projects are transparently awarded, monitored, and publicly reported." },
      { title: "Open Communication Channels", desc: "Create open communication channels between citizens and the Senate office — accessible and responsive." },
    ],
    metric: { value: "Commitment", label: "A present senator, not a distant one" },
  },
];

export default function ManifestoPage() {
  useScrollReveal();

  return (
    <>
      <ManifestoHeroSection />
      <PrinciplesSection />
      {pillars.map((pillar, i) => (
        <PillarSection key={pillar.id} {...pillar} index={i} />
      ))}
      <PromiseSection />
      <ManifestoCtaSection />
    </>
  );
}
