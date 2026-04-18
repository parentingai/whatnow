import { useEffect, useRef } from 'react';
import type { TimeFilter, LocationFilter, EnergyFilter, VenueFilter } from '../data/activities';
import { trackEmptyPoolHit } from '../lib/analytics';

interface Props {
  onSpin: (time: TimeFilter, location: LocationFilter, energy: EnergyFilter) => void;
  onCustomize: () => void;
  customCount: number;
  spinPoolEmpty: boolean;
  time: TimeFilter;
  location: LocationFilter;
  energy: EnergyFilter;
  venue: VenueFilter;
  onTimeChange: (v: TimeFilter) => void;
  onLocationChange: (v: LocationFilter) => void;
  onEnergyChange: (v: EnergyFilter) => void;
  onVenueChange: (v: VenueFilter) => void;
}

export function HomeScreen({ onSpin, onCustomize, customCount, spinPoolEmpty, time, location, energy, venue, onTimeChange, onLocationChange, onEnergyChange, onVenueChange }: Props) {
  const toggle = <T,>(current: T, value: T): T =>
    current === value ? (null as T) : value;

  // Fire empty_pool_hit once per entry into the empty state (not on every
  // rerender). `wasEmptyRef` tracks the previous value so we only emit on the
  // false→true transition.
  const wasEmptyRef = useRef(false);
  useEffect(() => {
    if (spinPoolEmpty && !wasEmptyRef.current) {
      trackEmptyPoolHit();
    }
    wasEmptyRef.current = spinPoolEmpty;
  }, [spinPoolEmpty]);

  return (
    <div className="home-screen">
      <div className="hero-section">
        <h1 className="app-title">WhatNow?</h1>
        <p className="app-subtitle">Never run out of things to do with your kid</p>

        <button
          className="main-button"
          onClick={() => onSpin(time, location, energy)}
          disabled={spinPoolEmpty}
        >
          <span className="main-button-emoji">🎲</span>
          <span className="main-button-text">What should we do now?</span>
        </button>
        <div className="no-results" aria-hidden={!spinPoolEmpty} data-empty={spinPoolEmpty}>
          <p>Nothing in this mix. Adjust filters below, or:</p>
          <button className="no-results-action" onClick={onCustomize} tabIndex={spinPoolEmpty ? 0 : -1}>
            🎡 Open Customize
          </button>
        </div>
      </div>

      <div className="filters">
        <div className="filter-group">
          <span className="filter-label">⏱ Time</span>
          <div className="filter-options">
            <button
              className={`filter-btn ${time === '10min' ? 'active' : ''}`}
              onClick={() => onTimeChange(toggle(time, '10min'))}
            >10 min</button>
            <button
              className={`filter-btn ${time === '30min' ? 'active' : ''}`}
              onClick={() => onTimeChange(toggle(time, '30min'))}
            >30 min</button>
            <button
              className={`filter-btn ${time === 'longer' ? 'active' : ''}`}
              onClick={() => onTimeChange(toggle(time, 'longer'))}
            >1 hr+</button>
          </div>
        </div>

        <div className="filter-group">
          <span className="filter-label">📍 Where</span>
          <div className="filter-options">
            <button
              className={`filter-btn ${location === 'indoor' ? 'active' : ''}`}
              onClick={() => onLocationChange(toggle(location, 'indoor'))}
            >🏠 Indoor</button>
            <button
              className={`filter-btn ${location === 'outdoor' ? 'active' : ''}`}
              onClick={() => onLocationChange(toggle(location, 'outdoor'))}
            >🌳 Outdoor</button>
          </div>
        </div>

        {location === 'outdoor' && (
          <div className="filter-group">
            <span className="filter-label">🏡 Where exactly?</span>
            <div className="filter-options">
              <button
                className={`filter-btn ${venue === 'backyard' ? 'active' : ''}`}
                onClick={() => onVenueChange(toggle(venue, 'backyard'))}
              >🏡 Backyard</button>
              <button
                className={`filter-btn ${venue === 'park' ? 'active' : ''}`}
                onClick={() => onVenueChange(toggle(venue, 'park'))}
              >🛝 Park</button>
              <button
                className={`filter-btn ${venue === 'neighborhood' ? 'active' : ''}`}
                onClick={() => onVenueChange(toggle(venue, 'neighborhood'))}
              >🚶 Neighborhood</button>
            </div>
          </div>
        )}

        <div className="filter-group">
          <span className="filter-label">⚡ Energy</span>
          <div className="filter-options">
            <button
              className={`filter-btn ${energy === 'chill' ? 'active' : ''}`}
              onClick={() => onEnergyChange(toggle(energy, 'chill'))}
            >😌 Chill</button>
            <button
              className={`filter-btn ${energy === 'active' ? 'active' : ''}`}
              onClick={() => onEnergyChange(toggle(energy, 'active'))}
            >🏃 Active</button>
          </div>
        </div>
      </div>

      <div className="bottom-actions">
        <button className="secondary-btn" onClick={onCustomize}>
          🎡 Customize Wheel {customCount > 0 && `(${customCount} hidden)`}
        </button>
      </div>
    </div>
  );
}
