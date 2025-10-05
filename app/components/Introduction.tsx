import Image from "next/image"
import { Fingerprint } from "lucide-react"

export default function Introduction() {
  return (
    <section className="mb-12 sm:mb-16 text-center px-4 sm:px-6 lg:px-8">
      <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto mb-8 sm:mb-12">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full animate-pulse"></div>
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profilepic.jpg-u9qOyxK9uU4v92QEWKYQUHaxhHiodE.jpeg"
          alt="Mark Steven B. Sibayan"
          width={192}
          height={192}
          className="rounded-full border-4 border-white shadow-lg object-cover z-10 relative w-full h-full"
          priority
        />
        <div className="absolute -bottom-2 -right-2 bg-blue-500 text-white rounded-full p-2 shadow-lg z-20">
          <Fingerprint className="w-4 h-4 sm:w-5 sm:h-5" />
        </div>
      </div>
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
        Mark Steven B. Sibayan
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-4">
        Bachelor of Science in Information Technology
      </p>
      <p className="max-w-2xl mx-auto text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed px-4">
        I am a 4th-year IT student passionate about technology and related skills. Skilled in programming, web
        development, and hardware troubleshooting. I am eager to gain hands-on experience and grow in the IT industry.
      </p>
    </section>
  )
}
