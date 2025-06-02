import Image from "next/image"
import { Code } from "lucide-react"

export default function Introduction() {
  return (
    <section className="mb-12 text-center px-4">
      <div className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-8 sm:mb-12">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full animate-pulse"></div>
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profilepic.jpg-u9qOyxK9uU4v92QEWKYQUHaxhHiodE.jpeg"
          alt="Mark Steven B. Sibayan"
          width={160}
          height={160}
          className="rounded-full border-4 border-white shadow-lg object-cover z-10 relative w-full h-full"
          priority
        />
        <div className="absolute -bottom-2 -right-2 bg-blue-500 text-white rounded-full p-1.5 shadow-lg z-20">
          <Code size={16} className="sm:w-5 sm:h-5" />
        </div>
      </div>
      <h1 className="text-3xl sm:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
        Mark Steven B. Sibayan
      </h1>
      <p className="text-lg sm:text-xl text-gray-400 mb-4">Bachelor of Science in Information Technology</p>
      <p className="max-w-2xl mx-auto text-gray-300 text-sm sm:text-base">
        I am a 4th-year IT student passionate about technology and related skills. Skilled in programming, web
        development, and communication I am eager to gain hands-on experience and grow in the IT industry.
      </p>
    </section>
  )
}
