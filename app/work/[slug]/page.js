import { notFound } from "next/navigation";
import { projects } from "../../../lib/data";
import Link from "next/link";
import { Magnetic } from "../../../components/Magnetic";
import Image from "next/image";
import { ArchitectureDiagram } from "../../../components/ArchitectureDiagram";

export function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export default async function ProjectDetail({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <main className="bg-black min-h-screen text-zinc-300 font-sans selection:bg-white selection:text-black">
      {/* Hero Section */}
      <div className="w-full min-h-[70vh] flex flex-col justify-end px-6 max-w-7xl mx-auto pb-24 pt-48 relative z-10">
        <h1 className="text-[12vw] leading-none font-playfair italic tracking-tighter text-white mb-6">
          {project.title}
        </h1>
        <h2 className="text-2xl md:text-4xl font-sans font-light text-zinc-400 max-w-3xl">
          {project.subtitle}
        </h2>
      </div>

      {/* Hero Image / Cover */}
      <div className="w-full h-[60vh] md:h-[80vh] bg-zinc-900 border-y border-white/10 relative overflow-hidden flex items-center justify-center">
        {project.coverImage ? (
          <Link href={project.href} target="_blank" className="block w-full h-full relative group cursor-pointer">
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500 z-10" />
            <Image 
              src={project.coverImage} 
              alt={`${project.title} Cover`} 
              fill
              className="object-cover opacity-70 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700"
              priority
            />
            <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <span className="bg-black/80 text-white font-mono text-sm uppercase tracking-widest px-6 py-3 rounded-full backdrop-blur-md border border-white/10">
                Open Repository
              </span>
            </div>
          </Link>
        ) : (
          <span className="text-zinc-700 font-mono text-sm tracking-widest uppercase">Project Cover Image</span>
        )}
      </div>

      {/* Case Study Split Layout */}
      <div className="max-w-7xl mx-auto px-6 py-32 flex flex-col md:flex-row gap-16 md:gap-32">
        
        {/* Left Side: Sticky Metadata */}
        <div className="w-full md:w-1/3 shrink-0">
          <div className="sticky top-32 flex flex-col gap-12">
            
            <div>
              <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">Role</h4>
              <p className="text-lg text-white font-light">{project.role}</p>
            </div>
            
            <div>
              <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">Timeline</h4>
              <p className="text-lg text-white font-light">{project.timeline}</p>
            </div>

            <div>
              <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">Stack</h4>
              <div className="flex flex-col gap-2">
                {project.tech.map(t => (
                  <div key={t} className="text-lg text-white font-light pb-2 border-b border-white/10">
                    {t}
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 flex gap-6">
              {/* GitHub Button */}
              <div className="flex flex-col items-center gap-6">
                <Magnetic>
                  <Link href={project.href} target="_blank" className="group relative flex items-center justify-center w-32 h-32 md:w-40 md:h-40 rounded-full border border-white/20 hover:border-white/50 transition-colors duration-500">
                    <span className="text-[10px] md:text-xs font-mono uppercase font-bold tracking-widest text-center px-4">
                      View<br/>GitHub
                    </span>
                  </Link>
                </Magnetic>
                <Link href={project.href} target="_blank" className="text-[10px] md:text-xs font-mono text-zinc-500 hover:text-zinc-300 transition-colors truncate w-32 md:w-40 text-center">
                  {project.href.replace('https://github.com/', '')}
                </Link>
              </div>

              {/* Live Project Button */}
              {project.liveUrl && (
                <div className="flex flex-col items-center gap-6">
                  <Magnetic>
                    <Link href={project.liveUrl} target="_blank" className="group relative flex items-center justify-center w-32 h-32 md:w-40 md:h-40 rounded-full bg-white text-black hover:bg-zinc-200 transition-colors duration-500 shadow-xl">
                      <span className="text-[10px] md:text-xs font-mono uppercase font-bold tracking-widest text-center px-4">
                        Live<br/>Project
                      </span>
                    </Link>
                  </Magnetic>
                  <Link href={project.liveUrl} target="_blank" className="text-[10px] md:text-xs font-mono text-zinc-500 hover:text-zinc-300 transition-colors truncate w-32 md:w-40 text-center">
                    {project.liveUrl.replace('https://', '').replace(/\/$/, '')}
                  </Link>
                </div>
              )}
            </div>

          </div>
        </div>

        {/* Right Side: Long Form Content */}
        <div className="w-full md:w-2/3 flex flex-col gap-12">
          <div>
            <h3 className="text-4xl font-playfair italic text-white mb-8">Overview</h3>
            <p className="text-xl md:text-2xl font-light text-zinc-400 leading-relaxed">
              {project.description}
            </p>
          </div>

          {project.contentImage && (
            <div className="w-full h-[50vh] bg-zinc-900 border border-white/10 rounded-xl my-8 relative overflow-hidden">
               <Image 
                 src={project.contentImage} 
                 alt={`${project.title} Content`} 
                 fill
                 className="object-cover"
               />
            </div>
          )}

          <div>
            <h3 className="text-4xl font-playfair italic text-white mb-8">The Challenge & Architecture</h3>
            <div className="flex flex-col gap-8">
              {project.longDescription?.map((paragraph, index) => (
                <p key={index} className="text-lg font-light text-zinc-400 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          
          <div className="mt-16">
            <h3 className="text-4xl font-playfair italic text-white mb-8">System Architecture</h3>
            <div className="w-full h-[50vh] bg-zinc-950 border border-white/10 rounded-xl my-8 relative overflow-hidden">
               <ArchitectureDiagram slug={project.slug} />
            </div>
          </div>

        </div>

      </div>

      {/* Next/Prev Navigation */}
      <div className="w-full border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col md:flex-row justify-between items-center gap-12">
          {prevProject ? (
            <Link href={`/work/${prevProject.slug}`} className="group flex flex-col items-start gap-2 w-full md:w-1/2 cursor-pointer">
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest group-hover:text-zinc-300 transition-colors">← Previous Project</span>
              <span className="text-3xl md:text-4xl font-playfair italic text-white group-hover:text-zinc-400 transition-colors line-clamp-1">{prevProject.title}</span>
            </Link>
          ) : <div className="hidden md:block w-full md:w-1/2" />}
          
          {nextProject ? (
            <Link href={`/work/${nextProject.slug}`} className="group flex flex-col md:items-end items-start gap-2 text-left md:text-right w-full md:w-1/2 cursor-pointer pt-12 md:pt-0 border-t md:border-t-0 border-white/10 md:border-l border-white/10 md:pl-12">
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest group-hover:text-zinc-300 transition-colors">Next Project →</span>
              <span className="text-3xl md:text-4xl font-playfair italic text-white group-hover:text-zinc-400 transition-colors line-clamp-1">{nextProject.title}</span>
            </Link>
          ) : <div className="hidden md:block w-full md:w-1/2 md:border-l border-white/10" />}
        </div>
      </div>
    </main>
  );
}
