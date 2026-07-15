"use client";

import { useEffect, useState } from "react";

export function Preloader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const onLoad = () => {
      setHidden(true);
      document.body.classList.remove("is-loading");
    };

    if (document.readyState === "complete") {
      onLoad();
    } else {
      window.addEventListener("load", onLoad);
      return () => window.removeEventListener("load", onLoad);
    }
  }, []);

  return (
    <div
      id="preloader"
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-all duration-500 ${
        hidden ? "opacity-0 invisible pointer-events-none" : ""
      }`}
    >
      <div className="flex flex-col items-center text-center">
        <div className="w-14 h-14 rounded-full border border-ink flex items-center justify-center font-display font-semibold text-lg text-ink mb-5 animate-pulse">
          AA
        </div>
        <div className="font-display font-semibold text-2xl text-ink">
          Comr. Aruna Abubakari
        </div>
        <div className="font-mono text-[11px] tracking-[0.14em] text-orange mt-3">
          EDO NORTH · 2027
        </div>
      </div>
    </div>
  );
}