// src/components/LanguageToggle.jsx
import { useLanguage } from '../context/LanguageContext';
import './components.css';

function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="language-toggle">
      <button 
        className={`lang-btn ${language === 'id' ? 'active' : ''}`}
        onClick={() => language !== 'id' && toggleLanguage()}
      >
        ID
      </button>
      <button 
        className={`lang-btn ${language === 'en' ? 'active' : ''}`}
        onClick={() => language !== 'en' && toggleLanguage()}
      >
        EN
      </button>
    </div>
  );
}

export default LanguageToggle;