import { useLanguage } from '../context/LanguageContext';

function About() {
  const { t } = useLanguage();

  return (
    <section className="section" id="about">
      <div className="section-header">
        <h2><i className="fas fa-user-astronaut"></i> {t('aboutTitle')}</h2>
      </div>
      <div className="about-wrapper">
        <div className="card about-card">
          <p className="about-text">
            {t('aboutText1')}
          </p>
          <p className="about-text">
            {t('aboutText2')}
          </p>
          <p className="about-text">
            {t('aboutText3')}
          </p>
          <div className="core-values">
            <div className="value-item">
              <i className="fas fa-chart-line"></i>
              <span>{t('value1')}</span>
            </div>
            <div className="value-item">
              <i className="fas fa-sync-alt"></i>
              <span>{t('value2')}</span>
            </div>
            <div className="value-item">
              <i className="fas fa-bullseye"></i>
              <span>{t('value3')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About