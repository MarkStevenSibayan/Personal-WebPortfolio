"use client"

import Link from "next/link"
import { Briefcase, Award, ArrowRight, Sparkles, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ResumePreview() {
  return (
    <section className="mb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Professional Experience
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore my professional journey and achievements in the tech industry
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Work Experience Card */}
          <Link href="/resume#work-experience" className="block group">
            <div className="relative h-full">
              {/* Animated gradient border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

              <Card className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-0 h-full overflow-hidden">
                <CardContent className="p-6 flex flex-col h-full">
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl"></div>

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <div className="relative">
                        <div className="absolute inset-0 bg-blue-500 rounded-xl blur-lg opacity-50"></div>
                        <div className="relative p-4 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl">
                          <Briefcase className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 text-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 translate-x-4">
                        <span className="text-sm font-semibold">Explore</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mb-3">
                      <TrendingUp className="w-5 h-5 text-blue-400" />
                      <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
                        Work Experience
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 transition-all">
                      IT Support Professional
                    </h3>

                    <p className="text-gray-400 mb-6 flex-grow leading-relaxed">
                      Currently providing technical support at Globe Maritime Training Center, specializing in hardware
                      maintenance, network management, and CCTV systems.
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium border border-blue-500/30">
                        IT Support
                      </span>
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs font-medium border border-cyan-500/30">
                        Network Management
                      </span>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium border border-blue-500/30">
                        Hardware
                      </span>
                    </div>

                    <div className="flex items-center text-blue-400 font-semibold text-sm">
                      <span className="mr-2">View Details</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </Link>

          {/* Certifications Card */}
          <Link href="/resume#certifications" className="block group">
            <div className="relative h-full">
              {/* Animated gradient border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

              <Card className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-0 h-full overflow-hidden">
                <CardContent className="p-6 flex flex-col h-full">
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-pink-500/10 rounded-full blur-2xl"></div>

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <div className="relative">
                        <div className="absolute inset-0 bg-purple-500 rounded-xl blur-lg opacity-50"></div>
                        <div className="relative p-4 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl">
                          <Award className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 text-purple-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 translate-x-4">
                        <span className="text-sm font-semibold">Explore</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mb-3">
                      <Sparkles className="w-5 h-5 text-purple-400" />
                      <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider">
                        Certifications
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all">
                      Professional Credentials
                    </h3>

                    <p className="text-gray-400 mb-6 flex-grow leading-relaxed">
                      Certified in Data Privacy, Scrum methodologies, and Game Development from Pamantasan ng Lungsod ng
                      Valenzuela.
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium border border-purple-500/30">
                        Data Privacy
                      </span>
                      <span className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-xs font-medium border border-pink-500/30">
                        Scrum 101
                      </span>
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium border border-purple-500/30">
                        Game Dev
                      </span>
                    </div>

                    <div className="flex items-center text-purple-400 font-semibold text-sm">
                      <span className="mr-2">View All</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </Link>
        </div>

        <div className="text-center">
          <Link href="/resume">
            <Button
              variant="outline"
              className="relative group border-2 border-blue-500/50 text-blue-400 hover:text-white bg-transparent hover:bg-blue-500 transition-all px-8 py-6 text-base font-semibold"
            >
              <span className="relative z-10 flex items-center">
                View Complete Resume
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity rounded-md"></div>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
