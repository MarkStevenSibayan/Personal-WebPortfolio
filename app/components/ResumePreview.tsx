"use client"

import Link from "next/link"
import { Briefcase, Award, ArrowRight, TrendingUp, Sparkles } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ResumePreview() {
  return (
    <section className="mb-12 sm:mb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Professional Experience
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            Explore my professional journey and achievements in the tech industry
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {/* Work Experience Card */}
          <Link href="/resume#work-experience" className="block group">
            <div className="relative h-full">
              {/* Animated gradient border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl sm:rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

              <Card className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-0 h-full overflow-hidden">
                <CardContent className="p-4 sm:p-5 lg:p-6 flex flex-col h-full">
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-20 sm:w-24 h-20 sm:h-24 bg-cyan-500/10 rounded-full blur-2xl"></div>

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4 sm:mb-5">
                      <div className="relative">
                        <div className="absolute inset-0 bg-blue-500 rounded-lg sm:rounded-xl blur-lg opacity-50"></div>
                        <div className="relative p-2.5 sm:p-3 lg:p-4 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg sm:rounded-xl">
                          <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white" />
                        </div>
                      </div>
                      <div className="flex items-center space-x-1.5 sm:space-x-2 text-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 translate-x-4">
                        <span className="text-xs sm:text-sm font-semibold">View</span>
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                      <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                      <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
                        Work Experience
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 transition-all">
                      IT Technical Support
                    </h3>

                    <p className="text-gray-400 text-xs sm:text-sm lg:text-base mb-3 sm:mb-4 flex-grow leading-relaxed line-clamp-3">
                      Currently providing technical support at Globe Maritime Training Center, specializing in hardware
                      maintenance and network management.
                    </p>

                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                      <span className="px-2 sm:px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium border border-blue-500/30">
                        IT Support
                      </span>
                      <span className="px-2 sm:px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs font-medium border border-cyan-500/30">
                        Networking
                      </span>
                    </div>

                    <div className="flex items-center text-blue-400 font-semibold text-xs sm:text-sm">
                      <span className="mr-2">View Details</span>
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
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
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl sm:rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

              <Card className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-0 h-full overflow-hidden">
                <CardContent className="p-4 sm:p-5 lg:p-6 flex flex-col h-full">
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-20 sm:w-24 h-20 sm:h-24 bg-pink-500/10 rounded-full blur-2xl"></div>

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4 sm:mb-5">
                      <div className="relative">
                        <div className="absolute inset-0 bg-purple-500 rounded-lg sm:rounded-xl blur-lg opacity-50"></div>
                        <div className="relative p-2.5 sm:p-3 lg:p-4 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg sm:rounded-xl">
                          <Award className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white" />
                        </div>
                      </div>
                      <div className="flex items-center space-x-1.5 sm:space-x-2 text-purple-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 translate-x-4">
                        <span className="text-xs sm:text-sm font-semibold">View</span>
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                      <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
                      <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider">
                      Professional Credentials
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all">
                      Certifications
                    </h3>

                    <p className="text-gray-400 text-xs sm:text-sm lg:text-base mb-3 sm:mb-4 flex-grow leading-relaxed line-clamp-3">
                      Certified in Data Privacy, Scrum methodologies, and Game Development from Pamantasan ng Lungsod ng
                      Valenzuela.
                    </p>

                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                      <span className="px-2 sm:px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium border border-purple-500/30">
                        Data Privacy
                      </span>
                      <span className="px-2 sm:px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-xs font-medium border border-pink-500/30">
                        Scrum 101
                      </span>
                    </div>

                    <div className="flex items-center text-purple-400 font-semibold text-xs sm:text-sm">
                      <span className="mr-2">View All</span>
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
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
              className="relative group border-2 border-blue-500/50 text-blue-400 hover:text-white bg-transparent hover:bg-blue-500 transition-all px-5 py-2.5 sm:px-8 sm:py-3 text-sm sm:text-base font-semibold"
            >
              <span className="relative z-10 flex items-center">
                View Complete Resume
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity rounded-md"></div>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
