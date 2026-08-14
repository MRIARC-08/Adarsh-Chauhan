"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { Magnetic } from "../components/Magnetic";

export default function NotFound() {
  const [mounted, setMounted] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    setMounted(true);
    // Even though we removed the red color, we'll keep the event just in case
    window.dispatchEvent(new CustomEvent("set-404", { detail: true }));
    return () => window.dispatchEvent(new CustomEvent("set-404", { detail: false }));
  }, []);

  const handleMouseMove = (e) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  const cursorMask = useMotionTemplate`radial-gradient(150px circle at ${mouseX}px ${mouseY}px, black 0%, transparent 100%)`;
  const combinedMask = useMotionTemplate`${cursorMask}, radial-gradient(300px circle at var(--beam-x, -100vw) var(--beam-y, -100vh), black 0%, transparent 100%)`;

  if (!mounted) return null;

  return (
    <main 
      className="w-full h-screen bg-black relative overflow-hidden text-zinc-300 select-none cursor-crosshair"
      onMouseMove={handleMouseMove}
    >
      
      {/* Background static noise */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-overlay z-0">
        <svg width="100%" height="100%">
          <filter id="noise404">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise404)" />
        </svg>
      </div>

      {/* LAYER 1: Dim Base Layer (Visible when nothing is shining on it) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10">
        <h1 className="text-[25vw] md:text-[20vw] leading-none font-playfair italic text-white/10 tracking-tighter">
          404
        </h1>
        <p className="text-lg md:text-2xl font-light font-mono uppercase tracking-[0.3em] text-white/10 mt-2 mb-16 text-center">
          Signal Lost
        </p>
        {/* Invisible button placeholder for perfect layout alignment */}
        <div className="opacity-0 px-8 py-4 border rounded-full font-mono text-sm uppercase tracking-widest">
          Return to Base
        </div>
      </div>

      {/* LAYER 2: Illuminated Layer (Masked by the Cursor AND the Lamp Beam) */}
      <motion.div 
        className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-20 transition-opacity duration-300"
        style={{
          WebkitMaskImage: combinedMask,
          maskImage: combinedMask,
        }}
      >
        <h1 
          className="text-[25vw] md:text-[20vw] leading-none font-playfair italic text-white tracking-tighter"
          style={{ textShadow: "0 0 50px rgba(255,255,255,0.8)" }}
        >
          404
        </h1>
        <p className="text-lg md:text-2xl font-light font-mono uppercase tracking-[0.3em] text-white mt-2 mb-16 text-center">
          Signal Lost
        </p>
        {/* Invisible button placeholder for perfect layout alignment */}
        <div className="opacity-0 px-8 py-4 border rounded-full font-mono text-sm uppercase tracking-widest">
          Return to Base
        </div>
      </motion.div>

      {/* LAYER 3: Interactive Button Layer */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-30">
        {/* Invisible text placeholders for perfect layout alignment */}
        <h1 className="opacity-0 text-[25vw] md:text-[20vw] leading-none font-playfair italic tracking-tighter">
          404
        </h1>
        <p className="opacity-0 text-lg md:text-2xl font-light font-mono uppercase tracking-[0.3em] mt-2 mb-16 text-center">
          Signal Lost
        </p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="pointer-events-auto"
        >
          <Magnetic>
            <Link href="/" className="px-8 py-4 border border-white/20 hover:border-white/50 rounded-full transition-colors duration-500 font-mono text-sm uppercase tracking-widest text-zinc-400 hover:text-white bg-black">
              Return to Base
            </Link>
          </Magnetic>
        </motion.div>
      </div>

    </main>
  );
}
