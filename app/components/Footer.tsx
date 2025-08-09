import { Github, Linkedin, Facebook, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 sm:py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-center space-x-4 sm:space-x-6 mb-4">
          <a
            href="https://github.com/MarkStevenSibayan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Github size={20} className="sm:w-6 sm:h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/mark-steven-sibayan-6522a0334/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Linkedin size={20} className="sm:w-6 sm:h-6" />
          </a>
          <a
            href="https://www.facebook.com/markstevensibayan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Facebook size={20} className="sm:w-6 sm:h-6" />
          </a>
          <a
            href="https://www.instagram.com/mr_kenj1/?source=omni_redirect"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Instagram size={20} className="sm:w-6 sm:h-6" />
          </a>
         
        </div>
        <p className="text-gray-400 text-center text-sm sm:text-base">
          &copy; {new Date().getFullYear()} MarkStevenSibayan. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
