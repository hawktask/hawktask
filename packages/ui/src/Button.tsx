import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  children: ReactNode;
  className?: string;
}

export function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const base = "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50";
  const variants = {
    primary: "bg-primary text-white hover:opacity-90 focus:ring-primary",
    secondary: "border border-neutral-300 bg-transparent text-neutral-700 hover:bg-neutral-100 focus:ring-neutral-400",
    ghost: "bg-transparent text-neutral-700 hover:bg-neutral-100 focus:ring-neutral-300",
  };
  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
