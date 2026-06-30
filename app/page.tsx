import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/homepage/Hero";
import { Features } from "@/components/homepage/Features";
import { HowItWorks } from "@/components/homepage/HowItWorks";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />

      <main className="flex-grow flex flex-col">
        {/* Top Hero Section */}
        <Hero />

        {/* Section A: Manage Your Job Search With Ease */}
        <Features />

        {/* Section B: Apply With More Confidence, Every Time */}
        <HowItWorks />

        {/* Success Stories Testimonial Section */}
        <section className="w-full py-20 px-6 bg-surface-secondary border-b border-border flex flex-col items-center justify-center text-center">
          <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
            <span className="text-xs font-bold tracking-wider text-accent uppercase" id="testimonial-section-title">
              Success Stories
            </span>
            <blockquote className="text-xl md:text-2xl font-semibold text-text-primary leading-relaxed max-w-3xl">
              “I used to spend my evenings copy-pasting resumes. Now I open my dashboard
              to see interviews waiting. It feels like cheating. Had 3 offers on the table
              simultaneously.”
            </blockquote>
            <div className="flex items-center gap-3 mt-2 text-left">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-border">
                <Image
                  src="/images/user-icon.png"
                  alt="Tom Wilson"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-bold text-text-primary">Tom Wilson</p>
                <p className="text-xs font-medium text-text-secondary">Junior Developer</p>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA Hero Section */}
        <section className="relative w-full py-24 px-6 bg-gradient-to-b from-surface to-accent-muted/30 border-b border-border text-center overflow-hidden">
          {/* Grid Overlay */}
          <div className="landing-grid absolute inset-0 opacity-[0.08] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-6">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text-primary leading-tight">
              Your next job search can feel <span className="block mt-1 text-accent">a lot less overwhelming</span>
            </h2>
            <p className="text-sm md:text-base text-text-secondary max-w-xl font-medium leading-relaxed">
              Set up your profile, upload your resume, and start finding matches in minutes.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-2 w-full sm:w-auto">
              <Link
                href="/login"
                className="landing-button-primary w-full sm:w-auto gap-2 flex items-center"
                id="bottom-cta-btn-get-started"
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
                className="landing-button-secondary w-full sm:w-auto bg-surface"
                id="bottom-cta-btn-find-match"
              >
                Find Your First Match
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
