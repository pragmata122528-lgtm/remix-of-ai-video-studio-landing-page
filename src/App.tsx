import { Hero } from './components/Hero'
import { Research } from './components/Research'
import { Skills } from './components/Skills'
import { Publications } from './components/Publications'
import { Experience } from './components/Experience'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100" style={{ overflow: 'visible' }}>
      <main className="relative" role="main" style={{ overflow: 'visible' }}>
        <section id="hero" aria-label="Hero section">
          <Hero />
        </section>
        <section id="research" aria-label="Research section">
          <Research />
        </section>
        <section id="skills" aria-label="Skills section">
          <Skills />
        </section>
        <section id="publications" aria-label="Publications section">
          <Publications />
        </section>
        <section id="experience" aria-label="Experience section">
          <Experience />
        </section>
        <section id="contact" aria-label="Contact section">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  )
}
