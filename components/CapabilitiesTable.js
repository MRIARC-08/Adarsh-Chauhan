"use client";
import { motion } from "framer-motion";

export function CapabilitiesTable() {
  const capabilities = [
    {
      category: "Frontend Engineering",
      skills: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion", "Three.js", "TypeScript"]
    },
    {
      category: "Backend & Systems",
      skills: ["Node.js", "Python", "MongoDB", "PostgreSQL", "REST APIs", "GraphQL"]
    },
    {
      category: "AI & Machine Learning",
      skills: ["OpenAI API", "LangChain", "HuggingFace", "Vector Databases", "Prompt Engineering"]
    },
    {
      category: "Tools & DevOps",
      skills: ["Git / GitHub", "Docker", "Vercel", "AWS", "Linux", "CI/CD Pipelines"]
    }
  ];

  return (
    <section className="w-full relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 md:gap-32">
          
          {/* Left Side: Massive Title */}
          <div className="w-full md:w-1/3 shrink-0">
            <h2 className="text-[4rem] md:text-[6rem] font-playfair italic text-white leading-none tracking-tighter sticky top-32">
              Capabilities
            </h2>
          </div>

          {/* Right Side: The Structured Table */}
          <div className="w-full md:w-2/3 flex flex-col border-t border-white/10">
            {capabilities.map((cap, i) => (
              <motion.div 
                key={cap.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group flex flex-col md:flex-row md:items-center justify-between py-10 border-b border-white/10 hover:bg-white/5 transition-colors duration-500 cursor-default px-4 -mx-4 rounded-xl"
              >
                <div className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-6 md:mb-0 shrink-0 md:w-1/3 group-hover:text-zinc-300 transition-colors duration-500">
                  0{i + 1} // {cap.category}
                </div>
                
                <div className="flex flex-wrap gap-x-6 gap-y-2 md:w-2/3 md:justify-end">
                  {cap.skills.map((skill, j) => (
                    <span key={skill} className="text-lg md:text-xl font-light text-zinc-300">
                      {skill}{j < cap.skills.length - 1 ? <span className="text-zinc-700 ml-6 hidden md:inline-block">/</span> : ""}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
