import type { HTMLAttributes, ReactNode } from "react";

export interface ClayCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

/** Uses .card-clay from ui.css for clay shadow + hover */
export function ClayCard({ children, className = "", ...props }: ClayCardProps) {
  return (
    <div className={`card-clay ${className}`} {...props}>
      {children}
    </div>
  );
}
