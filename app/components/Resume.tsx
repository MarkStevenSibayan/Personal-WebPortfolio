"use client"

import { motion } from "framer-motion"
import { Award, Book, Briefcase, Briefcase as Certificate, Download } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Resume() {
  const handleDownload = () => {
    // For now, this will alert the user. You can replace this with actual file download
    // alert("To download the resume, please add your PDF file to /public/resume/Mark-Steven-Sibayan-Resume.pdf")

    // Uncomment this code once you add the PDF file:
    const link = document.createElement("a")
    link.href = "/resume/Mark-Steven-Sibayan-Resume.pdf"
    link.download = "Mark-Steven-Sibayan-Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const sections = [
    {
      id: "work-experience",
      title: "Work Experience",
      icon: Briefcase,
      items: [
        {
          title: "IT Support",
          place: "Globe Maritime Training Center - Manila Inc.",
          date: "2025 - Present",
          description:
            "Providing IT support and assistance including hardware maintenance, network management, CCTV installation, Photo Editing, and hardware troubleshooting.",
        },
      ],
    },
    {
      id: "certifications",
      title: "Certifications",
      icon: Certificate,
      items: [
        {
          title: "Data Privacy Essentials: A User's Manual",
          place: "Pamantasan ng Lungsod ng Valenzuela",
          date: "April 20, 2024",
          description:
            "The Data Privacy Essentials Seminar is designed to educate individuals and organizations on the fundamental principles of data privacy, its importance, and best practices for safeguarding sensitive information.",
          image: "/images/cert-data-privacy.jpg",
        },
        {
          title: "Scrum 101 Introduction",
          place: "Pamantasan ng Lungsod ng Valenzuela",
          date: "April 20, 2024",
          description:
            "This seminar will cover the core principles of Scrum, including its roles (Scrum Master, Product Owner, and Development Team), key events (Sprint, Daily Stand-up, Sprint Review, and Retrospective), and essential artifacts (Product Backlog, Sprint Backlog, and Increment).",
          image: "/images/cert-scrum.jpg",
        },
        {
          title: "EnGamed: Game Development Introduction to Game Engines",
          place: "Pamantasan ng Lungsod ng Valenzuela",
          date: "April 24, 2024",
          description:
            "This seminar will explore popular game engines such as Unity, Unreal Engine, and Godot, comparing their features, strengths, and ideal use cases.",
          image: "/images/cert-game-dev.jpg",
        },
      ],
    },
    {
      id: "achievements",
      title: "Achievements",
      icon: Award,
      items: [
        {
          title: "Quiz Bee District Level 5th Place",
          place: "Wawang Pulo National High School",
          date: "2019-2020",
          description: "5th Place in Science Quiz Bee during grade 10",
        },
        {
          title: "MTOP 8th Place",
          place: "Wawang Pulo National High School",
          date: "2019-2020",
          description: "8th Place in MTOP during grade 10",
        },
        {
          title: "With Honor",
          place: "Wawang Pulo National High School",
          date: "2015-2020",
          description: "Junior High School",
        },
        {
          title: "With Honor",
          place: "Pamantasan ng Lungsod ng Valenzuela",
          date: "2015-2020",
          description: "Senior High Graduation as a STEM student",
        },
        {
          title: "Dean's Lister",
          place: "Pamantasan ng Lungsod ng Valenzuela",
          date: "2022-2023",
        },
      ],
    },
    {
      id: "education",
      title: "Education",
      icon: Book,
      items: [
        {
          title: "Kinder to Elementary",
          place: "Wawang Pulo Elementary School",
          date: "2009 - 2016",
          description: "",
        },
        {
          title: "Junior High School",
          place: "Wawang Pulo National High School",
          date: "2016 - 2020",
          description: "",
        },
        {
          title: "Senior High School",
          place: "Pamantasan ng Lungsod ng Valenzuela",
          date: "2020-2022",
          description: "Science, Technology, Engineering, and Mathematics (STEM) student",
        },
        {
          title: "College",
          place: "Pamantasan ng Lungsod ng Valenzuela",
          date: "2022 - Present",
          description: "Bachelor of Science and Information Technology (BSIT) student",
        },
      ],
    },
  ]

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mb-12 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
        My Resume
      </h2>

      {/* Download Resume Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex flex-col items-center mb-8 sm:mb-12"
      >
        <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-6 sm:p-8 rounded-2xl border border-blue-500/20 backdrop-blur-sm w-full max-w-md">
          <div className="flex flex-col items-center space-y-4">
            <div className="p-4 bg-blue-500/20 rounded-full">
              <Download className="w-8 h-8 sm:w-12 sm:h-12 text-blue-400" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white text-center">Download My Resume</h3>
            <p className="text-sm sm:text-base text-gray-400 text-center">
              Get a PDF copy of my complete resume with all details
            </p>
            <Button
              onClick={handleDownload}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 sm:py-6 text-base sm:text-lg transition-all duration-300 transform hover:scale-105"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume (PDF)
            </Button>
          </div>
        </div>
      </motion.div>

      <div className="space-y-6 sm:space-y-8">
        {sections.map((section, sectionIndex) => (
          <motion.div
            key={section.title}
            id={section.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: sectionIndex * 0.2 }}
            className="bg-gray-800/50 rounded-lg p-4 sm:p-6 lg:p-8 backdrop-blur-sm scroll-mt-20"
          >
            <div className="flex items-center mb-4 sm:mb-6">
              <section.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 mr-2 flex-shrink-0" />
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-blue-400">{section.title}</h3>
            </div>
            <div className="space-y-4 sm:space-y-6">
              {section.items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: sectionIndex * 0.2 + index * 0.1 }}
                  className="border-l-2 border-blue-400 pl-3 sm:pl-4 lg:pl-6"
                >
                  <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-100">{item.title}</h4>
                  <p className="text-blue-400 text-sm sm:text-base lg:text-lg">{item.place}</p>
                  <p className="text-xs sm:text-sm text-gray-400">{item.date}</p>
                  {item.description && (
                    <p className="mt-2 text-gray-300 text-sm sm:text-base leading-relaxed">{item.description}</p>
                  )}

                  {/* Display certification image if available */}
                  {item.image && (
                    <div className="mt-4 relative h-40 sm:h-48 md:h-56 lg:h-64 w-full rounded-lg overflow-hidden shadow-lg">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
