import { Link, useLocation } from "wouter";
import { Disc3, Settings, ClipboardList } from "lucide-react";
import { motion } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function Navbar() {
  const [location] = useLocation();

  const links = [
    { href: "/", label: "Intake Form", icon: ClipboardList },
    { href: "/settings", label: "Settings", icon: Settings },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur-xl supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-pink-500 shadow-lg shadow-violet-200 text-white">
              <Disc3 className="h-6 w-6" />
            </div>
            <span className="font-display text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-pink-500">
              Bohemia Label Services
            </span>
          </div>

          <nav className="flex items-center gap-1 sm:gap-2">
            {links.map((link) => {
              const isActive = location === link.href;
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "group relative flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200",
                    isActive
                      ? "bg-gradient-to-r from-violet-500 to-pink-500 text-white shadow-md shadow-violet-200 hover:opacity-90"
                      : "text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500 to-pink-500 -z-10"
                      transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                    />
                  )}
                  <Icon className="h-4 w-4 relative z-10" />
                  <span className="hidden sm:inline relative z-10">{link.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
