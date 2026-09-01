import { Link } from 'react-router-dom';
import StateSelector from '../components/StateSelector';
import TimelinePreview from '../components/TimelinePreview';
import { useAppContext } from '../context/AppContext';
import Translate from '../components/Translate';

export default function Home() {
  const { selectedState } = useAppContext();

  return (
    <div>
      <section className="hero">
        <div className="container">
          <div className="hero__badge">
            <span aria-hidden="true">🇮🇳</span> <Translate>India's First Fully Digital Census</Translate>
          </div>
          <h1 className="hero__title">
            <Translate>Census 2027,</Translate> <br />
            <span className="hero__title-accent"><Translate>Made Understandable.</Translate></span>
          </h1>
          <p className="hero__subtitle">
            <Translate>Ginti helps you understand the census phases, complete self-enumeration, verify claims, and explore data — in your language, with AI by your side.</Translate>
          </p>

          <StateSelector />
        </div>
      </section>

      {/* Show timeline only if a state is selected to encourage interaction */}
      {selectedState && (
        <div className="container">
          <TimelinePreview />
        </div>
      )}

      <section className="container" style={{ marginTop: 'var(--space-3xl)' }}>
        <div className="quick-actions">
          <Link to="/understand" className="quick-action-card">
            <div className="quick-action-card__icon quick-action-card__icon--understand">
              📖
            </div>
            <h3 className="quick-action-card__title"><Translate>Understand the Phases</Translate></h3>
            <p className="quick-action-card__desc">
              <Translate>Learn what information is collected in Phase 1 (Houselisting) and Phase 2 (Population).</Translate>
            </p>
          </Link>

          <Link to="/self-enumerate" className="quick-action-card">
            <div className="quick-action-card__icon quick-action-card__icon--guide">
              📝
            </div>
            <h3 className="quick-action-card__title"><Translate>Self-Enumeration Guide</Translate></h3>
            <p className="quick-action-card__desc">
              <Translate>Step-by-step interactive guidance on how to fill out the digital census form.</Translate>
            </p>
          </Link>

          <Link to="/explore" className="quick-action-card">
            <div className="quick-action-card__icon quick-action-card__icon--explore">
              📊
            </div>
            <h3 className="quick-action-card__title"><Translate>Explore Data</Translate></h3>
            <p className="quick-action-card__desc">
              <Translate>See how census data shapes your state's future through meaningful visualizations.</Translate>
            </p>
          </Link>

          <Link to="/trust" className="quick-action-card">
            <div className="quick-action-card__icon quick-action-card__icon--trust">
              🛡️
            </div>
            <h3 className="quick-action-card__title"><Translate>Trust & Privacy</Translate></h3>
            <p className="quick-action-card__desc">
              <Translate>Verify claims, bust misinformation, and learn how your data is protected.</Translate>
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
}
