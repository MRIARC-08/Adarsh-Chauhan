import { NavBar } from "../../components/NavBar";
import { HorizontalScrollGallery } from "../../components/HorizontalScrollGallery";

export default function Work() {
  return (
    <main className="bg-black min-h-screen text-zinc-300">
      <NavBar />
      <div className="max-w-[1400px] mx-auto px-6 pt-32 md:pt-48 pb-16 md:pb-32">
        <div>
          <h1 className="text-6xl md:text-8xl font-playfair italic text-white tracking-tight leading-none mb-6">
            Selected
            <br />
            <span className="font-sans font-light not-italic text-4xl md:text-6xl text-zinc-500">Works</span>
          </h1>
          <p className="text-sm font-mono text-zinc-500 uppercase tracking-widest mt-12 max-w-sm leading-relaxed">
            A curated selection of product features, open-source contributions, and AI experiments.
          </p>
        </div>
      </div>
      <HorizontalScrollGallery />
    </main>
  );
}
