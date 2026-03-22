import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface BeautifulInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  colSpan?: 1 | 2 | 3;
}

export const BeautifulInput = React.forwardRef<HTMLInputElement, BeautifulInputProps>(
  ({ label, error, colSpan = 1, className, ...props }, ref) => {
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
        <input
          ref={ref}
          {...props}
          className={cn(
            "w-full h-11 px-5 rounded-full text-sm font-medium transition-all duration-200",
            "bg-gray-50 border-2 border-gray-200 text-gray-900 placeholder:text-gray-400",
            "hover:bg-gray-100/60",
            "focus:bg-white focus:outline-none focus:border-violet-400 focus:ring-4 focus:ring-violet-400/10",
            error && "border-red-300 focus:border-red-400 focus:ring-red-400/10 bg-red-50/30"
          )}
        />
        {error && (
          <span className="text-xs font-medium text-red-500 pl-4 animate-in fade-in slide-in-from-top-1">
            {error}
          </span>
        )}
      </div>
    );
  }
);

BeautifulInput.displayName = "BeautifulInput";
