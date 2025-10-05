import Introduction from "./components/Introduction"
import Projects from "./components/Projects"
import ResumePreview from "./components/ResumePreview"

export default function Home() {
  return (
    <main className="w-full py-8 sm:py-12">
      <Introduction />
      <ResumePreview />
      <Projects />
    </main>
  )
}
