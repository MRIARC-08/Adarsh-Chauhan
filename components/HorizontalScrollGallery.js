"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { projects } from "../lib/data";
import Link from "next/link";
import { Magnetic } from "./Magnetic";

export function HorizontalScrollGallery() {
  const targetRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Depending on how many projects we have, we slide left.
  // We want the last card to reach the center, not go completely off screen.
  // Easiest is to slide by a percentage based on number of projects.
  const slideDistance = `-${(projects.length - 1) * 100}vw`;
  
  const x = useTransform(scrollYProgress, [0, 1], ["0vw", slideDistance]);

  return (
    <section ref={targetRef} className="relative h-[400vh]">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-32 px-[10vw]">
          {projects.map((project, index) => (
            <div key={project.title} className="w-[80vw] shrink-0 flex flex-col md:flex-row items-center gap-16 md:gap-32 relative">
              
              {/* Massive background watermark */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[15rem] md:text-[30rem] font-playfair italic text-white/5 tracking-tighter leading-none pointer-events-none -z-10 select-none">
                0{index + 1}
              </div>

              {/* Text Content */}
              <div className="w-full md:w-1/2 flex flex-col gap-6 z-10">
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">{project.label}</span>
                <h2 className="text-6xl md:text-8xl font-playfair italic text-white tracking-tighter leading-none">
                  {project.title}
                </h2>
                <h3 className="text-2xl md:text-3xl font-sans font-light text-zinc-300 mt-4">
                  {project.subtitle}
                </h3>
                <p className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed mt-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-8">
                  {project.tech.map(t => (
                    <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-zinc-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Interaction / Graphic Side */}
              <div className="w-full md:w-1/2 flex justify-center md:justify-end items-center z-10">
                <Magnetic strength={40}>
                  <Link href={`/work/${project.slug}`} className="group relative flex items-center justify-center w-48 h-48 rounded-full border border-white/20 hover:border-white/50 transition-colors duration-500">
                    <div className="absolute inset-0 bg-white/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 ease-out origin-center" />
                    <span className="relative z-10 text-sm font-mono uppercase font-bold tracking-widest text-white group-hover:scale-110 transition-transform duration-300">
                      View Project
                    </span>
                  </Link>
                </Magnetic>
              </div>

            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
