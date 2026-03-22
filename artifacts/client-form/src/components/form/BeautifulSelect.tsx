import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface SelectOption {
  value: string;
  label: string;
}

export interface BeautifulSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: SelectOption[];
  error?: string;
  colSpan?: 1 | 2 | 3;
}

export const BeautifulSelect = React.forwardRef<HTMLSelectElement, BeautifulSelectProps>(
  ({ label, options, error, colSpan = 1, className, ...props }, ref) => {
    return (
      <div
        className={cn(
          "flex flex-col gap-1.5",
          colSpan === 2 && "sm:col-span-2",
          colSpan === 3 && "sm:col-span-2 lg:col-span-3",
          className
        )}
      >
        <label className="text-sm font-semibold text-foreground/80 ml-1">
          {label}
        </label>
        <div className="relative">
          <select
            ref={ref}
            {...props}
            className={cn(
              "w-full px-4 py-3 pr-10 rounded-xl text-sm font-medium transition-all duration-200 appearance-none",
              "bg-muted/50 border-2 border-transparent text-foreground",
              "hover:bg-muted/80",
              "focus:bg-background focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10",
              error && "border-destructive/50 focus:border-destructive focus:ring-destructive/10 bg-destructive/5",
              !props.value && "text-muted-foreground/60"
            )}
          >
            <option value="">Select a language…</option>
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
            <svg
              className="w-4 h-4 text-muted-foreground"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        {error && (
          <span className="text-xs font-medium text-destructive ml-1 animate-in fade-in slide-in-from-top-1">
            {error}
          </span>
        )}
      </div>
    );
  }
);

BeautifulSelect.displayName = "BeautifulSelect";
