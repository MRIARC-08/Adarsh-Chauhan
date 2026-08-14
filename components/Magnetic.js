"use client";
import { motion } from "framer-motion";

export function Magnetic({ children }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}
