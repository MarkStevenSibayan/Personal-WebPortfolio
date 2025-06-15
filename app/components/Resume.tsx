"use client"

import { motion } from "framer-motion"
import { Award, Book, Briefcase, BadgeIcon as Certificate } from "lucide-react"
import dynamic from "next/dynamic"

// Dynamically import the QR code component with no SSR
const QRCodeSVG = dynamic(() => import("qrcode.react").then((mod) => mod.QRCodeSVG), { ssr: false })

export default function Resume() {
  const sections = [
    {
      title: "Education",
      icon: Book,
      items: [
        {
          title: "Kinder to Grade 6",
          place: "Wawang Pulo Elementary School",
        },
        {
          title: "Grade 7 to Grade 10",
          place: "Wawang Pulo National High School",
        },
        {
          title: "Grade 11 to Grade 12",
          place: "Pamantasan ng Lungsod ng Valenzuela",
          date: "2020-2022",
          description: "Science, Technology, Engineering, and Mathematics (STEM) student",
        },
        {
          title: "College",
          place: "Pamantasan ng Lungsod ng Valenzuela",
          date: "2022 - Present",
          description: "Bachelor of Science and Information Technology (IT) student",
        },
      ],
    },
    {
      title: "Work Experience",
      icon: Briefcase,
      items: [
        {
          title: "Assistant Manager",
          place: "MexicanChille",
          date: "2020-2021",
          description: "Handle account destribution, applicant interview, and payment destribution",
        },
      ],
    },
    {
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
          title: "With High Honor",
          place: "Wawang Pulo National High School",
          date: "2015-2020",
          description: "Junior High School",
        },
        {
          title: "With High Honor",
          place: "Pamantasan ng Lungsod ng Valenzuela",
          date: "2015-2020",
          description: "Senior High Graduation as a STEM student",
        },
        {
          title: "Dean's Lister",
          place: "Pamantasan ng Lungsod ng Valenzuela",
          date: "2021-2023",
          description: "Maintained academic excellence throughout the academic years.",
        },
      ],
    },
    {
      title: "Certifications",
      icon: Certificate,
      items: [
        {
          title: "Data Privacy Essentials: A User's Manual",
          place: "Pamantasan ng Lungsod ng Valenzuela",
          date: "April 20, 2024",
          description:
            "The Data Privacy Essentials Seminar is designed to educate individuals and organizations on the fundamental principles of data privacy, its importance, and best practices for safeguarding sensitive information.",
        },
        {
          title: "Scrum 101 Introduction",
          place: "Pamantasan ng Lungsod ng Valenzuela",
          date: "April 20, 2024",
          description:
            "This seminar will cover the core principles of Scrum, including its roles (Scrum Master, Product Owner, and Development Team), key events (Sprint, Daily Stand-up, Sprint Review, and Retrospective), and essential artifacts (Product Backlog, Sprint Backlog, and Increment).",
        },
        {
          title: "EnGamed: Game Development Introduction to Game Engines",
          place: "Pamantasan ng Lungsod ng Valenzuela",
          date: "April 24, 2024",
          description:
            "This seminar will explore popular game engines such as Unity, Unreal Engine, and Godot, comparing their features, strengths, and ideal use cases.",
        },
      ],
    },
  ]

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mb-12 max-w-4xl mx-auto px-4"
    >
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
        My Resume
      </h2>

      {/* QR Code Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex flex-col items-center mb-8 sm:mb-12"
      >
        <div className="bg-white p-4 rounded-lg shadow-lg">
          {typeof window !== "undefined" && (
            <img
              src="./images/ResumeQR.jpeg"
              // size={160}
              // level="H"
              // includeMargin={true}
              className="w-32 h-32 sm:w-40 sm:h-40"
            />
          )}
        </div>
        <p className="mt-4 text-sm sm:text-base text-gray-400 text-center">Scan to view my detailed resume</p>
      </motion.div>

      <div className="space-y-6 sm:space-y-8">
        {sections.map((section, sectionIndex) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: sectionIndex * 0.2 }}
            className="bg-gray-800/50 rounded-lg p-4 sm:p-6 backdrop-blur-sm"
          >
            <div className="flex items-center mb-3 sm:mb-4">
              <section.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 mr-2" />
              <h3 className="text-xl sm:text-2xl font-semibold text-blue-400">{section.title}</h3>
            </div>
            <div className="space-y-4 sm:space-y-6">
              {section.items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: sectionIndex * 0.2 + index * 0.1 }}
                  className="border-l-2 border-blue-400 pl-3 sm:pl-4"
                >
                  <h4 className="text-base sm:text-lg font-semibold text-gray-100">{item.title}</h4>
                  <p className="text-blue-400 text-sm sm:text-base">{item.place}</p>
                  <p className="text-xs sm:text-sm text-gray-400">{item.date}</p>
                  <p className="mt-1 sm:mt-2 text-gray-300 text-sm sm:text-base">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
