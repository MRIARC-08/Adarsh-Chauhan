"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Magnetic } from "./Magnetic";
import { AudioController } from "./AudioController";

export function NavBar() {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();

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
      <Link href="/" className="px-6 h-11 flex items-center justify-center font-bold text-sm tracking-widest uppercase text-white bg-white/5 backdrop-blur-md border border-white/10 rounded-full hover:bg-white/10 transition-colors relative">
        Adarsh
        {pathname === "/" && (
          <motion.div
            layoutId="nav-indicator"
            className="absolute -bottom-2 w-1 h-1 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}
      </Link>
      <nav className="flex items-center h-11 px-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-full">
        <div className="flex gap-8 text-[0.85rem] font-normal">
          {navLinks.map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <Magnetic key={link.name}>
                <Link 
                  href={link.href} 
                  className={`relative flex flex-col items-center justify-center transition-colors ${isActive ? "text-white" : "text-zinc-400 hover:text-white"}`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute -bottom-2 w-1 h-1 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              </Magnetic>
            );
          })}
        </div>
      </nav>
      <AudioController />
    </motion.div>
  );
}
