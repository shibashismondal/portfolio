import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export default function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium
        bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300
        transition-colors duration-200 ${className}`}
    >
      {children}
    </span>
  );
}