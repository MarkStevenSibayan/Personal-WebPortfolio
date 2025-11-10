"use client"

import { motion } from "framer-motion"
import { Award, Book, Briefcase, Briefcase as Certificate, ExternalLink, FileCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Resume() {
  const resumeUrl = "https://drive.google.com/file/d/1rJwKRorBOdRJQxzQDzJU0pYfpzqS6N5X/view?usp=sharing"

  const sections = [
    {
      id: "work-experience",
      title: "Work Experience",
      icon: Briefcase,
      items: [
      {
          title: "IT Staff - Multimedia",
          place: "Globe Maritime Training Center - Manila Inc.",
          date: "November 3, 2025 - Current",
          description:
            "As a Multimedia staff, I specialized in photo and video editing, using different software to create high-quality multimedia content. Additionally, I diagnosed and resolved hardware-related issues to ensure smooth operations across various systems and platforms.",
        },
        {
          title: "IT Intern",
          place: "Globe Maritime Training Center - Manila Inc.",
          date: "July 14, 2025 - October 17, 2025",
          description:
            "As an IT intern, I provided technical support and assistance, which included maintaining computer hardware, managing networks, installing CCTV systems, performing photo and video editing tasks, and troubleshooting hardware issues.",
        },
      ],
    },
    {
      id: "certifications",
      title: "Certifications",
      icon: Certificate,
      items: [
        {
          title: "Certificate of Completion: On the Job Training",
          place: "Globe Maritime Training Center - Manila Inc.",
          date: "October 17, 2025",
          description:
            "The Certificate of Completion from GMTC is awarded for successfully completing 486 hours of on-the-job training (OJT) in the IT Department and for fulfilling all assigned duties and responsibilities.",
          certificateUrl: "https://drive.google.com/file/d/19v5r5FHjR9DnAHKFmVFjG1zN-KwrrRSX/view?usp=drive_link",
        },
        {
          title: "Data Privacy Essentials: A User's Manual",
          place: "Pamantasan ng Lungsod ng Valenzuela",
          date: "April 20, 2024",
          description:
            "The Data Privacy Essentials Seminar is designed to educate individuals and organizations on the fundamental principles of data privacy, its importance, and best practices for safeguarding sensitive information.",
          certificateUrl: "https://drive.google.com/file/d/11ZBH3uWEI8Eb27Rc3uepOAhknzIAfe9G/view?usp=sharing",
        },
        {
          title: "Scrum 101 Introduction",
          place: "Pamantasan ng Lungsod ng Valenzuela",
          date: "April 20, 2024",
          description:
            "This seminar will cover the core principles of Scrum, including its roles (Scrum Master, Product Owner, and Development Team), key events (Sprint, Daily Stand-up, Sprint Review, and Retrospective), and essential artifacts (Product Backlog, Sprint Backlog, and Increment).",
          certificateUrl: "https://drive.google.com/file/d/16Hqs0ojIpHfJ6Ma0HtsO3FFHpjnvu0-i/view?usp=sharing",
        },
        {
          title: "EnGamed: Game Development Introduction to Game Engines",
          place: "Pamantasan ng Lungsod ng Valenzuela",
          date: "April 24, 2024",
          description:
            "This seminar will explore popular game engines such as Unity, Unreal Engine, and Godot, comparing their features, strengths, and ideal use cases.",
          certificateUrl: "https://drive.google.com/file/d/1q6Qfis8cfmuwNOEwTmLtyIXJcHJ8zBZc/view?usp=sharing",
        },
        {
          title: " 1st Academic Excellence Award",
          place: "Pamantasan ng Lungsod ng Valenzuela",
          date: "March 11, 2021",
          description:
            "Commendable effort and achievement as a PLV Senior High School Student GWA of 91.27",
          certificateUrl: "https://drive.google.com/file/d/1NGc9gTfLuBGvTiirw5gMYuHys6_OlDb8/view?usp=sharing",
        },
        {
          title: "2nd Academic Excellence Award",
          place: "Pamantasan ng Lungsod ng Valenzuela",
          date: "March 11, 2021",
          description:
            "Commendable effort and achievement as a PLV Senior High School Student GWA of 93.39",
          certificateUrl: "https://drive.google.com/file/d/1pu9ixg12Vmcd0OPWN2rE0d-1hHxmh3bB/view?usp=sharing",
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
          description: "",
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
      className="mb-12 max-w-4xl mx-auto px-4"
    >
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
        My Resume
      </h2>

      {/* Resume Button Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex flex-col items-center mb-8 sm:mb-12"
      >
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative bg-gray-900 px-6 py-5 sm:px-8 sm:py-6 rounded-lg">
            <div className="text-center space-y-3 sm:space-y-4">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">View My Full Resume</h3>
              <p className="text-gray-400 text-xs sm:text-sm lg:text-base max-w-md">
                Access my complete professional resume with detailed information about my experience, skills, and
                qualifications
              </p>
              <Button
                onClick={() => window.open(resumeUrl, "_blank")}
                className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-2.5 px-6 sm:py-3 sm:px-8 text-sm sm:text-base lg:text-lg transition-all duration-300 transform hover:scale-105"
              >
                <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Open Resume
              </Button>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="space-y-5 sm:space-y-6 lg:space-y-8">
        {sections.map((section, sectionIndex) => (
          <motion.div
            key={section.title}
            id={section.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: sectionIndex * 0.2 }}
            className="bg-gray-800/50 rounded-lg p-4 sm:p-5 lg:p-6 backdrop-blur-sm scroll-mt-20"
          >
            <div className="flex items-center mb-3 sm:mb-4">
              <section.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 mr-2" />
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-blue-400">{section.title}</h3>
            </div>
            <div className="space-y-4 sm:space-y-5 lg:space-y-6">
              {section.items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: sectionIndex * 0.2 + index * 0.1 }}
                  className="border-l-2 border-blue-400 pl-3 sm:pl-4 space-y-2"
                >
                  <h4 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-100">{item.title}</h4>
                  <p className="text-blue-400 text-xs sm:text-sm lg:text-base">{item.place}</p>
                  <p className="text-xs sm:text-sm text-gray-400">{item.date}</p>
                  {item.description && (
                    <p className="text-gray-300 text-xs sm:text-sm lg:text-base leading-relaxed">{item.description}</p>
                  )}

                  {/* Display certificate button if available */}
                  {item.certificateUrl && (
                    <div className="pt-2">
                      <Button
                        onClick={() => window.open(item.certificateUrl, "_blank")}
                        className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                        size="sm"
                      >
                        <FileCheck className="w-4 h-4 mr-2" />
                        View Certificate
                      </Button>
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
