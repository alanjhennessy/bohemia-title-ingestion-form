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
        <label className="text-sm font-semibold text-gray-500 pl-4">
          {label}
        </label>
        <div className="relative">
          <select
            ref={ref}
            {...props}
            className={cn(
              "w-full h-11 px-5 pr-10 rounded-full text-sm font-medium transition-all duration-200 appearance-none",
              "bg-gray-50 border-2 border-gray-200 text-gray-900",
              "hover:bg-gray-100/60",
              "focus:bg-white focus:outline-none focus:border-violet-400 focus:ring-4 focus:ring-violet-400/10",
              error && "border-red-300 focus:border-red-400 focus:ring-red-400/10 bg-red-50/30",
              !props.value && "text-gray-400"
            )}
          >
            <option value="">Select a language…</option>
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
            <svg
              className="w-4 h-4 text-gray-400"
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
          <span className="text-xs font-medium text-red-500 pl-4 animate-in fade-in slide-in-from-top-1">
            {error}
          </span>
        )}
      </div>
    );
  }
);

BeautifulSelect.displayName = "BeautifulSelect";
