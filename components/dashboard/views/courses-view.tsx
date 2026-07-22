// components/dashboard/views/courses-view.tsx
"use client";

import { BookOpen, TreePine, TrendingUp, Cpu, Package, Settings } from "lucide-react";
import { delay } from "@/lib/animation";
import type { ViewType } from "@/app/(academy)/student-dashboard/page";

const programmes = [
  { id: "estate", icon: BookOpen, name: "Estate Management", blurb: "Property administration, valuation, and the business of real estate in Nigeria.", progress: 80, dayLabel: "Day 5 of 6" },
  { id: "agro", icon: TreePine, name: "Agro-Allied", blurb: "Turn farming into enterprise: value chains, agro-processing, and market access.", progress: 0, dayLabel: "Starts Monday" },
  { id: "entre", icon: TrendingUp, name: "Entrepreneurship & Wealth Creation", blurb: "Build, fund, and grow a business from idea validation to scaling.", progress: 0, dayLabel: "Starts Monday" },
  { id: "digital", icon: Cpu, name: "Digital Skills", blurb: "The skills that pay online: web, design, data, and AI tools for remote work.", progress: 0, dayLabel: "Starts Monday" },
  { id: "trade", icon: Package, name: "Import & Export Strategies", blurb: "Sourcing, logistics, documentation, and trade finance for cross-border business.", progress: 0, dayLabel: "Starts Monday" },
  { id: "eng", icon: Settings, name: "Engineering Technology", blurb: "Applied engineering fundamentals and hands-on technical problem-solving.", progress: 0, dayLabel: "Starts Monday" },
];

interface Props {
  onSelectCourse: (view: ViewType, courseId: string) => void;
}

export function CoursesView({ onSelectCourse }: Props) {
  return (
    <div>
      <div className="mb-7">
        <span className="font-mono text-[11px] tracking-widest text-orange block mb-2">6 Core Programmes</span>
        <h2 className="font-display font-semibold text-[clamp(24px,3vw,32px)] leading-tight">My Courses</h2>
        <p className="text-[14.5px] text-slate mt-2 max-w-[70ch]">Each programme is a one-week intensive, Monday to Saturday.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {programmes.map((p, i) => {
          const Icon = p.icon;
          return (
            <button
              key={p.id}
              onClick={() => onSelectCourse("courseDetail", p.id)}
              className="bg-white border border-ink/10 rounded-site p-6 text-left hover:-translate-y-1 hover:shadow-lg transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-site bg-orange/10 text-orange flex items-center justify-center">
                  <Icon className="w-[23px] h-[23px]" />
                </div>
                {p.progress > 0 ? (
                  <span className="font-mono text-[10.5px] tracking-wide uppercase text-orange bg-orange/10 px-2 py-0.5 rounded-site">In progress</span>
                ) : (
                  <span className="font-mono text-[10.5px] tracking-wide uppercase text-slate bg-paper px-2 py-0.5 rounded-site">Enrolled</span>
                )}
              </div>

              <h3 className="font-display font-semibold text-[19px] leading-tight mb-2">{p.name}</h3>
              <p className="text-[13.5px] text-slate leading-relaxed mb-4">{p.blurb}</p>

              <div className="flex items-center gap-3.5 font-mono text-[11px] text-slate mb-4">
                <span className="flex items-center gap-1.5">📅 Mon–Sat</span>
                <span className="flex items-center gap-1.5">✅ Certificate</span>
              </div>

              <div className="h-[6px] bg-paper rounded-full overflow-hidden mb-2">
                <div className="h-full bg-orange rounded-full transition-all" style={{ width: `${p.progress}%` }} />
              </div>
              <div className="flex justify-between font-mono text-[10.5px] text-slate">
                <span>{p.dayLabel}</span>
                <span>{p.progress}%</span>
              </div>

              <span className="inline-flex items-center gap-2 font-mono text-[11.5px] tracking-wide text-ink border-b border-orange pb-0.5 mt-4 group-hover:text-orange group-hover:gap-3 transition-all">
                Open course →
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
