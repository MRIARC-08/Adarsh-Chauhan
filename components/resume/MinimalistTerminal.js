"use client";
import { resumeData } from "../../lib/data";

export function MinimalistTerminal() {
  return (
    <div className="w-full max-w-4xl mx-auto bg-black border border-zinc-800 rounded-lg p-6 md:p-12 font-mono text-zinc-300 text-sm md:text-base leading-relaxed shadow-2xl">
      <div className="flex items-center gap-2 mb-8 border-b border-zinc-800 pb-4">
        <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
        <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
        <span className="ml-4 text-zinc-600 text-xs">guest@adarsh-macbook:~/resume$ cat resume.md</span>
      </div>

      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl text-white font-bold mb-4">{resumeData.header.name}</h1>
        <div className="flex flex-wrap gap-4 text-zinc-400">
          <span>{resumeData.header.email}</span>
          <span>|</span>
          <span>{resumeData.header.phone}</span>
        </div>
        <div className="flex flex-wrap gap-4 mt-2 text-green-400">
          {resumeData.header.links.map((link, i) => (
            <a key={i} href={link.url} className="hover:underline">[{link.label}]</a>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div className="mb-12">
        <h2 className="text-xl text-white mb-6 border-b border-zinc-800 pb-2">## INTERNSHIPS</h2>
        {resumeData.experience.map((exp, i) => (
          <div key={i} className="mb-8">
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="text-lg text-green-400">{exp.role}</h3>
              <span className="text-zinc-500 text-xs">{exp.period}</span>
            </div>
            <div className="text-white mb-4">{exp.company} — {exp.location}</div>
            <ul className="list-none space-y-2 text-zinc-400">
              {exp.bullets.map((bullet, j) => (
                <li key={j} className="flex gap-4">
                  <span className="text-zinc-600">&gt;</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 text-zinc-500"><span className="text-zinc-300">Tech:</span> {exp.tech}</div>
          </div>
        ))}
      </div>

      {/* Projects */}
      <div className="mb-12">
        <h2 className="text-xl text-white mb-6 border-b border-zinc-800 pb-2">## PROJECTS</h2>
        {resumeData.projects.map((proj, i) => (
          <div key={i} className="mb-8">
            <div className="flex justify-between items-baseline mb-2">
              <div className="flex items-center gap-4">
                <h3 className="text-lg text-green-400">{proj.name}</h3>
                <div className="flex gap-2 text-xs text-blue-400">
                  <a href={proj.github} className="hover:underline">(Github)</a>
                  <a href={proj.demo} className="hover:underline">(Demo)</a>
                </div>
              </div>
              <span className="text-zinc-500 text-xs">{proj.period}</span>
            </div>
            {proj.description && <p className="text-zinc-300 mb-4">{proj.description}</p>}
            <ul className="list-none space-y-2 text-zinc-400">
              {proj.bullets.map((bullet, j) => (
                <li key={j} className="flex gap-4">
                  <span className="text-zinc-600">&gt;</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            {proj.techStack && <div className="mt-4 text-zinc-500"><span className="text-zinc-300">Tech Stack:</span> {proj.techStack}</div>}
          </div>
        ))}
      </div>

      {/* Skills */}
      <div className="mb-12">
        <h2 className="text-xl text-white mb-6 border-b border-zinc-800 pb-2">## SKILLS</h2>
        <div className="space-y-2">
          <div><span className="text-white w-48 inline-block">Computer Language:</span> <span className="text-green-400">{resumeData.skills.languages}</span></div>
          <div><span className="text-white w-48 inline-block">Frameworks & Libs:</span> <span className="text-green-400">{resumeData.skills.frameworks}</span></div>
        </div>
      </div>

      {/* Education */}
      <div className="mb-12">
        <h2 className="text-xl text-white mb-6 border-b border-zinc-800 pb-2">## EDUCATION</h2>
        {resumeData.education.map((edu, i) => (
          <div key={i} className="mb-6 flex flex-col md:flex-row justify-between items-start md:items-baseline">
            <div>
              <div className="text-white">{edu.degree}</div>
              <div className="text-zinc-400">{edu.institution}</div>
            </div>
            <div className="text-right mt-2 md:mt-0">
              <div className="text-zinc-500 text-xs">{edu.period}</div>
              <div className="text-green-400 text-xs">{edu.grade}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 mt-12 pt-4 border-t border-zinc-800">
        <span className="text-zinc-600">guest@adarsh-macbook:~/resume$</span>
        <span className="w-2 h-4 bg-white animate-pulse" />
      </div>
    </div>
  );
}
