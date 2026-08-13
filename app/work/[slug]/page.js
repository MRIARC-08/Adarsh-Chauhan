import { notFound } from "next/navigation";
import { projects } from "../../../lib/data";
import { NavBar } from "../../../components/NavBar";
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

  return (
    <main className="bg-black min-h-screen text-zinc-300">
      <NavBar />
      
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
          <Image 
            src={project.coverImage} 
            alt={`${project.title} Cover`} 
            fill
            className="object-cover opacity-80"
            priority
          />
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

            <div className="pt-8">
              <Magnetic strength={20}>
                <Link href={project.href} target="_blank" className="inline-flex items-center justify-center w-32 h-32 rounded-full border border-white/20 hover:bg-white hover:text-black transition-colors duration-300">
                  <span className="text-xs font-mono uppercase font-bold tracking-widest text-center px-4">
                    View<br/>GitHub
                  </span>
                </Link>
              </Magnetic>
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
    </main>
  );
}
