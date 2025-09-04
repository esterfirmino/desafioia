import Header from "./components/Header/Header.jsx";
import Banner from "./components/Banner/Banner.jsx";
import About from "./components/About/About.jsx";
import ImageUpload from "./components/ImageUpload/ImageUpload.jsx";
import PokemonCard from "./components/PokemonCard/PokemonCard.jsx";
import Footer from "./components/Footer/Footer.jsx";
import './App.css'
const pokemons = [
  { 
    name: "Bode", 
    image: "../src/Imagens/Bode.png", 
    types: ["Fire"], 
    description: "Um bode flamejante, forte e ágil.",
    colors: {
      primary: "#791948",    // Vermelho para Fire
      secondary: "#C52540",   // Vermelho mais escuro
      border: "#791948"       // Borda vermelha
    }
  },
  { 
    name: "Cassaco", 
    image: "../src/Imagens/Cassaco.png", 
    types: ["Normal"], 
    description: "Pequeno e esperto, sempre atento.",
    colors: {
      primary: "#791948",     // Cinza para Normal
      secondary: "#C52540",   // Cinza mais escuro
      border: "#791948"       // Borda cinza
    }
  },
  { 
    name: "Cavalo", 
    image: "../src/Imagens/Cavalo.png", 
    types: ["Normal"], 
    description: "Veloz e poderoso nas planícies.",
    colors: {
      primary: "#791948",     // Marrom para cavalo
      secondary: "#C52540",   // Marrom mais escuro
      border: "#791948"       // Borda marrom
    }
  },
  { 
    name: "Ema", 
    image: "../src/Imagens/Ema.png", 
    types: ["Grass"], 
    description: "Uma ave rápida que cruza os campos.",
    colors: {
      primary: "#791948",     // Verde para Grass
      secondary: "#C52540",   // Verde mais escuro
      border: "#791948"       // Borda verde
    }
  },
  { 
    name: "Gato", 
    image: "../src/Imagens/Gato.png", 
    types: ["Normal"], 
    description: "Ágil e silencioso, observa tudo.",
    colors: {
      primary: "#791948",     // Roxo para gato
      secondary: "#C52540",   // Roxo mais escuro
      border: "#791948"       // Borda roxa
    }
  },
  { 
    name: "Iguana", 
    image: "../src/Imagens/Iguana.png", 
    types: ["Normal"], 
    description: "Tranquila, adapta-se com facilidade.",
    colors: {
      primary: "#791948",     // Verde água
      secondary: "#C52540",   // Verde água mais escuro
      border: "#791948"       // Borda verde água
    }
  },
  { 
    name: "Lagarto", 
    image: "../src/Imagens/Lagarto.png", 
    types: ["Normal"], 
    description: "Rápido e resistente em qualquer terreno.",
    colors: {
      primary: "#791948",     // Laranja
      secondary: "#C52540",   // Laranja mais escuro
      border: "#791948"       // Borda laranja
    }
  },
  { 
    name: "Pavão", 
    image: "../src/Imagens/Pavão.png", 
    types: ["Normal"], 
    description: "Exibe penas coloridas com imponência.",
    colors: {
      primary: "#791948",     // Azul pavão
      secondary: "#C52540",   // Azul mais escuro
      border: "#791948"       // Borda azul
    }
  },
  { 
    name: "Pombo", 
    image: "../src/Imagens/Pombo.png", 
    types: ["Normal"], 
    description: "Comum nas cidades, ágil no voo.",
    colors: {
      primary: "#791948",     // Cinza azulado
      secondary: "#C52540",   // Cinza azulado mais escuro
      border: "#791948"       // Borda cinza azulado
    }
  },
  { 
    name: "Vaca", 
    image: "../src/Imagens/Vaca.png", 
    types: ["Mamifero"],
    description: "Calma e forte, símbolo dos campos.",
    colors: {
      primary: "#791948",     // Dourado
      secondary: "#C52540",   // Dourado mais escuro
      border: "#791948"       // Borda dourada
    }
  }
];
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // cria uma URL temporária para exibir a imagem
    }
  };


export default function App() {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <main className="landing-page-content-container">
        <section className="landing-page-info-section">
          <div>
            <h1>Análise de Imagem com IA</h1>
            <ImageUpload />
          </div>
          <h1>
            Animais Disponíveis
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
  );
}

