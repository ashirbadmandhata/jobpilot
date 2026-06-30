import Link from "next/link";
import Logo from "../ui/Logo";

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-surface px-6 py-6 mt-auto" role="contentinfo">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3" id="footer-logo-compact">
            <Logo compact />
          </Link>
          <div className="flex flex-col gap-1">
            <span className="text-xs text-text-muted hidden sm:inline">© {new Date().getFullYear()}</span>
            <span className="text-xs text-text-muted">Designed &amp; built by <span className="font-semibold hover:text-accent">Ashirbad Mandhata</span></span>
            <span className="text-xs text-accent">Dedicated to Preeti ❤️</span>
          </div>
        </div>

        <nav aria-label="Footer navigation" className="flex items-center gap-4">
          <Link href="/find-jobs" className="text-sm text-text-secondary hover:text-accent transition-colors" id="footer-find-jobs">Find Jobs</Link>
          <Link href="/privacy" className="text-sm text-text-secondary hover:text-accent transition-colors" id="footer-privacy">Privacy</Link>
          <Link href="/terms" className="text-sm text-text-secondary hover:text-accent transition-colors" id="footer-terms">Terms</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/login" className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-2 text-xs font-semibold text-accent-foreground hover:bg-accent-dark transition" id="footer-cta">Start for free</Link>
          <div className="flex items-center gap-2 text-text-secondary">
            <a href="#" aria-label="Twitter" className="hover:text-accent transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.43 1s-4.06 2.36-6.37 2.52A4.5 4.5 0 0 0 12 6v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
            </a>
            <a href="#" aria-label="GitHub" className="hover:text-accent transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 15 3.08a13.38 13.38 0 0 0-9 0C2.27.65 1.09 1 1.09 1A5.07 5.07 0 0 0 1 4.77c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 6.5 16.13V20"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
