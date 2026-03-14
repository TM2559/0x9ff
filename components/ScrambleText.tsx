"use client";

import { useState, useCallback, useRef, useEffect } from "react";

const HEX_CHARS = "0123456789ABCDEF";

function randomHexChar(): string {
  return HEX_CHARS[Math.floor(Math.random() * HEX_CHARS.length)];
}

interface ScrambleTextProps {
  text: string;
  className?: string;
  scrambleIntervalMs?: number;
  resolveIntervalMs?: number;
  /** Optional: control scramble from parent (e.g. wrapper hover) */
  active?: boolean;
}

export function ScrambleText({
  text,
  className = "",
  scrambleIntervalMs = 50,
  resolveIntervalMs = 80,
  active: controlledActive,
}: ScrambleTextProps) {
  const [display, setDisplay] = useState(text);
  const [isHovered, setIsHovered] = useState(false);
  const scrambleRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const resolveRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const active = controlledActive !== undefined ? controlledActive : isHovered;

  const stopScramble = useCallback(() => {
    if (scrambleRef.current) {
      clearInterval(scrambleRef.current);
      scrambleRef.current = null;
    }
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

  const startScramble = useCallback(() => {
    if (resolveRef.current) {
      clearInterval(resolveRef.current);
      resolveRef.current = null;
    }
    scrambleRef.current = setInterval(() => {
      setDisplay((prev) =>
        prev
          .split("")
          .map((char) => (char === " " || char === "." ? char : randomHexChar()))
          .join("")
      );
    }, scrambleIntervalMs);
  }, [scrambleIntervalMs]);

  useEffect(() => {
    if (active) {
      startScramble();
      return () => {
        stopScramble();
      };
    } else {
      stopScramble();
      resolveToOriginal();
    }
  }, [active]); // eslint-disable-line react-hooks/exhaustive-deps -- only react to active

  const handleMouseEnter = useCallback(() => {
    if (controlledActive === undefined) setIsHovered(true);
  }, [controlledActive]);

  const handleMouseLeave = useCallback(() => {
    if (controlledActive === undefined) setIsHovered(false);
  }, [controlledActive]);

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
