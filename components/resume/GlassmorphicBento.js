"use client";
import { resumeData } from "../../lib/data";

export function GlassmorphicBento() {
  return (
    <div className="w-full max-w-7xl mx-auto p-4 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Header Block */}
        <div className="md:col-span-3 group bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 rounded-3xl p-8 md:p-12 shadow-[0_8px_32px_rgba(0,0,0,0.37)] transition-all duration-500 flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          <div>
            <h1 className="text-5xl md:text-7xl font-playfair italic text-white mb-2 drop-shadow-lg">{resumeData.header.name}</h1>
            <p className="text-zinc-400 font-mono uppercase tracking-widest">{resumeData.header.email} • {resumeData.header.phone}</p>
          </div>
          <div className="flex gap-4">
            {resumeData.header.links.map((link, i) => (
              <a key={i} href={link.url} className="px-6 py-3 bg-white/10 hover:bg-white border border-white/20 hover:border-transparent rounded-full text-sm font-mono text-white hover:text-black transition-all shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Experience Block */}
        <div className="md:col-span-2 group bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 rounded-3xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.37)] transition-all duration-500">
          <h2 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-8 flex items-center gap-4 group-hover:text-zinc-300 transition-colors">
            <span className="w-8 h-[1px] bg-white/20 group-hover:bg-white/40 transition-colors"></span> Experience
          </h2>
          {resumeData.experience.map((exp, i) => (
            <div key={i} className="mb-8 last:mb-0">
              <h3 className="text-2xl text-white mb-1 font-semibold">{exp.role}</h3>
              <p className="text-blue-400 font-mono text-sm mb-4">{exp.company} • {exp.period}</p>
              <ul className="space-y-3">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="text-zinc-400 text-sm leading-relaxed pl-4 border-l border-white/10 hover:border-white/30 transition-colors">{b}</li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                {exp.tech.split(", ").map(t => (
                  <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-zinc-300 hover:bg-white/10 transition-colors">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Block */}
        <div className="md:col-span-1 group bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 rounded-3xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.37)] transition-all duration-500">
          <h2 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-8 flex items-center gap-4 group-hover:text-zinc-300 transition-colors">
            <span className="w-8 h-[1px] bg-white/20 group-hover:bg-white/40 transition-colors"></span> Skills
          </h2>
          <div className="mb-8">
            <h3 className="text-white mb-4 font-semibold tracking-wide">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {resumeData.skills.languages.split(", ").map(s => (
                <span key={s} className="px-4 py-2 bg-white/5 text-zinc-300 border border-white/10 rounded-lg text-sm hover:border-white/30 hover:text-white transition-colors shadow-inner backdrop-blur-sm">{s}</span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-white mb-4 font-semibold tracking-wide">Frameworks</h3>
            <div className="flex flex-wrap gap-2">
              {resumeData.skills.frameworks.split(", ").map(s => (
                <span key={s} className="px-4 py-2 bg-white/5 text-zinc-300 border border-white/10 rounded-lg text-sm hover:border-white/30 hover:text-white transition-colors shadow-inner backdrop-blur-sm">{s}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Block */}
        <div className="md:col-span-2 group bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 rounded-3xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.37)] transition-all duration-500">
          <h2 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-8 flex items-center gap-4 group-hover:text-zinc-300 transition-colors">
            <span className="w-8 h-[1px] bg-white/20 group-hover:bg-white/40 transition-colors"></span> Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {resumeData.projects.map((proj, i) => (
              <div key={i} className="group/card p-6 bg-black/20 hover:bg-black/40 rounded-2xl border border-white/5 hover:border-white/10 transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl text-white font-semibold">{proj.name}</h3>
                  <div className="flex gap-2">
                    {proj.github && (
                      <a href={proj.github} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path></svg>
                      </a>
                    )}
                    {proj.demo !== "#" && (
                      <a href={proj.demo} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white hover:bg-zinc-200 text-black flex items-center justify-center transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path><path d="M15 3h6v6"></path><path d="M10 14L21 3"></path></svg>
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-zinc-500 font-mono text-xs mb-4">{proj.period}</p>
                <ul className="space-y-2 mb-4">
                  {proj.bullets.slice(0, 3).map((b, j) => (
                    <li key={j} className="text-zinc-400 text-sm line-clamp-2 leading-relaxed">• {b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education Block */}
        <div className="md:col-span-1 group bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 rounded-3xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.37)] transition-all duration-500">
          <h2 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-8 flex items-center gap-4 group-hover:text-zinc-300 transition-colors">
            <span className="w-8 h-[1px] bg-white/20 group-hover:bg-white/40 transition-colors"></span> Education
          </h2>
          <div className="space-y-8">
            {resumeData.education.map((edu, i) => (
              <div key={i} className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-white/50 hover:before:bg-white before:rounded-full before:transition-colors before:shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                <div className="text-zinc-500 text-xs mb-1 font-mono">{edu.period}</div>
                <h3 className="text-white leading-tight mb-1 font-semibold">{edu.degree}</h3>
                <div className="text-zinc-400 text-sm">{edu.institution}</div>
                <div className="text-blue-400 text-sm mt-2 font-mono bg-blue-500/10 inline-block px-2 py-1 rounded">{edu.grade}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
