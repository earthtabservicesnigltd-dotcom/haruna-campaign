// components/dashboard/sidebar.tsx
"use client";

import Image from "next/image";
import { LayoutDashboard, BookOpen, Calendar, FileText, Video, BadgeCheck, MessageCircle, Award, User, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ViewType } from "@/app/(academy)/student-dashboard/page";

const navItems: { view: ViewType; icon: typeof LayoutDashboard; label: string; badge?: string }[] = [
  { view: "dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { view: "courses", icon: BookOpen, label: "My Courses", badge: "6" },
  { view: "schedule", icon: Calendar, label: "Schedule" },
  { view: "assignments", icon: FileText, label: "Assignments", badge: "3" },
  { view: "live", icon: Video, label: "Live Classes" },
  { view: "certificates", icon: BadgeCheck, label: "Certificates" },
  { view: "discussions", icon: MessageCircle, label: "Discussions" },
  { view: "graduation", icon: Award, label: "Graduation" },
  { view: "profile", icon: User, label: "Profile" },
];

interface Props {
  currentView: ViewType;
  onNavigate: (view: ViewType) => void;
  open: boolean;
  onClose: () => void;
}

export function DashboardSidebar({ currentView, onNavigate, open, onClose }: Props) {
  return (
    <aside className={cn(
      "w-[268px] bg-ink text-white flex flex-col shrink-0 fixed lg:sticky top-0 h-screen z-50 lg:z-auto transition-transform duration-500",
      open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
    )}>
      <div className="flex items-center justify-center py-5 border-b border-white/10">
        <Image src="/images/36.png" alt="Institute" width={38} height={38} />
      </div>

      <nav className="flex-1 p-4 space-y-0.5 overflow-y-auto">
        <span className="font-mono text-[10px] tracking-widest uppercase text-white/40 block px-3 pb-2 pt-4">Menu</span>
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.view}
              onClick={() => onNavigate(item.view)}
              className={cn(
                "flex items-center gap-3 w-full text-left px-3 py-2.5 rounded-site text-[14.5px] transition-all",
                currentView === item.view
                  ? "bg-orange text-white"
                  : "text-white/78 hover:bg-white/5 hover:text-white hover:pl-4"
              )}
            >
              <Icon className="w-[18px] h-[18px] shrink-0" />
              <span className="flex-1">{item.label}</span>
              {item.badge && (
                <span className="font-mono text-[10px] bg-orange/16 text-orange px-1.5 py-0.5 rounded-full">
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-forest flex items-center justify-center font-display text-base shrink-0">EO</div>
          <div className="flex-1 min-w-0">
            <div className="text-[13.5px] font-semibold truncate">Ehizojie O.</div>
            <div className="font-mono text-[10px] text-white/50">COHORT · WK 28</div>
          </div>
          <button onClick={() => window.location.href = "/login-signup"} className="text-white/50 hover:text-orange transition-colors">
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
}
