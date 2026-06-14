"use client";

import Link from "next/link";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
}

export default function NavLink({
  href,
  children,
  isActive = false,
  onClick,
}: NavLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`relative px-3 py-3 text-sm font-medium transition-colors duration-200
        ${
          isActive
            ? "text-blue-600 dark:text-blue-400"
            : "text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
        }`}
    >
      {children}
    </Link>
  );
}