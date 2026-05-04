import { useLanguage } from '../context/LanguageContext';

function Projects() {
  const { t, language } = useLanguage();
 
  const projects = [
    {
      icon: "fas fa-boxes-stacked",
      title: t('project1Title'),
      shortDesc: t('project1Badge'),
      description: t('project1Desc'),
      metrics: [
        { value: t('project1Metric1'), label: t('project1Metric1Label') },
        { value: t('project1Metric2'), label: t('project1Metric2Label') },
        { value: t('project1Metric3'), label: t('project1Metric3Label') }
      ],
      impacts: [t('project1Impact1'), t('project1Impact2'), t('project1Impact3')],
      reportLinkID: "Multi-Depot-Distribution-Optimizer-DSS(Ind).pdf",
      reportLinkEN: "Multi-Depot-Distribution-Optimizer-DSS(Eng).pdf",
      liveLink: "https://inventory-ml-dashboard.streamlit.app"
    },
    {
      icon: "fas fa-route",
      title: t('project2Title'),
      shortDesc: t('project2Badge'),
      description: t('project2Desc'),
      metrics: [
        { value: t('project2Metric1'), label: t('project2Metric1Label') },
        { value: t('project2Metric2'), label: t('project2Metric2Label') },
        { value: t('project2Metric3'), label: t('project2Metric3Label') }
      ],
      impacts: [t('project2Impact1'), t('project2Impact2'), t('project2Impact3')],
      reportLinkID: "Multi-Depot-Distribution-Optimizer-DSS(Ind).pdf",
      reportLinkEN: "Multi-Depot-Distribution-Optimizer-DSS(Eng).pdf",
      liveLink: "https://optimasisistemdc.streamlit.app/"
    },
    {
      icon: "fas fa-chart-line",
      title: t('project3Title'),
      shortDesc: t('project3Badge'),
      description: t('project3Desc'),
      metrics: [
        { value: t('project3Metric1'), label: t('project3Metric1Label') },
        { value: t('project3Metric2'), label: t('project3Metric2Label') },
        { value: t('project3Metric3'), label: t('project3Metric3Label') }
      ],
      impacts: [t('project3Impact1'), t('project3Impact2'), t('project3Impact3')],
      reportLinkID: "Supplier-Performance-Analytics-Dashboard(Ind).pdf",
      reportLinkEN: "Supplier-Performance-Analytics-Dashboard(Eng).pdf",
      liveLink: "https://lead-time-po-late-prediction.streamlit.app"
    }
  ]
 
  return (
    <section className="section" id="projects">
      <div className="section-header">
        <h2><i className="fas fa-microchip"></i> {t('projectsTitle')}</h2>
      </div>
      <div className="projects-grid">
        {projects.map((project, idx) => (
          <div className="project-card" key={idx}>
            <div className="project-card-inner">
              <div className="project-header">
                <div className="project-icon">
                  <i className={project.icon}></i>
                </div>
                <div className="project-badge">{project.shortDesc}</div>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-metrics">
                {project.metrics.map((metric, i) => (
                  <div className="metric" key={i}>
                    <span className="metric-value">{metric.value}</span>
                    <span className="metric-label">{metric.label}</span>
                  </div>
                ))}
              </div>
              <div className="project-impacts">
                <div className="impact-header">
                  <i className="fas fa-chart-simple"></i> {t('businessImpact')}
                </div>
                <ul>
                  {project.impacts.map((impact, i) => (
                    <li key={i}>✓ {impact}</li>
                  ))}
                </ul>
              </div>
              <div className="project-links">
                {/* Tampilkan hanya 1 report sesuai bahasa yang aktif */}
                {language === 'id' && project.reportLinkID && (
                  <a href={`/${project.reportLinkID}`} target="_blank" rel="noopener noreferrer" className="project-link">
                    <i className="fas fa-file-pdf"></i> Laporan (ID)
                  </a>
                )}

                {language === 'en' && project.reportLinkEN && (
                  <a href={`/${project.reportLinkEN}`} target="_blank" rel="noopener noreferrer" className="project-link">
                    <i className="fas fa-file-pdf"></i> Report (EN)
                  </a>
                )}

                {project.liveLink && (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link live">
                    <i className="fas fa-external-link-alt"></i> {t('liveDemo')}
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
 
export default Projects