"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export function PageTransition({ children }) {
  const pathname = usePathname();
  const [isAnimating, setIsAnimating] = useState(true);

  // Determine the display text based on the route
  const getRouteName = (path) => {
    if (path === "/") return "PORTFOLIO";
    if (path === "/about") return "ABOUT";
    if (path === "/resume") return "RESUME";
    if (path === "/work") return "WORK";
    if (path === "/github-activity") return "GITHUB";
    if (path.startsWith("/work/")) return "PROJECT";
    return "LOADING";
  };

  const routeName = getRouteName(pathname);

  // Reset animation state when pathname changes
  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      <AnimatePresence>
        {isAnimating && (
          <motion.div
            key={pathname}
            className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden pointer-events-none"
            initial={{ opacity: 1 }}
            animate={{ opacity: [1, 1, 0] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, times: [0, 0.8, 1], ease: "easeInOut" }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 80, opacity: [0, 1, 1, 0] }}
              transition={{ 
                duration: 1.5, 
                ease: [0.76, 0, 0.24, 1],
                times: [0, 0.2, 0.6, 1]
              }}
              className="text-[10vw] font-black tracking-tighter text-white whitespace-nowrap mix-blend-difference"
            >
              {routeName}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* The actual page content is rendered immediately, but hidden behind the overlay initially */}
      {children}
    </>
  );
}
