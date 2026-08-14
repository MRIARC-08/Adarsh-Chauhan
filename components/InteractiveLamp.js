"use client";
import { motion, useMotionValue, useTransform, useSpring, useMotionTemplate, animate, useAnimationFrame } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export function InteractiveLamp() {
  const [mounted, setMounted] = useState(false);
  const [is404, setIs404] = useState(false);
  const [isOn, setIsOn] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handle404 = (e) => setIs404(e.detail);
    window.addEventListener("set-404", handle404);
    return () => window.removeEventListener("set-404", handle404);
  }, []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const [tooltipText, setTooltipText] = useState("TOGGLE LIGHT");

  // Calculate the cord's end point based on the draggable shade's position
  const cordX = useTransform(x, (val) => val + 30); // 30 is half of the 60px width
  const cordY = useTransform(y, (val) => val + 150); // 150px is the initial height of the shade

  // Physics-based control point for the rubbery bezier curve
  const midX = useTransform(cordX, (val) => (30 + val) / 2);
  const midY = useTransform(cordY, (val) => (0 + val) / 2);
  
  // The spring makes the middle of the rope lag behind, creating a rubber/jelly effect
  const springMidX = useSpring(midX, { stiffness: 150, damping: 4, mass: 1 });
  const springMidY = useSpring(midY, { stiffness: 150, damping: 4, mass: 1 });

  // Prevent the rubber rope from bulging above the ceiling holder or below the lamp shade
  const clampedSpringMidY = useTransform([springMidY, cordY], ([sY, cY]) => {
    return Math.max(0, Math.min(sY, cY));
  });

  // Generate the dynamic SVG path
  const path = useMotionTemplate`M 30 0 Q ${springMidX} ${clampedSpringMidY} ${cordX} ${cordY}`;

  // Mathematically perfect rotation: align the lampshade exactly with the cord angle
  const rotate = useTransform([x, y], ([latestX, latestY]) => {
    const dx = latestX;
    const dy = latestY + 150;
    const angleRad = Math.atan2(dx, dy);
    return -(angleRad * 180) / Math.PI;
  });

  useAnimationFrame(() => {
    if (typeof window === "undefined") return;
    
    if (!isOn) {
      document.documentElement.style.setProperty("--beam-x", `-100vw`);
      document.documentElement.style.setProperty("--beam-y", `-100vh`);
      return;
    }

    const isMd = window.innerWidth >= 768;
    const baseX = window.innerWidth * (isMd ? 0.15 : 0.05) + 30; // Left origin + 30px center offset
    const currentX = x.get();
    const currentY = y.get();
    
    const dx = currentX;
    const dy = currentY + 150;
    const angleRad = Math.atan2(dx, dy);
    
    // Project the beam center roughly 300px along the angle of the shade
    const beamDist = 300;
    const beamCenterX = baseX + currentX + Math.sin(angleRad) * beamDist;
    const beamCenterY = 185 + currentY + Math.cos(angleRad) * beamDist;
    
    document.documentElement.style.setProperty("--beam-x", `${beamCenterX}px`);
    document.documentElement.style.setProperty("--beam-y", `${beamCenterY}px`);
  });

  if (!mounted) return null;

  return (
    <motion.div 
      className="fixed top-0 left-[5%] md:left-[15%] w-[60px] h-screen pointer-events-none z-50"
      style={{ transformOrigin: "top center" }}
      animate={{ rotate: [-1, 1, -1] }}
      transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
    >
      {/* Ceiling Mount (Anchor) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[32px] h-[4px] bg-zinc-800 z-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[20px] h-[10px] bg-gradient-to-b from-zinc-700 to-zinc-950 rounded-b-md shadow-[0_4px_10px_rgba(0,0,0,0.8)] z-20" />

      {/* The Elastic SVG Cord */}
      <svg className="absolute top-0 left-0 w-[60px] h-full overflow-visible pointer-events-none">
        <motion.path
          d={path}
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
      </svg>

      {/* The Draggable Lamp Shade */}
      <motion.div
        className="absolute top-[150px] left-0 w-[60px] pointer-events-auto cursor-grab active:cursor-grabbing origin-top z-30"
        style={{ x, y, rotate }}
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragElastic={{ top: 0.8, bottom: 0.6, left: 0.5, right: 0.5 }}
        dragTransition={{ bounceStiffness: 150, bounceDamping: 6, power: 0.1 }}
        onTap={() => setIsOn(!isOn)}
        onPointerEnter={() => {
          setTooltipText(Math.random() > 0.5 ? "TOGGLE LIGHT" : "DRAG TO STRETCH");
          setIsHovered(true);
        }}
        onPointerLeave={() => setIsHovered(false)}
      >
        <div className="relative w-full flex flex-col items-center">
          
          {/* Tooltip */}
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
            className="absolute top-1/2 -translate-y-1/2 left-[80px] px-3 py-1.5 bg-zinc-900/90 backdrop-blur-md border border-white/10 rounded-md text-[10px] text-zinc-300 font-mono tracking-widest uppercase whitespace-nowrap pointer-events-none z-50 shadow-2xl"
          >
            {tooltipText}
          </motion.div>
          
          {/* Metal cord connector (cap) */}
          <div className="w-[10px] h-[10px] bg-gradient-to-b from-zinc-700 to-zinc-900 rounded-t-sm shadow-[0_2px_4px_rgba(0,0,0,0.5)] z-10" />
          
          {/* The Geometric Lamp Shade */}
          <div className="w-[60px] h-[35px] relative z-10 shadow-[0_5px_15px_rgba(0,0,0,0.5)]" 
               style={{ 
                 clipPath: "polygon(25% 0, 75% 0, 100% 100%, 0 100%)", 
                 background: "linear-gradient(135deg, #3f3f46 0%, #09090b 100%)" 
               }}>
            {/* Inner dark rim to give thickness */}
            <div className="absolute bottom-0 left-0 w-full h-[4px] bg-black/60" />
          </div>

          {/* The Glowing Bulb (Recessed LED) */}
          <div className={`absolute bottom-[-1px] left-1/2 -translate-x-1/2 w-[24px] h-[6px] ${isOn ? 'bg-[#fff9eb]' : 'bg-zinc-800'} rounded-full blur-[1px] z-20 transition-colors duration-700`} 
               style={{ boxShadow: isOn ? "0 2px 25px 8px rgba(255, 250, 220, 0.8)" : "none" }} />

          {/* Photorealistic Outer Ambient Beam (Spill) */}
          <div className={`absolute top-[40px] left-1/2 -translate-x-1/2 w-[150vw] h-[120vh] mix-blend-screen pointer-events-none origin-top z-0 transition-opacity duration-500 ${isOn ? 'opacity-100' : 'opacity-0'}`}
               style={{
                 background: "conic-gradient(from 120deg at 50% 0%, transparent 0deg, rgba(255, 250, 220, 0.05) 60deg, transparent 120deg)",
                 WebkitMaskImage: "radial-gradient(100% 100% at 50% 0%, black 10%, transparent 100%)",
                 maskImage: "radial-gradient(100% 100% at 50% 0%, black 10%, transparent 100%)"
               }} />

          {/* Photorealistic Inner Hotspot Beam */}
          <div className={`absolute top-[40px] left-1/2 -translate-x-1/2 w-[80vw] h-[100vh] mix-blend-screen pointer-events-none origin-top z-0 transition-opacity duration-500 delay-75 ${isOn ? 'opacity-100' : 'opacity-0'}`}
               style={{
                 background: "conic-gradient(from 150deg at 50% 0%, transparent 0deg, rgba(255, 250, 220, 0.15) 30deg, transparent 60deg)",
                 WebkitMaskImage: "linear-gradient(to bottom, black 0%, transparent 100%)",
                 maskImage: "linear-gradient(to bottom, black 0%, transparent 100%)"
               }} />
          
        </div>
      </motion.div>
    </motion.div>
  );
}
