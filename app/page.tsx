"use client";

import { ScrambleText } from "@/components/ScrambleText";

const GITHUB_URL = "https://github.com";
const X_URL = "https://x.com";
const EMAIL = "mailto:hello@0x9ff.dev";

export default function SignaturePage() {
  return (
    <main className="relative h-screen min-h-[100vh] w-full bg-[#000000] overflow-hidden">
      {/* Center: main identity */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-zinc-500 transition-colors duration-150 hover:text-white">
          <ScrambleText
            text="0x9FF.dev"
            className="text-5xl font-mono tracking-tight sm:text-6xl"
            scrambleIntervalMs={40}
            resolveIntervalMs={60}
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
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors duration-150 hover:text-white focus:text-white focus:outline-none"
        >
          [ github ]
        </a>
        <a
          href={X_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors duration-150 hover:text-white focus:text-white focus:outline-none"
        >
          [ x.com ]
        </a>
        <a
          href={EMAIL}
          className="transition-colors duration-150 hover:text-white focus:text-white focus:outline-none"
        >
          [ email ]
        </a>
      </nav>
    </main>
  );
}
