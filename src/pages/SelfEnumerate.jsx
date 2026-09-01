import { useState } from 'react';
import { GUIDE_QUESTIONS } from '../data/guideData';
import { useNavigate } from 'react-router-dom';
import { askGuideQuestion } from '../services/ai';
import { useAppContext } from '../context/AppContext';
import { useTranslation } from '../context/TranslationContext';
import Translate from '../components/Translate';
import './SelfEnumerate.css';

export default function SelfEnumerate() {
  const navigate = useNavigate();
  const { selectedState, selectedLanguage } = useAppContext();
  const { translate } = useTranslation();
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAiHelp, setShowAiHelp] = useState(false);
  const [userQuestion, setUserQuestion] = useState('');
  const [aiAnswer, setAiAnswer] = useState('');
  const [isAsking, setIsAsking] = useState(false);

  const currentQ = GUIDE_QUESTIONS[currentIndex];
  const isLast = currentIndex === GUIDE_QUESTIONS.length - 1;

  const handleNext = () => {
    if (!isLast) {
      setCurrentIndex(prev => prev + 1);
      resetAiState();
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      resetAiState();
    }
  };

  const resetAiState = () => {
    setShowAiHelp(false);
    setUserQuestion('');
    setAiAnswer('');
  };

  const handleFinish = () => {
    navigate('/');
  };

  const handleAskAi = async () => {
    if (!userQuestion.trim()) return;
    setIsAsking(true);
    
    const stateContext = selectedState || 'India';
    
    const answer = await askGuideQuestion(
      `${currentQ.topic} - ${currentQ.question}: ${userQuestion}`, 
      stateContext, 
      selectedLanguage
    );
    
    setAiAnswer(answer);
    setIsAsking(false);
  };

  return (
    <div className="container">
      <header className="page-header text-center">
        <h1 className="page-shell__title"><Translate>Self-Enumeration Guide</Translate></h1>
        <p className="page-shell__desc">
          <Translate>We break down complex census questions so you can fill out the official form quickly and accurately.</Translate>
        </p>
      </header>

      <div className="guide-container">
        {/* Progress Bar */}
        <div className="guide-progress">
          <div 
            className="guide-progress__bar" 
            style={{ width: `${((currentIndex + 1) / GUIDE_QUESTIONS.length) * 100}%` }}
          ></div>
        </div>
        <p className="guide-progress__text"><Translate>Question</Translate> {currentIndex + 1} <Translate>of</Translate> {GUIDE_QUESTIONS.length}</p>

        {/* Structured Guide Card */}
        <div className="guide-card">
          <div className="guide-card__topic"><Translate>{currentQ.topic}</Translate></div>
          <h2 className="guide-card__question">"<Translate>{currentQ.question}</Translate>"</h2>
          
          <div className="guide-card__section">
            <h3 className="guide-card__subtitle">💡 <Translate>Simple Explanation</Translate></h3>
            <p><Translate>{currentQ.simpleExplanation}</Translate></p>
          </div>

          <div className="guide-card__section guide-card__section--example">
            <h3 className="guide-card__subtitle">📝 <Translate>Example</Translate></h3>
            <p><Translate>{currentQ.example}</Translate></p>
          </div>

          <div className="guide-card__section guide-card__section--warning">
            <h3 className="guide-card__subtitle">⚠️ <Translate>Common Mistake</Translate></h3>
            <p><Translate>{currentQ.commonMistake}</Translate></p>
          </div>

          {/* AI Help Section */}
          <div className="guide-ai-section">
            {!showAiHelp ? (
              <button 
                className="btn btn-secondary guide-ai-btn"
                onClick={() => setShowAiHelp(true)}
              >
                <span aria-hidden="true">🤖</span> <Translate>Need more help with this question?</Translate>
              </button>
            ) : (
              <div className="ai-chat-box">
                <div className="ai-chat-box__header">
                  <span className="badge-ai"><Translate>Ginti AI</Translate></span>
                  <button className="btn-close" onClick={resetAiState}>✕</button>
                </div>
                
                <p className="ai-chat-box__prompt">
                  <Translate>Ask me anything about</Translate> "{currentQ.topic}". <Translate>I'll explain it simply.</Translate>
                </p>
                
                <div className="trust-form" style={{ marginBottom: 0 }}>
                  <input 
                    type="text" 
                    className="trust-form__input"
                    placeholder="E.g., What if my roof is made of bamboo?"
                    value={userQuestion}
                    onChange={(e) => setUserQuestion(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleAskAi()}
                    disabled={isAsking}
                  />
                  <button 
                    className="btn btn-primary"
                    onClick={handleAskAi}
                    disabled={isAsking || !userQuestion.trim()}
                  >
                    {isAsking ? 'Thinking...' : 'Ask AI'}
                  </button>
                </div>

                {aiAnswer && (
                  <div className="ai-chat-box__answer">
                    <strong><Translate>AI Response:</Translate></strong>
                    <p>{aiAnswer}</p>
                    <small className="ai-disclaimer"><Translate>This is an AI-generated explanation, not official government advice.</Translate></small>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Navigation */}
        <div className="guide-nav">
          <button 
            className="btn"
            style={{ visibility: currentIndex > 0 ? 'visible' : 'hidden' }}
            onClick={handlePrev}
          >
            ← <Translate>Previous</Translate>
          </button>
          
          <button 
            className="btn btn-primary"
            onClick={isLast ? handleFinish : handleNext}
          >
            {isLast ? <Translate>Finish Guide</Translate> : <><Translate>Next Question</Translate> →</>}
          </button>
        </div>

      </div>
    </div>
  );
}
