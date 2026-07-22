// components/dashboard/views/schedule-view.tsx
"use client";

export function ScheduleView() {
  const days = [
    { name: "Mon", type: "Individual", sessions: [
      { time: "9:00 AM", title: "Foundations of Estate Management (recorded)", type: "class" },
      { time: "TASK", title: "Reflection sheet + quizzes", type: "task" },
    ]},
    { name: "Tue", type: "Group", sessions: [
      { time: "10:00 AM", title: "Property Identification & Market Analysis", type: "live" },
      { time: "TASK", title: "Community assessment report", type: "task" },
    ]},
    { name: "Wed", type: "Individual", sessions: [
      { time: "9:00 AM", title: "Property Management & Client Relations", type: "class" },
      { time: "TASK", title: "Management plan", type: "task" },
    ]},
    { name: "Thu", type: "Group", sessions: [
      { time: "10:00 AM", title: "Development & Project Planning", type: "live" },
      { time: "TASK", title: "Group development strategy", type: "task" },
    ]},
    { name: "Fri", type: "Capstone", today: true, sessions: [
      { time: "10:00 AM", title: "Capstone project & housing solutions", type: "live" },
      { time: "DUE", title: "Final capstone document", type: "task" },
    ]},
    { name: "Sat", type: "Graduation", sessions: [
      { time: "12:00 PM", title: "Capstone presentations", type: "class" },
      { time: "4:00 PM", title: "Virtual graduation & awards", type: "live" },
    ]},
  ];

  return (
    <div>
      <div className="mb-7">
        <span className="font-mono text-[11px] tracking-widest text-orange block mb-2">Cohort Week 28</span>
        <h2 className="font-display font-semibold text-[clamp(24px,3vw,32px)] leading-tight">Weekly Schedule</h2>
        <p className="text-[14.5px] text-slate mt-2 max-w-[70ch]">All classes run on Google Meet.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0.5 bg-ink/10 border border-ink/10 rounded-site overflow-hidden">
        {days.map((day) => (
          <div key={day.name} className={`bg-white ${day.today ? "ring-2 ring-orange relative z-10" : ""}`}>
            <div className={`p-3.5 text-center border-b border-ink/10 ${day.today ? "bg-ink text-white" : "bg-paper"}`}>
              <strong className={`block font-display font-semibold text-[15px] ${day.today ? "text-white" : "text-ink"}`}>{day.name}</strong>
              <span className={`font-mono text-[9.5px] tracking-wide uppercase ${day.today ? "text-orange" : "text-slate"}`}>{day.type}</span>
            </div>
            <div className="p-3.5 space-y-2.5">
              {day.sessions.map((s) => (
                <div key={s.title} className={`p-3 rounded-site text-xs ${s.type === "live" ? "bg-orange/10" : s.type === "task" ? "bg-paper" : "bg-paper"}`}>
                  <div className="font-mono text-[10px] tracking-wide text-orange">{s.time}</div>
                  <div className="text-xs font-medium mt-1 leading-tight">{s.title}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
