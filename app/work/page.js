"use client";

import { StellarTimeline } from "../../components/StellarTimeline";
import { projects } from "../../lib/data";

// Ensure projects have the correct watermarks from the previous iterations
const projectWatermarks = {
  "vidyasetu": "EDTECH",
  "lakshya-ias": "CIVIL",
  "where-is-my-bus": "TRANSIT",
  "devlens": "LENS",
  "league-of-legends": "GAME"
};

export default function Work() {
  const enhancedProjects = projects.map(p => ({
    ...p,
    watermark: projectWatermarks[p.slug] || p.title.split(" ")[0]
  }));

  return (
    <main className="bg-black min-h-screen text-zinc-300 font-sans selection:bg-white selection:text-black relative">
      <div className="pt-32 text-center relative z-10 px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-playfair italic text-white tracking-tighter mb-6">
          The Archive
        </h1>
        <p className="text-zinc-500 font-mono text-sm uppercase tracking-widest max-w-xl mx-auto">
          A chronological exhibition of open-source contributions, product architecture, and AI systems.
        </p>
      </div>
      <StellarTimeline projects={enhancedProjects} />
    </main>
  );
}
