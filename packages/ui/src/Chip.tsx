import type { HTMLAttributes, ReactNode } from "react";

export interface ChipProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "soft" | "neutral";
  children: ReactNode;
  className?: string;
}

export function Chip({
  variant = "soft",
  children,
  className = "",
  ...props
}: ChipProps) {
  const variants = {
    soft: "bg-primary-soft text-primary",
    neutral: "bg-neutral-100 text-neutral-700",
  };
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
