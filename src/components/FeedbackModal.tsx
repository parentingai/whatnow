import { useState } from 'react';
import { FEEDBACK_MIN_LENGTH, submitFeedback } from '../lib/feedback';

interface Props {
  onClose: () => void;
}

type Status = 'idle' | 'sending' | 'sent' | 'error';

// Simple full-screen overlay with a textarea. No email capture — keeps the
// privacy label clean (no "User Content linked to identifier") and the flow
// fast. Users who want a reply can include their address in the body.
export function FeedbackModal({ onClose }: Props) {
  const [text, setText] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<string | null>(null);

  const canSend = text.trim().length >= FEEDBACK_MIN_LENGTH && status !== 'sending';

  const handleSend = async () => {
    if (!canSend) return;
    setStatus('sending');
    setError(null);
    try {
      await submitFeedback(text);
      setStatus('sent');
      // Auto-close after the thanks message has time to land.
      setTimeout(onClose, 1500);
    } catch (e) {
      setStatus('error');
      setError(e instanceof Error ? e.message : 'Something went wrong');
    }
  };

  return (
    <div className="feedback-overlay" role="dialog" aria-modal="true" aria-label="Send feedback">
      <div className="feedback-modal">
        {status === 'sent' ? (
          <div className="feedback-sent">
            <span className="feedback-sent-emoji">💌</span>
            <p>Thanks! We read every one.</p>
          </div>
        ) : (
          <>
            <h2 className="feedback-title">Send feedback</h2>
            <p className="feedback-hint">
              Stuck on something? Idea for an activity? Bug? Tell us.
            </p>
            <textarea
              className="feedback-textarea"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Your message..."
              rows={6}
              maxLength={1900}
              autoFocus
              disabled={status === 'sending'}
            />
            {error && <p className="feedback-error">{error}</p>}
            <div className="feedback-actions">
              <button
                className="feedback-btn feedback-btn-secondary"
                onClick={onClose}
                disabled={status === 'sending'}
              >
                Cancel
              </button>
              <button
                className="feedback-btn feedback-btn-primary"
                onClick={handleSend}
                disabled={!canSend}
              >
                {status === 'sending' ? 'Sending…' : 'Send'}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
