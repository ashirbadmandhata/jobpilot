"use client";

import { useState, useEffect } from "react";

type StepItem = {
  id: string;
  title: string;
  description: string;
  logs: LogLine[];
};

type LogLine = {
  lineNum: number;
  tag: "SYSTEM" | "SCAN" | "ACTION" | "SUCCESS" | "FILTER" | "MATCH" | "SUB";
  text: string;
};

const STEPS_DATA: StepItem[] = [
  {
    id: "match-score",
    title: "Understand your match score",
    description:
      "See how your profile lines up with each role before you apply. Get a clear breakdown of what fits and what's missing.",
    logs: [
      { lineNum: 1, tag: "SYSTEM", text: "Initializing JobPilot Matcher..." },
      { lineNum: 2, tag: "SCAN", text: "Comparing profile skills against job requirements" },
      { lineNum: 3, tag: "SUB", text: "Found 8 matching skills: React, TypeScript, Next.js..." },
      { lineNum: 4, tag: "SUB", text: "Missing 2 skills: Docker, AWS" },
      { lineNum: 5, tag: "MATCH", text: "Score calculated: 88% (High Match)" },
    ],
  },
  {
    id: "ai-matching",
    title: "AI-Powered Job Matching",
    description:
      "Stop guessing which jobs are worth applying to. JobPilot scores every role against your actual skills so you focus on the ones that matter.",
    logs: [
      { lineNum: 1, tag: "SYSTEM", text: "Launching Adzuna Job Scraper..." },
      { lineNum: 2, tag: "SCAN", text: "Querying category: it-jobs for \"Frontend Developer\"" },
      { lineNum: 3, tag: "SYSTEM", text: "Found 14 matching roles in search area" },
      { lineNum: 4, tag: "FILTER", text: "Filtered out 3 roles (below salary cap)" },
      { lineNum: 5, tag: "SUCCESS", text: "Saved 11 strong matches to database" },
    ],
  },
  {
    id: "right-roles",
    title: "Focus on the right roles",
    description:
      "Filter out low fit jobs and stay on the ones that actually matter. Spend less time sorting and more time applying.",
    logs: [
      { lineNum: 1, tag: "SYSTEM", text: "Fetching user preferences from profiles table" },
      { lineNum: 2, tag: "FILTER", text: "Applying MATCH_THRESHOLD: 70%" },
      { lineNum: 3, tag: "SCAN", text: "Scoring Stripe Frontend Role..." },
      { lineNum: 4, tag: "ACTION", text: "Tailoring resume for Stripe (Frontend)" },
      { lineNum: 5, tag: "ACTION", text: "Generating custom cover letter..." },
    ],
  },
];

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState<string>("match-score");
  const [visibleLines, setVisibleLines] = useState<number>(0);

  const activeData = STEPS_DATA.find((s) => s.id === activeStep) || STEPS_DATA[0];

  // Simple typing/progression animation for the terminal lines
  useEffect(() => {
    setVisibleLines(0);
    const interval = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev < activeData.logs.length) {
          return prev + 1;
        }
        clearInterval(interval);
        return prev;
      });
    }, 450);

    return () => clearInterval(interval);
  }, [activeStep]);

  return (
    <section className="w-full py-20 px-6 bg-surface border-b border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Column: Coded Terminal Component */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <div className="w-full max-w-[500px] bg-[#0B0F19] rounded-2xl border border-[#1E293B] shadow-2xl overflow-hidden font-mono text-left transition-transform duration-500 hover:scale-[1.01]">
            {/* Terminal Title Bar */}
            <div className="bg-[#161B26] px-4 py-3 flex items-center gap-2 border-b border-[#1E293B] relative select-none">
              {/* Dots */}
              <div className="flex gap-1.5 z-10">
                <div className="w-3 h-3 rounded-full bg-[#EF4444] opacity-80 hover:opacity-100 transition-opacity" />
                <div className="w-3 h-3 rounded-full bg-[#F59E0B] opacity-80 hover:opacity-100 transition-opacity" />
                <div className="w-3 h-3 rounded-full bg-[#10B981] opacity-80 hover:opacity-100 transition-opacity" />
              </div>
              {/* Filename */}
              <div className="absolute inset-0 flex items-center justify-center text-xs text-[#94A3B8] font-medium">
                agent_log.ts
              </div>
            </div>

            {/* Terminal Window Content */}
            <div className="p-6 flex flex-col gap-3 min-h-[220px] text-xs leading-relaxed text-[#E2E8F0] overflow-y-auto">
              {activeData.logs.map((line, idx) => {
                const isVisible = idx < visibleLines;
                return (
                  <div
                    key={line.lineNum}
                    className={`flex items-start gap-4 transition-all duration-300 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
                    }`}
                  >
                    {/* Line Number */}
                    <span className="text-[#475569] text-right select-none w-4">{line.lineNum}</span>

                    {/* Tag & Text */}
                    <div className="flex-1 flex gap-2 items-baseline">
                      {line.tag === "SYSTEM" && (
                        <span className="text-[#38BDF8] font-semibold select-none">[SYSTEM]</span>
                      )}
                      {line.tag === "SCAN" && (
                        <span className="text-[#C084FC] font-semibold select-none">[SCAN]</span>
                      )}
                      {line.tag === "ACTION" && (
                        <span className="text-[#34D399] font-semibold select-none">[ACTION]</span>
                      )}
                      {line.tag === "SUCCESS" && (
                        <span className="text-[#4ADE80] font-semibold select-none">[SUCCESS]</span>
                      )}
                      {line.tag === "FILTER" && (
                        <span className="text-[#FBBF24] font-semibold select-none">[FILTER]</span>
                      )}
                      {line.tag === "MATCH" && (
                        <span className="text-[#2DD4BF] font-semibold select-none">[MATCH]</span>
                      )}
                      {line.tag === "SUB" && (
                        <span className="text-[#94A3B8] text-opacity-80 select-none ml-2">↳</span>
                      )}

                      <span className={line.tag === "SUB" ? "text-[#94A3B8]" : "text-[#F8FAFC]"}>
                        {line.text}
                        {idx === visibleLines - 1 && visibleLines === activeData.logs.length && (
                          <span className="inline-block w-1.5 h-3.5 ml-1 bg-[#38BDF8] animate-pulse" />
                        )}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Headings & Step Tabs */}
        <div className="w-full md:w-1/2 flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary leading-tight">
              Apply With More Confidence,
              <span className="block text-accent">Every Time</span>
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            {STEPS_DATA.map((item) => {
              const isActive = activeStep === item.id;
              return (
                <button
                  key={item.id}
                  id={`howitworks-tab-${item.id}`}
                  onClick={() => setActiveStep(item.id)}
                  className={`text-left p-5 rounded-r-lg border-l-4 transition-all duration-300 ${
                    isActive
                      ? "border-accent bg-surface-secondary shadow-sm"
                      : "border-border hover:border-accent-light hover:bg-surface-secondary/50"
                  }`}
                >
                  <h3
                    className={`text-base font-bold transition-colors ${
                      isActive ? "text-text-primary" : "text-text-dark"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-secondary font-medium mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
