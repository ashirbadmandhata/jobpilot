"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "../ui/Logo";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-surface px-6 md:px-8 h-16 flex items-center justify-between" role="banner">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Link href="/" className="flex items-center gap-2.5 group" id="nav-logo">
          <Logo />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8">
        <Link
          href="/dashboard"
          className="text-sm font-medium text-text-secondary hover:text-accent transition-colors"
          id="nav-link-dashboard"
        >
          Dashboard
        </Link>
        <Link
          href="/find-jobs"
          className="text-sm font-medium text-text-secondary hover:text-accent transition-colors"
          id="nav-link-find-jobs"
        >
          Find Jobs
        </Link>
        <Link
          href="/profile"
          className="text-sm font-medium text-text-secondary hover:text-accent transition-colors"
          id="nav-link-profile"
        >
          Profile
        </Link>
      </nav>

      {/* Desktop Button */}
      <div className="hidden md:block">
        <Link
          href="/login"
          className="inline-flex h-9 items-center justify-center rounded-full bg-accent px-5 text-xs font-semibold text-accent-foreground hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/20 active:scale-[0.98] transition-all"
          id="nav-btn-start-free"
        >
          Start for free
        </Link>
      </div>

      {/* Mobile Hamburger Button */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-text-secondary hover:text-text-primary focus:outline-none"
          aria-expanded={isOpen}
          aria-label="Toggle menu"
          id="nav-mobile-toggle"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-surface border-b border-border shadow-xl flex flex-col p-6 gap-4 md:hidden z-50 animate-in fade-in slide-in-from-top-5 duration-200">
          <Link
            href="/dashboard"
            onClick={() => setIsOpen(false)}
            className="text-sm font-semibold text-text-dark hover:text-accent py-2 transition-colors border-b border-border-light"
            id="mobile-nav-link-dashboard"
          >
            Dashboard
          </Link>
          <Link
            href="/find-jobs"
            onClick={() => setIsOpen(false)}
            className="text-sm font-semibold text-text-dark hover:text-accent py-2 transition-colors border-b border-border-light"
            id="mobile-nav-link-find-jobs"
          >
            Find Jobs
          </Link>
          <Link
            href="/profile"
            onClick={() => setIsOpen(false)}
            className="text-sm font-semibold text-text-dark hover:text-accent py-2 transition-colors border-b border-border-light"
            id="mobile-nav-link-profile"
          >
            Profile
          </Link>
          <Link
            href="/login"
            onClick={() => setIsOpen(false)}
            className="inline-flex h-10 items-center justify-center rounded-full bg-accent px-5 text-sm font-semibold text-accent-foreground hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/20 active:scale-[0.98] transition-all text-center mt-2"
            id="mobile-nav-btn-start-free"
          >
            Start for free
          </Link>
        </div>
      )}
    </header>
  );
}
