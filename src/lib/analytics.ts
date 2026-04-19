// Narrow analytics wrapper around Firebase Analytics + Crashlytics.
//
// Scope is deliberately tiny: four product events, no automatic screen tracking,
// no IDFA, no user properties. Everything is wrapped in try/catch so a missing
// Firebase config (e.g. local dev without GoogleService-Info.plist) silently
// no-ops instead of crashing.

import { FirebaseAnalytics } from '@capacitor-firebase/analytics';
import { FirebaseCrashlytics } from '@capacitor-firebase/crashlytics';
import { Capacitor } from '@capacitor/core';

const isNative = Capacitor.isNativePlatform();
const isDev = import.meta.env.DEV;

// Log locally in dev so we can see what would be sent.
function debug(event: string, params?: Record<string, unknown>) {
  if (isDev) console.log('[analytics]', event, params ?? {});
}

async function safe<T>(fn: () => Promise<T>): Promise<void> {
  try {
    await fn();
  } catch (err) {
    // Missing plist, offline, or plugin unavailable — never crash the app.
    if (isDev) console.warn('[analytics] failed', err);
  }
}

export async function initAnalytics(): Promise<void> {
  debug('init');
  if (!isNative) return; // Web preview: no-op.
  await safe(async () => {
    // Disable automatic screen/session events — we only want the four we fire.
    await FirebaseAnalytics.setEnabled({ enabled: !isDev });
    await FirebaseCrashlytics.setEnabled({ enabled: !isDev });
  });
}

export function trackAppOpened(): void {
  debug('app_opened');
  if (!isNative || isDev) return;
  void safe(() => FirebaseAnalytics.logEvent({ name: 'app_opened' }));
}

export function trackSpinCompleted(params: {
  time: string | null;
  mode: string | null;
  energy: string | null;
}): void {
  const cleaned = {
    time: params.time ?? 'any',
    mode: params.mode ?? 'any',
    energy: params.energy ?? 'any',
  };
  debug('spin_completed', cleaned);
  if (!isNative || isDev) return;
  void safe(() =>
    FirebaseAnalytics.logEvent({ name: 'spin_completed', params: cleaned })
  );
}

export function trackCustomizeOpened(): void {
  debug('customize_opened');
  if (!isNative || isDev) return;
  void safe(() => FirebaseAnalytics.logEvent({ name: 'customize_opened' }));
}

export function trackEmptyPoolHit(): void {
  debug('empty_pool_hit');
  if (!isNative || isDev) return;
  void safe(() => FirebaseAnalytics.logEvent({ name: 'empty_pool_hit' }));
}
