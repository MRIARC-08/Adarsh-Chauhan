"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { GitHubCalendar } from "react-github-calendar";
import Link from "next/link";
import Image from "next/image";

export function StellarTimeline({ projects = [] }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="relative w-full max-w-7xl mx-auto pt-32 pb-48 px-4 sm:px-6 overflow-hidden">
      
      {/* Deep Space Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900/10 via-black to-black pointer-events-none -z-20" />
      
      {/* SVG Constellation Lines mapping across the screen abstractly */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block -z-10 opacity-[0.03]">
        <path d="M 20% 10% Q 50% 5% 80% 15% T 20% 30% Q 80% 40% 50% 60% T 80% 80%" fill="transparent" stroke="white" strokeWidth="2" strokeDasharray="10,10" />
      </svg>

      {/* Project Tracking Container */}
      <div ref={containerRef} className="relative">
        
        {/* The Timeline Track */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] transform md:-translate-x-1/2 z-0">
          <div className="w-full h-full bg-white/10" />
          <motion.div 
            className="absolute top-0 left-0 w-full bg-white origin-top shadow-[0_0_15px_rgba(255,255,255,0.8)] z-10"
            style={{ height }}
          />
        </div>

        <div className="flex flex-col gap-40 md:gap-64 relative z-20 pt-16 pb-32">
          {projects.map((project, i) => {
            const isEven = i % 2 === 0;
            const watermark = project.watermark || (project.title || "").split(" ")[0];

            return (
              <motion.div 
                key={project.slug}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col md:flex-row w-full ${isEven ? "md:flex-row-reverse" : ""} relative`}
              >
                
                {/* Massive Watermark Typography in Background */}
                <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[14rem] font-black text-white/5 uppercase tracking-tighter whitespace-nowrap pointer-events-none -z-10 select-none">
                  {watermark}
                </div>

                {/* Glowing Constellation Star on the timeline */}
                <div className="absolute left-[15px] md:left-1/2 top-0 md:top-1/2 transform -translate-x-1/2 md:-translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,1)] z-20 hover:scale-150 hover:shadow-[0_0_40px_rgba(255,255,255,1)] transition-all duration-500" />

                {/* Empty space for the opposite side */}
                <div className="hidden md:block md:w-1/2" />

                {/* Content Box (The Gallery Card) */}
                <div className={`w-full md:w-1/2 pl-12 pr-0 md:px-16 ${isEven ? "md:text-right flex flex-col md:items-end" : "md:text-left flex flex-col md:items-start"} pt-2 md:pt-0`}>
                  
                  <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/5 border border-white/20 text-sm font-mono text-white shadow-[0_0_15px_rgba(255,255,255,0.1)] uppercase tracking-widest mb-6 backdrop-blur-sm">
                    {project.timeline}
                  </div>

                  <Link href={`/work/${project.slug}`} className="block group w-full max-w-lg relative">
                    
                    {/* High-Fidelity Gallery Image */}
                    <div className="w-full aspect-[16/9] mb-8 relative rounded-2xl overflow-hidden border border-white/10 group-hover:border-white/30 transition-colors">
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                      <Image
                        src={project.contentImage || project.coverImage}
                        alt={project.title}
                        fill
                        className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    </div>

                    {/* Details */}
                    <h3 className="text-3xl md:text-5xl font-playfair italic text-white group-hover:text-zinc-300 transition-colors mb-2">
                      {project.title}
                      <span className="inline-block ml-4 text-2xl md:text-3xl font-sans not-italic text-zinc-600 group-hover:text-white transition-colors opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 duration-300">
                        →
                      </span>
                    </h3>
                  </Link>

                  <h4 className="text-lg font-medium text-zinc-400 mb-6">{project.label}</h4>
                  <p className={`text-zinc-400 font-light leading-relaxed mb-8 ${isEven ? "md:ml-auto" : ""} max-w-md`}>
                    {project.description}
                  </p>
                  
                  <div className={`flex flex-wrap gap-2 ${isEven ? "md:justify-end" : "md:justify-start"}`}>
                    {project.tech.slice(0, 4).map(s => (
                      <span key={s} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-zinc-300">
                        {s}
                      </span>
                    ))}
                  </div>

                  {/* External Links */}
                  <div className={`mt-8 flex flex-wrap gap-4 ${isEven ? "md:justify-end" : "md:justify-start"}`}>
                    {project.href && (
                      <a href={project.href} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/20 rounded-full text-xs font-mono text-white transition-colors flex items-center gap-2 backdrop-blur-sm shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path></svg>
                        Source Code
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-white text-black hover:bg-zinc-200 border border-transparent rounded-full text-xs font-mono font-bold transition-colors flex items-center gap-2 shadow-[0_0_15px_rgba(255,255,255,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.8)]">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path><path d="M15 3h6v6"></path><path d="M10 14L21 3"></path></svg>
                        Live Demo
                      </a>
                    )}
                  </div>

                </div>

              </motion.div>
            );
          })}
        </div>
      </div>

      {/* The Horizon (Heatmap) */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px" }}
        transition={{ duration: 1, delay: 0.2 }}
        className="mt-32 w-full max-w-4xl mx-auto relative flex flex-col items-center"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent blur-3xl -z-10" />
        <p className="text-center font-mono text-xs text-zinc-500 uppercase tracking-[0.3em] mb-12">
          The Foundation: Daily Contributions
        </p>
        <div className="w-full flex justify-center scale-90 sm:scale-100 opacity-80 hover:opacity-100 transition-opacity duration-1000 bg-zinc-950/50 p-6 md:p-8 rounded-3xl border border-white/5 relative z-20">
          <GitHubCalendar 
            username="MRIARC-08" 
            colorScheme="dark"
            blockSize={14}
            blockMargin={6}
            theme={{
              light: ['#111', '#222', '#555', '#aaa', '#fff'],
              dark: ['#111', '#222', '#555', '#aaa', '#fff'],
            }}
          />
        </div>
      </motion.div>

    </div>
  );
}
