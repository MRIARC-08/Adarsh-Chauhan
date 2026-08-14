"use client";
import React from "react";
import { motion } from "framer-motion";
import { Cloud, fetchSimpleIcons, renderSimpleIcon } from "react-icon-cloud";

const slugs = [
  "nextdotjs",
  "react",
  "javascript",
  "typescript",
  "tailwindcss",
  "nodedotjs",
  "express",
  "mongodb",
  "postgresql",
  "git",
  "github",
  "framer",
  "vercel",
  "html5",
  "css3",
  "firebase",
  "figma",
  "python",
  "docker",
  "amazons3",
  "redis"
];

const cloudProps = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    },
  },
  options: {
    reverse: false,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.03, -0.03],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.03,
    minSpeed: 0.01,
  },
};

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

  const [data, setData] = React.useState();

  React.useEffect(() => {
    fetchSimpleIcons({ slugs }).then(setData);
  }, []);

  const renderedIcons = React.useMemo(() => {
    if (!data) return null;
    return Object.values(data.simpleIcons).map((icon) =>
      renderSimpleIcon({
        icon,
        bgHex: "#0a0a0a",
        fallbackHex: "#ffffff",
        minContrastRatio: 1.2,
        size: 42,
        aProps: {
          href: undefined,
          target: undefined,
          rel: undefined,
          onClick: (e) => e.preventDefault(),
        },
      })
    );
  }, [data]);

  return (
    <section className="w-full relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 md:gap-32">
          
          {/* Left Side: Massive Title & Tech Sphere */}
          <div className="w-full md:w-1/3 shrink-0">
            <div className="sticky top-32 flex flex-col gap-16">
              <h2 className="text-[4rem] md:text-[6rem] font-playfair italic text-white leading-none tracking-tighter">
                Capabilities
              </h2>
              
              <div className="hidden md:flex w-full max-w-[300px] justify-center items-center opacity-70 hover:opacity-100 transition-opacity duration-500">
                {renderedIcons && (
                  <Cloud {...cloudProps}>
                    {renderedIcons}
                  </Cloud>
                )}
              </div>
            </div>
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
            
            {/* Mobile-only Tech Sphere */}
            <div className="md:hidden w-full flex justify-center items-center opacity-70 hover:opacity-100 transition-opacity duration-500 mt-16 pt-8 border-t border-white/10">
              {renderedIcons && (
                <Cloud {...cloudProps}>
                  {renderedIcons}
                </Cloud>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
