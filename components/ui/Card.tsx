import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`bg-white dark:bg-slate-900 rounded-xl border border-slate-200
        dark:border-slate-800 shadow-sm hover:shadow-lg transition-all duration-300
        transform hover:-translate-y-1 ${className}`}
    >
      {children}
    </div>
  );
}