export interface Project {
  id: string
  title: string
  role: string
  description: string
  image: string
  longDescription: string
  technologies: string[]
  githubLink: string
}

export const projects: Project[] = [
   {
    id: "kill-that-intruder",
    title: "Kill That Intruder",
    role: "Role: Team Lead",
    description: "Kill that Intruder is a thrilling puzzle game recommended for 18 years old and above.",
    image: "../images/kti-poster.png",
    longDescription:
      "Players will be able to sharpen their thinking skills, strategic thinking and imagination by guessing silhouette objects scatterred in the scene. This game is intended to give thrill and excitement to the players by giving a thrilling story line.",
    technologies: ["Java", "Canva", "Figma", "GDrive", "PowerPoint"],
    githubLink: "https://drive.google.com/file/d/1J8BKmGtaU7yYqekvjSZ52m90lOECFLe-/view?usp=sharing",
  },
  {
    id: "ecommerce-platform",
    title: "TPC Surplus",
    role: "Role: Team Lead",
    description:
      "TPC SURPLUS is a sophisticated e-commerce platform specializing in electronics and computer hardware.",
    image: "../images/ecommerce.jpeg",
    longDescription:
      "TPC SURPLUS is a sophisticated e-commerce platform specializing in electronics and computer hardware. The platform features a modern, user-friendly interface with advanced search capabilities, product categorization, and dynamic collection displays. Key features include a responsive product grid, real-time hot deals with countdown timers, wishlist functionality, and a secure shopping cart system. The platform offers a seamless shopping experience for browsing and purchasing electronics, from laptops and smartphones to accessories and cameras.",
    technologies: ["HTML", "CSS", "Javascript"],
    githubLink: "https://github.com/MarkStevenSibayan/TPC-EcommerceWeb",
  },
  {
    id: "capstone-project",
    title: "PetConnect",
    role: "Role: Documentation Lead",
    description: "PetConnect is a social media-based mobile application developed to create a social media platform for pet enthusiasts",
    image: "../images/petconnect.png",
    longDescription:
      "The system features include pet adoption, registration, and redemption services. The City Veterinary Service Office (CVSO) currently relies on an already implemented system, ValPet, to guide citizens on their manual processes. This system needs improvements in functionality that require pet enthusiasts and CVSO to perform essential tasks such as the mentioned processes more conveniently. The platform embeds social media features such as posting, liking, and commenting to promote community engagement.",
    technologies: [ "Google Docs", "Word", "Jira", "PowerPoint", "Draw.io"],
    githubLink: "",
  },
  {
    id: "social-media-app",
    title: "Universe",
    role: "Role: Team Lead",
    description: "A dynamic social media mobile application built for IT professionals, students, and tech enthusiasts",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/socialmediaapp.jpg-A9UTMFua3cPxoU5ee1nR81UA1DfxZM.jpeg",
    longDescription:
      "Universe is a dynamic social media mobile application built for IT professionals, students, and tech enthusiasts to share, save, and explore IT-related content. Whether you're into programming, cybersecurity, AI, networking, or emerging tech, Universe provides a space to post valuable insights, discover trending topics, and engage in meaningful discussions.",
    technologies: ["Typescript", "Javascript", "HTML", "SCSS", "Angular"],
    githubLink: "https://github.com/MarkStevenSibayan/MobileApp-Universe",
  },
  {
    id: "admission-system",
    title: "Beastlink Admission System",
    role: "Role: Frontend Dev",
    description: "A comprehensive admission management system for Beastlink University",
    image: "../images/beastlink.jpeg",
    longDescription:
      "Beastlink University Admission System is a comprehensive platform designed to streamline the entire admission process. The system features an intuitive applicant dashboard with a progress tracker showing application stages (Application, Document, Exam, Interview, Decision, Enrollment). It includes course browsing functionality with detailed information about various programs across different colleges. Administrators can manage applicants, track their progress, and communicate with prospective students. The system supports multiple user roles including applicants, admission officers, and department heads.",
    technologies: ["React JS", "TailwindCSS", "HTML", "Laravel"],
    githubLink: "https://github.com/MarkStevenSibayan/Beastlink-AdmissionManagementSystem",
  },
 
]
