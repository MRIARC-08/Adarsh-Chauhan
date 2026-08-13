"use client";

import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Magnetic } from "./Magnetic";

export function NavBar() {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Work", href: "/work" },
    { name: "Resume", href: "/resume" },
  ];

  return (
    <motion.div 
      className="fixed top-8 left-0 right-0 z-50 flex items-center justify-center gap-4 px-6"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: -100 }
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
    >
      <Link href="/" className="w-11 h-11 flex items-center justify-center font-bold text-lg text-white bg-white/5 backdrop-blur-md border border-white/10 rounded-xl hover:bg-white/10 transition-colors">
        A.
      </Link>
      <nav className="flex items-center h-11 px-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-full">
        <div className="flex gap-8 text-[0.85rem] font-normal text-zinc-400">
          {navLinks.map((link) => (
            <Magnetic key={link.name}>
              <Link href={link.href} className="hover:text-white transition-colors">
                {link.name}
              </Link>
            </Magnetic>
          ))}
        </div>
      </nav>
      <button className="w-11 h-11 flex items-center justify-center text-zinc-400 bg-white/5 backdrop-blur-md border border-white/10 rounded-full hover:bg-white/10 hover:text-white transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
          <line x1="23" y1="9" x2="17" y2="15"></line>
          <line x1="17" y1="9" x2="23" y2="15"></line>
        </svg>
      </button>
    </motion.div>
  );
}
