"use client";

import { GitHubCalendar } from "react-github-calendar";
import { motion } from "framer-motion";

export function GithubHeatmap() {
  const minimalTheme = {
    light: ['#f0f0f0', '#d1d1d1', '#a3a3a3', '#525252', '#000000'],
    dark: ['#111112', '#2a2a2b', '#52525b', '#a1a1aa', '#ffffff'],
  };

  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full max-w-5xl mx-auto py-24 px-8 border-t border-white/5"
    >
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white mb-12" style={{ fontFamily: "var(--font-geist-sans)" }}>
          Open Source <span className="font-playfair italic text-zinc-400">Activity</span>
        </h2>
        
        <div className="p-8 bg-[#0a0a0a] rounded-2xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] overflow-hidden">
          <GitHubCalendar 
            username="MRIARC-08" 
            theme={minimalTheme}
            blockSize={14}
            blockMargin={5}
            fontSize={14}
            hideTotalCount={false}
            hideColorLegend={false}
          />
        </div>
      </div>
    </motion.section>
  );
}
