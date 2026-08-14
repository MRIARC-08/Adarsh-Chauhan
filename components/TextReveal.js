"use client";
import { motion } from "framer-motion";

export function TextReveal({ text, className }) {
  const words = text.split(" ");
  let globalIndex = 0;

  const child = {
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        delay: i * 0.04,
      },
    }),
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  return (
    <motion.h1
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap">
          {Array.from(word).map((letter, letterIndex) => {
            const i = globalIndex++;
            return (
              <motion.span custom={i} variants={child} key={letterIndex} className="inline-block">
                {letter}
              </motion.span>
            );
          })}
          {wordIndex !== words.length - 1 && (
            <motion.span custom={globalIndex++} variants={child} className="inline-block">
              &nbsp;
            </motion.span>
          )}
        </span>
      ))}
    </motion.h1>
  );
}
