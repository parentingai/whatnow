import { useState, useCallback, useEffect, useRef } from 'react';
import { HomeScreen } from './components/HomeScreen';
import { ActivitySpinner } from './components/ActivitySpinner';
import { CustomizeScreen } from './components/CustomizeScreen';
import { useExcluded } from './hooks/useCustomActivities';
import { getFilteredActivities } from './data/activities';
import type { Activity, TimeFilter, ModeFilter, EnergyFilter, PlaceFilter } from './data/activities';
import {
  initAnalytics,
  trackAppOpened,
  trackCustomizeOpened,
  trackSpinCompleted,
} from './lib/analytics';
import './App.css';

type Screen = 'home' | 'spin' | 'customize';

// Session-only memory of recent winners, so the wheel avoids immediate repeats.
const RECENT_SIZE = 4;

function App() {
  const [screen, setScreen] = useState<Screen>('home');
  const [pool, setPool] = useState<Activity[]>([]);
  const [spinKey, setSpinKey] = useState(0);
  const [time, setTime] = useState<TimeFilter>(null);
  const [mode, setMode] = useState<ModeFilter>(null);
  const [energy, setEnergy] = useState<EnergyFilter>(null);
  const [place, setPlace] = useState<PlaceFilter>(null);
  const { excluded, toggle, selectAll, deselectAll, isExcluded } = useExcluded();
  // Ref — doesn't trigger re-renders and doesn't need to survive app relaunch.
  const recentRef = useRef<number[]>([]);
  // Track the filter combo used for the in-flight spin so onLand can attribute
  // the event without re-reading state (which may have changed by then).
  const spinFiltersRef = useRef<{
    time: TimeFilter;
    mode: ModeFilter;
    energy: EnergyFilter;
  }>({ time: null, mode: null, energy: null });

  useEffect(() => {
    void initAnalytics();
    trackAppOpened();
  }, []);

  // Clear the sub-bucket (place) whenever the top-level mode changes, since
  // the available places differ per mode (home → indoor/backyard,
  // out → park/neighborhood, onthego → dining/transit/shopping).
  useEffect(() => {
    setPlace(null);
  }, [mode]);

  const filteredAll = getFilteredActivities(time, mode, energy, place);
  const filteredHidden = filteredAll.filter((a) => excluded.has(a.id)).length;
  const spinPoolSize = filteredAll.length - filteredHidden;

  // Build the candidate pool for a fresh wheel. Drops recently-seen winners
  // when the remaining set is large enough; otherwise falls back to the full
  // pool so we never starve the wheel below its minimum. When the base pool
  // is already small (≤ 8), skip the recent filter entirely — dropping
  // RECENT_SIZE items from a small pool makes the "Customize count" and the
  // on-wheel count visibly diverge, which confuses users more than occasional
  // repeats help.
  const buildPool = useCallback(
    (t: TimeFilter, m: ModeFilter, e: EnergyFilter): Activity[] => {
      const base = getFilteredActivities(t, m, e, place).filter((a) => !excluded.has(a.id));
      if (base.length <= 8) return base;
      const withoutRecent = base.filter((a) => !recentRef.current.includes(a.id));
      return withoutRecent.length >= 2 ? withoutRecent : base;
    },
    [excluded, place]
  );

  const startSpin = useCallback(
    (t: TimeFilter, m: ModeFilter, e: EnergyFilter) => {
      setTime(t);
      setMode(m);
      setEnergy(e);
      const next = buildPool(t, m, e);
      if (next.length === 0) return;
      spinFiltersRef.current = { time: t, mode: m, energy: e };
      setPool(next);
      setSpinKey((k) => k + 1);
      setScreen('spin');
    },
    [buildPool]
  );

  // "New wheel": resample the pool from the same filters and remount the
  // spinner so it picks a fresh random set of segments.
  const onNewWheel = useCallback(() => {
    const next = buildPool(time, mode, energy);
    if (next.length === 0) return;
    setPool(next);
    setSpinKey((k) => k + 1);
  }, [buildPool, time, mode, energy]);

  // Called by the spinner whenever it lands on a winner.
  const onLand = useCallback((id: number) => {
    const prev = recentRef.current.filter((x) => x !== id);
    recentRef.current = [id, ...prev].slice(0, RECENT_SIZE);
    trackSpinCompleted(spinFiltersRef.current);
  }, []);

  const openCustomize = useCallback(() => {
    trackCustomizeOpened();
    setScreen('customize');
  }, []);

  return (
    <div className="app">
      {screen === 'home' && (
        <HomeScreen
          onSpin={startSpin}
          onCustomize={openCustomize}
          customCount={filteredHidden}
          spinPoolEmpty={spinPoolSize === 0}
          time={time}
          mode={mode}
          energy={energy}
          place={place}
          onTimeChange={setTime}
          onModeChange={setMode}
          onEnergyChange={setEnergy}
          onPlaceChange={setPlace}
        />
      )}

      {screen === 'spin' && pool.length > 0 && (
        <ActivitySpinner
          key={spinKey}
          activities={pool}
          onBack={() => setScreen('home')}
          onNewWheel={onNewWheel}
          onLand={onLand}
        />
      )}

      {screen === 'customize' && (
        <CustomizeScreen
          isExcluded={isExcluded}
          toggle={toggle}
          selectAll={selectAll}
          deselectAll={deselectAll}
          onBack={() => setScreen('home')}
          time={time}
          mode={mode}
          energy={energy}
          place={place}
          onTimeChange={setTime}
          onModeChange={setMode}
          onEnergyChange={setEnergy}
          onPlaceChange={setPlace}
        />
      )}
    </div>
  );
}

export default App;
