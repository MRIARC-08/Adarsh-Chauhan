import { NavBar } from "../../components/NavBar";
import Link from "next/link";
import { experience, education } from "../../lib/data";
import { TextReveal } from "../../components/TextReveal";
import { Magnetic } from "../../components/Magnetic";

export default function Resume() {
  return (
    <main className="bg-black min-h-screen text-zinc-300 font-sans selection:bg-white selection:text-black">
      <NavBar />
      <div className="max-w-[1200px] mx-auto px-6 py-32 md:py-48 relative z-10">
        
        {/* Header Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-white/20 pb-12 mb-16">
          <div className="md:col-span-3">
            <TextReveal text="Curriculum Vitae" className="text-6xl md:text-8xl font-playfair italic text-white tracking-tight leading-none mb-4" />
            <p className="text-sm font-mono text-zinc-500 uppercase tracking-widest mt-8">Document Ref: AC-2026-ENG</p>
          </div>
          <div className="md:col-span-1 flex items-end justify-start md:justify-end">
            <Magnetic strength={15}>
              <Link href="/docs/adarsh-chauhan-resume.pdf" target="_blank" className="group flex items-center gap-4 text-xs font-mono uppercase tracking-widest text-white hover:text-zinc-400 transition-colors">
                <span className="w-8 h-[1px] bg-white group-hover:bg-zinc-400 transition-colors"></span>
                Download PDF
              </Link>
            </Magnetic>
          </div>
        </div>

        {/* Blueprint Grid Layout: Experience */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-x-8 mb-32">
          <div className="md:col-span-3">
            <h3 className="text-xs font-mono text-white/40 uppercase tracking-widest sticky top-32">01. Experience</h3>
          </div>
          <div className="md:col-span-9 flex flex-col gap-24">
            {experience.map((exp, i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-8 gap-8 relative group">
                <div className="absolute -top-4 -left-4 w-2 h-2 border-t border-l border-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute -bottom-4 -right-4 w-2 h-2 border-b border-r border-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="md:col-span-2">
                  <div className="text-xs font-mono text-zinc-500 uppercase mb-2">{exp.period}</div>
                  <div className="text-xs font-mono text-white/30 uppercase">{exp.label}</div>
                </div>
                
                <div className="md:col-span-6">
                  <h4 className="text-2xl md:text-3xl font-playfair italic text-white mb-6">{exp.role}</h4>
                  <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light mb-8 max-w-2xl">{exp.description}</p>
                  <div className="flex flex-wrap gap-x-6 gap-y-2">
                    {exp.stack.map(s => <span key={s} className="text-xs font-mono text-zinc-500 uppercase tracking-wider">{s}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Blueprint Grid Layout: Education */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-x-8">
          <div className="md:col-span-3">
            <h3 className="text-xs font-mono text-white/40 uppercase tracking-widest sticky top-32">02. Education</h3>
          </div>
          <div className="md:col-span-9 flex flex-col gap-24">
            {education.map((edu, i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-8 gap-8 relative group">
                <div className="absolute -top-4 -left-4 w-2 h-2 border-t border-l border-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute -bottom-4 -right-4 w-2 h-2 border-b border-r border-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="md:col-span-2">
                  <div className="text-xs font-mono text-zinc-500 uppercase mb-2">{edu.period}</div>
                  <div className="text-xs font-mono text-white/30 uppercase">{edu.grade}</div>
                </div>
                
                <div className="md:col-span-6">
                  <h4 className="text-2xl md:text-3xl font-playfair italic text-white mb-6">{edu.degree}</h4>
                  <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light mb-8 max-w-2xl">{edu.school}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
