// components/dashboard/views/course-detail-view.tsx
"use client";

import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { programmeData, type ProgrammeData } from "@/lib/programme-data";

interface Props {
  courseId: string;
  onBack: () => void;
}

const dayLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] as const;
const dayKeys = ["mon", "tue", "wed", "thu", "fri", "sat"] as const;

export function CourseDetailView({ courseId, onBack }: Props) {
  const programme = programmeData[courseId];
  const [activeDay, setActiveDay] = useState<typeof dayKeys[number]>("mon");

  if (!programme) {
    return (
      <div className="text-center py-16">
        <p className="text-slate">Programme not found.</p>
        <button onClick={onBack} className="text-orange mt-4 font-semibold">← Back</button>
      </div>
    );
  }

  return (
    <div>
      <button onClick={onBack} className="inline-flex items-center gap-2 font-mono text-[11px] tracking-wide uppercase text-slate mb-5 hover:text-orange hover:gap-3 transition-all">
        <ArrowLeft className="w-3.5 h-3.5" /> Back to My Courses
      </button>

      {/* Hero */}
      <div className="bg-ink text-white rounded-site p-8 md:p-9 mb-6 relative overflow-hidden">
        <div className="relative z-10">
          <div className="w-[54px] h-[54px] rounded-site bg-orange/16 text-orange flex items-center justify-center text-2xl mb-4">
            {programme.icon === "building" && "🏢"}
            {programme.icon === "tree" && "🌳"}
            {programme.icon === "chart" && "📈"}
            {programme.icon === "cpu" && "💻"}
            {programme.icon === "package" && "📦"}
            {programme.icon === "settings" && "⚙️"}
          </div>
          <h2 className="font-display font-semibold text-[clamp(24px,3vw,34px)] leading-tight max-w-[22ch]">{programme.name} Programme</h2>
          <div className="flex flex-wrap gap-5 mt-5 font-mono text-[11.5px] text-white/70">
            <span className="flex items-center gap-2">📅 1-Week Intensive · Mon–Sat</span>
            <span className="flex items-center gap-2">📹 Live + Recorded</span>
            <span className="flex items-center gap-2">✅ {programme.cert}</span>
          </div>
        </div>
      </div>

      {/* Day tabs */}
      <div className="flex gap-2 flex-wrap mb-5">
        {dayLabels.map((label, i) => {
          const key = dayKeys[i];
          return (
            <button
              key={key}
              onClick={() => setActiveDay(key)}
              className={`px-4 py-3 rounded-site border min-w-[100px] text-left transition-all ${
                activeDay === key
                  ? "bg-ink text-white border-ink"
                  : "bg-white text-ink border-ink/10 hover:border-orange hover:-translate-y-0.5"
              }`}
            >
              <strong className={`font-mono text-[11px] tracking-wide ${activeDay === key ? "text-orange" : "text-slate"}`}>{label.toUpperCase()}</strong>
              <span className="block text-sm font-medium mt-0.5">{programme.days[key].type}</span>
            </button>
          );
        })}
      </div>

      {/* Day content */}
      {activeDay === "sat" ? (
        <SaturdayContent programme={programme} />
      ) : (
        <WeekdayContent programme={programme} day={activeDay} />
      )}
    </div>
  );
}

