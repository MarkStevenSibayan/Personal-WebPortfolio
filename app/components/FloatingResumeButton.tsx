"use client"

import { useState } from "react"
import { FileText } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function FloatingResumeButton() {
  const [isHovered, setIsHovered] = useState(false)
  const resumeUrl = "https://drive.google.com/file/d/1rJwKRorBOdRJQxzQDzJU0pYfpzqS6N5X/view?usp=sharing"

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.3 }}
      className="fixed bottom-6 right-6 z-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button
        onClick={() => window.open(resumeUrl, "_blank")}
        className="group relative bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900"
        aria-label="View Resume"
      >
        <div className="flex items-center gap-2 px-4 py-3 sm:px-5 sm:py-4">
          <FileText className="w-5 h-5 sm:w-6 sm:h-6" />
          <AnimatePresence>
            {isHovered && (
              <motion.span
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "auto", opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden whitespace-nowrap font-semibold text-sm sm:text-base"
              >
                View Resume
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        {/* Subtle pulse animation */}
        <span className="absolute inset-0 rounded-full bg-blue-400 opacity-0 group-hover:opacity-20 animate-ping"></span>
      </button>
    </motion.div>
  )
}
