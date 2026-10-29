import React from 'react';
import './GameCard.css';

function GameCard({ title, image, rating, released }) {
  return (
    <div className="game-card">
      <div className="game-image">
        <img src={image} alt={title} />
      </div>
      <div className="game-info">
        <h3>{title}</h3>
        <div className="game-details">
          <span className="rating">⭐ {rating}</span>
          <span className="year">📅 {released}</span>
        </div>
        <button className="download-btn">Descargar</button>
      </div>
    </div>
  );
}

export default GameCard;