import { useState, useEffect } from 'react';

const STORAGE_KEY = 'whatnow-excluded';
const VERSION_KEY = 'whatnow-state-version';
const CURRENT_VERSION = '2';

export function useExcluded() {
  const [excluded, setExcluded] = useState<Set<number>>(() => {
    try {
      // One-time migration: clear stale state from earlier builds.
      const version = localStorage.getItem(VERSION_KEY);
      if (version !== CURRENT_VERSION) {
        localStorage.removeItem(STORAGE_KEY);
        localStorage.setItem(VERSION_KEY, CURRENT_VERSION);
        return new Set();
      }
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? new Set(JSON.parse(stored)) : new Set();
    } catch {
      return new Set();
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...excluded]));
  }, [excluded]);

  const toggle = (id: number) => {
    setExcluded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const selectAll = (ids: number[]) => {
    setExcluded((prev) => {
      const next = new Set(prev);
      ids.forEach((id) => next.delete(id));
      return next;
    });
  };

  const deselectAll = (ids: number[]) => {
    setExcluded((prev) => {
      const next = new Set(prev);
      ids.forEach((id) => next.add(id));
      return next;
    });
  };

  const isExcluded = (id: number) => excluded.has(id);

  const excludedCount = excluded.size;

  return { excluded, toggle, selectAll, deselectAll, isExcluded, excludedCount };
}
