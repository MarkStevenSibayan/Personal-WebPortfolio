import Introduction from "./components/Introduction"
import Projects from "./components/Projects"
import ResumePreview from "./components/ResumePreview"
import FloatingResumeButton from "./components/FloatingResumeButton"

export default function Home() {
  return (
    <main>
      <Introduction />
      <ResumePreview />
      <Projects />
      <FloatingResumeButton />
    </main>
  )
}
