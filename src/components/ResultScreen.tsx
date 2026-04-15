import type { Activity } from '../data/activities';

interface Props {
  main: Activity;
  alternatives: Activity[];
  onTryAnother: () => void;
  onBack: () => void;
}

export function ResultScreen({
  main,
  alternatives,
  onTryAnother,
  onBack,
}: Props) {
  return (
    <div className="result-screen">
      <button className="back-btn" onClick={onBack}>← Back</button>

      <div className="main-result">
        <span className="result-emoji">🎯</span>
        <p className="result-text">{main.text}</p>
        <div className="result-tags">
          <span className="tag">{main.location === 'indoor' ? '🏠' : '🌳'} {main.location}</span>
          <span className="tag">⏱ {main.time}</span>
          <span className="tag">{main.energy === 'chill' ? '😌' : '🏃'} {main.energy}</span>
        </div>
      </div>

      {alternatives.length > 0 && (
        <div className="alternatives">
          <span className="alt-label">Or try these:</span>
          {alternatives.map((alt) => (
            <div key={alt.id} className="alt-card">
              <p className="alt-text">{alt.text}</p>
            </div>
          ))}
        </div>
      )}

      <button className="try-another-btn" onClick={onTryAnother}>
        🔁 Try another
      </button>
    </div>
  );
}
