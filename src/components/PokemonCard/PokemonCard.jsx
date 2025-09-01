import './PokemonCard.css'

export default function PokemonCard({ image, name, types, description, colors }) {
  // Cores padrão caso não sejam fornecidas
  const defaultColors = {
    primary: "#4a90e2",
    secondary: "#357abd", 
    border: "#2c5aa0"
  };

  const cardColors = colors || defaultColors;

  return (
    <div 
      className="card-container"
      style={{ 
        borderColor: cardColors.border,
        boxShadow: `0 4px 8px ${cardColors.primary}20`
      }}
    >
        <div className="card-image-section">
          <img src={image} alt={name} className="card-image" />
        </div>
      
      <div 
        className="card-body"
        style={{ 
          background: `linear-gradient(135deg, ${cardColors.primary} 0%, ${cardColors.secondary} 100%)`
        }}
      >
        <h2>{name}</h2>

        <div className="card-types">
          {types.map((type) => (
            <span 
              key={type} 
              className={`card-type ${type.toLowerCase()}`}
            >
              {type}
            </span>
          ))}
        </div>

        <p>{description}</p>

        <button 
          className="card-button"
          style={{ 
            color: cardColors.primary,
            border: `2px solid ${cardColors.primary}`
          }}
        >
          Saiba mais
        </button>
      </div>
    </div>
  );
}