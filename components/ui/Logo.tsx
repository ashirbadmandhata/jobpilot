import Link from "next/link";

type LogoProps = {
  compact?: boolean;
  className?: string;
};

export function Logo({ compact = false, className = "" }: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <span className="logo-badge inline-flex items-center justify-center">
        <svg viewBox="0 0 48 48" width="28" height="28" aria-hidden="true" focusable="false">
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00bc7d" />
              <stop offset="100%" stopColor="#009966" />
            </linearGradient>
          </defs>
          <circle cx="24" cy="24" r="22" fill="url(#logoGradient)" />
          <path d="M33 14L17 22l6 2 2 6 8-16z" fill="rgba(255,255,255,0.95)" />
        </svg>
      </span>
      {!compact && (
        <span className="text-xl font-extrabold text-text-darkest leading-none tracking-tight">JobPilot</span>
      )}
    </div>
  );
}

export default Logo;
