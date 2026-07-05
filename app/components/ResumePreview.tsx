"use client"

import Link from "next/link"
import { Briefcase, Award, ArrowRight, TrendingUp, Sparkles } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ResumePreview() {
  return (
    <section className="py-16 sm:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 sm:mb-16">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-2">Professional Journey</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Experience & Credentials
          </h2>
          <p className="text-muted-foreground text-base max-w-2xl">
            Explore my professional background and industry certifications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Work Experience Card */}
          <Link href="/resume#work-experience" className="block group">
            <Card className="relative bg-gradient-to-br from-card to-card/50 border border-border/60 h-full overflow-hidden hover:border-accent/40 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300">
              <CardContent className="p-4 sm:p-5 lg:p-6 flex flex-col h-full">
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4 sm:mb-5">
                    <div className="p-3 lg:p-4 bg-gradient-to-br from-accent to-green-600 rounded-xl shadow-lg">
                      <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-accent-foreground" />
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
            <Card className="relative bg-gradient-to-br from-card to-card/50 border border-border/60 h-full overflow-hidden hover:border-accent/40 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300">
              <CardContent className="p-4 sm:p-5 lg:p-6 flex flex-col h-full">
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4 sm:mb-5">
                    <div className="p-3 lg:p-4 bg-gradient-to-br from-accent to-green-600 rounded-xl shadow-lg">
                      <Award className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-accent-foreground" />
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
              className="relative group bg-gradient-to-r from-accent to-green-600 text-accent-foreground border-0 hover:shadow-lg hover:shadow-accent/30 transition-all px-6 py-2.5 sm:px-8 sm:py-3 text-sm sm:text-base font-semibold"
            >
              <span className="relative z-10 flex items-center">
                View Complete Resume
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
