import { activities } from '../data/activities';

interface Props {
  favorites: number[];
  toggleFavorite: (id: number) => void;
  onBack: () => void;
}

export function FavoritesScreen({ favorites, toggleFavorite, onBack }: Props) {
  const favoriteActivities = activities.filter((a) => favorites.includes(a.id));

  return (
    <div className="favorites-screen">
      <button className="back-btn" onClick={onBack}>← Back</button>
      <h2 className="screen-title">❤️ Favorites</h2>

      {favoriteActivities.length === 0 ? (
        <div className="empty-state">
          <span className="empty-emoji">🤍</span>
          <p>No favorites yet!</p>
          <p className="empty-hint">Tap the heart on any activity to save it here.</p>
        </div>
      ) : (
        <div className="favorites-list">
          {favoriteActivities.map((activity) => (
            <div key={activity.id} className="favorite-card">
              <p className="favorite-text">{activity.text}</p>
              <div className="favorite-meta">
                <span className="tag">{activity.location === 'indoor' ? '🏠' : '🌳'}</span>
                <span className="tag">⏱ {activity.time}</span>
                <span className="tag">{activity.energy === 'chill' ? '😌' : '🏃'}</span>
                <button
                  className="remove-fav"
                  onClick={() => toggleFavorite(activity.id)}
                >
                  ❤️ Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
