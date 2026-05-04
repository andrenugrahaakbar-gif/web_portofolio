import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

function Skills() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('technical')

  const skillCategories = {
    technical: {
      icon: "fas fa-microchip",
      title: t('techTitle'),
      skills: [t('skill1'), t('skill2'), t('skill3'), t('skill4')]
    },
    tools: {
      icon: "fas fa-laptop-code",
      title: t('toolsTitle'),
      skills: [t('tool1'), t('tool2'), t('tool3'), t('tool4'), t('tool5')]
    },
    analytical: {
      icon: "fas fa-brain",
      title: t('analyticalTitle'),
      skills: [t('analytical1'), t('analytical2'), t('analytical3'), t('analytical4'), t('analytical5')]
    }
  }

  return (
    <section className="section" id="skills">
      <div className="section-header">
        <h2><i className="fas fa-code-branch"></i> {t('skillsTitle')}</h2>
      </div>
      
      <div className="skills-tabs">
        <button className={`tab-btn ${activeTab === 'technical' ? 'active' : ''}`} onClick={() => setActiveTab('technical')}>
          <i className="fas fa-microchip"></i> {t('techTab')}
        </button>
        <button className={`tab-btn ${activeTab === 'tools' ? 'active' : ''}`} onClick={() => setActiveTab('tools')}>
          <i className="fas fa-laptop-code"></i> {t('toolsTab')}
        </button>
        <button className={`tab-btn ${activeTab === 'analytical' ? 'active' : ''}`} onClick={() => setActiveTab('analytical')}>
          <i className="fas fa-brain"></i> {t('analyticalTab')}
        </button>
      </div>

      <div className="skills-content">
        <div className="card skills-card">
          <div className="skills-icon">
            <i className={skillCategories[activeTab].icon}></i>
          </div>
          <h3>{skillCategories[activeTab].title}</h3>
          
          {/* LIST SKILLS - TANPA PROGRESS BAR */}
          <div className="skills-list-simple">
            {skillCategories[activeTab].skills.map((skill, i) => (
              <div className="skill-item-simple" key={i}>
                <div className="skill-bullet">
                  <i className="fas fa-check-circle"></i>
                </div>
                <span className="skill-name-simple">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills