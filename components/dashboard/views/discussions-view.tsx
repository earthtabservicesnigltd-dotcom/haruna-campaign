// components/dashboard/views/discussions-view.tsx
"use client";

export function DiscussionsView() {
  return (
    <div>
      <div className="mb-7">
        <span className="font-mono text-[11px] tracking-widest text-orange block mb-2">Peer Learning</span>
        <h2 className="font-display font-semibold text-[clamp(24px,3vw,32px)] leading-tight">Discussions</h2>
        <p className="text-[14.5px] text-slate mt-2 max-w-[70ch]">Your Tuesday and Thursday group channels live here.</p>
      </div>

      <div className="bg-white border border-ink/10 rounded-site">
        <div className="p-6 space-y-0">
          {[
            { icon: "👥", title: "Group 3 · Estate Management", sub: "Capstone: Auchi affordable housing", count: "4 new" },
            { icon: "💬", title: "General Cohort Wk 28", sub: "Announcements & Q&A", count: "12 new" },
            { icon: "💡", title: "Instructor Office Hours", sub: "Ask the facilitator", count: "Open" },
          ].map((d) => (
            <div key={d.title} className="flex items-center gap-3 py-4 border-b border-ink/10 last:border-0 cursor-pointer hover:bg-paper/50 -mx-6 px-6 transition-colors">
              <span className="text-lg shrink-0">{d.icon}</span>
              <div className="flex-1 min-w-0">
                <strong className="block text-sm font-medium">{d.title}</strong>
                <span className="text-xs text-slate">{d.sub}</span>
              </div>
              <span className="font-mono text-[11px] text-orange shrink-0">{d.count}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
