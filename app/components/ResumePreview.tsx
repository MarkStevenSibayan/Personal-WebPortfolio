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
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-accent">
            Professional Experience
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
            Explore my professional journey and achievements in the tech industry
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {/* Work Experience Card */}
          <Link href="/resume#work-experience" className="block group">
            <Card className="relative bg-card border border-border h-full overflow-hidden hover:border-accent/50 transition-all duration-300">
              <CardContent className="p-4 sm:p-5 lg:p-6 flex flex-col h-full">
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4 sm:mb-5">
                    <div className="p-2.5 sm:p-3 lg:p-4 bg-accent rounded-lg sm:rounded-xl">
                      <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-accent-foreground" />
                    </div>
                    <div className="flex items-center space-x-1.5 sm:space-x-2 text-accent opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 translate-x-4">
                      <span className="text-xs sm:text-sm font-semibold">View</span>
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                    <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                    <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                      Work Experience
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-2 sm:mb-3 group-hover:text-accent transition-colors">
                    IT Staff - Multimedia
                  </h3>

                  <p className="text-muted-foreground text-xs sm:text-sm lg:text-base mb-3 sm:mb-4 flex-grow leading-relaxed line-clamp-3">
                    As an IT staff - Multimedia, I specialized in photo and video editing, as well as expert in hardware, software, and networking
                  </p>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                    <span className="px-2 sm:px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-medium border border-accent/30">
                      IT Support
                    </span>
                    <span className="px-2 sm:px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-medium border border-accent/30">
                      Multimedia
                    </span>
                    <span className="px-2 sm:px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-medium border border-accent/30">
                      Networking
                    </span>
                  </div>

                  <div className="flex items-center text-accent font-semibold text-xs sm:text-sm">
                    <span className="mr-2">View Details</span>
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>

          {/* Certifications Card */}
          <Link href="/resume#certifications" className="block group">
            <Card className="relative bg-card border border-border h-full overflow-hidden hover:border-accent/50 transition-all duration-300">
              <CardContent className="p-4 sm:p-5 lg:p-6 flex flex-col h-full">
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4 sm:mb-5">
                    <div className="p-2.5 sm:p-3 lg:p-4 bg-accent rounded-lg sm:rounded-xl">
                      <Award className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-accent-foreground" />
                    </div>
                    <div className="flex items-center space-x-1.5 sm:space-x-2 text-accent opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 translate-x-4">
                      <span className="text-xs sm:text-sm font-semibold">View</span>
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                    <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                      Professional Credentials
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-2 sm:mb-3 group-hover:text-accent transition-colors">
                    Certifications
                  </h3>

                  <p className="text-muted-foreground text-xs sm:text-sm lg:text-base mb-3 sm:mb-4 flex-grow leading-relaxed line-clamp-3">
                    Certified in Data Privacy, Scrum methodologies, and Game Development from Pamantasan ng Lungsod ng
                    Valenzuela.
                  </p>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                    <span className="px-2 sm:px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-medium border border-accent/30">
                      Data Privacy
                    </span>
                    <span className="px-2 sm:px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-medium border border-accent/30">
                      Scrum 101
                    </span>
                    <span className="px-2 sm:px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-medium border border-accent/30">
                      Game Dev
                    </span>
                  </div>

                  <div className="flex items-center text-accent font-semibold text-xs sm:text-sm">
                    <span className="mr-2">View All</span>
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>

        <div className="text-center">
          <Link href="/resume">
            <Button
              variant="outline"
              className="relative group border-2 border-accent/50 text-accent hover:text-accent-foreground bg-transparent hover:bg-accent transition-all px-5 py-2.5 sm:px-8 sm:py-3 text-sm sm:text-base font-semibold"
            >
              <span className="relative z-10 flex items-center">
                View Complete Resume
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-20 transition-opacity rounded-md"></div>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
