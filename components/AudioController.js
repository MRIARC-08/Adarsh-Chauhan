"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useScroll, useVelocity, useMotionValueEvent } from "framer-motion";
import { initAudio, setPageVibe, setWindVelocity, muteAudio, setFluidState, splash, diveDeep, surface } from "../lib/audioEngine";

export function AudioController() {
  const [isAudioEnabled, setIsAudioEnabled] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);

  // Map scroll velocity to fluid state
  useMotionValueEvent(scrollVelocity, "change", (latestVelocity) => {
    if (isAudioEnabled) {
      setWindVelocity(latestVelocity);
    }
  });

  // Track Mouse Movement for Ripples & Panning
  useEffect(() => {
    if (!isAudioEnabled) return;

    let lastTime = performance.now();
    let lastX = window.innerWidth / 2;
    let lastY = window.innerHeight / 2;
    
    const handleMouseMove = (e) => {
      const now = performance.now();
      const dt = now - lastTime;
      
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      const distance = Math.sqrt(dx*dx + dy*dy);
      const velocity = dt > 0 ? (distance / dt) * 10 : 0; 

      // Pan from -1 (left) to 1 (right)
      const panX = (e.clientX / window.innerWidth) * 2 - 1;

      setFluidState(velocity, panX);

      lastTime = now;
      lastX = e.clientX;
      lastY = e.clientY;
    };

    const handleClick = () => splash(1.0);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleClick);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleClick);
    };
  }, [isAudioEnabled]);

  const toggleAudio = async () => {
    if (!isAudioEnabled) {
      await initAudio();
      setIsAudioEnabled(true);
      setPageVibe(pathname);
    } else {
      muteAudio(true);
      setIsAudioEnabled(false);
    }
  };

  // Trigger page transition effects
  useEffect(() => {
    if (isAudioEnabled) {
      muteAudio(false);
      setPageVibe(pathname);
      diveDeep();
      setTimeout(() => surface(), 500);
    }
  }, [isAudioEnabled, pathname]);

  return (
    <button 
      onClick={toggleAudio}
      className="relative w-11 h-11 flex items-center justify-center text-zinc-400 bg-white/5 backdrop-blur-md border border-white/10 rounded-full hover:bg-white/10 hover:text-white transition-colors group"
      aria-label="Toggle Generative Audio"
    >
      {isAudioEnabled ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
          <line x1="23" y1="9" x2="17" y2="15"></line>
          <line x1="17" y1="9" x2="23" y2="15"></line>
        </svg>
      )}
      
      {/* Tooltip */}
      <span className="absolute top-14 opacity-0 group-hover:opacity-100 transition-opacity font-mono text-[10px] tracking-widest uppercase whitespace-nowrap bg-black/80 px-3 py-2 rounded border border-white/10 pointer-events-none">
        {isAudioEnabled ? "Mute" : "Audio"}
      </span>
    </button>
  );
}
