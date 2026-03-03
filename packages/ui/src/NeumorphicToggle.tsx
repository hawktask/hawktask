"use client";

import { useId } from "react";
import type { InputHTMLAttributes } from "react";

export interface NeumorphicToggleProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
}

export function NeumorphicToggle({
  label,
  className = "",
  id,
  ...props
}: NeumorphicToggleProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  return (
    <label
      htmlFor={inputId}
      className={`inline-flex cursor-pointer items-center gap-3 ${className}`}
    >
      <span
        className="relative inline-block h-8 w-14 shrink-0 rounded-xl bg-neutral-100 transition-shadow duration-200"
        style={{ boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.06)" }}
      >
        <input
          type="checkbox"
          id={inputId}
          className="peer sr-only"
          {...props}
        />
        <span
          className="absolute left-1 top-1 h-6 w-6 rounded-lg bg-white shadow-[0_2px_4px_rgba(0,0,0,0.1)] transition-all duration-200 peer-checked:left-7 peer-checked:bg-primary peer-focus-visible:ring-2 peer-focus-visible:ring-primary peer-focus-visible:ring-offset-2"
        />
      </span>
      {label && (
        <span className="text-sm font-medium text-neutral-700">{label}</span>
      )}
    </label>
  );
}
