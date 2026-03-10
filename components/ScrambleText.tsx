"use client";

import { useState, useCallback, useRef } from "react";

const HEX_CHARS = "0123456789ABCDEF";

function randomHexChar(): string {
  return HEX_CHARS[Math.floor(Math.random() * HEX_CHARS.length)];
}

interface ScrambleTextProps {
  text: string;
  className?: string;
  scrambleIntervalMs?: number;
  resolveIntervalMs?: number;
}

export function ScrambleText({
  text,
  className = "",
  scrambleIntervalMs = 50,
  resolveIntervalMs = 80,
}: ScrambleTextProps) {
  const [display, setDisplay] = useState(text);
  const scrambleRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const resolveRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isScramblingRef = useRef(false);

  const stopScramble = useCallback(() => {
    if (scrambleRef.current) {
      clearInterval(scrambleRef.current);
      scrambleRef.current = null;
    }
    isScramblingRef.current = false;
  }, []);

  const resolveToOriginal = useCallback(() => {
    if (resolveRef.current) clearInterval(resolveRef.current);
    let index = 0;
    resolveRef.current = setInterval(() => {
      setDisplay((prev) => {
        if (index >= text.length) {
          if (resolveRef.current) {
            clearInterval(resolveRef.current);
            resolveRef.current = null;
          }
          return text;
        }
        const next = text.slice(0, index + 1) + prev.slice(index + 1);
        index += 1;
        return next;
      });
    }, resolveIntervalMs);
  }, [text, resolveIntervalMs]);

  const handleMouseEnter = useCallback(() => {
    if (resolveRef.current) {
      clearInterval(resolveRef.current);
      resolveRef.current = null;
    }
    isScramblingRef.current = true;
    scrambleRef.current = setInterval(() => {
      setDisplay((prev) =>
        prev
          .split("")
          .map((char, i) => (char === " " || char === "." ? char : randomHexChar()))
          .join("")
      );
    }, scrambleIntervalMs);
  }, [scrambleIntervalMs]);

  const handleMouseLeave = useCallback(() => {
    stopScramble();
    resolveToOriginal();
  }, [stopScramble, resolveToOriginal]);

  return (
    <span
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="text"
    >
      {display}
    </span>
  );
}
