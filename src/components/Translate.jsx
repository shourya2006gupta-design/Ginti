import { useState, useEffect } from 'react';
import { useTranslation } from '../context/TranslationContext';

export default function Translate({ children }) {
  const { translate, selectedLanguage, cache } = useTranslation();
  const rawText = typeof children === 'string' ? children : '';
  
  const initialValue = selectedLanguage === 'en' 
    ? children 
    : (cache[selectedLanguage]?.[rawText] || children);

  const [translatedText, setTranslatedText] = useState(initialValue);

  useEffect(() => {
    let isMounted = true;

    if (selectedLanguage === 'en') {
      setTranslatedText(children);
      return;
    }

    if (typeof children === 'string' && children.trim()) {
      translate(children).then((res) => {
        if (isMounted) {
          setTranslatedText(res);
        }
      });
    } else {
      setTranslatedText(children);
    }

    return () => {
      isMounted = false;
    };
  }, [children, selectedLanguage, translate]);

  return <>{translatedText}</>;
}
