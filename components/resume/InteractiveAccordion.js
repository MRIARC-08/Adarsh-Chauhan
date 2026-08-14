"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { resumeData } from "../../lib/data";

function AccordionItem({ title, subtitle, isOpen, onClick, children }) {
  return (
    <div className="border-b border-zinc-800">
      <button 
        onClick={onClick}
        className="w-full py-6 flex justify-between items-center text-left hover:bg-white/5 transition-colors px-4 rounded-lg"
      >
        <div>
          <h2 className="text-xl md:text-3xl font-medium text-white">{title}</h2>
          {subtitle && <p className="text-zinc-500 mt-1">{subtitle}</p>}
        </div>
        <div className="text-white text-3xl font-light transform transition-transform duration-300" style={{ rotate: isOpen ? "45deg" : "0deg" }}>
          +
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden px-4"
          >
            <div className="py-6">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function InteractiveAccordion() {
  const [openSection, setOpenSection] = useState("experience");

  const toggle = (id) => setOpenSection(openSection === id ? null : id);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-5xl text-white font-medium mb-4 tracking-tight">{resumeData.header.name}</h1>
        <p className="text-zinc-400 font-mono">{resumeData.header.email}</p>
      </div>

      <div className="space-y-2">
        <AccordionItem 
          title="Experience" 
          subtitle="Internships & Work History"
          isOpen={openSection === "experience"}
          onClick={() => toggle("experience")}
        >
          {resumeData.experience.map((exp, i) => (
            <div key={i} className="mb-8 last:mb-0">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl text-white">{exp.role}</h3>
                  <p className="text-zinc-400">{exp.company} • {exp.location}</p>
                </div>
                <span className="text-zinc-500 text-sm font-mono">{exp.period}</span>
              </div>
              <ul className="space-y-2 text-zinc-300">
                {exp.bullets.map((b, j) => <li key={j}>• {b}</li>)}
              </ul>
            </div>
          ))}
        </AccordionItem>

        <AccordionItem 
          title="Projects" 
          subtitle="Featured Technical Work"
          isOpen={openSection === "projects"}
          onClick={() => toggle("projects")}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resumeData.projects.map((proj, i) => (
              <div key={i} className="bg-white/5 p-6 rounded-2xl">
                <h3 className="text-xl text-white mb-2">{proj.name}</h3>
                <p className="text-zinc-400 text-sm mb-4">{proj.description}</p>
                <div className="flex gap-4 text-sm font-mono text-blue-400">
                  <a href={proj.github} className="hover:underline">GitHub</a>
                  {proj.demo !== "#" && <a href={proj.demo} className="hover:underline">Demo</a>}
                </div>
              </div>
            ))}
          </div>
        </AccordionItem>

        <AccordionItem 
          title="Education" 
          subtitle="Academic History"
          isOpen={openSection === "education"}
          onClick={() => toggle("education")}
        >
          <div className="space-y-6">
            {resumeData.education.map((edu, i) => (
              <div key={i} className="flex justify-between items-center border-l-2 border-zinc-700 pl-4 py-2">
                <div>
                  <h3 className="text-lg text-white">{edu.degree}</h3>
                  <p className="text-zinc-400">{edu.institution}</p>
                </div>
                <div className="text-right">
                  <p className="text-zinc-300">{edu.grade}</p>
                  <p className="text-zinc-500 text-sm">{edu.period}</p>
                </div>
              </div>
            ))}
          </div>
        </AccordionItem>

        <AccordionItem 
          title="Skills" 
          subtitle="Technical Proficiency"
          isOpen={openSection === "skills"}
          onClick={() => toggle("skills")}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-zinc-400 mb-4 uppercase tracking-widest text-sm">Languages</h3>
              <p className="text-white text-lg leading-relaxed">{resumeData.skills.languages}</p>
            </div>
            <div>
              <h3 className="text-zinc-400 mb-4 uppercase tracking-widest text-sm">Frameworks</h3>
              <p className="text-white text-lg leading-relaxed">{resumeData.skills.frameworks}</p>
            </div>
          </div>
        </AccordionItem>
      </div>
    </div>
  );
}
