import { forwardRef } from "react";
import type { HTMLAttributes, ReactNode } from "react";

export interface BentoCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export const BentoCard = forwardRef<HTMLDivElement, BentoCardProps>(
  function BentoCard({ children, className = "", ...props }, ref) {
    return (
      <div
        ref={ref}
        className={`rounded-2xl border border-neutral-200/80 bg-card p-6 transition-shadow duration-200 ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);
