import { useState, useRef, useEffect } from 'react';
import { useAppContext } from '../context/AppContext';
import { LANGUAGES } from '../data/censusData';

export default function LanguageSelector() {
  const { selectedLanguage, selectLanguage } = useAppContext();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const currentLang = LANGUAGES.find((l) => l.code === selectedLanguage) || LANGUAGES[0];

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  function handleSelect(code) {
    selectLanguage(code);
    setIsOpen(false);
  }

  function handleKeyDown(e) {
    if (e.key === 'Escape') {
      setIsOpen(false);
    }
  }

  return (
    <div className="lang-selector" ref={dropdownRef} onKeyDown={handleKeyDown}>
      <button
        className="lang-selector__trigger"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label={`Language: ${currentLang.label}. Click to change.`}
        id="language-selector-btn"
      >
        <span className="lang-selector__icon" aria-hidden="true">🌐</span>
        <span>{currentLang.nativeLabel}</span>
        <span aria-hidden="true" style={{ fontSize: '0.6rem', opacity: 0.6 }}>
          {isOpen ? '▲' : '▼'}
        </span>
      </button>

      {isOpen && (
        <ul
          className="lang-selector__dropdown"
          role="listbox"
          aria-labelledby="language-selector-btn"
        >
          {LANGUAGES.map((lang) => (
            <li key={lang.code} role="option" aria-selected={lang.code === selectedLanguage}>
              <button
                className={`lang-selector__option ${
                  lang.code === selectedLanguage ? 'lang-selector__option--active' : ''
                }`}
                onClick={() => handleSelect(lang.code)}
              >
                <span className="lang-selector__option-label">
                  <span>{lang.label}</span>
                  <span className="lang-selector__option-native">{lang.nativeLabel}</span>
                </span>
                {lang.code === selectedLanguage && (
                  <span className="lang-selector__check" aria-hidden="true">✓</span>
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
