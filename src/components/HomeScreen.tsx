import { useEffect, useRef, useState } from 'react';
import type { TimeFilter, ModeFilter, EnergyFilter, PlaceFilter } from '../data/activities';
import { trackEmptyPoolHit } from '../lib/analytics';
import { FeedbackModal } from './FeedbackModal';

interface Props {
  onSpin: (time: TimeFilter, mode: ModeFilter, energy: EnergyFilter) => void;
  onCustomize: () => void;
  customCount: number;
  spinPoolEmpty: boolean;
  time: TimeFilter;
  mode: ModeFilter;
  energy: EnergyFilter;
  place: PlaceFilter;
  onTimeChange: (v: TimeFilter) => void;
  onModeChange: (v: ModeFilter) => void;
  onEnergyChange: (v: EnergyFilter) => void;
  onPlaceChange: (v: PlaceFilter) => void;
}

export function HomeScreen({ onSpin, onCustomize, customCount, spinPoolEmpty, time, mode, energy, place, onTimeChange, onModeChange, onEnergyChange, onPlaceChange }: Props) {
  const toggle = <T,>(current: T, value: T): T =>
    current === value ? (null as T) : value;

  const [feedbackOpen, setFeedbackOpen] = useState(false);

  // Fire empty_pool_hit once per entry into the empty state (not on every
  // rerender). `wasEmptyRef` tracks the previous value so we only emit on the
  // false→true transition.
  const wasEmptyRef = useRef(false);
  useEffect(() => {
    if (spinPoolEmpty && !wasEmptyRef.current) {
      trackEmptyPoolHit({ time, mode, energy, place });
    }
    wasEmptyRef.current = spinPoolEmpty;
  }, [spinPoolEmpty, time, mode, energy, place]);

  return (
    <div className="home-screen">
      <div className="hero-section">
        <h1 className="app-title">WhatNow?</h1>
        <p className="app-subtitle">Activity ideas for families</p>

        <button
          className="main-button"
          onClick={() => onSpin(time, mode, energy)}
          disabled={spinPoolEmpty}
        >
          <span className="main-button-emoji">🎲</span>
          <span className="main-button-text">What should we do now?</span>
        </button>
        <p className="no-results" aria-hidden={!spinPoolEmpty} data-empty={spinPoolEmpty}>
          Nothing in this mix — adjust filters below
        </p>
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
              className={`filter-btn ${mode === 'home' ? 'active' : ''}`}
              onClick={() => onModeChange(toggle(mode, 'home'))}
            >🏠 At home</button>
            <button
              className={`filter-btn ${mode === 'out' ? 'active' : ''}`}
              onClick={() => onModeChange(toggle(mode, 'out'))}
            >🌳 Out & about</button>
            <button
              className={`filter-btn ${mode === 'onthego' ? 'active' : ''}`}
              onClick={() => onModeChange(toggle(mode, 'onthego'))}
            >🚗 On the go</button>
          </div>
        </div>

        {mode === 'home' && (
          <div className="filter-group">
            <span className="filter-label">🏡 Where exactly?</span>
            <div className="filter-options">
              <button
                className={`filter-btn ${place === 'indoor' ? 'active' : ''}`}
                onClick={() => onPlaceChange(toggle(place, 'indoor'))}
              >🛋 Indoor</button>
              <button
                className={`filter-btn ${place === 'backyard' ? 'active' : ''}`}
                onClick={() => onPlaceChange(toggle(place, 'backyard'))}
              >🏡 Backyard</button>
            </div>
          </div>
        )}

        {mode === 'out' && (
          <div className="filter-group">
            <span className="filter-label">🏞 Where exactly?</span>
            <div className="filter-options">
              <button
                className={`filter-btn ${place === 'park' ? 'active' : ''}`}
                onClick={() => onPlaceChange(toggle(place, 'park'))}
              >🛝 Park</button>
              <button
                className={`filter-btn ${place === 'neighborhood' ? 'active' : ''}`}
                onClick={() => onPlaceChange(toggle(place, 'neighborhood'))}
              >🚶 Neighborhood</button>
            </div>
          </div>
        )}

        {mode === 'onthego' && (
          <div className="filter-group">
            <span className="filter-label">🚦 Where exactly?</span>
            <div className="filter-options">
              <button
                className={`filter-btn ${place === 'dining' ? 'active' : ''}`}
                onClick={() => onPlaceChange(toggle(place, 'dining'))}
              >🍽️ Dining</button>
              <button
                className={`filter-btn ${place === 'transit' ? 'active' : ''}`}
                onClick={() => onPlaceChange(toggle(place, 'transit'))}
              >🚗 Transit</button>
              <button
                className={`filter-btn ${place === 'shopping' ? 'active' : ''}`}
                onClick={() => onPlaceChange(toggle(place, 'shopping'))}
              >🛒 Shopping</button>
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

      <button
        className="feedback-fab"
        onClick={() => setFeedbackOpen(true)}
        aria-label="Send feedback"
      >
        💬
      </button>

      {feedbackOpen && <FeedbackModal onClose={() => setFeedbackOpen(false)} />}
    </div>
  );
}
