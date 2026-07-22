// components/dashboard/views/live-view.tsx
"use client";

import { Camera, Play } from "lucide-react";

export function LiveView() {
  return (
    <div>
      <div className="mb-7">
        <span className="font-mono text-[11px] tracking-widest text-orange block mb-2">Google Meet</span>
        <h2 className="font-display font-semibold text-[clamp(24px,3vw,32px)] leading-tight">Live Classes</h2>
        <p className="text-[14.5px] text-slate mt-2 max-w-[70ch]">Join links open 10 minutes before start.</p>
      </div>

      {/* Now live */}
      <div className="bg-white border border-ink/10 rounded-site p-6 flex items-center gap-4 flex-wrap mb-5">
        <div className="w-[60px] h-[60px] rounded-site bg-forest text-white flex flex-col items-center justify-center shrink-0">
          <strong className="font-display text-xl">FRI</strong>
          <span className="font-mono text-[9px] tracking-wide">NOW</span>
        </div>
        <div className="flex-1 min-w-[200px]">
          <h4 className="font-display font-semibold text-[16.5px]">Capstone Project &amp; Community Housing Solutions</h4>
          <p className="text-sm text-slate">Estate Management · 10:00 AM WAT · Instructor-led</p>
        </div>
        <a href="#" className="inline-flex items-center gap-2 bg-orange text-white px-6 py-3 rounded-site font-semibold text-sm hover:bg-orange-dark transition-colors shrink-0">
          <Camera className="w-4 h-4" /> Join Now
        </a>
      </div>

      {/* Upcoming */}
      <div className="bg-white border border-ink/10 rounded-site">
        <div className="px-6 py-4 border-b border-ink/10">
          <h3 className="font-display font-semibold text-lg">Upcoming Sessions</h3>
        </div>
        <div className="p-6">
          {[
            { icon: "📊", title: "Capstone Presentations", sub: "Saturday · 12:00 PM", when: "Sat" },
            { icon: "🎓", title: "Virtual Graduation & Awards", sub: "Saturday · 4:00 PM", when: "Sat" },
          ].map((s) => (
            <div key={s.title} className="flex items-center gap-3 py-3.5 border-b border-ink/10 last:border-0">
              <span className="text-lg shrink-0">{s.icon}</span>
              <div className="flex-1 min-w-0">
                <strong className="block text-sm font-medium">{s.title}</strong>
                <span className="text-xs text-slate">{s.sub}</span>
              </div>
              <span className="font-mono text-[11px] text-slate shrink-0">{s.when}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
