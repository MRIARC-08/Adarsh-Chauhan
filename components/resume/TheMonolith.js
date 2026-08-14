"use client";
import { resumeData } from "../../lib/data";

export function TheMonolith() {
  return (
    <div className="w-full max-w-3xl mx-auto px-6 py-12 md:py-24 bg-zinc-50 text-zinc-900 font-sans">
      
      <header className="mb-24 text-center">
        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6">{resumeData.header.name}</h1>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm font-bold uppercase tracking-widest text-zinc-500">
          <span>{resumeData.header.phone}</span>
          <span>{resumeData.header.email}</span>
        </div>
      </header>

      <section className="mb-24">
        <h2 className="text-4xl font-black uppercase tracking-tighter border-b-4 border-zinc-900 pb-4 mb-8">Experience</h2>
        {resumeData.experience.map((exp, i) => (
          <div key={i} className="mb-12">
            <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-4">
              <h3 className="text-2xl font-bold uppercase">{exp.role} — <span className="font-light">{exp.company}</span></h3>
              <span className="font-mono text-sm font-bold mt-2 md:mt-0">{exp.period}</span>
            </div>
            <ul className="space-y-3 mb-4 list-square pl-5">
              {exp.bullets.map((b, j) => (
                <li key={j} className="text-zinc-700 leading-relaxed">{b}</li>
              ))}
            </ul>
            <p className="font-mono text-xs uppercase tracking-widest font-bold text-zinc-500">Tech: {exp.tech}</p>
          </div>
        ))}
      </section>

      <section className="mb-24">
        <h2 className="text-4xl font-black uppercase tracking-tighter border-b-4 border-zinc-900 pb-4 mb-8">Projects</h2>
        {resumeData.projects.map((proj, i) => (
          <div key={i} className="mb-12">
            <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-4">
              <h3 className="text-2xl font-bold uppercase">{proj.name}</h3>
              <span className="font-mono text-sm font-bold mt-2 md:mt-0">{proj.period}</span>
            </div>
            <ul className="space-y-3 mb-4 list-square pl-5">
              {proj.bullets.map((b, j) => (
                <li key={j} className="text-zinc-700 leading-relaxed">{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="mb-24">
        <h2 className="text-4xl font-black uppercase tracking-tighter border-b-4 border-zinc-900 pb-4 mb-8">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resumeData.education.map((edu, i) => (
            <div key={i}>
              <h3 className="text-xl font-bold uppercase mb-2 leading-tight">{edu.degree}</h3>
              <p className="text-zinc-700 mb-2">{edu.institution}</p>
              <p className="font-mono text-sm font-bold">{edu.period} <span className="mx-2">|</span> {edu.grade}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-24">
        <h2 className="text-4xl font-black uppercase tracking-tighter border-b-4 border-zinc-900 pb-4 mb-8">Skills</h2>
        <div className="mb-4">
          <h3 className="text-xl font-bold uppercase mb-2">Languages</h3>
          <p className="text-zinc-700 text-lg">{resumeData.skills.languages}</p>
        </div>
        <div>
          <h3 className="text-xl font-bold uppercase mb-2">Frameworks</h3>
          <p className="text-zinc-700 text-lg">{resumeData.skills.frameworks}</p>
        </div>
      </section>

    </div>
  );
}
