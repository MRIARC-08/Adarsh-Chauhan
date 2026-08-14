"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import { useState, useEffect } from "react";
import styles from "./hero.module.css";
import { GlowingTimeline } from "../components/GlowingTimeline";
import { StatementReveal } from "../components/StatementReveal";
import { HorizontalScrollGallery } from "../components/HorizontalScrollGallery";
import { CapabilitiesTable } from "../components/CapabilitiesTable";
import { impactItems, experience, projects } from "../lib/data";

export default function Home() {
  const roles = [
    { p1: "Systems", p2: "Engineer", italicIndex: 1 },
    { p1: "Fullstack", p2: "Architect", italicIndex: 2 },
    { p1: "Product", p2: "Developer", italicIndex: 2 },
    { p1: "Open Source", p2: "Dev", italicIndex: 2 },
  ];
  const [keywordIndex, setKeywordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setKeywordIndex((prev) => (prev + 1) % roles.length);
    }, 3500); 
    return () => clearInterval(interval);
  }, [roles.length]);

  const fadeUp = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <>
      <div className={styles.heroContainer}>
        {/* Hero Typography */}
        <motion.div 
          className={styles.heroContent}
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } } }}
        >
          <motion.h1 className={styles.title} variants={fadeUp}>
            Hi, I&apos;m <span className={styles.boldName}>Adarsh</span>
          </motion.h1>
          
          <motion.h2 className={styles.subtitle} variants={fadeUp} style={{ display: "flex", justifyContent: "center", width: "100%" }}>
            <div style={{ position: "relative", height: "1.2em", width: "100%", display: "flex", justifyContent: "center" }}>
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={roles[keywordIndex].p1 + roles[keywordIndex].p2}
                  initial={{ opacity: 0, y: 20, filter: "blur(12px)", scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
                  exit={{ opacity: 0, y: -20, filter: "blur(12px)", scale: 1.05 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  style={{ position: "absolute", display: "flex", gap: "0.3em", whiteSpace: "nowrap" }}
                >
                  <span className={roles[keywordIndex].italicIndex === 1 ? styles.italicSerif : ""}>
                    {roles[keywordIndex].p1}
                  </span>
                  <span className={roles[keywordIndex].italicIndex === 2 ? styles.italicSerif : ""}>
                    {roles[keywordIndex].p2}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.h2>
        </motion.div>

        {/* Stylized Profile Portrait */}
        <motion.div 
          className={styles.profileWrapper}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          onContextMenu={(e) => e.preventDefault()}
        >
          <Image 
            src="/profile2.png" 
            alt="Adarsh Portrait" 
            width={1000} 
            height={1000} 
            className={`${styles.profileImage} pointer-events-none select-none`} 
            draggable={false}
            priority 
          />
        </motion.div>
      </div>

      {/* Content Sections */}
      <main className="bg-black min-h-screen text-zinc-300 pb-32">
        
        <StatementReveal />
        <CapabilitiesTable />
        
        {/* Experience Section */}
        <section className="w-full relative py-24 md:py-32 border-t border-white/10">
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent h-48 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 mb-16 text-center relative z-10">
            <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-widest">Experience</h3>
          </div>
          <GlowingTimeline items={experience} />
        </section>

        {/* Featured Work */}
        <section className="w-full relative pt-24 md:pt-32 border-t border-white/10">
          <div className="max-w-[1400px] mx-auto px-6 mb-8 text-center">
            <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-widest">Selected Work</h3>
          </div>
          <HorizontalScrollGallery />
        </section>
        
      </main>
    </>
  );
}
