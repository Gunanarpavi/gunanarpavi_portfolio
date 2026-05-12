import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Journey from './components/Journey'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import { about, journey, profile, projects, skills } from './data/profile'

function App() {
  return (
    <div className="app-shell">
      <Navbar name={profile.name} />
      <main className="app-main">
        <Hero profile={profile} />

        <div className="section-wrap">
          <About about={about} />
          <Journey items={journey} />
          <Skills skills={skills} />
          <Projects projects={projects} />
          <Contact profile={profile} />
        </div>
      </main>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} {profile.name}. Built with React and purpose.</p>
      </footer>
    </div>
  )
}

export default App
