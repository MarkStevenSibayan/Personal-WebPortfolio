export interface Project {
  id: string
  title: string
  description: string
  image: string
  longDescription: string
  technologies: string[]
  githubLink: string
}

export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    title: "E-commerce Platform",
    description:
      "TPC SURPLUS is a sophisticated e-commerce platform specializing in electronics and computer hardware.",
    image: "../images/ecommerce.jpeg",
    longDescription:
      "TPC SURPLUS is a sophisticated e-commerce platform specializing in electronics and computer hardware. The platform features a modern, user-friendly interface with advanced search capabilities, product categorization, and dynamic collection displays. Key features include a responsive product grid, real-time hot deals with countdown timers, wishlist functionality, and a secure shopping cart system. The platform offers a seamless shopping experience for browsing and purchasing electronics, from laptops and smartphones to accessories and cameras.",
    technologies: ["HTML", "CSS", "Javascript"],
    githubLink: "https://github.com/MarkStevenSibayan/TPC-EcommerceWeb",
  },
  {
    id: "social-media-app",
    title: "Social Media Application",
    description: "A dynamic social media platform built for IT professionals, students, and tech enthusiasts",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/socialmediaapp.jpg-A9UTMFua3cPxoU5ee1nR81UA1DfxZM.jpeg",
    longDescription:
      "Universe is a dynamic social media platform built for IT professionals, students, and tech enthusiasts to share, save, and explore IT-related content. Whether you're into programming, cybersecurity, AI, networking, or emerging tech, Universe provides a space to post valuable insights, discover trending topics, and engage in meaningful discussions.",
    technologies: ["Typescript", "Javascript", "HTML", "SCSS"],
    githubLink: "https://github.com/MarkStevenSibayan/MobileApp-Universe",
  },
  {
    id: "admission-system",
    title: "University Admission System",
    description: "A comprehensive admission management system for Beastlink University",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7zvY5YQeZgl8Lk8F7IA5TNgPAm7uJA.png",
    longDescription:
      "Beastlink University Admission System is a comprehensive platform designed to streamline the entire admission process. The system features an intuitive applicant dashboard with a progress tracker showing application stages (Application, Document, Exam, Interview, Decision, Enrollment). It includes course browsing functionality with detailed information about various programs across different colleges. Administrators can manage applicants, track their progress, and communicate with prospective students. The system supports multiple user roles including applicants, admission officers, and department heads.",
    technologies: ["React", "Next.js", "TailwindCSS", "Node.js", "MongoDB"],
    githubLink: "https://github.com/MarkStevenSibayan/Beastlink-AdmissionManagementSystem",
  },
]
