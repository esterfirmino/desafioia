import React from 'react';
import './Metrics.css';

const MetricsView = () => {
  const metrics = {
    'Acurácia': '98.14%',
    'Precisão': '97.26%',
    'Recall': '97.15%',
    'F1-score': '97.20%'

  };

  // Sua imagem da matriz de confusão - substitua pela URL da sua imagem
  const confusionMatrixImage = "../src/Imagens/Matrix.jpeg"
  return (
    <div className="metrics-container">
      <div className="metrics-column">
        <h3>Métricas de Performance</h3>
        {Object.entries(metrics).map(([name, value]) => (
          <div key={name} className="metric-item">
            <span className="metric-name">{name}:</span>
            <span className="metric-value">{value}</span>
          </div>
        ))}
      </div>
      
      <div className="metrics-column">
        <h3>Matriz de Confusão</h3>
        <img 
          src={confusionMatrixImage} 
          alt="Matriz de Confusão" 
          className="confusion-matrix"
        />
      </div>
    </div>
  );
};

export default MetricsView;