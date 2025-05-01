import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { projects } from "../../data/projects"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id)

  if (!project) {
    notFound()
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Link href="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-6">
        <ArrowLeft className="mr-2" size={20} />
        Back to Home
      </Link>
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">{project.title}</h1>
      <div className="mb-6 relative h-64 sm:h-96">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <p className="text-lg mb-6">{project.longDescription}</p>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Technologies Used:</h2>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="bg-gray-700 text-gray-200 px-3 py-1 rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap gap-4">
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        >
          <Github className="mr-2" size={20} />
          View on GitHub
        </a>
        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
          >
            <ExternalLink className="mr-2" size={20} />
            View Live Demo
          </a>
        )}
      </div>
    </div>
  )
}
