// components/sections/institute/schedule-section.tsx
"use client";

import { useState } from "react";
import { SectionHead } from "../section-head";
import { delay } from "@/lib/animation";

type DayKey = "mon" | "tue" | "wed" | "thu" | "fri" | "sat";

const days: { key: DayKey; abbr: string; label: string; sub: string }[] = [
  { key: "mon", abbr: "MON", label: "Individual Class", sub: "FUNDAMENTALS" },
  { key: "tue", abbr: "TUE", label: "Group Class", sub: "COLLABORATION 1" },
  { key: "wed", abbr: "WED", label: "Skill Practice", sub: "INDEPENDENT" },
  { key: "thu", abbr: "THU", label: "Group Project", sub: "COLLABORATION 2" },
  { key: "fri", abbr: "FRI", label: "Capstone Project", sub: "ASSESSMENT" },
  { key: "sat", abbr: "SAT", label: "Graduation & Review", sub: "RECOGNITION" },
];

const dayNames: Record<DayKey, string> = {
  mon: "Monday", tue: "Tuesday", wed: "Wednesday",
  thu: "Thursday", fri: "Friday", sat: "Saturday",
};

const details: Record<DayKey, { title: string; purpose: string; tasks: string[]; outcome: string }> = {
  mon: {
    title: "Build Personal Understanding",
    purpose: "Build personal understanding of the course fundamentals before anyone else weighs in.",
    tasks: ["Pre-recorded lecture videos", "Reading materials & PDFs", "Individual assignments", "Short quizzes", "Personal reflection task"],
    outcome: "Students develop personal understanding of the weekly topic.",
  },
  tue: {
    title: "Learn Together, Out Loud",
    purpose: "Encourage teamwork and discussion around what everyone learned on Monday.",
    tasks: ["Live Zoom / Google Meet class", "Group breakout discussions", "Case study analysis", "Problem-solving tasks", "Instructor-guided Q&A"],
    outcome: "Students learn collaboration and practical application.",
  },
  wed: {
    title: "Apply It on Your Own",
    purpose: "Apply the knowledge independently and build real, unaided competence.",
    tasks: ["Practical exercises", "Simulation tasks", "Worksheets & assignments", "Skill-building drills", "Self-assessment"],
    outcome: "Students strengthen independent competence.",
  },
  thu: {
    title: "Build Something as a Team",
    purpose: "Develop teamwork and real-world thinking through shared project work.",
    tasks: ["Group project work", "Peer presentations", "Live feedback sessions", "Instructor mentoring", "Strategy development tasks"],
    outcome: "Students build teamwork plus real project experience.",
  },
  fri: {
    title: "Prove What You've Mastered",
    purpose: "Test mastery of the week's learning through a real deliverable.",
    tasks: ["Individual or group capstone", "Presentation submission", "Practical problem-solving", "Evaluation by instructors", "Feedback & grading"],
    outcome: "Demonstrated mastery of the weekly topic.",
  },
  sat: {
    title: "Celebrate and Close the Cycle",
    purpose: "Celebrate the week's learning, recognise top performers, and set up the next module.",
    tasks: ["Virtual graduation ceremony", "Recognition of top performers", "Feedback session", "Certificates & digital badges", "Next week's module announced"],
    outcome: "Motivation, recognition, and retention.",
  },
};

export function ScheduleSection() {
  const [active, setActive] = useState<DayKey>("mon");

  return (
    <section className="py-25" id="schedule">
      <div className="max-w-site mx-auto px-8">
        <SectionHead number="WEEKLY COHORT MODEL" title={<>One Week, <span className="accent">Six Focused Days</span></>} />
        <p className="text-base leading-relaxed text-slate max-w-[64ch] mb-10 rise" style={delay(80)}>
          Every course runs Monday to Saturday. Tap a day to see how it works.
        </p>

        <div className="grid lg:grid-cols-[280px_1fr] gap-0.5 bg-ink/10 border border-ink/10 rounded-site overflow-hidden rise" style={delay(100)}>
          {/* Vertical day rail */}
          <div className="bg-white flex flex-col">
            {days.map((d) => (
              <button
                key={d.key}
                onClick={() => setActive(d.key)}
                className={`flex items-center gap-4 text-left w-full px-6 py-5 border-b border-ink/8 last:border-0 transition-all ${
                  active === d.key
                    ? "bg-ink text-white"
                    : "bg-white text-ink hover:bg-paper hover:pl-7"
                }`}
              >
                <span className={`w-9 h-9 shrink-0 rounded-full border-2 flex items-center justify-center font-mono text-xs font-medium transition-colors ${
                  active === d.key
                    ? "bg-orange text-white border-orange"
                    : "text-slate border-ink/20"
                }`}>
                  {d.abbr}
                </span>
                <div>
                  <strong className={`block text-[14.5px] ${
                    active === d.key ? "text-white" : "text-ink"
                  }`}>
                    {d.label}
                  </strong>
                  <span className={`font-mono text-[10.5px] tracking-wide ${
                    active === d.key ? "text-orange" : "text-slate"
                  }`}>
                    {d.sub}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Content panel */}
          <div className="bg-white p-8 md:p-11 min-h-[400px]">
            <span className="font-mono text-[11px] tracking-wider uppercase text-orange block mb-1">
              {dayNames[active]} · {days.find(d => d.key === active)?.label} Day
            </span>
            <h3 className="font-display font-semibold text-[clamp(24px,2.6vw,32px)] leading-tight text-ink mb-6">
              {details[active].title}
            </h3>

            <div className="bg-paper rounded-site p-5 mb-8 border-l-4 border-orange">
              <strong className="font-mono text-[11px] tracking-wide uppercase text-slate block mb-1.5">Purpose</strong>
              <p className="text-[15.5px] leading-relaxed text-ink">{details[active].purpose}</p>
            </div>

            <span className="font-mono text-[11px] tracking-wide uppercase text-slate block mb-4">What You&apos;ll Do</span>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-3 mb-8">
              {details[active].tasks.map((t) => (
                <div key={t} className="flex gap-3 items-start text-[14.5px] leading-relaxed text-ink">
                  <span className="w-5 h-5 rounded-full bg-orange/10 text-orange flex items-center justify-center shrink-0 mt-0.5 text-xs">✓</span>
                  {t}
                </div>
              ))}
            </div>

            <div className="flex gap-4 items-start pt-6 border-t border-ink/12">
              <span className="w-10 h-10 rounded-full bg-emerald/10 text-emerald flex items-center justify-center shrink-0 text-lg">💡</span>
              <div>
                <strong className="font-mono text-[11px] tracking-wide uppercase text-slate block mb-1">Outcome</strong>
                <p className="text-[15px] leading-relaxed text-ink">{details[active].outcome}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
