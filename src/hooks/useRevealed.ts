"use client";

import { useEffect, useRef, useState } from "react";

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export function useRevealed<T extends HTMLElement>(
  options?: IntersectionObserverInit
) {
  const ref = useRef<T>(null);
  const [revealed, setRevealed] = useState(prefersReducedMotion);

  useEffect(() => {
    if (revealed) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -12% 0px", ...options }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [revealed]);

  return { ref, revealed };
}