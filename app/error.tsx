"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[#000000] font-mono">
      <div className="flex flex-col items-center gap-4 text-center">
        <p className="text-xs text-zinc-500">ERROR</p>
        <button
          type="button"
          onClick={reset}
          className="text-xs text-zinc-500 transition-colors duration-300 hover:text-[#0099FF] focus:outline-none focus:text-[#0099FF]"
        >
          [ retry ]
        </button>
      </div>
    </div>
  );
}
