import React, { memo } from 'react';
import './PokemonCard.css';

const PokemonCard = memo(({ image, name, types, description, colors }) => {
  // Cores padrão caso não sejam fornecidas
  const defaultColors = {
    primary: "#4a90e2",
    secondary: "#357abd", 
    border: "#2c5aa0"
  };

  const cardColors = colors || defaultColors;

  if (!name || !image) {
    console.warn('PokemonCard: name e image são obrigatórios');
    return null;
  }

  return (
    <article 
      className="card-container"
      style={{ 
        borderColor: cardColors.border,
        boxShadow: `0 4px 8px ${cardColors.primary}20`
      }}
      role="article"
      aria-labelledby={`card-title-${name.toLowerCase()}`}
    >
      <div className="card-image-section">
        <img 
          src={image} 
          alt={`${name} - Animal da fauna brasileira`} 
          className="card-image"
          loading="lazy"
          onError={(e) => {
            e.target.src = '/placeholder-animal.png';
            e.target.alt = 'Imagem não disponível';
          }}
        />
      </div>
      
      <div 
        className="card-body"
        style={{ 
          background: `linear-gradient(135deg, ${cardColors.primary} 0%, ${cardColors.secondary} 100%)`
        }}
      >
        <h2 id={`card-title-${name.toLowerCase()}`} className="card-title">
          {name}
        </h2>

        <div className="card-types" role="list" aria-label="Tipos do animal">
          {types && types.length > 0 ? types.map((type) => (
            <span 
              key={type} 
              className={`card-type card-type-${type.toLowerCase()}`}
              role="listitem"
            >
              {type}
            </span>
          )) : (
            <span className="card-type card-type-unknown" role="listitem">
              Desconhecido
            </span>
          )}
        </div>

        <p className="card-description">{description}</p>
      </div>
    </article>
  );
});

PokemonCard.displayName = 'PokemonCard';

export default PokemonCard;