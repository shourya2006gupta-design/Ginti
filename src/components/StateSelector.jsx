import { useAppContext } from '../context/AppContext';
import { STATES } from '../data/censusData';
import Translate from './Translate';

export default function StateSelector() {
  const { selectedState, selectState } = useAppContext();

  return (
    <div className="state-selector">
      <label htmlFor="state-select" className="state-selector__label">
        <Translate>Select Your State / UT</Translate>
      </label>
      <select
        id="state-select"
        className="state-selector__select"
        value={selectedState}
        onChange={(e) => selectState(e.target.value)}
        aria-label="Select your state or union territory"
      >
        <option value="">— Choose your state —</option>
        {STATES.map((state) => (
          <option key={state.id} value={state.id}>
            {state.name}
          </option>
        ))}
      </select>
    </div>
  );
}
