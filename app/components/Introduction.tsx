import Image from "next/image"

export default function Introduction() {
  return (
    <section className="py-16 sm:py-24 text-center px-4 relative">
      {/* Subtle green glow background */}
      <div className="absolute inset-0 -top-40 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-b from-accent/15 via-transparent to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Profile Image with subtle glow */}
        <div className="relative w-28 h-28 sm:w-36 sm:h-36 mx-auto mb-8 sm:mb-12">
          <div className="absolute inset-0 bg-gradient-to-b from-accent/20 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <Image
            src="/images/design-mode/profile.jpg"
            alt="Mark Steven B. Sibayan"
            width={144}
            height={144}
            className="rounded-full border border-accent/30 shadow-lg object-cover w-full h-full"
            priority
          />
        </div>

        {/* Headings with green accent */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-3 text-foreground tracking-tight">
          Mark Steven B. Sibayan
        </h1>
        <p className="text-base sm:text-lg text-accent font-medium mb-6">
          Information Technology - Multimedia
        </p>

        {/* Bio */}
        <p className="max-w-2xl mx-auto text-foreground/90 text-sm sm:text-base leading-relaxed mb-8">
          I am a motivated IT professional with a strong passion for technology and continuous learning. I have developed skills in technical support, computer hardware/software, multimedia, and team collaboration through academic and practical experiences. I am eager to apply my knowledge in a professional environment, enhance my technical expertise, and adapt to emerging technologies.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="#projects"
            className="px-6 py-2.5 bg-gradient-to-r from-accent to-green-600 text-accent-foreground font-medium rounded-lg hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 text-sm sm:text-base"
          >
            View My Work
          </a>
          <a
            href="contact"
            className="px-6 py-2.5 border border-accent/50 text-accent font-medium rounded-lg hover:bg-accent/10 transition-all duration-300 text-sm sm:text-base"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  )
}