function WeekdayContent({ programme, day }: { programme: ProgrammeData; day: string }) {
  const data = programme.days[day as keyof typeof programme.days];
  if (!data || !("core" in data)) return null;

  return (
    <div className="bg-white border border-ink/10 rounded-site p-8">
      <div className="font-mono text-[10.5px] tracking-wide uppercase text-orange flex items-center gap-2 mb-4">
        📖 {data.type}
      </div>
      <h3 className="font-display font-semibold text-[22px] leading-tight mb-6">{data.title}</h3>

      <div className="grid lg:grid-cols-[1.3fr_1fr] gap-5 items-start">
        {/* Core learning */}
        <div>
          <h4 className="font-mono text-[11px] tracking-wide uppercase text-slate mb-3.5 pb-2.5 border-b border-ink/10">Core Learning</h4>
          <ul className="space-y-2">
            {data.core?.map((item: string) => (
              <li key={item} className="flex gap-2.5 items-start text-sm leading-relaxed text-ink">
                <span className="w-5 h-5 rounded-full bg-orange/10 text-orange flex items-center justify-center shrink-0 mt-0.5 text-xs">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Tasks */}
        <div className="bg-paper rounded-site p-6">
          <h4 className="font-mono text-[11px] tracking-wide uppercase text-slate mb-3.5 pb-2.5 border-b border-ink/10">{data.taskType}</h4>
          <ul className="space-y-2 mb-5">
            {data.task?.map((t: string) => (
              <li key={t} className="flex gap-2.5 items-start text-sm leading-relaxed">
                <span className="text-forest shrink-0 mt-0.5">✏️</span>
                {t}
              </li>
            ))}
          </ul>
          <div className="flex gap-3 items-center pt-4 border-t border-ink/10">
            <span className="text-xl text-orange">📤</span>
            <div>
              <strong className="font-mono text-[10px] tracking-wide uppercase text-slate block">Output</strong>
              <span className="text-sm font-semibold text-ink">{data.output}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SaturdayContent({ programme }: { programme: ProgrammeData }) {
  const sat = programme.days.sat;
  if (!("present" in sat)) return null;

  return (
    <div className="space-y-5">
      <div className="bg-white border border-ink/10 rounded-site p-8">
        <div className="font-mono text-[10.5px] tracking-wide uppercase text-orange flex items-center gap-2 mb-4">
          🎓 Saturday · Presentation & Graduation
        </div>
        <h3 className="font-display font-semibold text-[22px] leading-tight mb-2">{sat.theme}</h3>

        <div className="grid sm:grid-cols-2 gap-5 mt-6">
          <div className="bg-paper rounded-site p-6">
            <h4 className="font-mono text-[11px] tracking-wide uppercase text-slate mb-3">Presentation Structure</h4>
            <ul className="space-y-2">
              {sat.present?.map((item: string) => (
                <li key={item} className="flex gap-2 items-start text-sm">
                  <span className="text-orange shrink-0">→</span> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-paper rounded-site p-6">
            <h4 className="font-mono text-[11px] tracking-wide uppercase text-slate mb-3">Evaluation Criteria</h4>
            <ul className="space-y-2">
              {sat.criteria?.map((item: string) => (
                <li key={item} className="flex gap-2 items-start text-sm">
                  <span className="text-forest shrink-0">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-5 bg-white border border-ink/10 rounded-site p-6">
          <h4 className="font-mono text-[11px] tracking-wide uppercase text-slate mb-3">Weekly Awards</h4>
          <ul className="space-y-2">
            {sat.awards?.map((a: string) => (
              <li key={a} className="flex items-center gap-2 text-sm py-1.5 border-b border-ink/10 last:border-0">
                <span className="text-orange">🏆</span> {a}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Certification band */}
      <div className="bg-forest text-white rounded-site p-8 md:p-9 grid md:grid-cols-[auto_1fr] gap-6 items-center relative overflow-hidden">
        <div className="w-[76px] h-[76px] rounded-full bg-white/12 flex items-center justify-center text-4xl shrink-0 mx-auto md:mx-0">🏅</div>
        <div>
          <span className="font-mono text-[11px] tracking-wide text-white/80 block mb-2">CERTIFICATION</span>
          <h3 className="font-display font-semibold text-[22px] leading-tight mb-4">Abubakari Aruna Institute {programme.cert}</h3>
          <ul className="space-y-2">
            {[
              "Minimum of 80% attendance",
              "Completion of all individual assignments (Mon & Wed)",
              "Active participation in group activities (Tue & Thu)",
              "Successful submission of the capstone project (Fri)",
              "Participation in presentation and graduation (Sat)",
            ].map((req) => (
              <li key={req} className="flex gap-2.5 items-start text-[13.5px] text-white/90">
                <span className="text-orange shrink-0 mt-0.5">✓</span> {req}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
