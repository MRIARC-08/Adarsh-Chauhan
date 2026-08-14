"use client";
import { resumeData } from "../../lib/data";

export function CyberneticBlueprint() {
  return (
    <div className="w-full max-w-5xl mx-auto p-4 md:p-8 font-mono text-cyan-500 selection:bg-cyan-900 selection:text-cyan-100 relative">
      {/* Background grid */}
      <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: "linear-gradient(#06b6d4 1px, transparent 1px), linear-gradient(90deg, #06b6d4 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>
      
      <div className="relative z-10 bg-black/80 backdrop-blur-sm border border-cyan-500/30 p-8 shadow-[0_0_50px_rgba(6,182,212,0.1)]">
        
        <header className="border-b-2 border-cyan-500/50 pb-6 mb-8 flex flex-col md:flex-row justify-between items-end">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-widest uppercase text-cyan-400 drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]">{resumeData.header.name}</h1>
            <p className="text-cyan-600 mt-2">ID: AC-2026-ENG // STATUS: ACTIVE</p>
          </div>
          <div className="text-right text-sm mt-4 md:mt-0">
            <p>{resumeData.header.phone}</p>
            <p>{resumeData.header.email}</p>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-12">
            
            <section className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-[2px] bg-cyan-900"></div>
              <h2 className="text-xl font-bold bg-cyan-900/40 inline-block px-4 py-1 mb-6 border-l-4 border-cyan-500">EXPERIENCE_MODULE</h2>
              {resumeData.experience.map((exp, i) => (
                <div key={i} className="mb-8 border border-cyan-900/50 p-4 bg-cyan-950/10">
                  <div className="flex justify-between items-center mb-4 border-b border-cyan-900/50 pb-2">
                    <h3 className="text-lg text-cyan-300">{exp.role} @ {exp.company}</h3>
                    <span className="text-xs text-cyan-600">[{exp.period}]</span>
                  </div>
                  <ul className="space-y-2 text-sm text-cyan-100/70">
                    {exp.bullets.map((b, j) => <li key={j} className="flex gap-2"><span>&gt;</span> {b}</li>)}
                  </ul>
                  <div className="mt-4 text-xs text-cyan-600 bg-cyan-950/30 p-2">SYS_TECH: {exp.tech}</div>
                </div>
              ))}
            </section>

            <section className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-[2px] bg-cyan-900"></div>
              <h2 className="text-xl font-bold bg-cyan-900/40 inline-block px-4 py-1 mb-6 border-l-4 border-cyan-500">PROJECT_REGISTRY</h2>
              {resumeData.projects.map((proj, i) => (
                <div key={i} className="mb-6 border-l-2 border-cyan-700 pl-4">
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-lg text-cyan-300">{proj.name}</h3>
                    <span className="text-xs text-cyan-600">[{proj.period}]</span>
                  </div>
                  <ul className="space-y-1 text-sm text-cyan-100/70">
                    {proj.bullets.slice(0, 3).map((b, j) => <li key={j}>- {b}</li>)}
                  </ul>
                </div>
              ))}
            </section>

          </div>

          {/* Side Column */}
          <div className="space-y-12">
            
            <section>
              <h2 className="text-xl font-bold bg-cyan-900/40 inline-block px-4 py-1 mb-6 border-l-4 border-cyan-500">SKILLS_MATRIX</h2>
              <div className="space-y-4">
                <div className="border border-cyan-900/50 p-3">
                  <h3 className="text-xs text-cyan-600 mb-2">CORE_LANGUAGES</h3>
                  <p className="text-sm text-cyan-300">{resumeData.skills.languages}</p>
                </div>
                <div className="border border-cyan-900/50 p-3">
                  <h3 className="text-xs text-cyan-600 mb-2">FRAMEWORKS</h3>
                  <p className="text-sm text-cyan-300 leading-relaxed">{resumeData.skills.frameworks}</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold bg-cyan-900/40 inline-block px-4 py-1 mb-6 border-l-4 border-cyan-500">EDUCATION_LOG</h2>
              <div className="space-y-4">
                {resumeData.education.map((edu, i) => (
                  <div key={i} className="border-t border-cyan-900/50 pt-2">
                    <h3 className="text-sm text-cyan-300">{edu.degree}</h3>
                    <p className="text-xs text-cyan-500 mt-1">{edu.institution}</p>
                    <div className="flex justify-between text-xs text-cyan-600 mt-2">
                      <span>{edu.period}</span>
                      <span>{edu.grade}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </div>
        </div>

      </div>
    </div>
  );
}
