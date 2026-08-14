"use client";

import Link from "next/link";
import { TextReveal } from "../../components/TextReveal";
import { Magnetic } from "../../components/Magnetic";
import { GlassmorphicBento } from "../../components/resume/GlassmorphicBento";

export default function Resume() {
  return (
    <main className="bg-black min-h-screen text-zinc-300 font-sans selection:bg-white selection:text-black pt-48 md:pt-32 pb-32">
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Header Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-white/20 pb-12 mb-16">
          <div className="md:col-span-3">
            <TextReveal text="Curriculum Vitae" className="text-6xl md:text-8xl font-playfair italic text-white tracking-tight leading-none mb-4" />
            <p className="text-sm font-mono text-zinc-500 uppercase tracking-widest mt-8">Document Ref: AC-2026-ENG</p>
          </div>
          <div className="md:col-span-1 flex items-end justify-start md:justify-end">
            <Magnetic>
              <Link 
                href="/docs/adarsh-chauhan-resume.pdf" 
                target="_blank" 
                download
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-mono text-sm uppercase tracking-widest hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_50px_rgba(255,255,255,0.6)] hover:-translate-y-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-y-1 transition-transform duration-300">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Download PDF
              </Link>
            </Magnetic>
          </div>
        </div>

        {/* The Selected Template */}
        <div className="mb-32">
          <GlassmorphicBento />
        </div>

      </div>
    </main>
  );
}
