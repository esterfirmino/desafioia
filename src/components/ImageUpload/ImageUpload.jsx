import React, { useState } from 'react';

function ImageUpload() {
  const [imagemSelecionada, setImagemSelecionada] = useState(null);

  const handleImageChange = (event) => {
    try {
      const arquivo = event.target.files[0];
      if (arquivo) {
        setImagemSelecionada(arquivo);
        console.log('Imagem selecionada:', arquivo.name);
      }
    } catch (error) {
      console.error('Erro ao selecionar imagem:', error);
    }
  };

  return (
    <div>
      <h3>Upload de Imagem</h3>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ cursor: 'pointer' }}
      />
      {imagemSelecionada && (
        <p>Arquivo: {imagemSelecionada.name}</p>
      )}
    </div>
  );
}

export default ImageUpload;