"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Magnetic } from "./Magnetic";

export function MagneticVaultDoor() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section 
      className="relative w-full h-full flex items-center justify-center bg-black overflow-hidden cursor-pointer rounded-[3rem] border border-white/10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      
      {/* Background Revealed Link (The Bright Inside) */}
      <div className="absolute inset-0 bg-white flex flex-col items-center justify-center z-0">
        <h2 className="text-4xl md:text-6xl font-playfair italic text-black mb-8 tracking-tighter">
          The Archive Awaits
        </h2>
        <Magnetic>
          <Link href="/work" className="px-8 py-4 bg-black text-white font-mono text-sm uppercase tracking-widest rounded-full hover:scale-105 transition-transform duration-300 shadow-xl">
            View All Works →
          </Link>
        </Magnetic>
      </div>

      {/* Volumetric Light Spilling from the Crack */}
      <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-4 bg-white shadow-[0_0_100px_rgba(255,255,255,1),_0_0_50px_rgba(255,255,255,0.8)] z-10 blur-xl pointer-events-none" />

      {/* Left Door */}
      <motion.div 
        className="absolute top-0 bottom-0 left-0 w-[50%] bg-zinc-950 border-r-2 border-white/20 shadow-[10px_0_30px_rgba(0,0,0,0.8)] z-20 flex items-center justify-end pr-8"
        animate={{ x: isHovered ? "-100%" : "0%" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="w-2 h-32 bg-white/10 rounded-full" />
      </motion.div>

      {/* Right Door */}
      <motion.div 
        className="absolute top-0 bottom-0 right-0 w-[50%] bg-zinc-950 border-l-2 border-white/20 shadow-[-10px_0_30px_rgba(0,0,0,0.8)] z-20 flex items-center justify-start pl-8"
        animate={{ x: isHovered ? "100%" : "0%" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="w-2 h-32 bg-white/10 rounded-full" />
      </motion.div>

      {/* Instruction Overlay when closed */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 pointer-events-none transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
        <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest bg-black/50 px-4 py-2 rounded-full backdrop-blur-md">
          Hover to Open
        </span>
      </div>

    </section>
  );
}
