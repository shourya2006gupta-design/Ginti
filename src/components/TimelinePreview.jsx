import { useAppContext } from '../context/AppContext';
import { STATES, getStateTimeline, formatDate } from '../data/censusData';
import Translate from './Translate';

export default function TimelinePreview() {
  const { selectedState } = useAppContext();

  if (!selectedState) {
    return (
      <section className="timeline-preview" aria-label="Census timeline">
        <div className="timeline-preview__header">
          <h2 className="timeline-preview__title">📅 <Translate>Your Census Timeline</Translate></h2>
          <span className="badge-demo"><Translate>Illustrative Dates</Translate></span>
        </div>
        <p className="timeline-preview__no-state">
          <Translate>Select your state above to see your Census 2027 schedule.</Translate>
        </p>
      </section>
    );
  }

  const state = STATES.find((s) => s.id === selectedState);
  const timeline = getStateTimeline(selectedState);

  return (
    <section className="timeline-preview" aria-label={`Census timeline for ${state?.name}`}>
      <div className="timeline-preview__header">
        <h2 className="timeline-preview__title">📅 <Translate>Census Timeline</Translate> — {state?.name}</h2>
        <span className="badge-demo"><Translate>Illustrative Dates</Translate></span>
      </div>

      <div className="timeline-preview__phases">
        <div className="timeline-phase">
          <div className="timeline-phase__indicator timeline-phase__indicator--phase1" aria-hidden="true">
            P1
          </div>
          <div className="timeline-phase__content">
            <h3 className="timeline-phase__name"><Translate>Phase 1 — Houselisting & Housing Census</Translate></h3>
            <p className="timeline-phase__dates">
              {formatDate(timeline.phase1.start)} → {formatDate(timeline.phase1.end)}
            </p>
            <p className="timeline-phase__desc">
              <Translate>Collects information about buildings, census houses, households, and amenities.</Translate>
            </p>
          </div>
        </div>

        <div className="timeline-phase">
          <div className="timeline-phase__indicator timeline-phase__indicator--phase2" aria-hidden="true">
            P2
          </div>
          <div className="timeline-phase__content">
            <h3 className="timeline-phase__name"><Translate>Phase 2 — Population Enumeration</Translate></h3>
            <p className="timeline-phase__dates">
              {formatDate(timeline.phase2.start)} → {formatDate(timeline.phase2.end)}
            </p>
            <p className="timeline-phase__desc">
              <Translate>Counts every person and collects demographic, educational, and economic details.</Translate>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
