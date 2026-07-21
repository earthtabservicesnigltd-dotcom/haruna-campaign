// app/login-signup/page.tsx
"use client";

import { useState } from "react";
import { Eye, EyeOff, ArrowLeft, ArrowRight, Check, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const programmes = [
  "Estate Management",
  "Agro-Allied & Agricultural Business",
  "Entrepreneurship & Wealth Creation",
  "Digital Skills & Technology",
  "Import & Export Strategies",
  "Engineering Technology",
];

type Pane = "login" | "signup" | "forgot";

const lgas = ["Akoko-Edo", "Etsako Central", "Etsako East", "Etsako West", "Owan East", "Owan West", "Outside Edo North"];

export default function LoginSignupPage() {
  const [pane, setPane] = useState<Pane>("login");
  const [showPass, setShowPass] = useState(false);
  const [selectedSchool, setSelectedSchool] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="bg-[#F7F3EC] overflow-hidden flex -mt-[72px] min-h-screen">
      {/* Left brand panel — hidden on mobile */}
      <div className="hidden lg:flex lg:w-[48%] min-h-screen bg-ink text-white flex-col p-12 relative overflow-hidden"
        style={{
          background: "radial-gradient(circle at 88% 8%, rgba(47,143,85,0.5), transparent 44%), radial-gradient(circle at 4% 96%, rgba(242,153,74,0.16), transparent 42%), #0B2B1C"
        }}
      >
        <div className="flex items-center gap-3 mb-10">
          <Image src="/images/36.png" alt="Institute" width={50} height={50} />
          <div>
            <div className="font-display font-semibold text-base">Abubakari Aruna Institute</div>
            <div className="font-mono text-[9.5px] tracking-widest uppercase text-amber-400">Online Skills & Leadership</div>
          </div>
        </div>

        <div className="flex flex-col justify-center max-w-[420px]">
          <span className="font-mono text-[11px] tracking-widest text-amber-400 mb-4">ONLINE SKILLS & LEADERSHIP TRAINING</span>
          <h1 className="font-display font-semibold text-[clamp(28px,3vw,40px)] leading-tight">
            Learn it Monday. <em className="text-amber-400 not-italic">Use it by Saturday.</em>
          </h1>
          <p className="text-[14.5px] text-white/68 mt-4 leading-relaxed max-w-[38ch]">
            Every cohort runs on the same six-day rhythm: live class, studio practice, and a Saturday demo day where you present real work.
          </p>

          {/* Weekly rhythm visual */}
          <div className="mt-10">
            <span className="font-mono text-[10px] tracking-widest uppercase text-white/45 block mb-5">THIS WEEK'S TRAINING ROADMAP</span>
            <div className="flex justify-between relative">
              <div className="absolute left-2 right-2 top-[6px] h-px bg-white/16" />
              {[
                { day: "Mon", tag: "Online\nClass", live: true },
                { day: "Tue", tag: "Group\nActivity" },
                { day: "Wed", tag: "Individual\nAssignment", live: true },
                { day: "Thu", tag: "Group\nActivity" },
                { day: "Fri", tag: "Capstone\nProject", live: true },
                { day: "Sat", tag: "Graduation", peak: true },
              ].map((d) => (
                <div key={d.day} className="flex flex-col items-center gap-2 flex-1 relative">
                  <span className={`w-3.5 h-3.5 rounded-full border-2 relative z-10 transition-all ${
                    d.peak
                      ? "w-4 h-4 bg-amber-400 border-amber-400 shadow-[0_0_0_5px_rgba(242,153,74,0.22)]"
                      : d.live
                      ? "bg-emerald-500 border-emerald-500"
                      : "bg-ink border-white/35"
                  }`} />
                  <span className={`font-mono text-[11px] tracking-wide ${
                    d.peak ? "text-amber-400 font-semibold" : "text-white/85"
                  }`}>{d.day}</span>
                  <span className="text-[10.5px] text-white/42 text-center leading-tight max-w-[9ch]">{d.tag}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 flex-wrap font-mono text-[10.5px] tracking-wide text-white/50 pt-5 mt-8 border-t border-white/10">
          <span>NEXT ACADEMY SESSION: REGISTRATION OPEN</span>
          <span className="w-1 h-1 rounded-full bg-white/30" />
          <span>100% ONLINE</span>
          <span className="w-1 h-1 rounded-full bg-white/30" />
          <span>EDO NORTH · NIGERIA</span>
        </div>
      </div>

      {/* Right form panel */}
      <div className="flex-1 flex items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-[452px]">
          {/* Mobile brand */}
          <div className="lg:hidden text-center mb-5">
            <Image src="/images/36.png" alt="Institute" width={48} height={48} className="mx-auto mb-2" />
          </div>

          <Link href="/abubakari-institute" className="inline-flex items-center gap-2 font-mono text-[11px] tracking-wide uppercase text-slate mb-7 hover:text-orange hover:gap-3 transition-all">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Institute
          </Link>

          <h2 className="font-display font-semibold text-[clamp(25px,3vw,30px)] leading-tight mb-1.5">
            {pane === "login" ? "Welcome back" : pane === "signup" ? "Create your account" : "Reset your password"}
          </h2>
          <p className="text-sm text-slate mb-7">
            {pane === "login"
              ? "Sign in to reach your student portal and this week's classes."
              : pane === "signup"
              ? "Join the next weekly cohort and start building a real skill."
              : "Enter the email on your account and we'll send you a reset link."}
          </p>

          {/* Tab switcher (login / signup) */}
          {pane !== "forgot" && (
            <div className="relative flex bg-white border border-ink/10 rounded-site p-1 mb-7">
              <span
                className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-ink rounded-[3px] transition-transform duration-500 ${
                  pane === "signup" ? "translate-x-full" : "translate-x-0"
                }`}
              />
              {(["login", "signup"] as const).map((p) => (
                <button
                  key={p}
                  onClick={() => { setPane(p); setSubmitted(false); }}
                  className={`relative z-10 flex-1 py-3 font-semibold text-sm transition-colors ${
                    pane === p ? "text-white" : "text-slate"
                  }`}
                >
                  {p === "login" ? "Log In" : "Sign Up"}
                </button>
              ))}
            </div>
          )}

          {/* Login form */}
          {pane === "login" && !submitted && (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
              <div>
                <label className="font-mono text-[10.5px] tracking-wider uppercase text-slate block mb-2">Email Address</label>
                <input type="email" placeholder="you@example.com" required className="w-full px-4 py-3 border border-ink/13 rounded-site text-[14.5px] outline-none focus:border-orange focus:ring-2 focus:ring-orange/10 transition-all bg-white" />
              </div>
              <div>
                <label className="font-mono text-[10.5px] tracking-wider uppercase text-slate block mb-2">Password</label>
                <div className="relative">
                  <input type={showPass ? "text" : "password"} placeholder="Enter your password" required className="w-full px-4 py-3 pr-11 border border-ink/13 rounded-site text-[14.5px] outline-none focus:border-orange focus:ring-2 focus:ring-orange/10 transition-all bg-white" />
                  <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-slate hover:text-orange transition-colors">
                    {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <label className="flex items-center gap-2 text-sm text-ink cursor-pointer">
                  <input type="checkbox" className="accent-orange" /> Keep me signed in
                </label>
                <button type="button" onClick={() => setPane("forgot")} className="text-sm font-medium text-forest hover:text-orange border-b border-transparent hover:border-orange transition-all">
                  Forgot password?
                </button>
              </div>
              <button type="submit" className="w-full bg-amber-500 text-white py-3.5 rounded-site font-semibold text-[14.5px] hover:bg-amber-600 transition-colors flex items-center justify-center gap-2">
                Log In <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}

          {/* Signup form */}
          {pane === "signup" && !submitted && (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-mono text-[10.5px] tracking-wider uppercase text-slate block mb-2">First Name</label>
                  <input type="text" placeholder="e.g. Ehizojie" required className="w-full px-4 py-3 border border-ink/13 rounded-site text-[14.5px] outline-none focus:border-orange transition-all bg-white" />
                </div>
                <div>
                  <label className="font-mono text-[10.5px] tracking-wider uppercase text-slate block mb-2">Last Name</label>
                  <input type="text" placeholder="e.g. Osayande" required className="w-full px-4 py-3 border border-ink/13 rounded-site text-[14.5px] outline-none focus:border-orange transition-all bg-white" />
                </div>
              </div>
              <div>
                <label className="font-mono text-[10.5px] tracking-wider uppercase text-slate block mb-2">Email Address</label>
                <input type="email" placeholder="you@example.com" required className="w-full px-4 py-3 border border-ink/13 rounded-site text-[14.5px] outline-none focus:border-orange transition-all bg-white" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-mono text-[10.5px] tracking-wider uppercase text-slate block mb-2">Phone Number</label>
                  <input type="tel" placeholder="+234" required className="w-full px-4 py-3 border border-ink/13 rounded-site text-[14.5px] outline-none focus:border-orange transition-all bg-white" />
                </div>
                <div>
                  <label className="font-mono text-[10.5px] tracking-wider uppercase text-slate block mb-2">LGA of Residence</label>
                  <select className="w-full px-4 py-3 border border-ink/13 rounded-site text-[14.5px] outline-none focus:border-orange transition-all bg-white">
                    <option>Select LGA</option>
                    {lgas.map((l) => <option key={l}>{l}</option>)}
                  </select>
                </div>
              </div>

              {/* School selector */}
              <div className="bg-white border border-ink/13 rounded-site p-4">
                <div className="mb-3">
                  <h4 className="font-semibold text-sm">Choose your school</h4>
                  <span className="font-mono text-[10px] text-slate">Pick one to start</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {programmes.map((p) => (
                    <button key={p} type="button" onClick={() => setSelectedSchool(p === selectedSchool ? "" : p)}
                      className={`flex items-center gap-1.5 text-xs px-3 py-2 rounded-site border transition-colors ${
                        selectedSchool === p
                          ? "bg-forest text-white border-forest"
                          : "bg-paper text-ink border-ink/15 hover:border-orange"
                      }`}
                    >
                      {selectedSchool === p && <Check className="w-3 h-3" />}
                      {p}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="font-mono text-[10.5px] tracking-wider uppercase text-slate block mb-2">Password</label>
                <div className="relative">
                  <input type={showPass ? "text" : "password"} placeholder="Create a password" required className="w-full px-4 py-3 pr-11 border border-ink/13 rounded-site text-[14.5px] outline-none focus:border-orange transition-all bg-white" />
                  <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-slate hover:text-orange transition-colors">
                    {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <label className="flex items-start gap-2 text-sm text-ink cursor-pointer">
                <input type="checkbox" required className="accent-orange mt-1" />
                <span>I agree to the <a href="#" className="text-forest font-medium hover:text-orange">terms</a> and <a href="#" className="text-forest font-medium hover:text-orange">privacy policy</a></span>
              </label>

              <button type="submit" className="w-full bg-amber-500 text-white py-3.5 rounded-site font-semibold text-[14.5px] hover:bg-amber-600 transition-colors flex items-center justify-center gap-2">
                Create Account & Join Cohort <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-start gap-2 text-xs text-slate">
                <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Your details are kept private and are never sold or shared with third parties.</span>
              </div>
            </form>
          )}

          {/* Forgot password */}
          {pane === "forgot" && (
            <div>
              <button onClick={() => setPane("login")} className="inline-flex items-center gap-2 font-mono text-[11px] tracking-wide uppercase text-slate mb-7 hover:text-orange hover:gap-3 transition-all">
                <ArrowLeft className="w-3.5 h-3.5" /> Back to log in
              </button>
              <div className="w-13 h-13 rounded-full bg-orange/12 text-orange flex items-center justify-center mb-5">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" /></svg>
              </div>
              <div>
                <label className="font-mono text-[10.5px] tracking-wider uppercase text-slate block mb-2">Email Address</label>
                <input type="email" placeholder="you@example.com" required className="w-full px-4 py-3 border border-ink/13 rounded-site text-[14.5px] outline-none focus:border-orange transition-all bg-white mb-4" />
              </div>
              <button onClick={() => setSubmitted(true)} className="w-full bg-amber-500 text-white py-3.5 rounded-site font-semibold text-[14.5px] hover:bg-amber-600 transition-colors flex items-center justify-center gap-2">
                Send Reset Link <ArrowRight className="w-4 h-4" />
              </button>
              <div className="flex items-start gap-2 text-xs text-slate mt-3">
                <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>The link expires in 30 minutes and only works once, for your security.</span>
              </div>
            </div>
          )}

          {/* Success state */}
          {submitted && (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="font-display font-semibold text-xl mb-2">
                {pane === "signup" ? "Account Created!" : pane === "forgot" ? "Check Your Inbox" : "Welcome Back!"}
              </h3>
              <p className="text-sm text-slate max-w-[320px] mx-auto mb-6">
                {pane === "signup"
                  ? "Welcome to the cohort. You'll be redirected to your dashboard."
                  : pane === "forgot"
                  ? "A reset link is on its way to your email."
                  : "Taking you to your dashboard."}
              </p>
              <Link
                href={pane === "signup" || pane === "login" ? "/student-dashboard" : "#"}
                className="inline-flex items-center gap-2 bg-orange text-white px-7 py-3 rounded-site font-semibold text-sm hover:bg-orange-dark transition-colors"
              >
                {pane === "forgot" ? "Back to Login" : "Go to Dashboard"} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}

          {/* Switch between login/signup */}
          {!submitted && pane !== "forgot" && (
            <p className="text-center text-[13.5px] text-slate mt-6">
              {pane === "login" ? (
                <>New to the Institute? <button onClick={() => setPane("signup")} className="font-semibold text-orange hover:underline">Create an account</button></>
              ) : (
                <>Already enrolled? <button onClick={() => setPane("login")} className="font-semibold text-orange hover:underline">Log in instead</button></>
              )}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
