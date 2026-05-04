import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

function Contact() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText('andrenugrahaakbar@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="section" id="contact">
      <div className="section-header">
        <h2><i className="fas fa-envelope-open-text"></i> {t('contactTitle')}</h2>
      </div>
      <div className="contact-wrapper">
        <div className="contact-card">
          <div className="contact-info">
            <div className="contact-item" onClick={copyEmail}>
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-details">
                <span className="contact-label">{t('emailLabel')}</span>
                <span className="contact-value">andrenugrahaakbar@gmail.com</span>
              </div>
              <button className="copy-btn">
                <i className={`fas ${copied ? 'fa-check' : 'fa-copy'}`}></i>
              </button>
            </div>
            <a href="https://linkedin.com/in/andrenugrahaakbar" target="_blank" rel="noopener noreferrer" className="contact-item">
              <div className="contact-icon">
                <i className="fab fa-linkedin-in"></i>
              </div>
              <div className="contact-details">
                <span className="contact-label">{t('linkedinLabel')}</span>
                <span className="contact-value">linkedin.com/in/andrenugrahaakbar</span>
              </div>
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>
          <div className="contact-note">
            <i className="fas fa-comment-dots"></i>
            <div>
              <strong>{t('openTo')}</strong>
              <p>{t('roles')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact