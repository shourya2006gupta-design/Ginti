import { createContext, useContext, useState, useCallback } from 'react';

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [selectedState, setSelectedState] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const selectState = useCallback((stateId) => {
    setSelectedState(stateId);
  }, []);

  const selectLanguage = useCallback((langCode) => {
    setSelectedLanguage(langCode);
  }, []);

  const value = {
    selectedState,
    selectedLanguage,
    selectState,
    selectLanguage,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return context;
}
