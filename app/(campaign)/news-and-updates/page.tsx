// app/news-and-updates/page.tsx
"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { NewsHeroSection } from "@/components/sections/news/news-hero-section";
import { FeaturedStorySection } from "@/components/sections/news/featured-story-section";
import { NewsFeedSection } from "@/components/sections/news/news-feed-section";

export default function NewsPage() {
  useScrollReveal();

  return (
    <>
      <NewsHeroSection />
      <FeaturedStorySection />
      <NewsFeedSection />
    </>
  );
}
