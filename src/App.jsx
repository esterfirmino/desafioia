import Header from "./components/Header/Header.jsx";
import Banner from "./components/Banner/Banner.jsx";
import About from "./components/About/About.jsx";
import ImageUpload from "./components/ImageUpload/ImageUpload.jsx";
import PokemonCard from "./components/PokemonCard/PokemonCard.jsx";
import Footer from "./components/Footer/Footer.jsx";
import './App.css'

import bodeImg from './Imagens/Bode.png';
import cassacoImg from './Imagens/Cassaco.png';
import cavaloImg from './Imagens/Cavalo.png';
import emaImg from './Imagens/Ema.png';
import gatoImg from './Imagens/Gato.png';
import iguanaImg from './Imagens/Iguana.png';
import lagartoImg from './Imagens/Lagarto.png';
import pavaoImg from './Imagens/Pavão.png';
import pomboImg from './Imagens/Pombo.png';
import vacaImg from './Imagens/Vaca.png';

const pokemons = [
  { 
    name: "Bode", 
    image: bodeImg, 
    types: ["Mamífero"], 
    description: "Um bode flamejante, forte e ágil.",
    colors: {
      primary: "#FF6B35",
      secondary: "#E55A2B",
      border: "#D44B1A"
    }
  },
  { 
    name: "Cassaco", 
    image: cassacoImg, 
    types: ["Mamífero"], 
    description: "Pequeno e esperto, sempre atento.",
    colors: {
      primary: "#8E8E93",
      secondary: "#6D6D70",
      border: "#48484A"
    }
  },
  { 
    name: "Cavalo", 
    image: cavaloImg, 
    types: ["Mamífero"], 
    description: "Veloz e poderoso nas planícies.",
    colors: {
      primary: "#8B4513",
      secondary: "#6B3410",
      border: "#4B240D"
    }
  },
  { 
    name: "Ema", 
    image: emaImg, 
    types: ["Ave"], 
    description: "Uma ave rápida que cruza os campos.",
    colors: {
      primary: "#32CD32",
      secondary: "#228B22",
      border: "#006400"
    }
  },
  { 
    name: "Gato", 
    image: gatoImg, 
    types: ["Mamífero"], 
    description: "Ágil e silencioso, observa tudo.",
    colors: {
      primary: "#9932CC",
      secondary: "#7B68EE",
      border: "#4B0082"
    }
  },
  { 
    name: "Iguana", 
    image: iguanaImg, 
    types: ["Réptil"], 
    description: "Tranquila, adapta-se com facilidade.",
    colors: {
      primary: "#20B2AA",
      secondary: "#008B8B",
      border: "#006666"
    }
  },
  { 
    name: "Lagarto", 
    image: lagartoImg, 
    types: ["Réptil"], 
    description: "Rápido e resistente em qualquer terreno.",
    colors: {
      primary: "#FF8C00",
      secondary: "#FF7F00",
      border: "#E55100"
    }
  },
  { 
    name: "Pavão", 
    image: pavaoImg, 
    types: ["Ave"], 
    description: "Exibe penas coloridas com imponência.",
    colors: {
      primary: "#4169E1",
      secondary: "#1E90FF",
      border: "#0000CD"
    }
  },
  { 
    name: "Pombo", 
    image: pomboImg, 
    types: ["Ave"], 
    description: "Comum nas cidades, ágil no voo.",
    colors: {
      primary: "#708090",
      secondary: "#556B2F",
      border: "#2F4F4F"
    }
  },
  { 
    name: "Vaca", 
    image: vacaImg, 
    types: ["Mamífero"],
    description: "Calma e forte, símbolo dos campos.",
    colors: {
      primary: "#FFD700",
      secondary: "#FFA500",
      border: "#FF8C00"
    }
  }
];


export default function App() {
  return (
    <div className="app">
      <Header />
      <Banner />
      <About />
      
      <main className="main-content">
        {/* Seção de Upload de Imagem */}
        <section className="upload-section-wrapper">
          <div className="container">
            <h2 className="section-title">Análise de Imagem com IA</h2>
            <p className="section-description">
              Faça upload de uma imagem e nossa IA identificará os animais presentes
            </p>
            <ImageUpload />
          </div>
        </section>

        {/* Seção de Animais */}
        <section className="animals-section">
          <div className="container">
            <h2 className="section-title">Animais da Fauna Brasileira</h2>
            <p className="section-description">
              Conheça alguns dos animais que nossa IA pode identificar
            </p>
            <div className="cards-pokemon-container">
              <div className="cards-pokemon">
                {pokemons.map((animal) => (
                  <PokemonCard key={animal.name} {...animal} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

