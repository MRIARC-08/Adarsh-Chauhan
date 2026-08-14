"use client";

import { motion } from "framer-motion";
import { thoughts } from "@/lib/data";

export function ThoughtsList() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full max-w-5xl mx-auto py-24 px-8 border-t border-white/5"
    >
      <div className="flex flex-col mb-16">
        <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white" style={{ fontFamily: "var(--font-geist-sans)" }}>
          Recent <span className="font-playfair italic text-zinc-400">Thoughts</span>
        </h2>
      </div>

      <div className="flex flex-col w-full group">
        {thoughts.map((thought, i) => (
          <motion.div 
            key={thought.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
            className="w-full py-8 border-b border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer hover:bg-white/[0.02] transition-colors px-4 -mx-4 rounded-xl"
          >
            <div className="flex flex-col gap-2">
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">{thought.category}</span>
              <h3 className="text-xl md:text-2xl font-light text-white group-hover/item:text-white/80 transition-colors">
                {thought.title}
              </h3>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-zinc-500 font-mono">
              <span>{thought.date}</span>
              <span className="hidden md:block">•</span>
              <span>{thought.readTime}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
