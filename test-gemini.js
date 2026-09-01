import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const apiKey = process.env.VITE_GEMINI_API_KEY;

if (!apiKey) {
  console.error("ERROR: VITE_GEMINI_API_KEY is not set in .env.local");
  process.exit(1);
}

const ai = new GoogleGenAI({ apiKey });

async function testGemini() {
  console.log("Testing Gemini API connection...");
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash',
      contents: 'Say "Hello, Ginti!" and nothing else.',
    });
    console.log("SUCCESS! Gemini API responded with:", response.text);
  } catch (error) {
    console.error("FAILED! Gemini API error:", error.message || error);
  }
}

testGemini();
