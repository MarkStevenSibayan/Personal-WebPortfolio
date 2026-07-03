"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, Loader2, User, MessageSquare, CheckCircle, AlertCircle, Info } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | "demo" | null
    message: string
  }>({ type: null, message: "" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Clear previous status
    setSubmitStatus({ type: null, message: "" })

    // Validate form before submission
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus({
        type: "error",
        message: "Please fill in all required fields.",
      })
      return
    }

    // Basic email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setSubmitStatus({
        type: "error",
        message: "Please enter a valid email address.",
      })
      return
    }

    // Length validation
    if (formData.name.trim().length < 2) {
      setSubmitStatus({
        type: "error",
        message: "Name must be at least 2 characters long.",
      })
      return
    }

    if (formData.message.trim().length < 10) {
      setSubmitStatus({
        type: "error",
        message: "Message must be at least 10 characters long.",
      })
      return
    }

    setIsSubmitting(true)

    try {
      console.log("Submitting contact form...")

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
        }),
      })

      console.log("Response status:", response.status)

      // Check if response is ok
      if (!response.ok) {
        // Try to get error message from response
        let errorMessage = "Failed to send message"
        try {
          const errorData = await response.json()
          errorMessage = errorData.error || errorMessage
        } catch (jsonError) {
          // If JSON parsing fails, get text response
          try {
            const textResponse = await response.text()
            console.error("Non-JSON error response:", textResponse)
            errorMessage = `Server error (${response.status})`
          } catch (textError) {
            console.error("Failed to read error response:", textError)
          }
        }
        throw new Error(errorMessage)
      }

      // Parse successful response
      let data
      try {
        data = await response.json()
      } catch (jsonError) {
        console.error("Failed to parse success response:", jsonError)
        throw new Error("Invalid response from server")
      }

      console.log("Success response:", data)

      // Check if this is demo mode
      if (data.demo) {
        setSubmitStatus({
          type: "demo",
          message: "Form submitted successfully! (Demo mode - set up RESEND_API_KEY for actual email sending)",
        })
      } else {
        setSubmitStatus({
          type: "success",
          message: "Thank you for your message! I'll get back to you soon.",
        })
      }

      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      console.error("Submission error:", error)

      let errorMessage = "Sorry, there was an error sending your message. Please try again."

      if (error instanceof Error) {
        // Show the actual error message from the API
        errorMessage = error.message
      }

      setSubmitStatus({
        type: "error",
        message: errorMessage,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-12 sm:py-16 lg:py-20 px-4"
      id="contact"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-accent">
            Get In Touch
          </h2>
          <p className="text-lg sm:text-xl text-foreground max-w-3xl mx-auto">
            I&apos;m always open to discussing new opportunities, interesting projects, or just having a chat about
            technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-6">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center space-x-4 p-4 bg-card/50 rounded-lg backdrop-blur-sm border border-border hover:border-accent/50 transition-all duration-300"
                >
                  <div className="bg-accent p-3 rounded-full">
                    <Mail className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <a
                      href="mailto:markstevensibayan11@gmail.com"
                      className="text-accent hover:opacity-80 transition-colors"
                    >
                      markstevensibayan09@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center space-x-4 p-4 bg-card/50 rounded-lg backdrop-blur-sm border border-border hover:border-accent/50 transition-all duration-300"
                >
                  <div className="bg-accent p-3 rounded-full">
                    <Phone className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Phone</p>
                    <a href="tel:+639944105573" className="text-accent hover:opacity-80 transition-colors">
                      +63 9944105573
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center space-x-4 p-4 bg-card/50 rounded-lg backdrop-blur-sm border border-border hover:border-accent/50 transition-all duration-300"
                >
                  <div className="bg-accent p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Location</p>
                    <p className="text-muted-foreground">Valenzuela City, NCR, Philippines</p>
                  </div>
                </motion.div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-card/50 p-6 rounded-lg backdrop-blur-sm border border-border"
            >
              <h3 className="text-2xl font-bold text-foreground mb-4">Let&apos;s Connect!</h3>
              <p className="text-muted-foreground mb-6">
                Whether you have a project in mind, want to collaborate, or just want to say hello, I&apos;d love to hear
                from you. Feel free to reach out through any of the channels above or use the contact form.
              </p>
              <div className="bg-accent/10 p-4 rounded-lg border border-accent/20">
                <h4 className="font-semibold text-accent mb-2">Response Time</h4>
                <p className="text-muted-foreground text-sm">
                  I typically respond to messages within 24 hours during weekdays.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-card/50 p-6 sm:p-8 rounded-lg backdrop-blur-sm border border-border"
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">Send a Message</h3>

            {submitStatus.type && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mb-6 p-4 rounded-lg border flex items-start ${
                  submitStatus.type === "success"
                    ? "bg-green-500/10 text-green-400 border-green-500/20"
                    : submitStatus.type === "demo"
                      ? "bg-accent/10 text-accent border-accent/20"
                      : "bg-red-500/10 text-red-400 border-red-500/20"
                }`}
              >
                {submitStatus.type === "success" ? (
                  <CheckCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                ) : submitStatus.type === "demo" ? (
                  <Info className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                ) : (
                  <AlertCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                )}
                <span>{submitStatus.message}</span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2 flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  minLength={2}
                  maxLength={100}
                  className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 text-foreground placeholder-muted-foreground"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2 flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  maxLength={100}
                  className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 text-foreground placeholder-muted-foreground"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2 flex items-center">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  minLength={10}
                  maxLength={1000}
                  rows={6}
                  className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 resize-vertical text-foreground placeholder-muted-foreground"
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-accent text-accent-foreground py-3 px-6 rounded-lg hover:opacity-90 focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 font-semibold"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
