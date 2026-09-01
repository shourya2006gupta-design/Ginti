import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider, useAppContext } from './context/AppContext';
import { TranslationProvider } from './context/TranslationContext';
import App from './App';
import './index.css';

/**
 * Updates document.documentElement.lang whenever the selected language changes.
 * Improves screen reader behaviour and SEO for multilingual content.
 */
function LangSync() {
  const { selectedLanguage } = useAppContext();
  useEffect(() => {
    document.documentElement.lang = selectedLanguage;
  }, [selectedLanguage]);
  return null;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AppProvider>
        <TranslationProvider>
          <LangSync />
          <App />
        </TranslationProvider>
      </AppProvider>
    </BrowserRouter>
  </StrictMode>
);
