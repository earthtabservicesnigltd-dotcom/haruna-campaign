// app/student-dashboard/page.tsx
"use client";

import { useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { DashboardSidebar } from "@/components/dashboard/sidebar";
import { DashboardTopbar } from "@/components/dashboard/topbar";
import { DashboardHome } from "@/components/dashboard/views/dashboard-home";
import { CoursesView } from "@/components/dashboard/views/courses-view";
import { CourseDetailView } from "@/components/dashboard/views/course-detail-view";
import { ScheduleView } from "@/components/dashboard/views/schedule-view";
import { AssignmentsView } from "@/components/dashboard/views/assignments-view";
import { LiveView } from "@/components/dashboard/views/live-view";
import { CertificatesView } from "@/components/dashboard/views/certificates-view";
import { DiscussionsView } from "@/components/dashboard/views/discussions-view";
import { GraduationView } from "@/components/dashboard/views/graduation-view";
import { ProfileView } from "@/components/dashboard/views/profile-view";

export type ViewType = "dashboard" | "courses" | "courseDetail" | "schedule" | "assignments" | "live" | "certificates" | "discussions" | "graduation" | "profile";

export default function StudentDashboardPage() {
  const [currentView, setCurrentView] = useState<ViewType>("dashboard");
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  useScrollReveal();

  const navigate = (view: ViewType, courseId?: string) => {
    setCurrentView(view);
    if (courseId) setSelectedCourse(courseId);
    setSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-paper flex -mt-[72px]">
      <DashboardSidebar
        currentView={currentView}
        onNavigate={navigate}
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Backdrop for mobile sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-30 bg-ink/55 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      <div className="flex-1 flex flex-col min-w-0">
        <DashboardTopbar
          currentView={currentView}
          onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        />

        <div className="flex-1 p-6 md:p-8">
          {currentView === "dashboard" && <DashboardHome onNavigate={navigate} />}
          {currentView === "courses" && <CoursesView onSelectCourse={navigate} />}
          {currentView === "courseDetail" && selectedCourse && (
            <CourseDetailView courseId={selectedCourse} onBack={() => navigate("courses")} />
          )}
          {currentView === "schedule" && <ScheduleView />}
          {currentView === "assignments" && <AssignmentsView />}
          {currentView === "live" && <LiveView />}
          {currentView === "certificates" && <CertificatesView />}
          {currentView === "discussions" && <DiscussionsView />}
          {currentView === "graduation" && <GraduationView />}
          {currentView === "profile" && <ProfileView />}
        </div>
      </div>
    </div>
  );
}
