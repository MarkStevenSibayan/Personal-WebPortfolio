"use client"

import { Briefcase, Calendar, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface Experience {
  id: string
  position: string
  company: string
  location: string
  period: string
  description: string[]
  technologies: string[]
}

const experiences: Experience[] = [
  {
    id: "1",
    position: "IT Support Intern",
    company: "Tech Solutions Inc.",
    location: "Remote",
    period: "June 2024 - August 2024",
    description: [
      "Provided technical support to 50+ end users, resolving hardware and software issues",
      "Assisted in network configuration and troubleshooting",
      "Documented IT processes and created user guides",
    ],
    technologies: ["Windows", "Active Directory", "Network Troubleshooting"],
  },
  {
    id: "2",
    position: "Web Development Volunteer",
    company: "Local Community Center",
    location: "On-site",
    period: "January 2024 - May 2024",
    description: [
      "Developed and maintained community website using modern web technologies",
      "Collaborated with team members to implement new features",
      "Improved website performance and user experience",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "React"],
  },
]

export default function WorkExperience() {
  return (
    <section className="mb-16 px-4">
      <div className="flex items-center justify-center mb-8 gap-3">
        <Briefcase className="w-8 h-8 text-blue-400" />
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          Work Experience
        </h2>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        {experiences.map((exp, index) => (
          <Card
            key={exp.id}
            className="bg-gray-800/50 border-gray-700 hover:border-blue-500 transition-all duration-300"
          >
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{exp.position}</h3>
                  <p className="text-blue-400 font-semibold mb-2">{exp.company}</p>
                </div>
                <div className="flex flex-col md:items-end gap-1 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-2 mb-4">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-gray-700 text-blue-400 text-xs rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
