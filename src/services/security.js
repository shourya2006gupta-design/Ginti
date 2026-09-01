/**
 * Security & Input Sanitization Utilities for Ginti
 */

// Max allowed lengths to prevent buffer / DOS / huge token attacks
const MAX_INPUT_LENGTH = 500;

// Common prompt injection attack patterns
const INJECTION_PATTERNS = [
  /ignore\s+(all\s+)?(previous\s+)?instructions/i,
  /system\s*prompt/i,
  /you\s+are\s+now\s+(in\s+)?(developer|dan|god|jailbreak)\s+mode/i,
  /disregard\s+(the\s+)?rules/i,
  /reveal\s+(your\s+)?(instructions|secret|api\s*key|key)/i,
  /pretend\s+to\s+be\s+(the\s+)?government/i,
  /override\s+system/i,
  /print\s+(the\s+)?prompt/i,
  /give\s+me\s+(aadhaar|passwords|bank)/i,
];

// Sensitive PII patterns (Aadhaar format, Credit cards, Passwords, etc.)
const PII_PATTERNS = [
  /\b\d{4}\s?\d{4}\s?\d{4}\b/, // 12-digit Indian Aadhaar number
  /\b[A-Z]{5}[0-9]{4}[A-Z]{1}\b/, // Indian PAN card format
  /\b(?:\d[ -]*?){13,16}\b/, // Credit/Debit card format
];

/**
 * Strips dangerous HTML tags and characters to prevent XSS.
 */
export function sanitizeText(input) {
  if (typeof input !== 'string') return '';
  return input
    .trim()
    .slice(0, MAX_INPUT_LENGTH)
    .replace(/[<>]/g, ''); // Strip direct HTML angle brackets
}

/**
 * Inspects user input for Prompt Injection or PII attempts.
 * @returns {{ isSafe: boolean, sanitized: string, warning?: string }}
 */
export function validateUserInput(input) {
  if (!input || typeof input !== 'string') {
    return { isSafe: false, sanitized: '', warning: 'Input cannot be empty.' };
  }

  const trimmed = input.trim();

  if (trimmed.length > MAX_INPUT_LENGTH) {
    return {
      isSafe: false,
      sanitized: trimmed.slice(0, MAX_INPUT_LENGTH),
      warning: `Input is too long (maximum ${MAX_INPUT_LENGTH} characters allowed).`
    };
  }

  // Check for PII submission
  for (const piiRegex of PII_PATTERNS) {
    if (piiRegex.test(trimmed)) {
      return {
        isSafe: false,
        sanitized: '',
        warning: 'Privacy Alert: Please do not enter real identity numbers (Aadhaar/PAN/Card numbers). Ginti strictly protects your privacy and never collects personal identifiers.'
      };
    }
  }

  // Check for prompt injection attempts
  for (const pattern of INJECTION_PATTERNS) {
    if (pattern.test(trimmed)) {
      return {
        isSafe: false,
        sanitized: '',
        warning: 'Security Notice: System override commands are blocked. Please ask only census-related questions.'
      };
    }
  }

  return {
    isSafe: true,
    sanitized: sanitizeText(trimmed)
  };
}

/**
 * Sanitizes and verifies AI response output to ensure no leakage or unsafe scripts.
 */
export function sanitizeAiOutput(output) {
  if (typeof output !== 'string') return '';
  return output
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') // Strip script tags
    .replace(/on\w+\s*=\s*["'][^"']*["']/gi, '') // Strip inline JS handlers like onclick
    .trim();
}
