import React from 'react'
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import './Metrics.css'

export default function Metrics() {
  return (
    <>
      <Header />
      <main className="metrics-container">
        <div className="metrics-content">
          <h1>Métricas de Análise</h1>
          <p>Esta página mostraria estatísticas sobre as análises de imagens realizadas.</p>
          <div className="metrics-grid">
            <div className="metric-card">
              <h3>Análises Realizadas</h3>
              <div className="metric-value">0</div>
            </div>
            <div className="metric-card">
              <h3>Animais Identificados</h3>
              <div className="metric-value">0</div>
            </div>
            <div className="metric-card">
              <h3>Precisão Média</h3>
              <div className="metric-value">0%</div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
