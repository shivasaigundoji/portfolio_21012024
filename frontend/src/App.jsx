import Navbar from "./components/Navbar"
import Contact from "./sections/Contact"
import Header from "./sections/Header"
import Projects from "./sections/Projects"
import Skills from "./sections/Skills"

export default function App() {
  return (
    <div className="bg-primary font-roboto">
      <Navbar />
      <Header />
      <Projects />
      <Skills />
      <Contact />
    </div>
  )
}