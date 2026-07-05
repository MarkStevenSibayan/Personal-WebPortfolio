import Image from "next/image"
import Link from "next/link"
import { projects } from "../data/projects"

export default function Projects() {
  const previewProjects = projects.slice(0, 3) // Show only the first 3 projects on the home page

  return (
    <section className="py-16 sm:py-24 px-4" id="projects">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-2">Featured Work</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Selected Projects
          </h2>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 sm:mb-20">
          {previewProjects.map((project) => (
            <Link href={`/projects#${project.id}`} key={project.id} className="group">
              <div className="bg-card rounded-2xl overflow-hidden transition-all duration-300 border border-border/60 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/10">
                {/* Image Container */}
                <div className="relative h-48 sm:h-56 overflow-hidden bg-secondary/30">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-accent text-sm font-medium mb-3">{project.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* 3D Animation Showcase */}
        <div className="mt-20 pt-12 border-t border-border/40">
          <div className="mb-10">
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-2">Creative Direction</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              3D Animation Showcase
            </h2>
          </div>

          <div className="bg-gradient-to-br from-card to-card/50 rounded-2xl overflow-hidden border border-border/60 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
            <div className="aspect-video relative rounded-t-2xl overflow-hidden bg-secondary/20">
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/blenderproject1-CP1OpIRzR5OKLQxcxjf9gIPt6lw5oh.mp4"
              />
            </div>
            <div className="p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-3">A Silent Departure</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A refined 3D animation project showcasing modeling and animation expertise using Blender. Demonstrates professional-grade visual content creation and technical proficiency with industry-standard tools.
              </p>
              <a
                href="https://drive.google.com/file/d/1_baC9cqzQmrhaZClNw33Yz5Uim2qVxIk/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-accent hover:text-green-400 transition-colors font-medium text-sm"
              >
                View Full Project
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
