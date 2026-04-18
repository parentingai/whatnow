import { activities } from '../data/activities';
import type { TimeFilter, LocationFilter, EnergyFilter, VenueFilter } from '../data/activities';

interface Props {
  isExcluded: (id: number) => boolean;
  toggle: (id: number) => void;
  selectAll: (ids: number[]) => void;
  deselectAll: (ids: number[]) => void;
  onBack: () => void;
  time: TimeFilter;
  location: LocationFilter;
  energy: EnergyFilter;
  venue: VenueFilter;
  onTimeChange: (v: TimeFilter) => void;
  onLocationChange: (v: LocationFilter) => void;
  onEnergyChange: (v: EnergyFilter) => void;
  onVenueChange: (v: VenueFilter) => void;
}

const MIN_WHEEL = 2;

export function CustomizeScreen({ isExcluded, toggle, selectAll, deselectAll, onBack, time, location, energy, venue, onTimeChange, onLocationChange, onEnergyChange, onVenueChange }: Props) {
  const toggleFilter = <T,>(current: T, value: T): T =>
    current === value ? (null as T) : value;

  const filtered = activities.filter((a) => {
    if (time && a.time !== time) return false;
    if (location && a.location !== location) return false;
    if (energy && a.energy !== energy) return false;
    // 'anywhere' activities show up regardless of the specific venue picked.
    if (venue && a.venue !== venue && a.venue !== 'anywhere') return false;
    return true;
  });

  const enabledCount = filtered.filter((a) => !isExcluded(a.id)).length;

  // Clear is scoped to the current filter view: only touches what the user sees.
  // Keeps MIN_WHEEL items visible so the view never drops below 2 after Clear.
  const filteredEnabledIds = filtered.filter((a) => !isExcluded(a.id)).map((a) => a.id);
  const keepInFiltered = Math.min(filteredEnabledIds.length, MIN_WHEEL);
  const idsToClear = filteredEnabledIds.slice(keepInFiltered);
  const canClear = idsToClear.length > 0;
  const canSelectAll = enabledCount < filtered.length;

  return (
    <div className="customize-screen">
      <button className="back-btn" onClick={onBack}>← Back</button>
      <h2 className="screen-title">🎡 What's on the Wheel?</h2>
      <p className="customize-hint">{enabledCount} of {filtered.length} in the mix</p>

      <div className="filters">
        <div className="filter-group">
          <span className="filter-label">⏱ Time</span>
          <div className="filter-options">
            <button className={`filter-btn ${time === '10min' ? 'active' : ''}`} onClick={() => onTimeChange(toggleFilter(time, '10min'))}>10 min</button>
            <button className={`filter-btn ${time === '30min' ? 'active' : ''}`} onClick={() => onTimeChange(toggleFilter(time, '30min'))}>30 min</button>
            <button className={`filter-btn ${time === 'longer' ? 'active' : ''}`} onClick={() => onTimeChange(toggleFilter(time, 'longer'))}>1 hr+</button>
          </div>
        </div>

        <div className="filter-group">
          <span className="filter-label">📍 Where</span>
          <div className="filter-options">
            <button className={`filter-btn ${location === 'indoor' ? 'active' : ''}`} onClick={() => onLocationChange(toggleFilter(location, 'indoor'))}>🏠 Indoor</button>
            <button className={`filter-btn ${location === 'outdoor' ? 'active' : ''}`} onClick={() => onLocationChange(toggleFilter(location, 'outdoor'))}>🌳 Outdoor</button>
          </div>
        </div>

        {location === 'outdoor' && (
          <div className="filter-group">
            <span className="filter-label">🏡 Where exactly?</span>
            <div className="filter-options">
              <button className={`filter-btn ${venue === 'backyard' ? 'active' : ''}`} onClick={() => onVenueChange(toggleFilter(venue, 'backyard'))}>🏡 Backyard</button>
              <button className={`filter-btn ${venue === 'park' ? 'active' : ''}`} onClick={() => onVenueChange(toggleFilter(venue, 'park'))}>🛝 Park</button>
              <button className={`filter-btn ${venue === 'neighborhood' ? 'active' : ''}`} onClick={() => onVenueChange(toggleFilter(venue, 'neighborhood'))}>🚶 Neighborhood</button>
            </div>
          </div>
        )}

        <div className="filter-group">
          <span className="filter-label">⚡ Energy</span>
          <div className="filter-options">
            <button className={`filter-btn ${energy === 'chill' ? 'active' : ''}`} onClick={() => onEnergyChange(toggleFilter(energy, 'chill'))}>😌 Chill</button>
            <button className={`filter-btn ${energy === 'active' ? 'active' : ''}`} onClick={() => onEnergyChange(toggleFilter(energy, 'active'))}>🏃 Active</button>
          </div>
        </div>
      </div>

      <div className="pick-grid-header">
        <span className="pick-grid-count">{enabledCount}/{filtered.length}</span>
        <div className="pick-grid-actions">
          <button
            className="select-all-link"
            style={{ visibility: canClear ? 'visible' : 'hidden' }}
            onClick={() => deselectAll(idsToClear)}
          >
            Keep {MIN_WHEEL}
          </button>
          <button
            className="select-all-link"
            style={{ visibility: canSelectAll ? 'visible' : 'hidden' }}
            onClick={() => selectAll(filtered.map((a) => a.id))}
          >
            Select All
          </button>
        </div>
      </div>

      <div className="pick-grid">
        {filtered.map((a) => {
          const on = !isExcluded(a.id);
          // Lock when unselecting would drop the current view below MIN_WHEEL.
          const locked = on && enabledCount <= MIN_WHEEL;
          return (
            <button
              key={a.id}
              className={`pick-chip ${on ? 'on' : 'off'}${locked ? ' locked' : ''}`}
              onClick={() => !locked && toggle(a.id)}
            >
              <span className="pick-emoji">{a.emoji}</span>
              <span className="pick-label">{a.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
