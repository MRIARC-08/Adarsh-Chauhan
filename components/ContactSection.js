"use client";

import { motion } from "framer-motion";
import { useState, useTransition } from "react";
import { sendEmail } from "../app/actions/sendEmail";

export function ContactSection() {
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState("idle"); // "idle" | "success" | "error"
  const [errorMessage, setErrorMessage] = useState("");

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

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1 }}
      className="w-full relative overflow-hidden py-32 px-8 flex flex-col items-center justify-center border-t border-white/5"
    >
      <div className="absolute inset-0 pointer-events-none mix-blend-screen opacity-20">
        <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[100vw] h-[50vh] bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.1)_0%,transparent_70%)] blur-3xl" />
      </div>

      <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center z-10">
        <motion.h2 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tighter text-white mb-8"
          style={{ fontFamily: "var(--font-geist-sans)" }}
        >
          Let&apos;s <span className="font-playfair italic text-zinc-400">Talk</span>
        </motion.h2>

        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-zinc-400 max-w-lg mb-16"
        >
          Have a project in mind, or just want to say hi? I&apos;m currently open to new opportunities and collaborations.
        </motion.p>

        {status === "success" ? (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-full max-w-xl py-12 flex flex-col items-center border border-white/10 bg-white/5 rounded-3xl backdrop-blur-md"
          >
            <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h3 className="text-2xl text-white font-medium mb-2">Message Sent</h3>
            <p className="text-zinc-400 text-sm">I&apos;ll get back to you as soon as possible.</p>
            <button 
              onClick={() => setStatus("idle")}
              className="mt-8 px-6 py-2 text-sm text-zinc-400 border border-zinc-700 rounded-full hover:bg-white/5 transition-colors"
            >
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.form 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-full max-w-xl flex flex-col gap-8"
            onSubmit={handleSubmit}
          >
            <div className="relative group">
              <input 
                type="text" 
                name="name"
                required
                placeholder="Your Name" 
                className="w-full bg-transparent border-b border-white/20 pb-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-white transition-colors"
              />
            </div>
            
            <div className="relative group">
              <input 
                type="email" 
                name="email"
                required
                placeholder="Email Address" 
                className="w-full bg-transparent border-b border-white/20 pb-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-white transition-colors"
              />
            </div>

            <div className="relative group">
              <textarea 
                name="message"
                required
                placeholder="Message" 
                rows={4}
                className="w-full bg-transparent border-b border-white/20 pb-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-white transition-colors resize-none"
              />
            </div>

            {status === "error" && (
              <div className="text-red-400 text-sm text-left">{errorMessage}</div>
            )}

            <button 
              disabled={isPending}
              className={`self-end mt-4 px-8 py-4 font-medium tracking-wide transition-all duration-300 rounded-full flex items-center gap-2 ${
                isPending 
                  ? "bg-zinc-800 text-zinc-400 cursor-not-allowed border border-zinc-700" 
                  : "bg-white text-black hover:bg-zinc-200"
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
          </motion.form>
        )}
      </div>
    </motion.section>
  );
}
