import { useState, useCallback } from 'react';
import { HomeScreen } from './components/HomeScreen';
import { ActivitySpinner } from './components/ActivitySpinner';
import { CustomizeScreen } from './components/CustomizeScreen';
import { useExcluded } from './hooks/useCustomActivities';
import { getFilteredActivities } from './data/activities';
import type { Activity, TimeFilter, LocationFilter, EnergyFilter } from './data/activities';
import './App.css';

type Screen = 'home' | 'spin' | 'customize';

function App() {
  const [screen, setScreen] = useState<Screen>('home');
  const [pool, setPool] = useState<Activity[]>([]);
  const [spinKey, setSpinKey] = useState(0);
  const [time, setTime] = useState<TimeFilter>(null);
  const [location, setLocation] = useState<LocationFilter>(null);
  const [energy, setEnergy] = useState<EnergyFilter>(null);
  const { excluded, toggle, selectAll, deselectAll, isExcluded } = useExcluded();

  const filteredAll = getFilteredActivities(time, location, energy);
  const filteredHidden = filteredAll.filter((a) => excluded.has(a.id)).length;
  const spinPoolSize = filteredAll.length - filteredHidden;

  const startSpin = useCallback(
    (t: TimeFilter, l: LocationFilter, e: EnergyFilter) => {
      setTime(t);
      setLocation(l);
      setEnergy(e);
      const filtered = getFilteredActivities(t, l, e)
        .filter((a) => !excluded.has(a.id));
      if (filtered.length === 0) return;
      setPool(filtered);
      setSpinKey((k) => k + 1);
      setScreen('spin');
    },
    [excluded]
  );

  return (
    <div className="app">
      {screen === 'home' && (
        <HomeScreen
          onSpin={startSpin}
          onCustomize={() => setScreen('customize')}
          customCount={filteredHidden}
          spinPoolEmpty={spinPoolSize === 0}
          time={time}
          location={location}
          energy={energy}
          onTimeChange={setTime}
          onLocationChange={setLocation}
          onEnergyChange={setEnergy}
        />
      )}

      {screen === 'spin' && pool.length > 0 && (
        <ActivitySpinner
          key={spinKey}
          activities={pool}
          onBack={() => setScreen('home')}
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
          location={location}
          energy={energy}
          onTimeChange={setTime}
          onLocationChange={setLocation}
          onEnergyChange={setEnergy}
        />
      )}
    </div>
  );
}

export default App;
