"use client";

import { useEffect, useRef, type RefObject } from "react";
import anime from "animejs";

const DEFAULT_DURATION = 320;
const DEFAULT_OFFSET = 0.1;

/**
 * Fade-in animation when the element enters the viewport.
 * Motion: short and subtle (200–400 ms). No constant looping.
 */
export function useFadeInOnScroll<T extends HTMLElement>(
  ref: RefObject<T | null>,
  options?: {
    duration?: number;
    threshold?: number;
    once?: boolean;
  }
) {
  const { duration = DEFAULT_DURATION, threshold = DEFAULT_OFFSET, once = true } = options ?? {};
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || (once && hasAnimated.current)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          if (once && hasAnimated.current) continue;
          hasAnimated.current = true;
          anime({
            targets: el,
            opacity: [0, 1],
            translateY: [12, 0],
            duration,
            easing: "easeOutCubic",
          });
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, duration, threshold, once]);
}
