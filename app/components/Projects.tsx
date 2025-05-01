import Image from "next/image"
import Link from "next/link"
import { projects } from "../data/projects"

export default function Projects() {
  const previewProjects = projects.slice(0, 3) // Show only the first 3 projects on the home page

  return (
    <section className="mb-12 px-4" id="projects">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
        My Projects
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
                <p className="text-gray-400 text-sm sm:text-base">{project.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
