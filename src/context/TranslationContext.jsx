import { createContext, useContext, useState, useRef, useCallback, useEffect } from 'react';
import { useAppContext } from './AppContext';
import { translateBatch } from '../services/ai';

const TranslationContext = createContext(null);

const STORAGE_KEY = 'ginti_translation_cache_v1';

function loadInitialCache() {
  try {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch (e) {
    return {};
  }
}

export function TranslationProvider({ children }) {
  const { selectedLanguage } = useAppContext();
  const [cache, setCache] = useState(loadInitialCache);
  const [isTranslating, setIsTranslating] = useState(false);

  const queueRef = useRef([]);
  const timerRef = useRef(null);

  const saveCache = (newCache) => {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(newCache));
    } catch (e) {
      // Ignore storage errors
    }
  };

  const flushQueue = useCallback(async () => {
    const queue = [...queueRef.current];
    queueRef.current = [];
    timerRef.current = null;

    if (queue.length === 0) return;
    if (selectedLanguage === 'en') {
      queue.forEach(({ text, resolve }) => resolve(text));
      return;
    }

    const uncached = [];
    queue.forEach(({ text, resolve }) => {
      const cachedVal = cache[selectedLanguage]?.[text];
      if (cachedVal) {
        resolve(cachedVal);
      } else {
        uncached.push({ text, resolve });
      }
    });

    if (uncached.length === 0) return;

    setIsTranslating(true);
    const uniqueTexts = Array.from(new Set(uncached.map(item => item.text)));

    try {
      const batchResult = await translateBatch(uniqueTexts, selectedLanguage);

      setCache(prev => {
        const langCache = { ...(prev[selectedLanguage] || {}), ...batchResult };
        const updated = { ...prev, [selectedLanguage]: langCache };
        saveCache(updated);
        return updated;
      });

      uncached.forEach(({ text, resolve }) => {
        resolve(batchResult[text] || text);
      });
    } catch (error) {
      console.error('Batch translation failed, resolving fallbacks:', error);
      uncached.forEach(({ text, resolve }) => resolve(text));
    } finally {
      setIsTranslating(false);
    }
  }, [selectedLanguage, cache]);

  const translate = useCallback((text) => {
    if (!text || typeof text !== 'string') return Promise.resolve(text);
    if (selectedLanguage === 'en') return Promise.resolve(text);

    if (cache[selectedLanguage]?.[text]) {
      return Promise.resolve(cache[selectedLanguage][text]);
    }

    return new Promise((resolve) => {
      queueRef.current.push({ text, resolve });
      if (!timerRef.current) {
        timerRef.current = setTimeout(flushQueue, 60);
      }
    });
  }, [selectedLanguage, cache, flushQueue]);

  useEffect(() => {
    if (selectedLanguage === 'en') return;
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);
    const nodes = [];
    let node;
    while ((node = walker.nextNode())) {
      const parent = node.parentElement;
      if (!parent) continue;
      const tag = parent.tagName;
      if (['INPUT', 'TEXTAREA', 'CODE', 'PRE', 'SCRIPT', 'STYLE'].includes(tag) || parent.dataset.noTranslate !== undefined) continue;
      const text = node.textContent.trim();
      if (!text) continue;
      const isNumber = /^\d+(?:[.,]\d+)*$/.test(text);
      const isDate = /^\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4}$/.test(text);
      const isURL = /^(https?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.]*$/i.test(text);
      const isID = /^[A-Z]{2,4}\d{2,6}$/i.test(text);
      const isCitation = /\[\d+\]/.test(text);
      if (isNumber || isDate || isURL || isID || isCitation) continue;
      nodes.push(node);
    }
    if (nodes.length === 0) return;

    const uniqueTexts = Array.from(new Set(nodes.map(n => n.textContent.trim())));
    setIsTranslating(true);
    translateBatch(uniqueTexts, selectedLanguage)
      .then((translations) => {
        nodes.forEach((n) => {
          const original = n.textContent.trim();
          const translated = translations[original];
          if (translated) n.textContent = translated;
        });
      })
      .catch((e) => console.error('Full page translation error', e))
      .finally(() => setIsTranslating(false));
  }, [selectedLanguage]);

  return (
    <TranslationContext.Provider value={{ translate, isTranslating, cache, selectedLanguage }}>
      {children}
      {isTranslating && (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white text-center py-1" style={{ zIndex: 1000 }}>
          Translating…
        </div>
      )}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within TranslationProvider');
  }
  return context;
}
