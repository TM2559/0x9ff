"use client";

import { useState } from "react";
import { ScrambleText } from "@/components/ScrambleText";

const EMAIL = "mailto:root@0x9ff.dev";

export default function SignaturePage() {
  const [centerHovered, setCenterHovered] = useState(false);

  return (
    <main className="relative h-screen min-h-[100vh] w-full bg-[#000000] overflow-hidden">
      {/* Center: main identity — hover only on the title area */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1
          className={`inline-block cursor-default px-2 py-1 text-5xl font-mono tracking-tight transition-colors duration-300 sm:text-6xl ${
            centerHovered ? "text-[#0099FF]" : "text-zinc-500"
          }`}
          onMouseEnter={() => setCenterHovered(true)}
          onMouseLeave={() => setCenterHovered(false)}
        >
          <ScrambleText
            text="0x9FF.dev"
            className="text-5xl font-mono tracking-tight sm:text-6xl"
            scrambleIntervalMs={40}
            resolveIntervalMs={60}
            active={centerHovered}
          />
        </h1>
      </div>

      {/* Bottom Left: system metadata */}
      <div className="absolute bottom-6 left-6 text-xs text-zinc-500 font-mono tracking-wide">
        <div>STATUS: OPERATIONAL</div>
        <div>LOC: 49.025° N, 17.647° E</div>
      </div>

      {/* Bottom Right: links */}
      <nav
        className="absolute bottom-6 right-6 flex flex-col items-end gap-1 text-xs font-mono tracking-wide text-zinc-500"
        aria-label="Links"
      >
        <a
          href={EMAIL}
          className="transition-colors duration-300 hover:text-[#0099FF] focus:text-[#0099FF] focus:outline-none"
        >
          [ email ]
        </a>
      </nav>
    </main>
  );
}
