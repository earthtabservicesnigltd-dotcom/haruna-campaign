// components/dashboard/views/graduation-view.tsx
"use client";

export function GraduationView() {
  return (
    <div>
      <div className="mb-7">
        <span className="font-mono text-[11px] tracking-widest text-orange block mb-2">Saturday · Cohort Week 28</span>
        <h2 className="font-display font-semibold text-[clamp(24px,3vw,32px)] leading-tight">Graduation &amp; Awards</h2>
        <p className="text-[14.5px] text-slate mt-2 max-w-[70ch]">The week closes with live capstone presentations, facilitator feedback, and recognition of top performers.</p>
      </div>

      <div className="bg-white border border-ink/10 rounded-site mb-5">
        <div className="flex items-center justify-between px-6 py-4 border-b border-ink/10">
          <h3 className="font-display font-semibold text-lg">Ceremony Run of Show</h3>
          <span className="font-mono text-[10.5px] tracking-wide uppercase text-orange bg-orange/10 px-2.5 py-1 rounded-site">Sat 4:00 PM</span>
        </div>
        <div className="p-6">
          <ul className="space-y-3">
            {[
              "Opening remarks",
              "Group capstone presentations",
              "Facilitators' feedback",
              "Recognition of outstanding participants and teams",
              "Certificate presentation",
              "Graduation address & closing remarks",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-orange shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-white border border-ink/10 rounded-site">
        <div className="px-6 py-4 border-b border-ink/10">
          <h3 className="font-display font-semibold text-lg">Weekly Awards</h3>
        </div>
        <div className="p-6">
          <ul className="space-y-3">
            {[
              "Best Estate Development Project",
              "Best Property Management Strategy",
              "Most Innovative Real Estate Solution",
              "Best Team Collaboration",
              "Best Project Presentation",
              "Outstanding Participant",
            ].map((a) => (
              <li key={a} className="flex items-center gap-3 text-sm border-b border-ink/10 last:border-0 py-2">
                <span className="text-orange text-base">🏆</span> {a}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
