import { useLanguage } from '../context/LanguageContext';
import './components.css';

function Hero() {
  const { t, language } = useLanguage(); // ← tambahkan language
  
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  // Tentukan file CV berdasarkan bahasa
  const cvFile = language === 'id' 
    ? '/Andre Nugraha Akbar_CV.pdf' 
    : '/Andre Nugraha Akbar-CV.pdf';

  return (
    <section className="section hero-section" id="home">
      <div className="hero">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-pulse"></span>
            <i className="fas fa-chart-line"></i> {t('heroBadge')}
          </div>
          <h1 className="hero-title">
            {t('heroHeadline')}
            <span className="hero-title-highlight">
              {t('heroHighlight')}
            </span>
          </h1>
          <p className="hero-subheadline">
            {t('heroSubheadline')}
          </p>
          <p className="hero-desc">
            {t('heroDesc')}
          </p>
          <div className="btn-group">
            <button onClick={() => scrollToSection('projects')} className="btn btn-primary">
              <i className="fas fa-folder-open"></i> {t('viewProjects')}
            </button>
            <button onClick={() => scrollToSection('contact')} className="btn btn-outline">
              <i className="fas fa-paper-plane"></i> {t('contactMe')}
            </button>
            <a href={cvFile} download className="btn btn-outline">
              <i className="fas fa-download"></i> {t('downloadCV')}
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <i className="fas fa-check-circle text-accent"></i>
              <span>{t('projects')}</span>
            </div>
            <div className="stat-item">
              <i className="fas fa-chart-simple text-accent"></i>
              <span>{t('dataDriven')}</span>
            </div>
            <div className="stat-item">
              <i className="fas fa-trophy text-accent"></i>
              <span>{t('supplyChainFocus')}</span>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-photo">
            <img src="/ST200024.JPG" alt="Industrial Engineer" />
            <div className="photo-glow"></div>
          </div>
          <div className="floating-elements">
            <div className="float-item float-1"><i className="fas fa-chart-line"></i></div>
            <div className="float-item float-2"><i className="fas fa-boxes"></i></div>
            <div className="float-item float-3"><i className="fas fa-chart-pie"></i></div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <span>{t('scroll')}</span>
        <i className="fas fa-chevron-down"></i>
      </div>
    </section>
  )
}

export default Hero