"use client";

import { motion, AnimatePresence, useMotionValue, useMotionTemplate } from "framer-motion";
import { useState, useTransition, useEffect } from "react";
import { createPortal } from "react-dom";
import { sendEmail } from "../app/actions/sendEmail";
import { Magnetic } from "./Magnetic";

// Custom floating label input component
const InputField = ({ name, type, label, isTextArea = false }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  return (
    <div className="relative group text-left w-full mt-6">
      {/* Floating Label */}
      <motion.label
        initial={false}
        animate={{
          y: isFocused || hasValue ? -24 : 0,
          scale: isFocused || hasValue ? 0.85 : 1,
          color: isFocused ? "#ffffff" : "#71717a" // zinc-500
        }}
        className="absolute left-0 top-0 pointer-events-none origin-left transition-colors"
      >
        {label}
      </motion.label>
      
      {isTextArea ? (
        <textarea 
          name={name}
          required
          onFocus={() => setIsFocused(true)}
          onBlur={(e) => {
            setIsFocused(false);
            setHasValue(e.target.value.length > 0);
          }}
          onChange={(e) => setHasValue(e.target.value.length > 0)}
          rows={3}
          className="w-full bg-transparent border-b border-white/10 pb-2 text-white focus:outline-none resize-none"
        />
      ) : (
        <input 
          type={type} 
          name={name}
          required
          onFocus={() => setIsFocused(true)}
          onBlur={(e) => {
            setIsFocused(false);
            setHasValue(e.target.value.length > 0);
          }}
          onChange={(e) => setHasValue(e.target.value.length > 0)}
          className="w-full bg-transparent border-b border-white/10 pb-2 text-white focus:outline-none"
        />
      )}

      {/* Animated Focus Border */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isFocused ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-0 left-0 right-0 h-[1px] bg-white origin-center"
      />
    </div>
  );
};

export function ContactModal({ isOpen, onClose }) {
  const [mounted, setMounted] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState("idle"); // "idle" | "success" | "error"
  const [errorMessage, setErrorMessage] = useState("");

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const spotlightBackground = useMotionTemplate`radial-gradient(800px circle at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.06), transparent 40%)`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    startTransition(async () => {
      setStatus("idle");
      setErrorMessage("");
      
      const result = await sendEmail(formData);
      
      if (result?.error) {
        setStatus("error");
        setErrorMessage(result.error);
      } else {
        setStatus("success");
      }
    });
  };

  if (!mounted) return null;

  const titleText = "Let's Talk".split("");

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
        >
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Content */}
          <motion.div 
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onMouseMove={handleMouseMove}
            className="relative group w-full max-w-xl bg-zinc-950/80 backdrop-blur-2xl border border-white/5 rounded-[2rem] p-8 md:p-12 shadow-2xl overflow-hidden"
          >
            {/* Spotlight Cursor Tracking */}
            <motion.div
              className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition duration-500 group-hover:opacity-100 z-0"
              style={{ background: spotlightBackground }}
            />

            {/* Brutalist Noise Texture */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-overlay z-0">
              <svg width="100%" height="100%">
                <filter id="noise">
                  <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
                </filter>
                <rect width="100%" height="100%" filter="url(#noise)" />
              </svg>
            </div>

            {/* Close Button */}
            <div className="absolute top-6 right-6 z-20">
              <Magnetic>
                <button 
                  onClick={onClose}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors border border-white/5"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </Magnetic>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center">
              {/* Cinematic Staggering Text Reveal */}
              <h2 className="text-4xl md:text-5xl font-light tracking-tighter text-white mb-4 flex justify-center" style={{ fontFamily: "var(--font-geist-sans)" }}>
                {titleText.map((char, i) => {
                  const isPlayfair = i > 5; // "Talk" is Playfair
                  return (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.04 + 0.1, ease: [0.22, 1, 0.36, 1] }}
                      className={isPlayfair ? "font-playfair italic text-zinc-400" : ""}
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  );
                })}
              </h2>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-sm md:text-base text-zinc-400 mb-8 max-w-xs"
              >
                Have a project in mind, or just want to say hi? I&apos;ll get back to you as soon as possible.
              </motion.p>

              {status === "success" ? (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="w-full py-12 flex flex-col items-center"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl text-white font-medium mb-2">Message Sent</h3>
                  <p className="text-zinc-400 text-sm">Thank you for reaching out!</p>
                  
                  <Magnetic>
                    <button 
                      onClick={onClose}
                      className="mt-8 px-8 py-3 text-sm font-medium text-black bg-white rounded-full hover:bg-zinc-200 transition-colors"
                    >
                      Close
                    </button>
                  </Magnetic>
                </motion.div>
              ) : (
                <form className="w-full flex flex-col gap-6" onSubmit={handleSubmit}>
                  <InputField name="name" type="text" label="Your Name" />
                  <InputField name="email" type="email" label="Email Address" />
                  <InputField name="message" label="Message" isTextArea={true} />

                  {status === "error" && (
                    <div className="text-red-400 text-sm text-left mt-2">{errorMessage}</div>
                  )}

                  <div className="mt-8 flex justify-center w-full">
                    <Magnetic>
                      <button 
                        disabled={isPending}
                        className={`px-10 py-4 font-medium tracking-wide transition-all duration-300 rounded-full flex justify-center items-center gap-2 ${
                          isPending 
                            ? "bg-zinc-800 text-zinc-400 cursor-not-allowed border border-zinc-700" 
                            : "bg-white text-black hover:bg-zinc-200 hover:scale-[1.02]"
                        }`}
                      >
                        {isPending ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-zinc-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </>
                        ) : (
                          "Send Message"
                        )}
                      </button>
                    </Magnetic>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
