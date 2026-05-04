import { useLanguage } from '../context/LanguageContext';

function Experience() {
  const { t } = useLanguage();

  const experiences = [
    {
      type: "work",
      icon: "fas fa-briefcase",
      title: t('exp1Title'),
      period: t('exp1Period'),
      description: t('exp1Desc'),
      achievements: [t('exp1Achievement1'), t('exp1Achievement2')]
    },
    {
      type: "work",
      icon: "fas fa-chalkboard-user",
      title: t('exp2Title'),
      period: t('exp2Period'),
      description: t('exp2Desc'),
      achievements: [t('exp2Achievement1'), t('exp2Achievement2')]
    },
    {
      type: "work",
      icon: "fas fa-warehouse",
      title: t('exp3Title'),
      period: t('exp3Period'),
      description: t('exp3Desc'),
      achievements: [t('exp3Achievement1'), t('exp3Achievement2')]
    },
    {
      type: "organization",
      icon: "fas fa-users",
      title: t('org1Title'),
      period: t('org1Period'),
      description: t('org1Desc'),
      achievements: [t('org1Achievement1'), t('org1Achievement2')]
    },
    {
      type: "organization",
      icon: "fas fa-flask",
      title: t('org2Title'),
      period: t('org2Period'),
      description: t('org2Desc'),
      achievements: [t('org2Achievement1'), t('org2Achievement2')]
    }
  ]

  const workExp = experiences.filter(exp => exp.type === "work")
  const orgExp = experiences.filter(exp => exp.type === "organization")

  return (
    <section className="section" id="experience">
      <div className="section-header">
        <h2><i className="fas fa-briefcase"></i> {t('experienceTitle')}</h2>
      </div>
      
      <div className="exp-org-wrapper">
        <div className="exp-section">
          <div className="exp-section-title">
            <i className="fas fa-briefcase"></i> {t('professionalExp')}
          </div>
          <div className="timeline">
            {workExp.map((exp, idx) => (
              <div className="timeline-item" key={idx}>
                <div className="timeline-icon">
                  <i className={exp.icon}></i>
                </div>
                <div className="timeline-content">
                  <div className="exp-header">
                    <h3>{exp.title}</h3>
                    <span className="exp-period"><i className="fas fa-calendar-alt"></i> {exp.period}</span>
                  </div>
                  <p>{exp.description}</p>
                  <div className="exp-achievements">
                    {exp.achievements.map((ach, i) => (
                      <span className="achievement-tag" key={i}>
                        <i className="fas fa-star"></i> {ach}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="exp-section">
          <div className="exp-section-title">
            <i className="fas fa-users"></i> {t('organizationExp')}
          </div>
          <div className="timeline">
            {orgExp.map((exp, idx) => (
              <div className="timeline-item" key={idx}>
                <div className="timeline-icon">
                  <i className={exp.icon}></i>
                </div>
                <div className="timeline-content">
                  <div className="exp-header">
                    <h3>{exp.title}</h3>
                    <span className="exp-period"><i className="fas fa-calendar-alt"></i> {exp.period}</span>
                  </div>
                  <p>{exp.description}</p>
                  <div className="exp-achievements">
                    {exp.achievements.map((ach, i) => (
                      <span className="achievement-tag" key={i}>
                        <i className="fas fa-star"></i> {ach}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience