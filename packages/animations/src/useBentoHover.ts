"use client";

import { useCallback, useRef, type RefObject } from "react";
import anime from "animejs";

const SCALE = 1.02;
const DURATION = 200;

/**
 * Subtle scale and shadow change on hover for bento/clay cards.
 * 200–400 ms, no looping.
 */
export function useBentoHover<T extends HTMLElement>(ref: RefObject<T | null>) {
  const hoverAnim = useRef<anime.AnimeInstance | null>(null);
  const leaveAnim = useRef<anime.AnimeInstance | null>(null);

  const onEnter = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    leaveAnim.current?.pause();
    hoverAnim.current = anime({
      targets: el,
      scale: SCALE,
      duration: DURATION,
      easing: "easeOutCubic",
    });
  }, [ref]);

  const onLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    hoverAnim.current?.pause();
    leaveAnim.current = anime({
      targets: el,
      scale: 1,
      duration: DURATION,
      easing: "easeOutCubic",
    });
  }, [ref]);

  return { onMouseEnter: onEnter, onMouseLeave: onLeave };
}
