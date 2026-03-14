"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen w-full bg-[#000000] font-mono antialiased">
        <div className="flex min-h-screen w-full items-center justify-center">
          <div className="flex flex-col items-center gap-4 text-center">
            <p className="text-xs text-zinc-500">ERROR</p>
            <button
              type="button"
              onClick={() => reset()}
              className="text-xs text-zinc-500 transition-colors duration-300 hover:text-[#0099FF] focus:outline-none focus:text-[#0099FF]"
            >
              [ retry ]
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
