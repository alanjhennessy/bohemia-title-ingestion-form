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
        <label className="text-sm font-semibold text-foreground/80 ml-1">
          {label}
        </label>
        <input
          ref={ref}
          {...props}
          className={cn(
            "w-full px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200",
            "bg-muted/50 border-2 border-transparent text-foreground placeholder:text-muted-foreground/60",
            "hover:bg-muted/80",
            "focus:bg-background focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10",
            error && "border-destructive/50 focus:border-destructive focus:ring-destructive/10 bg-destructive/5"
          )}
        />
        {error && (
          <span className="text-xs font-medium text-destructive ml-1 animate-in fade-in slide-in-from-top-1">
            {error}
          </span>
        )}
      </div>
    );
  }
);

BeautifulInput.displayName = "BeautifulInput";
