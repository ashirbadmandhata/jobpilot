import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section className="landing-hero-glow relative w-full pt-20 pb-12 px-6 flex flex-col items-center text-center overflow-hidden border-b border-border">
      {/* Decorative Grid Overlay */}
      <div aria-hidden="true" className="landing-grid absolute inset-0 opacity-[0.15] pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-text-primary max-w-3xl leading-[1.1] md:leading-[1.1]">
          Job hunting is hard.
          <span className="block mt-1 text-accent">Your tools shouldn't be.</span>
        </h1>

        <p className="text-base md:text-lg text-text-secondary max-w-2xl font-medium leading-relaxed mt-2">
          Stop applying blind. JobPilot finds the jobs, researches the companies, and
          gives you everything you need to stand out.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 w-full sm:w-auto">
          <Link
            href="/login"
            className="landing-button-primary w-full sm:w-auto gap-2 flex items-center"
            id="hero-btn-get-started"
            aria-label="Get started with JobPilot"
          >
            Get Started
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
          <Link
            href="/login"
            className="landing-button-secondary w-full sm:w-auto"
            id="hero-btn-find-match"
            aria-label="Find your first match"
          >
            Find Your First Match
          </Link>
        </div>

        {/* Browser Demo Frame */}
        <div className="relative mt-16 w-full max-w-5xl mx-auto z-20">
          <div aria-label="Dashboard preview" className="landing-browser-frame landing-browser-shadow rounded-2xl overflow-hidden bg-surface">
            {/* Browser Header Bar */}
            <div className="h-11 bg-surface-secondary border-b border-border flex items-center px-4 gap-2 relative">
              {/* Window dots */}
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#EF4444] opacity-80" />
                <div className="w-3 h-3 rounded-full bg-[#F59E0B] opacity-80" />
                <div className="w-3 h-3 rounded-full bg-[#10B981] opacity-80" />
              </div>
              {/* Address bar */}
              <div className="absolute left-1/2 transform -translate-x-1/2 bg-surface border border-border-light rounded-md h-7 px-8 text-xs text-text-muted flex items-center justify-center gap-1.5 w-60 sm:w-96 select-none font-medium">
                <svg
                  className="w-3.5 h-3.5 text-text-muted"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                jobpilot.ai/dashboard
              </div>
            </div>
            {/* Screenshot Content */}
            <div className="relative aspect-video w-full">
              <Image
                src="/images/dashboard-demo.png"
                alt="JobPilot Dashboard Preview"
                fill
                priority
                className="object-cover"
                sizes="(max-w-1000px) 100vw, 1000px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
