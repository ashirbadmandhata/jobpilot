"use client";

import { useState } from "react";
import Image from "next/image";

type FeatureItem = {
  id: string;
  title: string;
  description: string;
};

const FEATURES_DATA: FeatureItem[] = [
  {
    id: "find-jobs",
    title: "Find jobs that actually fit",
    description:
      "Search by title and location or paste a job link. Get matched roles you can quickly scan.",
  },
  {
    id: "know-company",
    title: "Know the Company Before You Apply",
    description:
      "Stop guessing what a company is about. JobPilot browses their site and gives you everything you need to apply with confidence.",
  },
  {
    id: "track-apps",
    title: "Keep track of every application",
    description:
      "Keep a clear view of every job you've found, tailored. Your activity and progress all stay in one simple place.",
  },
];

export function Features() {
  const [activeTab, setActiveTab] = useState<string>("find-jobs");

  return (
    <section className="w-full py-20 px-6 bg-surface-secondary border-b border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Column: Headings & Interative Tabs */}
        <div className="w-full md:w-1/2 flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary leading-tight">
              Manage Your Job Search
              <span className="block text-accent">With Ease</span>
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            {FEATURES_DATA.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`feature-tab-${item.id}`}
                  onClick={() => setActiveTab(item.id)}
                  className={`text-left p-5 rounded-r-lg border-l-4 transition-all duration-300 ${
                    isActive
                      ? "border-accent bg-surface shadow-sm"
                      : "border-border hover:border-accent-light hover:bg-surface/50"
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

        {/* Right Column: Sleek Card with Jobs List Image */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <div className="w-full max-w-[500px] bg-surface border border-border rounded-2xl p-6 landing-card-shadow transition-transform duration-500 hover:scale-[1.01]">
            <div className="relative aspect-[450/330] w-full rounded-lg overflow-hidden">
              <Image
                src="/images/jobs-lists.png"
                alt="JobPilot Jobs List matching preview"
                fill
                className="object-contain"
                sizes="(max-w-500px) 100vw, 500px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
