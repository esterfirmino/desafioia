import Header from "./components/Header/Header.jsx";
import Banner from "./components/Banner/Banner.jsx";
import PokemonCard from "./components/PokemonCard/PokemonCard.jsx";
import "./App.css";

const pokemons = [
  { 
    name: "Bode", 
    image: "../src/Imagens/Bode.png", 
    types: ["Fire"], 
    description: "Um bode flamejante, forte e ágil.",
    colors: {
      primary: "#566573",    // Vermelho para Fire
      secondary: "#352bc0ff",   // Vermelho mais escuro
      border: "#34495e"       // Borda vermelha
    }
  },
  { 
    name: "Cassaco", 
    image: "../src/Imagens/Cassaco.png", 
    types: ["Normal"], 
    description: "Pequeno e esperto, sempre atento.",
    colors: {
      primary: "#566573",     // Cinza para Normal
      secondary: "#7f8c8d",   // Cinza mais escuro
      border: "#34495e"       // Borda cinza
    }
  },
  { 
    name: "Cavalo", 
    image: "../src/Imagens/Cavalo.png", 
    types: ["Normal"], 
    description: "Veloz e poderoso nas planícies.",
    colors: {
      primary: "#566573",     // Marrom para cavalo
      secondary: "#654321",   // Marrom mais escuro
      border: "#34495e"       // Borda marrom
    }
  },
  { 
    name: "Ema", 
    image: "../src/Imagens/Ema.png", 
    types: ["Grass"], 
    description: "Uma ave rápida que cruza os campos.",
    colors: {
      primary: "#566573",     // Verde para Grass
      secondary: "#229954",   // Verde mais escuro
      border: "#34495e"       // Borda verde
    }
  },
  { 
    name: "Gato", 
    image: "../src/Imagens/Gato.png", 
    types: ["Normal"], 
    description: "Ágil e silencioso, observa tudo.",
    colors: {
      primary: "#566573",     // Roxo para gato
      secondary: "#8e44ad",   // Roxo mais escuro
      border: "#34495e"       // Borda roxa
    }
  },
  { 
    name: "Iguana", 
    image: "../src/Imagens/Iguana.png", 
    types: ["Normal"], 
    description: "Tranquila, adapta-se com facilidade.",
    colors: {
      primary: "#566573",     // Verde água
      secondary: "#138d75",   // Verde água mais escuro
      border: "#34495e"       // Borda verde água
    }
  },
  { 
    name: "Lagarto", 
    image: "../src/Imagens/Lagarto.png", 
    types: ["Normal"], 
    description: "Rápido e resistente em qualquer terreno.",
    colors: {
      primary: "#566573",     // Laranja
      secondary: "#ca6f1e",   // Laranja mais escuro
      border: "#34495e"       // Borda laranja
    }
  },
  { 
    name: "Pavão", 
    image: "../src/Imagens/Pavão.png", 
    types: ["Normal"], 
    description: "Exibe penas coloridas com imponência.",
    colors: {
      primary: "#566573",     // Azul pavão
      secondary: "#2980b9",   // Azul mais escuro
      border: "#34495e"       // Borda azul
    }
  },
  { 
    name: "Pombo", 
    image: "../src/Imagens/Pombo.png", 
    types: ["Normal"], 
    description: "Comum nas cidades, ágil no voo.",
    colors: {
      primary: "#566573",     // Cinza azulado
      secondary: "#4a5568",   // Cinza azulado mais escuro
      border: "#34495e"       // Borda cinza azulado
    }
  },
  { 
    name: "Vaca", 
    image: "../src/Imagens/Vaca.png", 
    types: ["Mamifero"],
    description: "Calma e forte, símbolo dos campos.",
    colors: {
      primary: "#566573",     // Dourado
      secondary: "#e67e22",   // Dourado mais escuro
      border: "#34495e"       // Borda dourada
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
    <div className="screen">
      <Header />
      <Banner />

      <section className="bellow">
        <p className="explanation">
          Bem-vindo à PokeDex da Universidade de Fortaleza! Aqui você encontra uma coleção exclusiva de Pokémons.
        </p>

        <h2 className="pokemons">
          Pokémons Disponíveis
        </h2>

        <div className="cards-pokemon">
          {pokemons.map((pk) => (
            <PokemonCard key={pk.name} {...pk} />
          ))}
        </div>
      </section>
      {/* <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="cursor-pointer"
      /> */}
    </div>
  );
}

