"use client";

import { Magnetic } from "./Magnetic";
import Link from "next/link";
import { useState } from "react";
import { ContactModal } from "./ContactModal";

export function UndergroundFooter() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <footer className="sticky bottom-0 h-[80vh] w-full bg-zinc-950 text-zinc-300 flex flex-col justify-between pt-24 pb-8 px-6 z-0 border-t border-white/5">
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-start md:items-end flex-grow">
          <div className="flex flex-col gap-6">
            <h2 className="text-sm font-mono text-zinc-500 uppercase tracking-widest">Available for Freelance</h2>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="text-left text-[10vw] font-playfair italic leading-none tracking-tighter text-white hover:opacity-80 transition-opacity"
            >
              Let&apos;s Talk.
            </button>
          </div>
          <div className="pb-8">
            <Magnetic>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center w-32 h-32 md:w-48 md:h-48 bg-white rounded-full text-black hover:scale-105 transition-transform duration-300"
              >
                <span className="text-sm font-mono uppercase font-bold tracking-widest text-center px-4">
                  Get in<br/>Touch
                </span>
              </button>
            </Magnetic>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-center text-xs font-mono uppercase tracking-widest text-zinc-600 pt-16 border-t border-white/5">
          <div className="flex gap-8 mb-4 md:mb-0">
            <Link href="https://github.com/MRIARC-08" target="_blank" className="hover:text-white transition-colors">GitHub</Link>
            <Link href="https://linkedin.com/in/adarsh-chauhan" target="_blank" className="hover:text-white transition-colors">LinkedIn</Link>
            <Link href="https://twitter.com/adarsh_chauhan" target="_blank" className="hover:text-white transition-colors">Twitter</Link>
          </div>
          <div>
            © 2026 Adarsh Chauhan. All Rights Reserved.
          </div>
        </div>
      </footer>
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
