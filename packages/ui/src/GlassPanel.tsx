import type { HTMLAttributes, ReactNode } from "react";

export interface GlassPanelProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export function GlassPanel({ children, className = "", ...props }: GlassPanelProps) {
  return (
    <div
      className={`rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
