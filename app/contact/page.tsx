import Contact from "../components/Contact"
import Footer from "../components/Footer"

export const metadata = {
  title: "Contact - Mark Steven Sibayan",
  description:
    "Get in touch with Mark Steven Sibayan for web development projects, collaborations, or just to say hello.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="pt-16 min-h-[calc(100vh-theme(spacing.16))]">
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
