import { NavBar } from "../../components/NavBar";
import { motion } from "framer-motion";

export default function About() {
  return (
    <main className="bg-black min-h-screen text-zinc-300 relative">
      <NavBar />
      
      {/* Sticky Masked Title */}
      <div className="absolute inset-0 pointer-events-none z-10 hidden md:block">
        <div className="sticky top-0 w-full h-screen flex items-center pl-6 max-w-[1400px] mx-auto mix-blend-difference text-white">
          <h1 className="text-[10rem] font-playfair italic tracking-tighter leading-[0.8] opacity-90">
            Adarsh
            <br />
            <span className="font-sans font-light not-italic text-[8rem] text-white">Chauhan</span>
          </h1>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 py-32 md:py-64 flex flex-col md:flex-row gap-16 md:gap-32 relative z-0">
        
        {/* Mobile Title (Hidden on Desktop) */}
        <div className="md:hidden relative">
          <h1 className="text-6xl font-playfair italic text-white tracking-tight leading-none mb-6">
            Adarsh
            <br />
            <span className="font-sans font-light not-italic text-4xl text-zinc-500">Chauhan</span>
          </h1>
          <p className="text-sm font-bold text-zinc-500 uppercase tracking-widest mt-12">Product Engineer</p>
        </div>

        {/* Empty Space for Desktop layout */}
        <div className="hidden md:block md:w-1/3"></div>

        {/* Right Side: Editorial Content scrolling behind the sticky title */}
        <div className="md:w-2/3 flex flex-col gap-48">
          
          <div className="space-y-12 text-2xl md:text-4xl font-light text-zinc-400 leading-snug">
            <p className="text-white">
              I am a product engineer focused on full-stack development, open-source software, and applied AI systems. I believe in building product systems from end-to-end—spanning user flows, feature ownership, and maintainable software design.
            </p>
            <p className="opacity-75">
              Rather than isolated logo lists, I prefer skills shown through production features. My strongest overlap is full-stack product work combined with applied AI experimentation.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-playfair italic text-white mb-16 border-b border-white/10 pb-8">Engineering Focus</h2>
            <div className="grid grid-cols-1 gap-24">
              <div className="flex flex-col gap-4">
                <h3 className="text-white font-sans text-3xl font-medium tracking-tight">Product Systems</h3>
                <p className="text-zinc-500 text-xl font-light leading-relaxed max-w-2xl">End-to-end product thinking across user flows, feature ownership, debugging, deployment, and maintainable software design. Building resilient systems like URL-Shortner and Wondrr's dashboard migration.</p>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-white font-sans text-3xl font-medium tracking-tight">Applied AI & Open Source</h3>
                <p className="text-zinc-500 text-xl font-light leading-relaxed max-w-2xl">Exploring AI systems that produce structured, reviewable, product-useful outputs (e.g. GraphRAG, DevLens). Serving as a core open-source maintainer and Project Admin for VidyaSetu during GSSoC 2026.</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </main>
  );
}
