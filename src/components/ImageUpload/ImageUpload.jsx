import React, { useState } from 'react';
import './ImageUpload.css';

function ImageUpload() {
  const [imagemSelecionada, setImagemSelecionada] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [enviando, setEnviando] = useState(false);
  const [mensagem, setMensagem] = useState('');
  const [resultadoAnalise, setResultadoAnalise] = useState(null);

  const handleImageChange = (event) => {
    try {
      const arquivo = event.target.files[0];
      if (arquivo) {
        setImagemSelecionada(arquivo);
        setMensagem('');
        setResultadoAnalise(null);
        console.log('Imagem selecionada:', arquivo.name);

        // Criar preview da imagem
        const reader = new FileReader();
        reader.onload = (e) => {
          setPreviewUrl(e.target.result);
        };
        reader.readAsDataURL(arquivo);
      }
    } catch (error) {
      console.error('Erro ao selecionar imagem:', error);
      setMensagem('Erro ao selecionar imagem');
    }
  };

  // Função de envio incorporada diretamente no componente
  const enviarFoto = async (arquivo, token) => {
    const formData = new FormData();
    formData.append("file", arquivo);

    const res = await fetch("http://localhost:3000/api/upload", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    if (!res.ok) {
      let errorMessage = `HTTP ${res.status}: ${res.statusText}`;
      try {
        const errorData = await res.json();
        errorMessage = errorData.error || errorData.message || errorMessage;
      } catch (parseError) {
        console.warn("Não foi possível fazer parse do erro JSON");
      }
      throw new Error(errorMessage);
    }

    return await res.json();
  };

  const handleEnviarFoto = async () => {
    if (!imagemSelecionada) {
      setMensagem('Por favor, selecione uma imagem primeiro');
      return;
    }

    setEnviando(true);
    setMensagem('');
    setResultadoAnalise(null);

    try {
      // Substitua pelo seu token real ou use localStorage.getItem('authToken')
      const token = 'SEU_TOKEN_AQUI'; 
      
      const resultado = await enviarFoto(imagemSelecionada, token);
      
      setMensagem('Imagem analisada com sucesso!');
      setResultadoAnalise(resultado);
      console.log('Upload realizado:', resultado);
      
    } catch (error) {
      console.error('Erro no upload:', error);
      setMensagem(`Erro no upload: ${error.message}`);
    } finally {
      setEnviando(false);
    }
  };

  const limparFormulario = () => {
    setImagemSelecionada(null);
    setPreviewUrl(null);
    setMensagem('');
    setResultadoAnalise(null);
    // Limpar o input file
    const fileInput = document.getElementById('file-upload');
    if (fileInput) {
      fileInput.value = '';
    }
  };

  return (
    <div className="upload-container">
      
      {/* Preview da Imagem */}
      
      {previewUrl && (
        <div className="image-preview">
            {mensagem && (
        <div className={`message ${mensagem.includes('sucesso') ? 'success' : 'error'}`}>
          {mensagem}
        </div>
            )}
          <img 
            src={previewUrl} 
            alt="Preview" 
            className="preview-image"
          />
            {imagemSelecionada && (
        <div className="file-info">
          <p>
            <strong>Arquivo:</strong> {imagemSelecionada.name}
          </p>
          <p>
            <strong>Tamanho:</strong> {(imagemSelecionada.size / 1024).toFixed(2)} KB
          </p>
        </div>
      )}
      <div className="button-container">
        <button
          onClick={handleEnviarFoto}
          disabled={!imagemSelecionada || enviando}
          className={`upload-btn ${enviando ? 'uploading' : ''} ${!imagemSelecionada ? 'disabled' : ''}`}
        >
          {enviando ? 'Analisando...' : 'Analisar Imagem'}
        </button>
        

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="file-input"
          id="file-upload"
        />
        <label htmlFor="file-upload" className="file-label">
          {imagemSelecionada ? 'Trocar imagem' : 'Toque para escolher a imagem'}
        </label>
      

        {(imagemSelecionada || resultadoAnalise) && (
          <button
            onClick={limparFormulario}
            className="clear-btn"
          >
            Limpar
          </button>
        )}
      </div>
        </div>
      )}
      
      
    
      {/* Seção de Resultados da Análise */}
      {resultadoAnalise && (
        <div className="analysis-results">
          <h4 className="results-title">
            🔍 Resultado da Análise
          </h4>

          {/* Exibir descrição se existir */}
          {resultadoAnalise.description && (
            <div className="result-item">
              <h5 className="result-label">📝 Descrição:</h5>
              <p className="result-content">
                {resultadoAnalise.description}
              </p>
            </div>
          )}

          {/* Exibir tags se existirem */}
          {resultadoAnalise.tags && resultadoAnalise.tags.length > 0 && (
            <div className="result-item">
              <h5 className="result-label">🏷️ Tags Identificadas:</h5>
              <div className="tags-container">
                {resultadoAnalise.tags.map((tag, index) => (
                  <span key={index} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Exibir objetos detectados se existirem */}
          {resultadoAnalise.objects && resultadoAnalise.objects.length > 0 && (
            <div className="result-item">
              <h5 className="result-label">🎯 Objetos Detectados:</h5>
              <ul className="objects-list">
                {resultadoAnalise.objects.map((objeto, index) => (
                  <li key={index}>
                    {objeto.name || objeto} 
                    {objeto.confidence && ` (${(objeto.confidence * 100).toFixed(1)}%)`}
                  </li>
                ))}
              </ul>
            </div>
          )}


          {/* Exibir confiança geral se existir */}
          {resultadoAnalise.confidence && (
            <div className="result-item">
              <h5 className="result-label">📊 Confiança da Análise:</h5>
              <div className="confidence-bar-container">
                <div 
                  className="confidence-bar"
                  style={{width: `${(resultadoAnalise.confidence * 100)}%`}}
                ></div>
                <span className="confidence-text">
                  {(resultadoAnalise.confidence * 100).toFixed(1)}%
                </span>
              </div>
            </div>
          )}

          {/* JSON completo para debug (colapsível) */}
          <details className="json-details">
            <summary className="json-summary">
              🔧 Ver dados completos da API
            </summary>
            <pre className="json-content">
              {JSON.stringify(resultadoAnalise, null, 2)}
            </pre>
          </details>
        </div>
      )}
    </div>
  );
}

export default ImageUpload;
