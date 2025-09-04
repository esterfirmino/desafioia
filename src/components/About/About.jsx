import './About.css';

const ProjectSection = () => {
  const handleDownload = () => {
    // Adicione aqui a lógica de download
    console.log('Download iniciado...');
  };

  return (
    <div className="project-container">
      <div className="h2">
        <h1>Informações sobre o projeto</h1>
        <p>
          Bem-vindo à UNIFOR Pokédex, um projeto inspirado no universo Pokémon, mas que tem como objetivo catalogar e identificar os animais que vivem aqui no nosso campus, como pombos, gatos, cavalos e até camaleões. A ideia é bem simples: você usa nosso aplicativo para tirar uma foto de um desses animais e, em segundos, nossa tecnologia de inteligência artificial o reconhece. Assim que ele é identificado, você o "desbloqueia" e o adiciona à sua coleção pessoal, a UNIFOR Pokédex. Além de ver a foto e o nome do animal, você também tem acesso a curiosidades e informações interessantes sobre ele, podendo até mesmo ouvir a descrição em áudio. É uma forma divertida e diferente de explorar e aprender sobre a natureza do campus, transformando uma simples caminhada em uma verdadeira jornada de descoberta e "coleção".
        </p>
        
        <button className="download-btn" onClick={handleDownload}>
          Download
        </button>
      </div>

      <div className="image-container">
        <img 
          src="../src/Imagens/Mockup.png" 
          alt="Game Screenshot" 
          className="app-image"
        />
      </div>
    </div>
  );
};

export default ProjectSection;