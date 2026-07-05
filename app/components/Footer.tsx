import { Github, Linkedin, Facebook, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t border-border/40 py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-8">
          {/* Social Links */}
          <div className="flex justify-center items-center space-x-6 sm:space-x-8">
            <a
              href="https://github.com/MarkStevenSibayan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-muted-foreground hover:text-accent hover:bg-accent/10 rounded-lg transition-all duration-300 border border-transparent hover:border-accent/30"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/mark-steven-sibayan-6522a0334/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-muted-foreground hover:text-accent hover:bg-accent/10 rounded-lg transition-all duration-300 border border-transparent hover:border-accent/30"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://www.facebook.com/markstevensibayan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-muted-foreground hover:text-accent hover:bg-accent/10 rounded-lg transition-all duration-300 border border-transparent hover:border-accent/30"
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://www.instagram.com/mr_kenj1/?source=omni_redirect"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-muted-foreground hover:text-accent hover:bg-accent/10 rounded-lg transition-all duration-300 border border-transparent hover:border-accent/30"
            >
              <Instagram size={24} />
            </a>
          </div>

          {/* Divider */}
          <div className="w-12 h-px bg-border/40"></div>

          {/* Copyright */}
          <p className="text-muted-foreground text-center text-sm">
            &copy; {new Date().getFullYear()} Mark Steven B. Sibayan. Crafted with precision.
          </p>
        </div>
      </div>
    </footer>
  )
}
