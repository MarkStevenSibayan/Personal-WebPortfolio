import Image from "next/image"
import Link from "next/link"
import { projects } from "../data/projects"

export default function Projects() {
  const previewProjects = projects.slice(0, 3) // Show only the first 3 projects on the home page

  return (
    <section className="mb-12 px-4" id="projects">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
        Top 3 Project
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8">
        {previewProjects.map((project) => (
          <Link href={`/projects#${project.id}`} key={project.id}>
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
              <div className="relative h-48 sm:h-56">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-blue-400">{project.title}</h3>
                <p className="text-gray-300 font-semibold mb-2">{project.role}</p>
                <p className="text-gray-400 text-sm sm:text-base">{project.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {/* 3D Animation Showcase */}
      <div className="mt-16">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          3D Animation Showcase
        </h2>
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg p-6">
          <div className="aspect-video relative rounded-lg overflow-hidden">
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/blenderproject1-CP1OpIRzR5OKLQxcxjf9gIPt6lw5oh.mp4"
            />
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-white mb-2">3D Animation: A Silent Departure</h3>
            <p className="text-gray-300">
              A short clip of my 3D modeling and animation using Blender. This project demonstrates my ability to
              create engaging visual content and work with professional 3D software.&nbsp;
              <a
                href="https://drive.google.com/file/d/1_baC9cqzQmrhaZClNw33Yz5Uim2qVxIk/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline hover:text-blue-300"
              >
                 Click to Watch
              </a>
            </p>
            <div className="mt-4">
              <span className="bg-gray-700 text-gray-200 px-3 py-1 rounded-full text-sm">Blender</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
