"use client"

import { useEffect } from "react"
import Image from "next/image"
import { Folder } from "lucide-react"
import { projects } from "../data/projects"

export default function ProjectsPage() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash
      if (hash) {
        const id = hash.replace("#", "")
        const element = document.getElementById(id)
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth" })
          }, 100)
        }
      }
    }
  }, [])

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
        My Projects
      </h1>
      <div className="space-y-12">
        {projects.map((project) => (
          <div
            key={project.id}
            id={project.id}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg scroll-mt-20"
          >
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={300}
                  height={200}
                  className="h-48 w-full object-cover md:h-full md:w-48"
                />
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-bold text-white mb-2">{project.title}</h2>
                <p className="text-gray-300 font-semibold mb-4">{project.role}</p>
                <p className="text-gray-300 mb-4">{project.longDescription}</p>
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-white mb-2">Technologies Used:</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="bg-gray-700 text-gray-200 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                {project.id !== "capstone-project" && (
                  <div className="flex flex-wrap gap-4">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
                    >
                      <Folder className="mr-2" size={20} />
                      Project Link
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
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
              A short clip of my 3D modeling and animation using Blender. This project demonstrates my ability to create
              engaging visual content and work with professional 3D software.&nbsp;
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
    </div>
  )
}
