"use client"

import { motion } from "framer-motion"
import { Fingerprint } from "lucide-react"

export default function LoadingAnimation() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 2 }}
      exit={{ opacity: 0 }}
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center mb-4"
        >
          <Fingerprint size={48} className="text-blue-400" />
        </motion.div>
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
        >
          Mark Steven B. Sibayan
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-1 w-48 mx-auto mt-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
        />
      </div>
    </motion.div>
  )
}
