// Lightweight feedback submission to Firestore.
//
// Uses the Firestore REST API directly so we don't need to pull in the Web
// SDK or register a Web app in Firebase — the security rules allow
// unauthenticated `create` on the `feedback` collection with a fixed schema.
// See firestore.rules in the Firebase console.
//
// If offline or the request fails, the caller gets an error and shows a
// "please try again" message. We don't queue retries — losing the occasional
// feedback message isn't worth the complexity for v1.

import { Capacitor } from '@capacitor/core';

const PROJECT_ID = 'whatnow-kids';
const API_KEY = 'AIzaSyD8j3ZlKHcPJ4ASub_tidx4lBUbc8pCePI'; // Public, safe in client
const ENDPOINT = `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents/feedback?key=${API_KEY}`;

// Bump these with each release — they travel with the feedback so we know
// which version a user was on when they wrote in.
const APP_VERSION = '1.0.0';
const BUILD_NUMBER = '4';

export async function submitFeedback(text: string): Promise<void> {
  const trimmed = text.trim();
  if (!trimmed) throw new Error('Feedback is empty');
  if (trimmed.length > 1900) throw new Error('Feedback is too long');

  const body = {
    fields: {
      text: { stringValue: trimmed },
      platform: { stringValue: Capacitor.getPlatform() },
      appVersion: { stringValue: APP_VERSION },
      buildNumber: { stringValue: BUILD_NUMBER },
      createdAt: { timestampValue: new Date().toISOString() },
    },
  };

  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const errText = await res.text().catch(() => '');
    throw new Error(`Feedback upload failed (${res.status}): ${errText.slice(0, 200)}`);
  }
}
