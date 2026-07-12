import Image from "next/image"
import Link from "next/link"
import { graphicDesigns } from "../data/graphicDesigns"

export default function GraphicDesigns() {
  const topDesigns = graphicDesigns.slice(0, 3)

  return (
    <section className="py-16 sm:py-24 px-4" id="graphic-designs">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-2">Visual Portfolio</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Graphic Design Highlights
          </h2>
        </div>

        {/* Design Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
          {topDesigns.map((design) => (
            <Link href={`/projects#graphic-designs`} key={design.id} className="group">
              <div className="bg-card rounded-2xl overflow-hidden transition-all duration-300 border border-border/60 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/10 h-full flex flex-col">
                {/* Image Container - Responsive aspect ratio */}
                <div 
                  className={`relative overflow-hidden bg-secondary/30 flex-1 ${
                    design.category === "landscape" ? "aspect-video" : "aspect-[3/4]"
                  }`}
                >
                  <Image
                    src={design.image}
                    alt={design.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                      {design.title}
                    </h3>
                    <span className="text-xs font-semibold uppercase tracking-widest text-accent bg-accent/10 px-2 py-1 rounded-full">
                      {design.category}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{design.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <Link
            href="/projects#graphic-designs"
            className="inline-flex items-center px-6 py-3 bg-accent/10 border border-accent/40 rounded-lg text-accent font-semibold hover:bg-accent/20 hover:border-accent/60 transition-all duration-300"
          >
            View All Designs
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
