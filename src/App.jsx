import { useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Certificate from './components/Certificate'
import Contact from './components/Contact'
import LanguageToggle from './components/LanguageToggle'
import './App.css'
import { useLanguage } from './context/LanguageContext'

function App() {
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal')
        }
      })
    }, { threshold: 0.1 })

    document.querySelectorAll('.section, .card, .exp-item, .project-card, .cert-card').forEach(el => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="container">
      <LanguageToggle />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certificate />
      <Contact />
      <footer style={{ textAlign: 'center', padding: '2rem', fontSize: '0.85rem', color: '#94a3b8', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <p>© 2025 {t('heroHeadline')} | {t('heroHighlight')}</p>
        <p style={{ marginTop: '0.5rem' }}>
          <i className="fas fa-chart-line"></i> {t('footerText')}
        </p>
      </footer>
    </div>
  )
}

export default App