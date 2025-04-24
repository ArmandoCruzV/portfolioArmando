import { Navbar } from './Nav'
import { About } from './pages/About'
import { Skills } from './pages/Skills'
import { Projects } from './pages/Projects'
import { Courses } from './pages/courses'
import { ContactMe } from './pages/ContactMe'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Courses />
      <ContactMe />
    </>
  )
}

export default App
