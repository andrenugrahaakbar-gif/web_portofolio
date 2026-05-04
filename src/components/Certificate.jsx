import { useLanguage } from '../context/LanguageContext';

function Certificate() {
  const { t } = useLanguage();

  const certifications = [
    { 
      icon: "fas fa-chart-pie", 
      title: t('cert1Title'), 
      issuer: t('cert1Issuer'), 
      badge: t('cert1Badge'),
      link: "https://app.iodacademy.id/portal-belajar/verify/BSCM-20260403-YG7L1",
    },
    { 
      icon: "fas fa-boxes", 
      title: t('cert2Title'), 
      issuer: t('cert2Issuer'), 
      badge: t('cert2Badge'),
      link: "/Achievements - andrenugrahaakbar-4152 _ Microsoft Learn.pdf",
    },
  ]

  return (
    <section className="section" id="certifications">
      <div className="section-header">
        <h2><i className="fas fa-certificate"></i> {t('certTitle')}</h2>
      </div>
      <div className="cert-grid">
        {certifications.map((cert, idx) => (
          <div className="cert-card" key={idx}>
            <div className="cert-icon">
              <i className={cert.icon}></i>
            </div>
            <h3>{cert.title}</h3>
            <p className="cert-issuer">{cert.issuer}</p>
            <span className="cert-badge">{cert.badge}</span>
            <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-link">
              {t('viewCert')} <i className="fas fa-external-link-alt"></i>
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Certificate