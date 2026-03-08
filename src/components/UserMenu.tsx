"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

export default function UserMenu() {
  const { user, loading, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  if (loading) {
    return <div className="w-9 h-9 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse" />;
  }

  if (!user) {
    return (
      <Link
        href="/login"
        className="inline-flex items-center gap-1.5 rounded-full bg-gray-900 dark:bg-white px-4 py-1.5 text-[13px] font-medium text-white dark:text-gray-900 hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors"
      >
        Войти
      </Link>
    );
  }

  const initials = user.first_name.charAt(0).toUpperCase();
  const displayName = user.username
    ? `@${user.username}`
    : [user.first_name, user.last_name].filter(Boolean).join(" ");

  return (
    <div ref={menuRef} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors p-1 pr-3"
      >
        {user.photo_url ? (
          <img
            src={user.photo_url}
            alt={user.first_name}
            className="w-8 h-8 rounded-full object-cover"
          />
        ) : (
          <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center text-sm font-medium">
            {initials}
          </div>
        )}
        <span className="hidden sm:block text-[13px] text-gray-700 dark:text-gray-300 max-w-[120px] truncate">
          {displayName}
        </span>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-52 rounded-xl bg-white dark:bg-[#1a2e1a] border border-gray-200 dark:border-gray-700 shadow-lg py-1 z-50">
          <div className="px-4 py-2 border-b border-gray-100 dark:border-gray-700">
            <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
              {user.first_name} {user.last_name || ""}
            </p>
            {user.username && (
              <p className="text-xs text-gray-500 dark:text-gray-400">
                @{user.username}
              </p>
            )}
          </div>
          <button
            onClick={async () => {
              setOpen(false);
              await logout();
            }}
            className="w-full text-left px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            Выйти
          </button>
        </div>
      )}
    </div>
  );
}
