// components/dashboard/views/dashboard-home.tsx
"use client";

import Link from "next/link";
import { BookOpen, CheckCircle, FileCheck, BadgeCheck, ArrowRight } from "lucide-react";
import { delay } from "@/lib/animation";
import type { ViewType } from "@/app/(academy)/student-dashboard/page";

interface Props {
  onNavigate: (view: ViewType, courseId?: string) => void;
}

export function DashboardHome({ onNavigate }: Props) {
  return (
    <div>
      {/* Welcome band */}
      <div className="bg-ink text-white rounded-site p-8 md:p-9 mb-6 relative overflow-hidden">
        <div className="relative z-10 flex items-center justify-between gap-7 flex-wrap">
          <div>
            <span className="font-mono text-[11px] tracking-widest text-orange block mb-2.5">FRIDAY · CAPSTONE PROJECT DAY</span>
            <h2 className="font-display font-semibold text-[clamp(24px,2.8vw,32px)] leading-tight">Welcome back, Ehizojie</h2>
            <p className="text-[14.5px] text-white/72 mt-2.5 max-w-[52ch]">
              You&apos;re on Day 5 of the Estate Management cohort. Your capstone submission is due today — finish strong.
            </p>
          </div>
          <button onClick={() => onNavigate("courseDetail", "estate")} className="inline-flex items-center gap-2 bg-orange text-white px-6 py-3 rounded-site font-semibold text-sm hover:bg-orange-dark transition-colors shrink-0">
            Resume Course <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {[
          { icon: BookOpen, value: "1", label: "Active Cohort" },
          { icon: CheckCircle, value: "4/6", label: "Days Completed" },
          { icon: FileCheck, value: "82%", label: "Attendance" },
          { icon: BadgeCheck, value: "2", label: "Certificates Earned" },
        ].map((s) => (
          <div key={s.label} className="bg-white border border-ink/10 rounded-site p-5 rise">
            <s.icon className="w-[22px] h-[22px] text-orange mb-3" />
            <strong className="block font-display font-semibold text-[28px] leading-none">{s.value}</strong>
            <span className="block text-sm text-slate mt-1.5">{s.label}</span>
          </div>
        ))}
      </div>

      {/* Main grid */}
      <div className="grid lg:grid-cols-[1.5fr_1fr] gap-6">
        <div className="space-y-6">
          {/* Today's class */}
          <div className="bg-white border border-ink/10 rounded-site">
            <div className="flex items-center justify-between px-6 py-4 border-b border-ink/10">
              <h3 className="font-display font-semibold text-lg">Today&apos;s Live Class</h3>
              <span className="font-mono text-[10.5px] tracking-wide uppercase text-orange bg-orange/10 px-2.5 py-1 rounded-site">Live 10:00 AM</span>
            </div>
            <div className="p-6 flex items-center gap-4 flex-wrap">
              <div className="w-[60px] h-[60px] rounded-site bg-forest text-white flex flex-col items-center justify-center shrink-0">
                <strong className="font-display text-xl">FRI</strong>
                <span className="font-mono text-[9px] tracking-wide">DAY 5</span>
              </div>
              <div className="flex-1 min-w-[200px]">
                <h4 className="font-display font-semibold text-[16.5px]">Capstone Project &amp; Community Housing Solutions</h4>
                <p className="text-sm text-slate">Estate Management</p>
              </div>
              <button onClick={() => onNavigate("live")} className="inline-flex items-center gap-2 bg-orange text-white px-5 py-2.5 rounded-site font-semibold text-sm hover:bg-orange-dark transition-colors">
                Join <span className="text-lg">📹</span>
              </button>
            </div>
          </div>

          {/* Week progress */}
          <div className="bg-white border border-ink/10 rounded-site">
            <div className="flex items-center justify-between px-6 py-4 border-b border-ink/10">
              <h3 className="font-display font-semibold text-lg">This Week&apos;s Progress</h3>
              <button onClick={() => onNavigate("courseDetail", "estate")} className="font-mono text-[11.5px] tracking-wide text-forest hover:text-orange transition-colors">View course</button>
            </div>
            <div className="p-6 space-y-0">
              {[
                { day: "MON", title: "Foundations of Estate Management", done: true },
                { day: "TUE", title: "Property Identification & Market Analysis", done: true },
                { day: "WED", title: "Property Management & Client Relations", done: true },
                { day: "THU", title: "Real Estate Development & Project Planning", done: true },
                { day: "FRI", title: "Capstone Project & Housing Solutions", current: true },
                { day: "SAT", title: "Presentation & Graduation", upcoming: true },
              ].map((item) => (
                <div key={item.day} className="flex items-center gap-3.5 py-3 border-b border-ink/10 last:border-0 flex-wrap">
                  <span className={`w-[26px] h-[26px] rounded-full flex items-center justify-center text-xs shrink-0 ${
                    item.done ? "bg-emerald text-white" : item.current ? "border-2 border-orange text-orange" : "border-2 border-ink/10"
                  }`}>
                    {item.done ? "✓" : item.current ? "●" : ""}
                  </span>
                  <span className="font-mono text-[11px] text-slate w-[42px] shrink-0">{item.day}</span>
                  <span className={`text-sm flex-1 min-w-[140px] ${item.current ? "font-semibold text-ink" : ""}`}>{item.title}</span>
                  <span className={`font-mono text-[10.5px] tracking-wide uppercase px-2 py-0.5 rounded-site ${
                    item.done ? "bg-emerald/10 text-emerald" : item.current ? "bg-orange/10 text-orange" : "bg-paper text-slate"
                  }`}>
                    {item.done ? "Done" : item.current ? "Today" : "Upcoming"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {/* Deadlines */}
          <div className="bg-white border border-ink/10 rounded-site">
            <div className="px-6 py-4 border-b border-ink/10">
              <h3 className="font-display font-semibold text-lg">Upcoming Deadlines</h3>
            </div>
            <div className="p-6">
              <div className="space-y-0">
                {[
                  { icon: "📄", title: "Final Capstone Document", sub: "Estate Management", when: "Today" },
                  { icon: "📊", title: "Group Presentation", sub: "Estate Management", when: "Sat" },
                  { icon: "🎓", title: "Virtual Graduation", sub: "Cohort Wk 28", when: "Sat 4PM" },
                ].map((d) => (
                  <div key={d.title} className="flex items-center gap-3 py-3.5 border-b border-ink/10 last:border-0">
                    <span className="text-lg shrink-0">{d.icon}</span>
                    <div className="flex-1 min-w-0">
                      <strong className="block text-sm font-medium">{d.title}</strong>
                      <span className="text-xs text-slate">{d.sub}</span>
                    </div>
                    <span className="font-mono text-[11px] text-slate shrink-0">{d.when}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Continue learning */}
          <div className="bg-white border border-ink/10 rounded-site">
            <div className="flex items-center justify-between px-6 py-4 border-b border-ink/10">
              <h3 className="font-display font-semibold text-lg">Continue Learning</h3>
              <button onClick={() => onNavigate("courses")} className="font-mono text-[11.5px] tracking-wide text-forest hover:text-orange transition-colors">All courses</button>
            </div>
            <div className="p-6">
              <button onClick={() => onNavigate("courseDetail", "estate")} className="w-full text-left">
                <div className="w-12 h-12 rounded-site bg-orange/10 text-orange flex items-center justify-center mb-4">🏢</div>
                <h3 className="font-display font-semibold text-[19px] mb-3">Estate Management</h3>
                <div className="h-[6px] bg-paper rounded-full overflow-hidden mb-2">
                  <div className="h-full bg-orange rounded-full" style={{ width: "80%" }} />
                </div>
                <div className="flex justify-between font-mono text-[10.5px] text-slate">
                  <span>Day 5 of 6</span>
                  <span>80%</span>
                </div>
                <span className="inline-flex items-center gap-2 font-mono text-[11.5px] tracking-wide text-ink border-b border-orange pb-0.5 mt-4 hover:text-orange hover:gap-3 transition-all">
                  Open course →
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
