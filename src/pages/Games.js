import React from 'react';
import localGames from '../data/localGames';
import './Games.css';

function Games() {
  return (
    <div className="games-container">
      <div className="page-header">
        <h2> Catálogo de Juegos Premium</h2>
        <p>Explora nuestra colección de juegos populares para Android</p>
      </div>
      
      <div className="games-grid">
        {localGames.map(game => (
          <div 
            key={game.id} 
            className="detailed-game-card"
            onClick={() => window.open(game.downloadLink, '_blank')}
            style={{ cursor: 'pointer' }}
          >
            <div className="game-badge">{game.category}</div>
            <div className="game-image">
              <img src={game.image} alt={game.title} onError={(e) => {
                e.target.src = 'https://via.placeholder.com/500x296/667eea/ffffff?text=' + encodeURIComponent(game.title);
              }} />
              <div className="game-overlay">
                <span className="platform">{game.platform}</span>
                <span className="click-hint">👆 Click para descargar</span>
              </div>
            </div>
            <div className="game-info">
              <h3>{game.title}</h3>
              <div className="game-rating">
                {'⭐'.repeat(Math.floor(game.rating))}
                <span className="rating-text">{game.rating}/5</span>
              </div>
              <p className="description">{game.description}</p>
              <div className="game-stats">
                <span className="stat">📦 {game.size}</span>
                <span className="stat">📥 {game.downloads}</span>
              </div>
              <a 
                href={game.downloadLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="download-btn"
                onClick={(e) => e.stopPropagation()}
              >
                📥 Descargar Ahora
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Games;