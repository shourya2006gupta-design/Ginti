import TimelinePreview from '../components/TimelinePreview';
import { useAppContext } from '../context/AppContext';
import Translate from '../components/Translate';

export default function Understand() {
  const { selectedState } = useAppContext();

  return (
    <div className="container">
      <header className="page-header text-center">
        <h1 className="page-shell__title"><Translate>Understand the Census</Translate></h1>
        <p className="page-shell__desc">
          <Translate>India's Census 2027 is conducted in two distinct phases. Learn what happens during each phase and what information is collected.</Translate>
        </p>
      </header>

      {/* Show Timeline if State is selected */}
      {selectedState && (
        <div style={{ marginBottom: 'var(--space-2xl)' }}>
          <TimelinePreview />
        </div>
      )}

      {/* Phase 1 Explainer */}
      <section className="phase-explainer" aria-labelledby="phase1-heading">
        <div className="phase-explainer__header">
          <div className="phase-explainer__badge"><Translate>Phase 1</Translate></div>
          <h2 id="phase1-heading" className="phase-explainer__title"><Translate>Houselisting & Housing Census</Translate></h2>
          <span className="badge-verified"><Translate>Official Process</Translate></span>
        </div>
        
        <div className="phase-explainer__content">
          <p className="phase-explainer__intro">
            <Translate>During the first phase, enumerators identify and list all buildings, census houses, and households across the country. They also collect data on housing conditions and amenities available to the household.</Translate>
          </p>

          <div className="phase-explainer__grid">
            <div className="explainer-card">
              <div className="explainer-card__icon" aria-hidden="true">🏠</div>
              <h3 className="explainer-card__title"><Translate>Housing Condition</Translate></h3>
              <p className="explainer-card__text">
                <Translate>Details about the building material (roof, wall, floor) and the condition of the census house (good, livable, dilapidated).</Translate>
              </p>
            </div>

            <div className="explainer-card">
              <div className="explainer-card__icon" aria-hidden="true">🚰</div>
              <h3 className="explainer-card__title"><Translate>Amenities</Translate></h3>
              <p className="explainer-card__text">
                <Translate>Availability of drinking water, electricity, toilet facilities, and wastewater disposal.</Translate>
              </p>
            </div>

            <div className="explainer-card">
              <div className="explainer-card__icon" aria-hidden="true">📺</div>
              <h3 className="explainer-card__title"><Translate>Assets</Translate></h3>
              <p className="explainer-card__text">
                <Translate>Information on assets owned by the household, such as vehicles, televisions, computers, and internet access.</Translate>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Phase 2 Explainer */}
      <section className="phase-explainer phase-explainer--alt" aria-labelledby="phase2-heading">
        <div className="phase-explainer__header">
          <div className="phase-explainer__badge" style={{ background: 'var(--color-accent)' }}><Translate>Phase 2</Translate></div>
          <h2 id="phase2-heading" className="phase-explainer__title"><Translate>Population Enumeration</Translate></h2>
          <span className="badge-verified"><Translate>Official Process</Translate></span>
        </div>
        
        <div className="phase-explainer__content">
          <p className="phase-explainer__intro">
            <Translate>The second phase focuses on counting every individual and collecting detailed demographic, socio-cultural, and economic data.</Translate>
          </p>

          <div className="phase-explainer__grid">
            <div className="explainer-card">
              <div className="explainer-card__icon" aria-hidden="true">👨‍👩‍👧‍👦</div>
              <h3 className="explainer-card__title"><Translate>Demographics</Translate></h3>
              <p className="explainer-card__text">
                <Translate>Name, relationship to head, sex, date of birth, age, marital status, and age at marriage.</Translate>
              </p>
            </div>

            <div className="explainer-card">
              <div className="explainer-card__icon" aria-hidden="true">📚</div>
              <h3 className="explainer-card__title"><Translate>Education</Translate></h3>
              <p className="explainer-card__text">
                <Translate>Literacy status, highest educational level attained, and whether attending school or college.</Translate>
              </p>
            </div>

            <div className="explainer-card">
              <div className="explainer-card__icon" aria-hidden="true">💼</div>
              <h3 className="explainer-card__title"><Translate>Economic Activity</Translate></h3>
              <p className="explainer-card__text">
                <Translate>Details on work status, occupation, industry, and migration particulars.</Translate>
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="info-box" style={{ marginTop: 'var(--space-2xl)', marginBottom: 'var(--space-3xl)' }}>
        <h3 className="info-box__title">
          <span aria-hidden="true">💡</span> <Translate>Why Self-Enumeration?</Translate>
        </h3>
        <p className="info-box__text">
          <Translate>For the first time, Census 2027 offers a fully digital Self-Enumeration portal. You can securely fill out both Phase 1 and Phase 2 forms online from your smartphone or computer, saving time and ensuring accuracy.</Translate>
        </p>
      </div>

    </div>
  );
}
