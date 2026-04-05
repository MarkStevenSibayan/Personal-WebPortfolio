"use client"

import { motion } from "framer-motion"
import {
  Code2,
  FileJson,
  Braces,
  Globe,
  Database,
  Server,
  GithubIcon,
  Laptop,
  MonitorSmartphone,
  FileCode2,
  Blocks,
  Palette,
  Binary,
  Hash,
  Folder,
  Presentation,
  Mail,
  Mic,
  Lightbulb,
  Compass,
  Info,
  Rocket,
  Figma,
  Camera,
  Computer,
} from "lucide-react"

const skills = [
  { name: "Tech Savvy", category: "Personal", icon: Code2 },
  { name: "Management Skill", category: "Personal", icon: Compass },
  { name: "Team Player", category: "Personal", icon: Blocks },
  { name: "Reliable", category: "Personal", icon: Code2 },
  { name: "Proactive", category: "Personal", icon: Compass },
  { name: "Disciplined", category: "Personal", icon: Code2 },
  { name: "Passionate", category: "Personal", icon: Compass },
  { name: "Adaptable", category: "Personal", icon: Blocks },

  { name: "Multimedia", category: "Technical", icon: Presentation },
  { name: "Video Editing", category: "Technical", icon: Presentation },
  { name: "Videography", category: "Technical", icon: Camera },
  { name: "Photography", category: "Technical", icon: Camera },
  { name: "Tech Support", category: "Technical", icon: Presentation },
  { name: "3D Design", category: "Technical", icon: Lightbulb },
  { name: "Computer Maintenance", category: "Technical", icon: Laptop },
  { name: "Hardware Troubleshooting", category: "Technical", icon: Laptop },
  { name: "Basic Networking", category: "Technical", icon: Computer },


  { name: "Capcut", category: "Tools", icon: Camera },
  { name: "Premiere Pro", category: "Tools", icon: Camera },
  { name: "After Effects", category: "Tools", icon: Camera },
  { name: "Lightroom Classic", category: "Tools", icon: Camera },
  { name: "Canva", category: "Tools", icon: Lightbulb },
  { name: "Word", category: "Tools", icon: Binary },
  { name: "Excel", category: "Tools", icon: Mail },
  { name: "Powerpoint", category: "Tools", icon: Presentation },
  { name: "VSCode", category: "Tools", icon: Laptop },
  { name: "Github", category: "Tools", icon: GithubIcon },
  { name: "Vercel", category: "Tools", icon: Rocket },
  { name: "NetBeans", category: "Tools", icon: Folder },
  { name: "Blender", category: "Tools", icon: MonitorSmartphone },
  { name: "Discord", category: "Tools", icon: Mic },
  { name: "Jira", category: "Tools", icon: Compass },
  { name: "Figma", category: "Tools", icon: Figma },

]

const categories = ["Personal", "Technical", "Tools"]

export default function Skills() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-12 max-w-4xl mx-auto px-4"
    >
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
        My Skills
      </h2>

      <div className="space-y-8 sm:space-y-12">
        {categories.map((category, categoryIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: categoryIndex * 0.2 }}
            className="bg-gray-800/50 rounded-lg p-4 sm:p-6 backdrop-blur-sm"
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-blue-400">{category}</h3>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {skills
                .filter((skill) => skill.category === category)
                .map((skill, index) => (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium shadow-lg flex items-center gap-2"
                  >
                    <skill.icon className="w-4 h-4" />
                    {skill.name}
                  </motion.span>
                ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
