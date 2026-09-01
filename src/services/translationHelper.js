import { translateBatch } from "./ai";

/**
 * Translate visible text nodes on the page, excluding inputs, code blocks, etc.
 * @param {string} language Target language code (e.g., 'hi')
 */
export async function translatePageContent(language) {
  if (!language || language === "en") return;
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);
  const nodes = [];
  let node;
  while ((node = walker.nextNode())) {
    const parent = node.parentElement;
    if (!parent) continue;
    const tag = parent.tagName;
    if (["INPUT", "TEXTAREA", "CODE", "PRE", "SCRIPT", "STYLE"].includes(tag) || parent.dataset.noTranslate !== undefined) continue;
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
  const translations = await translateBatch(uniqueTexts, language);
  nodes.forEach(n => {
    const original = n.textContent.trim();
    const translated = translations[original];
    if (translated) n.textContent = translated;
  });
}
