// components/dashboard/views/assignments-view.tsx
"use client";

export function AssignmentsView() {
  const assignments = [
    { name: "Personal Estate Management Reflection Sheet", course: "Monday · Individual", type: "Individual", due: "Mon", status: "Submitted", color: "emerald" },
    { name: "Community Property Assessment Report", course: "Tuesday · Group", type: "Group", due: "Tue", status: "Submitted", color: "emerald" },
    { name: "Individual Property Management Plan", course: "Wednesday · Individual", type: "Individual", due: "Wed", status: "Submitted", color: "emerald" },
    { name: "Group Real Estate Development Strategy", course: "Thursday · Group", type: "Group", due: "Thu", status: "Submitted", color: "emerald" },
    { name: "Final Capstone Project Document", course: "Friday · Capstone", type: "Group", due: "Today", status: "Due today", color: "orange" },
  ];

  return (
    <div>
      <div className="mb-7">
        <span className="font-mono text-[11px] tracking-widest text-orange block mb-2">Estate Management · Week 28</span>
        <h2 className="font-display font-semibold text-[clamp(24px,3vw,32px)] leading-tight">Assignments</h2>
        <p className="text-[14.5px] text-slate mt-2 max-w-[70ch]">Individual tasks land Monday and Wednesday, group work Tuesday and Thursday, and the capstone submission on Friday.</p>
      </div>

      <div className="bg-white border border-ink/10 rounded-site overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px]">
            <thead>
              <tr className="bg-paper">
                <th className="text-left font-mono text-[10.5px] tracking-wide uppercase text-slate font-medium px-5 py-3.5 border-b border-ink/10">Task</th>
                <th className="text-left font-mono text-[10.5px] tracking-wide uppercase text-slate font-medium px-5 py-3.5 border-b border-ink/10">Type</th>
                <th className="text-left font-mono text-[10.5px] tracking-wide uppercase text-slate font-medium px-5 py-3.5 border-b border-ink/10">Due</th>
                <th className="text-left font-mono text-[10.5px] tracking-wide uppercase text-slate font-medium px-5 py-3.5 border-b border-ink/10">Status</th>
                <th className="text-right px-5 py-3.5 border-b border-ink/10"></th>
              </tr>
            </thead>
            <tbody>
              {assignments.map((a) => (
                <tr key={a.name} className="border-b border-ink/10 last:border-0 hover:bg-orange/4">
                  <td className="px-5 py-4">
                    <div className="font-medium text-sm">{a.name}</div>
                    <div className="text-xs text-slate">{a.course}</div>
                  </td>
                  <td className="px-5 py-4 text-sm">{a.type}</td>
                  <td className="px-5 py-4 font-mono text-xs text-slate">{a.due}</td>
                  <td className="px-5 py-4">
                    <span className={`font-mono text-[10.5px] tracking-wide uppercase px-2.5 py-1 rounded-site ${
                      a.color === "emerald" ? "bg-emerald/10 text-emerald" : "bg-orange/10 text-orange"
                    }`}>{a.status}</span>
                  </td>
                  <td className="px-5 py-4 text-right">
                    <button className={`px-4 py-2 rounded-site text-xs font-semibold transition-colors ${
                      a.status === "Due today"
                        ? "bg-orange text-white hover:bg-orange-dark"
                        : "border border-ink/10 text-ink hover:border-orange hover:text-orange"
                    }`}>
                      {a.status === "Due today" ? "Upload" : "View"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
