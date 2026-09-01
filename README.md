# Ginti 🇮🇳
> **Census 2027, Made Understandable.**

Ginti is a GenAI-powered citizen companion for India's upcoming digital Census 2027. It breaks down complex census phases, offers interactive self-enumeration guidance with contextual AI, verifies rumors with an AI fact-checker, explains key demographic visualizations, and supports regional Indian languages.

---

## 🌟 Key Features

1. **Phase 1 & Phase 2 Breakdown**: Detailed explanations of what data is collected in Houselisting & Housing Census vs. Population Enumeration.
2. **State-Wise Timelines**: Illustrative census schedules tailored by state/UT.
3. **Interactive Self-Enumeration Guide**: 8 detailed steps with simple explanations, concrete examples, common pitfalls, and **in-context Ginti AI assistance**.
4. **"Is This True?" Fact-Checker**: Evaluates census rumors and misinformation against standard census guidelines with structured verdicts and plain-language explanations.
5. **Census Data Explorer**: Meaningful demographic visualizations (Literacy, Urban vs. Rural distribution, Age demographics) paired with plain-language context and **AI Chart Explanations**.
6. **Multilingual Architecture**: Dynamic translation support across Indian regional languages.
7. **Privacy-First Design**: Does not collect Aadhaar, personal names, or exact addresses; zero data persistence.

---

## 🚀 Tech Stack

- **Frontend**: React 19, Vite, React Router 7
- **Styling**: Vanilla CSS Design System with responsive layouts & semantic tokens
- **GenAI**: Google Gemini API via `@google/genai` with automatic multi-model fallback cascade (`gemini-2.0-flash`, `gemini-1.5-flash`, `gemini-1.5-flash-8b`)
- **Charts**: Chart.js & React-Chartjs-2

---

## 🛠️ Getting Started

### 1. Clone & Install
```bash
git clone https://github.com/shourya2006gupta-design/Ginti.git
cd Ginti
npm install
```

### 2. Configure Environment
Create `.env.local` in the project root:
```env
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

### 3. Run Locally
```bash
npm run dev
```

### 4. Build for Production
```bash
npm run build
```

---

## ⚖️ Disclaimer
*Ginti is an educational prototype built for hackathon demonstration. It is not an official Government of India portal. Official census dates and details will be published at [censusindia.gov.in](https://censusindia.gov.in).*
# census
