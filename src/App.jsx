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
      primary: "rgb(173, 34, 34)",
      secondary: "#C52540",
      border: "#C52540"
    }
  },
  { 
    name: "Cassaco", 
    image: cassacoImg, 
    types: ["Mamífero"], 
    description: "Pequeno e esperto, sempre atento.",
    colors: {
      primary: "rgb(173, 34, 34)",
      secondary: "#C52540",
      border: "#C52540"
    }
  },
  { 
    name: "Cavalo", 
    image: cavaloImg, 
    types: ["Mamífero"], 
    description: "Veloz e poderoso nas planícies.",
    colors: {
      primary: "rgb(173, 34, 34)",
      secondary: "#C52540",
      border: "#C52540"
    }
  },
  { 
    name: "Ema", 
    image: emaImg, 
    types: ["Ave"], 
    description: "Uma ave rápida que cruza os campos.",
    colors: {
      primary: "rgb(173, 34, 34)",
      secondary: "#C52540",
      border: "#C52540"
    }
  },
  { 
    name: "Gato", 
    image: gatoImg, 
    types: ["Mamífero"], 
    description: "Ágil e silencioso, observa tudo.",
    colors: {
      primary: "rgb(173, 34, 34)",
      secondary: "#C52540",
      border: "#C525402"
    }
  },
  { 
    name: "Iguana", 
    image: iguanaImg, 
    types: ["Réptil"], 
    description: "Tranquila, adapta-se com facilidade.",
    colors: {
      primary: "rgb(173, 34, 34)",
      secondary: "#C52540",
      border: "#C52540"
    }
  },
  { 
    name: "Lagarto", 
    image: lagartoImg, 
    types: ["Réptil"], 
    description: "Rápido e resistente em qualquer terreno.",
    colors: {
      primary: "rgb(173, 34, 34)",
      secondary: "#C52540",
      border: "#C52540"
    }
  },
  { 
    name: "Pavão", 
    image: pavaoImg, 
    types: ["Ave"], 
    description: "Exibe penas coloridas com imponência.",
    colors: {
      primary: "rgb(173, 34, 34)",
      secondary: "#C52540",
      border: "#C52540"
    }
  },
  { 
    name: "Pombo", 
    image: pomboImg, 
    types: ["Ave"], 
    description: "Comum nas cidades, ágil no voo.",
    colors: {
      primary: "rgb(173, 34, 34)",
      secondary: "#C52540",
      border: "#C52540"
    }
  },
  { 
    name: "Vaca", 
    image: vacaImg, 
    types: ["Mamífero"],
    description: "Calma e forte, símbolo dos campos.",
    colors: {
      primary: "rgb(173, 34, 34)",
      secondary: "#C52540",
      border: "#C52540"
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
            <h2 className="section-title">Animais da Fauna da Unifor</h2>
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

