"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { experience } from "../lib/data";

export function GlowingTimeline() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative w-full max-w-6xl mx-auto">
      
      {/* The Central Line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 transform md:-translate-x-1/2" />
      
      {/* The Glowing Thread */}
      <motion.div 
        className="absolute left-4 md:left-1/2 top-0 w-[2px] bg-white transform md:-translate-x-1/2 origin-top shadow-[0_0_15px_rgba(255,255,255,0.8)]"
        style={{ height }}
      />

      <div className="flex flex-col gap-32 md:gap-48 relative z-10">
        {experience.map((exp, i) => {
          const isEven = i % 2 === 0;
          return (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`flex flex-col md:flex-row w-full ${isEven ? "md:flex-row-reverse" : ""} relative`}
            >
              
              {/* Massive Watermark Typography in Background */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[10rem] md:text-[14rem] font-black text-white/5 uppercase tracking-tighter whitespace-nowrap pointer-events-none -z-10 select-none">
                {exp.label.split(" ")[0]}
              </div>

              {/* Glowing Dot on the timeline */}
              <div className="absolute left-4 md:left-1/2 top-0 md:top-1/2 transform -translate-x-1/2 md:-translate-y-1/2 w-4 h-4 bg-black border-2 border-white rounded-full z-20" />

              {/* Empty space for the opposite side */}
              <div className="hidden md:block md:w-1/2" />

              {/* Content Box */}
              <div className={`w-full md:w-1/2 pl-12 pr-6 md:px-16 ${isEven ? "md:text-right" : "md:text-left"} pt-2 md:pt-0`}>
                <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">{exp.period}</div>
                <h3 className="text-3xl md:text-5xl font-playfair italic text-white mb-2">{exp.role}</h3>
                <h4 className="text-lg font-medium text-zinc-400 mb-8">{exp.label}</h4>
                <p className={`text-zinc-400 font-light leading-relaxed mb-8 ${isEven ? "md:ml-auto" : ""} max-w-md`}>
                  {exp.description}
                </p>
                <div className={`flex flex-wrap gap-2 ${isEven ? "md:justify-end" : "md:justify-start"}`}>
                  {exp.stack.map(s => (
                    <span key={s} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-zinc-300">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
