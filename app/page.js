"use client";

import { useMotionValue, useSpring, motion, useMotionTemplate } from "framer-motion";
import { useRef } from "react";
import styles from "./hero.module.css";

export default function Home() {
  const containerRef = useRef(null);
  
  // Motion values to track mouse position
  const cursorX = useMotionValue(-1000);
  const cursorY = useMotionValue(-1000);
  
  // Spring configuration for smooth tracking
  const springConfig = { damping: 40, stiffness: 300, mass: 1 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    
    // Get bounding client rect to find cursor position relative to the container
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    cursorX.set(x);
    cursorY.set(y);
  };
  
  // Create a tighter, sharper radial gradient mask
  const maskImage = useMotionTemplate`radial-gradient(150px circle at ${smoothX}px ${smoothY}px, black 10%, rgba(0,0,0,0.2) 50%, transparent 100%)`;

  return (
    <div 
      className={styles.heroContainer}
      ref={containerRef}
      onMouseMove={handleMouseMove}
    >
      {/* Base Text (Subtle glassy outline) */}
      <h1 className={styles.baseText}>ADARSH</h1>

      {/* Hover Text (Convex 3D glass effect revealed by cursor) */}
      <motion.h1 
        className={styles.glowText}
        style={{ 
          WebkitMaskImage: maskImage, 
          maskImage: maskImage 
        }}
      >
        ADARSH
      </motion.h1>
    </div>
  );
}
