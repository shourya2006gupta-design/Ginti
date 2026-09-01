import { useState } from 'react';
import { evaluateClaim } from '../services/ai';
import { useAppContext } from '../context/AppContext';
import Translate from '../components/Translate';
import './Trust.css';

const COMMON_CLAIMS = [
  "You need to provide your Aadhaar card to complete self-enumeration.",
  "If I don't participate in the census, my citizenship will be cancelled.",
  "Census data is shared with private companies for marketing.",
  "The census asks for bank account details and passwords."
];

export default function Trust() {
  const { selectedLanguage } = useAppContext();
  const [claim, setClaim] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [result, setResult] = useState(null);

  const handleVerify = async (textToVerify) => {
    if (!textToVerify.trim()) return;
    setIsVerifying(true);
    setResult(null);
    setClaim(textToVerify);

    const evaluation = await evaluateClaim(textToVerify, selectedLanguage);
    
    setResult(evaluation);
    setIsVerifying(false);
  };

  const getVerdictStyle = (verdict) => {
    switch(verdict) {
      case 'True': return { color: 'var(--color-success)', icon: '✅' };
      case 'False': return { color: 'var(--color-danger)', icon: '❌' };
      case 'Misleading': return { color: 'var(--color-warning)', icon: '⚠️' };
      default: return { color: 'var(--color-text-secondary)', icon: '❓' };
    }
  };

  return (
    <div className="container">
      <header className="page-header text-center">
        <h1 className="page-shell__title"><Translate>Trust & Privacy Center</Translate></h1>
        <p className="page-shell__desc">
          <Translate>We protect your privacy. Use the tool below to verify rumors and facts about the Census.</Translate>
        </p>
      </header>

      <section className="trust-card">
        <div className="trust-card__header">
          <h2>🛡️ <Translate>"Is This True?"</Translate></h2>
          <span className="badge-ai"><Translate>AI Fact Checker</Translate></span>
        </div>
        
        <p className="trust-card__intro">
          <Translate>Heard a rumor about the Census? Type it below to verify it against official guidelines.</Translate>
        </p>

        <div className="trust-form">
          <textarea 
            className="trust-form__input"
            rows="3"
            placeholder="Type a claim here (e.g., 'Do I need Aadhaar?')"
            value={claim}
            onChange={(e) => setClaim(e.target.value)}
            disabled={isVerifying}
          />
          <button 
            className="btn btn-primary"
            onClick={() => handleVerify(claim)}
            disabled={isVerifying || !claim.trim()}
          >
            {isVerifying ? 'Verifying...' : 'Verify Claim'}
          </button>
        </div>

        {/* Common Claims Presets */}
        <div className="trust-presets">
          <p className="trust-presets__label"><Translate>Or select a common question:</Translate></p>
          <div className="trust-presets__list">
            {COMMON_CLAIMS.map((preset, idx) => (
              <button 
                key={idx}
                className="trust-preset-btn"
                onClick={() => handleVerify(preset)}
                disabled={isVerifying}
              >
                <Translate>{preset}</Translate>
              </button>
            ))}
          </div>
        </div>

        {/* Result Area */}
        {result && (
          <div className="trust-result">
            <h3 className="trust-result__claim"><Translate>Claim:</Translate> "{claim}"</h3>
            
            <div className="trust-result__verdict-row" style={{ color: getVerdictStyle(result.verdict).color }}>
              <span className="trust-result__icon">{getVerdictStyle(result.verdict).icon}</span>
              <span className="trust-result__text">{result.verdict.toUpperCase()}</span>
            </div>

            <div className="trust-result__explanation">
              <strong><Translate>Explanation:</Translate></strong> {result.explanation}
            </div>
            
            <div className="trust-result__source">
              <span className="badge-verified"><Translate>Source:</Translate> {result.source || 'Standard Census Guidelines'}</span>
            </div>
          </div>
        )}
      </section>

      {/* Privacy Pledge */}
      <section className="privacy-pledge">
        <h3><Translate>Our Privacy Pledge</Translate></h3>
        <ul className="privacy-pledge__list">
          <li><strong><Translate>We do not collect</Translate></strong> <Translate>your Aadhaar, name, or exact address.</Translate></li>
          <li><strong><Translate>We do not save</Translate></strong> <Translate>your form responses on our servers.</Translate></li>
          <li><strong><Translate>We only help</Translate></strong> <Translate>you understand the process before you submit your data on the official government portal.</Translate></li>
        </ul>
      </section>

    </div>
  );
}
