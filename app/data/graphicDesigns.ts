export interface GraphicDesign {
  id: string
  title: string
  description: string
  category: "landscape" | "portrait"
  image: string
}

export const graphicDesigns: GraphicDesign[] = [
  {
    id: "design-1",
    title: "Assessment Center 2025",
    description: "Globe Maritime Training Center promotional design featuring water rescue training and enrollment campaign",
    category: "landscape",
    image: "/images/projects/assessment-center-2025.png",
  },
  {
    id: "design-2",
    title: "GMTC 2026",
    description: "Globe Maritime Training Center branding with vessel imagery and professional training program showcase",
    category: "landscape",
    image: "/images/projects/gmtc-2026.png",
  },
  {
    id: "design-3",
    title: "July 2026",
    description: "Training center promotional design highlighting rescue vessel and maritime safety programs",
    category: "landscape",
    image: "/images/projects/july-2026.png",
  },
  {
    id: "design-4",
    title: "December 2025",
    description: "Holiday-themed promotional design for Globe Maritime Training Center with seasonal branding",
    category: "landscape",
    image: "/images/projects/december-2025.png",
  },
  {
    id: "design-5",
    title: "TESDA Program Banner",
    description: "Large-format banner design for vocational training programs featuring welding, automotive, and heavy equipment skills development",
    category: "landscape",
    image: "/images/projects/tesda-banner.png",
  },
]
