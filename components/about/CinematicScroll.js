"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function CinematicScroll() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Explicitly mapping 0 and 1 prevents Framer Motion from outputting negative values.
  // Negative values cause "invalid CSS", causing the browser to freeze the opacity at the last valid state (making it faintly visible permanently).
  const opacityIntro = useTransform(scrollYProgress, [0, 0.1, 0.15, 1], [1, 1, 0, 0]);

  // Original timings exactly as they were, but safely clamped to 0 at the bounds.
  const opacity1 = useTransform(scrollYProgress, [0, 0.2, 0.3, 0.4, 1], [0, 1, 1, 0, 0]);
  const opacity2 = useTransform(scrollYProgress, [0, 0.3, 0.4, 0.5, 0.6, 1], [0, 0, 1, 1, 0, 0]);
  const opacity3 = useTransform(scrollYProgress, [0, 0.5, 0.6, 0.7, 0.8, 1], [0, 0, 1, 1, 0, 0]);
  const opacity4 = useTransform(scrollYProgress, [0, 0.7, 0.8, 0.9, 1], [0, 0, 1, 1, 0]);

  return (
    <div ref={containerRef} className="relative w-full h-[400vh] bg-black">
      
      {/* Sticky container that holds the fading text */}
      <div className="sticky top-0 w-full h-screen flex flex-col items-center justify-center p-6 text-center">
        
        <motion.h1 
          style={{ opacity: opacityIntro }}
          className="absolute w-full px-4 text-7xl md:text-9xl font-playfair italic text-white tracking-tighter"
        >
          About.
        </motion.h1>
        
        <motion.h2 
          style={{ opacity: opacity1 }}
          className="absolute w-full max-w-4xl px-4 text-3xl md:text-6xl font-playfair italic text-white tracking-tighter"
        >
          It started in 10th grade during a two-week cybersecurity workshop. The spark was lit.
        </motion.h2>

        <motion.h2 
          style={{ opacity: opacity2 }}
          className="absolute w-full max-w-4xl px-4 text-3xl md:text-6xl font-playfair italic text-white tracking-tighter"
        >
          After 12th grade, I took the plunge. I spent days and nights writing code and breaking things.
        </motion.h2>

        <motion.h2 
          style={{ opacity: opacity3 }}
          className="absolute w-full max-w-4xl px-4 text-3xl md:text-6xl font-playfair italic text-white tracking-tighter"
        >
          I don't just write code; I orchestrate systems. As a Project Admin for GSSoC, I've guided 50+ developers and merged over 100 pull requests for VidyaSetu.
        </motion.h2>

        <motion.h2 
          style={{ opacity: opacity4 }}
          className="absolute w-full max-w-4xl px-4 text-4xl md:text-7xl font-playfair italic text-white tracking-tighter"
        >
          I love making ideas come to life. <br/> <span className="text-zinc-500 text-3xl md:text-5xl">It's beautiful.</span>
        </motion.h2>

      </div>

      {/* Progress Indicator */}
      <div className="fixed bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-[10px] font-mono text-white tracking-widest uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
      </div>

    </div>
  );
}
