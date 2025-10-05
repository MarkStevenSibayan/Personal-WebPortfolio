"use client"

import Link from "next/link"
import { Briefcase, Award, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ResumePreview() {
  return (
    <section className="mb-12 sm:mb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          Professional Experience
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {/* Work Experience Card */}
          <Link href="/resume#work-experience" className="block group">
            <Card className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-gray-700 hover:border-blue-500 transition-all duration-300 h-full">
              <CardContent className="p-4 sm:p-6 flex flex-col h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 sm:p-3 bg-blue-500/10 rounded-lg">
                    <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
                  </div>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Work Experience</h3>
                <p className="text-sm sm:text-base text-gray-400 mb-4 flex-grow leading-relaxed">
                  IT Support at Globe Maritime Training Center - Manila Inc. Providing technical support, hardware
                  maintenance, and network management.
                </p>

                <div className="flex items-center text-blue-400 font-semibold text-sm sm:text-base">
                  View Full Experience
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          </Link>

          {/* Certifications Card */}
          <Link href="/resume#certifications" className="block group">
            <Card className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-gray-700 hover:border-purple-500 transition-all duration-300 h-full">
              <CardContent className="p-4 sm:p-6 flex flex-col h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 sm:p-3 bg-purple-500/10 rounded-lg">
                    <Award className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />
                  </div>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Certifications</h3>
                <p className="text-sm sm:text-base text-gray-400 mb-4 flex-grow leading-relaxed">
                  Data Privacy Essentials, Scrum 101 Introduction, and Game Development certifications from Pamantasan
                  ng Lungsod ng Valenzuela.
                </p>

                <div className="flex items-center text-purple-400 font-semibold text-sm sm:text-base">
                  View All Certifications
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>

        <div className="text-center mt-6 sm:mt-8">
          <Link href="/resume">
            <Button
              variant="outline"
              className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition-all bg-transparent px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base"
            >
              View Full Resume
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
