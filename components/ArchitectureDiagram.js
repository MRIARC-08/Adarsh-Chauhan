"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";

export const ArchitectureDiagram = ({ slug }) => {
  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVars = {
    hidden: { opacity: 0, scale: 0.95, y: 10 },
    show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  const ArrowX = () => (
    <motion.div variants={itemVars} className="hidden md:flex text-zinc-600 px-4">
      <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
    </motion.div>
  );

  const ArrowY = () => (
    <motion.div variants={itemVars} className="flex md:hidden text-zinc-600 py-4 justify-center">
      <ArrowDown className="w-5 h-5" strokeWidth={1.5} />
    </motion.div>
  );
  
  const ArrowYDesktop = () => (
    <motion.div variants={itemVars} className="flex text-zinc-600 py-4 justify-center w-full">
      <ArrowDown className="w-5 h-5" strokeWidth={1.5} />
    </motion.div>
  );

  const Node = ({ title, subtitle, colorClass }) => (
    <motion.div variants={itemVars} className={`relative flex flex-col justify-center items-center p-6 rounded-2xl border bg-zinc-950/50 backdrop-blur-sm w-full md:w-56 h-32 text-center transition-colors duration-500 hover:bg-zinc-900 ${colorClass}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent rounded-2xl pointer-events-none" />
      <span className="font-sans font-medium text-white mb-2 tracking-wide">{title}</span>
      <span className="font-mono text-xs text-zinc-400 uppercase tracking-widest">{subtitle}</span>
    </motion.div>
  );

  const diagrams = {
    "lakshya-ias": (
      <div className="flex flex-col md:flex-row items-center justify-center w-full h-full p-8 max-w-5xl mx-auto">
        <Node title="Next.js Client" subtitle="Tailwind & GSAP" colorClass="border-blue-500/20 shadow-[0_0_30px_-10px_rgba(59,130,246,0.15)]" />
        <ArrowX /><ArrowY />
        <Node title="Python AI Agent" subtitle="FastAPI & LangGraph" colorClass="border-purple-500/20 shadow-[0_0_30px_-10px_rgba(168,85,247,0.15)]" />
        <ArrowX /><ArrowY />
        <Node title="Corsair Bridge" subtitle="Express.js Google API" colorClass="border-emerald-500/20 shadow-[0_0_30px_-10px_rgba(16,185,129,0.15)]" />
      </div>
    ),
    "where-is-my-bus": (
      <div className="flex flex-col items-center justify-center w-full h-full p-8 max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 w-full justify-center">
          <Node title="Next.js Frontend" subtitle="React UI" colorClass="border-white/10" />
          <Node title="Next.js API" subtitle="Backend Routes" colorClass="border-white/10" />
        </div>
        <ArrowYDesktop />
        <Node title="Simulation Engine" subtitle="Route Recommendation" colorClass="border-orange-500/20 shadow-[0_0_30px_-10px_rgba(249,115,22,0.15)] md:w-96" />
        <ArrowYDesktop />
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 w-full justify-center">
          <Node title="Prisma ORM" subtitle="SQLite / Postgres" colorClass="border-blue-500/20" />
          <Node title="Mock Datasets" subtitle="JSON Fleet Data" colorClass="border-zinc-500/30" />
        </div>
      </div>
    ),
    "vidyasetu": (
      <div className="flex flex-col items-center justify-center w-full h-full p-8 max-w-4xl mx-auto">
        <Node title="Next.js UI" subtitle="React Server Components" colorClass="border-sky-500/20 shadow-[0_0_30px_-10px_rgba(14,165,233,0.15)] md:w-72" />
        <ArrowYDesktop />
        <div className="flex flex-col md:flex-row items-center w-full justify-center">
          <Node title="Python Backend" subtitle="FastAPI & Langchain" colorClass="border-purple-500/20 shadow-[0_0_30px_-10px_rgba(168,85,247,0.15)]" />
          <ArrowX /><ArrowY />
          <Node title="AI Models" subtitle="Groq & Transformers" colorClass="border-rose-500/20 shadow-[0_0_30px_-10px_rgba(244,63,94,0.15)]" />
        </div>
        <ArrowYDesktop />
        <Node title="Supabase" subtitle="PostgreSQL + pgvector" colorClass="border-emerald-500/20 shadow-[0_0_30px_-10px_rgba(16,185,129,0.15)] md:w-72" />
      </div>
    ),
    "devlens": (
      <div className="flex flex-col md:flex-row items-center justify-center w-full h-full p-8 max-w-6xl mx-auto">
        <Node title="Babel Parser" subtitle="Static Analysis" colorClass="border-yellow-500/20 shadow-[0_0_30px_-10px_rgba(234,179,8,0.15)]" />
        <ArrowX /><ArrowY />
        <div className="flex flex-col gap-6">
           <Node title="Next.js App Router" subtitle="React Flow Visuals" colorClass="border-white/10" />
           <Node title="Prisma / Neon DB" subtitle="Postgres Store" colorClass="border-blue-500/20" />
        </div>
        <ArrowX /><ArrowY />
        <Node title="Groq SDK" subtitle="Llama 3 Insights" colorClass="border-orange-500/20 shadow-[0_0_30px_-10px_rgba(249,115,22,0.15)]" />
      </div>
    ),
    "league-of-legends": (
      <div className="flex flex-col items-center justify-center w-full h-full p-8 max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 w-full justify-center">
          <Node title="Vanilla HTML5" subtitle="Semantic Structure" colorClass="border-orange-500/20 shadow-[0_0_30px_-10px_rgba(249,115,22,0.15)]" />
          <Node title="Vanilla CSS3" subtitle="Transforms & Animations" colorClass="border-blue-500/20 shadow-[0_0_30px_-10px_rgba(59,130,246,0.15)]" />
          <Node title="Vanilla JavaScript" subtitle="Scroll Listeners" colorClass="border-yellow-500/20 shadow-[0_0_30px_-10px_rgba(234,179,8,0.15)]" />
        </div>
        <ArrowYDesktop />
        <Node title="Native Browser Engine" subtitle="60fps DOM Rendering" colorClass="border-white/20 shadow-[0_0_40px_-10px_rgba(255,255,255,0.1)] md:w-96" />
      </div>
    )
  };

  const currentDiagram = diagrams[slug];

  if (!currentDiagram) {
    return (
      <div className="flex items-center justify-center h-full text-zinc-600 font-mono text-xs uppercase tracking-widest">
        Architecture mapping missing
      </div>
    );
  }

  return (
    <motion.div
      variants={containerVars}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="w-full h-full flex items-center justify-center"
    >
      {currentDiagram}
    </motion.div>
  );
};
