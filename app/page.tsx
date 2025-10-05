import Introduction from "./components/Introduction"
import Projects from "./components/Projects"
import ResumePreview from "./components/ResumePreview"

export default function Home() {
  return (
    <main>
      <Introduction />
      <ResumePreview />
      <Projects />
    </main>
  )
}
