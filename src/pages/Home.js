import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css';

function Home() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        // PokeAPI - API pública gratuita 
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=12');
        
        // Transformo los datos de Pokemon para que parezcan juegos y no busco tantas imagenes
        const gamesData = response.data.results.map((pokemon, index) => ({
          id: index + 1,
          name: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1),
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`,
          rating: (Math.random() * 2 + 3).toFixed(1),
          released: `202${index % 5}`
        }));
        
        setGames(gamesData);
        setLoading(false);
      } catch (err) {
        setError('Error al cargar los juegos. Por favor, intenta de nuevo.');
        setLoading(false);
        console.error(err);
      }
    };

    fetchGames();
  }, []);

  if (loading) return <div className="loading">Cargando juegos...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="home-container">
      <div className="hero-section">
        <h2>🎮 Los Mejores Juegos para Android</h2>
        <p>Descubre los juegos más populares y descárgalos gratis</p>
      </div>
      
      <div className="games-grid">
        {games.map(game => (
          <div key={game.id} className="game-card">
            <div className="game-image">
              <img src={game.image} alt={game.name} />
            </div>
            <div className="game-info">
              <h3>{game.name}</h3>
              <div className="game-details">
                <span className="rating">⭐ {game.rating}</span>
                <span className="year">📅 {game.released}</span>
              </div>
              <button className="download-btn">Descargar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;