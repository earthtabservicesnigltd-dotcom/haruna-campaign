// components/dashboard/topbar.tsx
"use client";

import { Menu, Bell, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ViewType } from "@/app/(academy)/student-dashboard/page";

const titles: Record<ViewType, string> = {
  dashboard: "Dashboard",
  courses: "My Courses",
  courseDetail: "Course Detail",
  schedule: "Schedule",
  assignments: "Assignments",
  live: "Live Classes",
  certificates: "Certificates",
  discussions: "Discussions",
  graduation: "Graduation",
  profile: "Profile",
};

interface Props {
  currentView: ViewType;
  onToggleSidebar: () => void;
}

export function DashboardTopbar({ currentView, onToggleSidebar }: Props) {
  return (
    <header className="sticky top-0 z-20 bg-white border-b border-ink/10 px-6 md:px-8 py-4 flex items-center gap-5">
      <button onClick={onToggleSidebar} className="lg:hidden text-ink hover:text-orange transition-colors">
        <Menu className="w-5 h-5" />
      </button>

      <div className="flex-1 min-w-0">
        <h1 className="font-display font-semibold text-lg md:text-xl truncate">{titles[currentView]}</h1>
      </div>

      <button className="relative w-10 h-10 rounded-site border border-ink/10 flex items-center justify-center text-ink hover:border-orange hover:text-orange transition-colors shrink-0">
        <Bell className="w-[17px] h-[17px]" />
        <span className="absolute top-2 right-2.5 w-1.5 h-1.5 rounded-full bg-orange border border-white" />
      </button>

      <a href="/login-signup" className="hidden sm:inline-flex items-center gap-2 px-4 py-2 border border-ink/10 rounded-site bg-paper text-sm font-semibold text-ink hover:border-orange hover:text-orange transition-colors shrink-0">
        <LogOut className="w-4 h-4" /> Sign Out
      </a>
    </header>
  );
}
