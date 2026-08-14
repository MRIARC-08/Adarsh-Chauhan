"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function Word({ children, progress, range }) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block">
      {children}
    </motion.span>
  );
}

export function StatementReveal() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 85%", "end 50%"] // Starts revealing when top of container hits 85% of viewport
  });

  const statement = "I engineer digital experiences that bridge the gap between high-end aesthetics and highly scalable architecture.";
  const words = statement.split(" ");

  return (
    <section ref={containerRef} className="w-full py-32 md:py-48 px-6 flex items-center justify-center bg-black relative z-10">
      <div className="max-w-[1200px] mx-auto text-center">
        <h2 className="text-4xl md:text-6xl lg:text-[5.5rem] font-sans font-light leading-[1.1] tracking-tight text-white flex flex-wrap justify-center gap-x-[0.3em] gap-y-[0.1em]">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + (1 / words.length);
            
            // Stylize specific keywords
            let content = word;
            if (word.includes("aesthetics") || word.includes("architecture")) {
              content = <span className="font-playfair italic text-zinc-300">{word}</span>;
            } else if (word === "engineer") {
              content = <span className="font-normal">{word}</span>;
            }

            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {content}
              </Word>
            );
          })}
        </h2>
      </div>
    </section>
  );
}
