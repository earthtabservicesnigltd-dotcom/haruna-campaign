// components/sections/news/news-feed-section.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { delay } from "@/lib/animation";

const categories = ["All", "Press", "Events", "Statements", "Media Features"] as const;

interface Post {
  image: string;
  category: string;
  catClass?: string;
  date: string;
  title: string;
  excerpt: string;
  video?: boolean;
  delayMs: number;
}

const posts: Post[] = [
  { image: "/images/26.jpeg", category: "Press", date: "July 4, 2026", title: "Campaign Releases Full Six-Agenda Vision Document", excerpt: "The Aruna campaign has published its complete policy vision covering youth, education, infrastructure, agriculture, security, and governance.", delayMs: 0 },
  { image: "/images/24.png", category: "Events", catClass: "bg-emerald/92", date: "July 2, 2026", title: "Youth Roundtable in Okpella Draws Record Attendance", excerpt: "Young entrepreneurs and students gathered to shape the campaign's job-creation agenda.", video: true, delayMs: 60 },
  { image: "/images/27.jpeg", category: "Statements", catClass: "bg-orange/94", date: "June 29, 2026", title: 'On Rural Electrification: "No Community Left in the Dark"', excerpt: "Aruna issues a formal statement recommitting to reliable power access across every ward.", delayMs: 120 },
  { image: "/images/28.jpeg", category: "Media Features", catClass: "bg-ink/86", date: "June 27, 2026", title: "Aruna on Channels TV: Accountability as Party Doctrine", excerpt: "In a wide-ranging interview, the candidate lays out why transparency is the foundation of his Senate bid.", video: true, delayMs: 0 },
  { image: "/images/29.jpeg", category: "Events", catClass: "bg-emerald/92", date: "June 24, 2026", title: "Market Walk: Traders Voice Priorities in Auchi", excerpt: "A morning walk through Auchi's central market turned into an impromptu listening session.", delayMs: 60 },
  { image: "/images/30.jpeg", category: "Press", date: "June 20, 2026", title: "Coalition Publishes Biannual Constituency Report Card", excerpt: "The community development coalition Aruna chairs releases its independent scorecard.", delayMs: 120 },
  { image: "/images/31.jpeg", category: "Media Features", catClass: "bg-ink/86", date: "June 18, 2026", title: "Morning Radio: Agriculture as Edo North's Wealth Engine", excerpt: "A local radio feature explores the campaign's plan to move farmers to profitable agribusiness.", video: true, delayMs: 0 },
  { image: "/images/32.jpeg", category: "Statements", catClass: "bg-orange/94", date: "June 15, 2026", title: "Statement on Community Safety and Peacebuilding", excerpt: "Aruna calls for stronger collaboration between communities and security agencies.", delayMs: 60 },
  { image: "/images/33.jpeg", category: "Events", catClass: "bg-emerald/92", date: "June 12, 2026", title: "School Visit Spotlights Rural Learning Gaps", excerpt: "A visit to a rural secondary school underscored the push for digital tools and teacher support.", delayMs: 120 },
];

export function NewsFeedSection() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? posts : posts.filter((p) => p.category === active);

  return (
    <section className="pb-24">
      <div className="max-w-site mx-auto px-8">
        <div className="flex gap-2.5 flex-wrap pb-9 mb-10 border-b border-ink/10 rise">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`font-mono text-[11.5px] tracking-wide uppercase px-4 py-2 rounded-full border transition-colors ${
                active === cat
                  ? "bg-ink text-white border-ink"
                  : "bg-white text-slate border-ink/15 hover:border-orange hover:text-orange"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filtered.map((post) => (
            <div
              key={post.title}
              className="border border-ink/12 rounded-site overflow-hidden bg-white hover:-translate-y-1 hover:shadow-lg transition-all group"
            >
              <div className="relative aspect-[16/10] bg-paper overflow-hidden">
                <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className={`absolute top-3 left-3 font-mono text-[10px] tracking-wider uppercase text-white px-2.5 py-1 rounded-full ${post.catClass || "bg-ink/86"}`}>
                  {post.category}
                </span>
                {post.video && (
                  <span className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-orange/94 text-white flex items-center justify-center">
                    <Play className="w-3.5 h-3.5 fill-current" />
                  </span>
                )}
              </div>

              <div className="p-6 pb-7 flex flex-col flex-1">
                <span className="font-mono text-[10.5px] tracking-wide text-slate mb-3">{post.date}</span>
                <h3 className="font-display font-semibold text-[19px] leading-tight text-ink mb-2.5">{post.title}</h3>
                <p className="text-sm leading-relaxed text-slate mb-4 flex-1">{post.excerpt}</p>
                <a href="#" className="inline-flex items-center gap-2 font-semibold text-sm text-orange hover:gap-3 transition-all self-start mt-auto">
                  Read more →
                </a>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-slate">
            <span className="text-3xl block mb-3">📬</span>
            <p className="font-mono text-xs tracking-wide">No posts in this category yet. Check back soon.</p>
          </div>
        )}
      </div>
    </section>
  );
}
