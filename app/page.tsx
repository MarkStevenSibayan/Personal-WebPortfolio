import Introduction from "./components/Introduction"
import Projects from "./components/Projects"
import GraphicDesigns from "./components/GraphicDesigns"
import ResumePreview from "./components/ResumePreview"
import FloatingResumeButton from "./components/FloatingResumeButton"

export default function Home() {
  return (
    <main>
      <Introduction />
      <ResumePreview />
      <GraphicDesigns />
      <Projects />
      <FloatingResumeButton />
    </main>
  )
}
