import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[#000000] font-mono">
      <div className="flex flex-col items-center gap-4 text-center">
        <p className="text-xs text-zinc-500">404</p>
        <Link
          href="/"
          className="text-xs text-zinc-500 transition-colors duration-300 hover:text-[#0099FF] focus:outline-none focus:text-[#0099FF]"
        >
          [ home ]
        </Link>
      </div>
    </div>
  );
}
