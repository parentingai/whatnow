import { useState, useMemo } from 'react';
import type { Activity } from '../data/activities';

const HINT_KEY = 'whatnow-wheel-hinted';

interface Props {
  activities: Activity[];
  onBack: () => void;
  onNewWheel: () => void;
  onLand: (id: number) => void;
}

const MAX_SEGMENTS = 10;
const COLORS = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD', '#74b9ff', '#fd79a8', '#55efc4', '#ffa502'];

function polarToCartesian(cx: number, cy: number, r: number, angle: number) {
  const rad = ((angle - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function describeArc(cx: number, cy: number, r: number, startAngle: number, endAngle: number) {
  const start = polarToCartesian(cx, cy, r, endAngle);
  const end = polarToCartesian(cx, cy, r, startAngle);
  const largeArc = endAngle - startAngle <= 180 ? '0' : '1';
  return `M ${cx} ${cy} L ${start.x} ${start.y} A ${r} ${r} 0 ${largeArc} 0 ${end.x} ${end.y} Z`;
}

export function ActivitySpinner({ activities, onBack, onNewWheel, onLand }: Props) {
  const [spinning, setSpinning] = useState(false);
  const [landed, setLanded] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [winnerIndex, setWinnerIndex] = useState<number | null>(null);
  // Always shown on entry (session-only) — every user gets the cue the first
  // time they reach the spin screen each session. Cleared on first tap.
  const [showEntryHint, setShowEntryHint] = useState(true);
  // Shown after landing, but only until the user has tapped once ever
  // (persisted to localStorage so it doesn't nag on every visit).
  const [showRepeatHint, setShowRepeatHint] = useState(() => {
    try { return localStorage.getItem(HINT_KEY) !== '1'; } catch { return true; }
  });

  // Use all activities if ≤8, otherwise pick 8 random
  const wheelActivities = useMemo(() => {
    if (activities.length <= MAX_SEGMENTS) return activities;
    const shuffled = [...activities].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, MAX_SEGMENTS);
  }, [activities]);

  const segmentAngle = 360 / wheelActivities.length;

  const spin = () => {
    if (spinning) return;
    setSpinning(true);
    setLanded(false);
    setWinnerIndex(null);

    // Spin to a random angle (4-6 full rotations + random offset)
    const fullSpins = (4 + Math.floor(Math.random() * 3)) * 360;
    const randomAngle = Math.random() * 360;
    const newRotation = rotation + fullSpins + randomAngle;

    setRotation(newRotation);

    setTimeout(() => {
      // Determine which segment the pointer landed on.
      // The pointer is fixed at top (0°). The wheel has been rotated newRotation° clockwise.
      // The segment originally at angle A is now at angle (A - newRotation).
      // The pointer hits the segment where (0 - newRotation) mod 360 falls,
      // which is the same as (360 - newRotation % 360) % 360.
      const pointerAngle = ((360 - (newRotation % 360)) % 360 + 360) % 360;
      const landedIndex = Math.floor(pointerAngle / segmentAngle) % wheelActivities.length;

      setSpinning(false);
      setLanded(true);
      setWinnerIndex(landedIndex);
      onLand(wheelActivities[landedIndex].id);
    }, 3500);
  };

  const winner = winnerIndex !== null ? wheelActivities[winnerIndex] : null;

  // Wheel is tappable whenever it isn't mid-spin — both for the very first
  // spin (before any landing) and for re-spinning after a result. Calling
  // spin() directly keeps rotation continuous — no remount jump, no delay.
  const wheelTappable = !spinning;
  const handleSpinAgain = () => {
    if (spinning) return;
    setShowEntryHint(false);
    if (showRepeatHint) {
      try { localStorage.setItem(HINT_KEY, '1'); } catch { /* empty */ }
      setShowRepeatHint(false);
    }
    spin();
  };

  const hintVisible = wheelTappable && (showEntryHint || (landed && showRepeatHint));

  return (
    <div className="spinner-screen">
      <button className="back-btn" onClick={onBack}>← Back</button>

      <div
        className={`wheel-wrapper ${wheelTappable ? 'tappable' : ''}`}
        onClick={wheelTappable ? handleSpinAgain : undefined}
        role={wheelTappable ? 'button' : undefined}
        aria-label={wheelTappable ? 'Spin again' : undefined}
      >
        <div className="wheel-pointer-icon">▼</div>
        <svg
          className="activity-wheel"
          viewBox="-10 -10 320 320"
          style={{
            transform: `rotate(${rotation}deg)`,
            transition: spinning
              ? 'transform 3.5s cubic-bezier(0.15, 0.60, 0.10, 1.00)'
              : 'none',
          }}
        >
          {/* Outer ring */}
          <circle cx="150" cy="150" r="152" fill="#e2e2e2" />
          <circle cx="150" cy="150" r="149" fill="white" />
          {wheelActivities.map((activity, i) => {
            const startAngle = i * segmentAngle;
            const endAngle = startAngle + segmentAngle;
            const midAngleDeg = (startAngle + endAngle) / 2;
            const count = wheelActivities.length;
            const emojiSize = count <= 3 ? 48 : count <= 5 ? 40 : count <= 8 ? 32 : 26;
            const emojiY = count <= 3 ? 55 : count <= 5 ? 60 : count <= 8 ? 65 : 68;

            return (
              <g key={activity.id}>
                <path
                  d={describeArc(150, 150, 140, startAngle, endAngle)}
                  fill={COLORS[i % COLORS.length]}
                  stroke="#fff"
                  strokeWidth="2"
                />
                <g transform={`rotate(${midAngleDeg}, 150, 150)`}>
                  <text
                    x="150"
                    y={emojiY}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize={emojiSize}
                  >
                    {activity.emoji}
                  </text>
                </g>
              </g>
            );
          })}
          {/* Center circle */}
          <circle cx="150" cy="150" r="28" fill="white" stroke="#e2e2e2" strokeWidth="2" />
          <text x="150" y="152" textAnchor="middle" dominantBaseline="middle" fontSize="20">
            🎲
          </text>
        </svg>
      </div>

      {hintVisible && (
        <div className="wheel-tap-hint">
          <span className="wheel-tap-hint-arrow">👆</span>
          <span>Tap the wheel to spin{landed ? ' again' : ''}!</span>
        </div>
      )}

      {!landed && activities.length > wheelActivities.length && (
        <p className="wheel-pool-hint">
          Showing {wheelActivities.length} of {activities.length}
        </p>
      )}

      {landed && winner && (
        <div className="wheel-result">
          <div className="wheel-result-card">
            <span className="result-emoji">{winner.emoji}</span>
            <p className="result-text">{winner.text}</p>
            <div className="result-tags">
              <span className="tag">{winner.mode === 'home' ? '🏠' : winner.mode === 'out' ? '🌳' : '🚗'} {winner.mode === 'home' ? 'home' : winner.mode === 'out' ? 'outside' : 'on the go'}</span>
              <span className="tag">⏱ {winner.time}</span>
              <span className="tag">{winner.energy === 'chill' ? '😌' : '🏃'} {winner.energy}</span>
            </div>
          </div>
          <div className="wheel-actions">
            <button className="try-another-btn" onClick={handleSpinAgain}>
              🔁 Spin again
            </button>
            {activities.length > wheelActivities.length && (
              <button className="new-wheel-btn" onClick={onNewWheel}>
                🔀 New wheel
              </button>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
