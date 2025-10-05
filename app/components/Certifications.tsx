"use client"

import Image from "next/image"
import { Award, ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface Certification {
  id: string
  title: string
  issuer: string
  date: string
  image: string
  credentialUrl?: string
}

const certifications: Certification[] = [
  {
    id: "1",
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "January 2024",
    image: "/images/cert-aws.jpg",
    credentialUrl: "#",
  },
  {
    id: "2",
    title: "Google Cloud Professional Certificate",
    issuer: "Google Cloud",
    date: "December 2023",
    image: "/images/cert-google.jpg",
    credentialUrl: "#",
  },
  {
    id: "3",
    title: "React Developer Certification",
    issuer: "Meta",
    date: "November 2023",
    image: "/images/cert-react.jpg",
    credentialUrl: "#",
  },
]

export default function Certifications() {
  return (
    <section className="mb-16 px-4">
      <div className="flex items-center justify-center mb-8 gap-3">
        <Award className="w-8 h-8 text-blue-400" />
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          Certifications
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {certifications.map((cert) => (
          <Card
            key={cert.id}
            className="bg-gray-800/50 border-gray-700 hover:border-blue-500 transition-all duration-300 overflow-hidden group"
          >
            <CardContent className="p-0">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={cert.image || "/placeholder.svg"}
                  alt={cert.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">{cert.title}</h3>
                <p className="text-gray-400 text-sm mb-1">{cert.issuer}</p>
                <p className="text-gray-500 text-xs mb-3">{cert.date}</p>

                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm transition-colors"
                  >
                    View Credential
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
