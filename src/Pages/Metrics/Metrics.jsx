import React from 'react'
import Header from "../../components/Header/Header.jsx";
import Banner from "../../components/Banner/Banner.jsx";
import About from "../../components/About/About.jsx";
import ImageUpload from "../../components/ImageUpload/ImageUpload.jsx";
import PokemonCard from "../../components/PokemonCard/PokemonCard.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import './Metrics.css'

export default function Metrics() {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <main className="landing-page-content-container">
        <section className="landing-page-info-section">
          <div>
            <h1>Meu Site</h1>
            <ImageUpload />
          </div>
          <h1>
            Pokémons Disponíveis
          </h1>
          <div className="cards-pokemon-container">
            <div className="cards-pokemon">
            {pokemons.map((pk) => (
              <PokemonCard key={pk.name} {...pk} />
            ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
