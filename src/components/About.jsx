import { useLanguage } from '../context/LanguageContext';

function About() {
  const { t } = useLanguage();

  const coreValues = [
    { icon: "fas fa-chart-line", text: t('value1') },
    { icon: "fas fa-sync-alt",   text: t('value2') },
    { icon: "fas fa-bullseye",   text: t('value3') }
  ];

  return (
    <section className="section" id="about">
      <div className="section-header">
        <h2>
          <i className="fas fa-user-astronaut"></i> {t('aboutTitle')}
        </h2>
      </div>

      <div className="about-wrapper">
        <div className="about-card">
          <div className="about-text-group">
            <p className="about-text">{t('aboutText1')}</p>
            <p className="about-text">{t('aboutText2')}</p>
            <p className="about-text">{t('aboutText3')}</p>
          </div>

          <div className="core-values">
            {coreValues.map((value, i) => (
              <div className="value-item" key={i}>
                <i className={value.icon}></i>
                <span>{value.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;