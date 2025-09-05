import React, { useState } from 'react';
import enviarFoto from '../../services/sendPhotos.js';
import './ImageUpload.css';

function ImageUpload() {
  const [imagemSelecionada, setImagemSelecionada] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [enviando, setEnviando] = useState(false);
  const [mensagem, setMensagem] = useState('');
  const [resultadoAnalise, setResultadoAnalise] = useState(null);
  const [statusServidor, setStatusServidor] = useState('unknown'); // 'unknown', 'online', 'offline'


  const handleImageChange = (event) => {
    try {
      const arquivo = event.target.files[0];
      if (arquivo) {
        // Validar tipo de arquivo
        const tiposPermitidos = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
        if (!tiposPermitidos.includes(arquivo.type)) {
          setMensagem('Por favor, selecione uma imagem válida (JPEG, PNG ou WebP)');
          return;
        }

        // Validar tamanho do arquivo (máximo 5MB)
        const tamanhoMaximo = 5 * 1024 * 1024; // 5MB em bytes
        if (arquivo.size > tamanhoMaximo) {
          setMensagem('A imagem deve ter no máximo 5MB');
          return;
        }

        setImagemSelecionada(arquivo);
        setMensagem('');
        setResultadoAnalise(null);

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

  const handleEnviarFoto = async () => {
    if (!imagemSelecionada) {
      setMensagem('Por favor, selecione uma imagem primeiro');
      return;
    }

    setEnviando(true);
    setMensagem('Analisando imagem...');
    setResultadoAnalise(null);
    setStatusServidor('unknown');

    try {
      // Usar token do localStorage ou um token padrão
      const token = localStorage.getItem('authToken') || 'your-api-token-here';
      
      const resultado = await enviarFoto(imagemSelecionada, token);
      setStatusServidor('online');
      setMensagem('Imagem analisada com sucesso!');
      setResultadoAnalise(resultado);
      console.log('Análise concluída:', resultado);
      
    } catch (error) {
      console.error('Erro na análise:', error);
      if (error.message.includes('Failed to fetch') || 
          error.message.includes('ERR_CONNECTION_REFUSED') ||
          error.message.includes('NetworkError') ||
          error.message.includes('Microserviço não encontrado')) {
        setStatusServidor('offline');
      }
      
      setMensagem(error.message);
    } finally {
      setEnviando(false);
    }
  };

  const limparFormulario = () => {
    setImagemSelecionada(null);
    setPreviewUrl(null);
    setMensagem('');
    setResultadoAnalise(null);

    const fileInput = document.getElementById('file-upload');
    if (fileInput) {
      fileInput.value = '';
    }
  };

  return (
    <div className="upload-container">
      <div className="upload-header">
        {/* <div className="server-status">
          <div className={`status-indicator ${statusServidor}`}>
            <span className="status-dot"></span>
            <span className="status-text">
              {statusServidor === 'online' && 'andradeapps.online - Conectado ✓'}
              {statusServidor === 'offline' && 'andradeapps.online - Desconectado ✗'}
              {statusServidor === 'unknown' && 'andradeapps.online - Status desconhecido'}
            </span>
          </div> 
        </div>*/}
        
        {mensagem && (
          <div className={`message ${mensagem.includes('sucesso') ? 'success' : 'error'}`}>
            {mensagem}
          </div>
        )}
      </div>

      <div className="upload-main-layout">
        <div className="upload-left-panel">
          <div className="upload-zone">
            <div className="upload-icon">📁</div>
            <h3>Selecione uma imagem</h3>
            <p>Arraste uma imagem ou clique para selecionar</p>
            
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="file-input"
              id="file-upload"
            />
            <label htmlFor="file-upload" className="file-label">
              {imagemSelecionada ? 'Trocar imagem' : 'Escolher arquivo'}
            </label>

            {imagemSelecionada && (
              <div className="file-info">
                <div className="file-details">
                  <p><strong>📄 Arquivo:</strong> {imagemSelecionada.name}</p>
                  <p><strong>📏 Tamanho:</strong> {(imagemSelecionada.size / 1024).toFixed(2)} KB</p>
                </div>
              </div>
            )}

            {/* Botões de ação */}
            {imagemSelecionada && (
              <div className="action-buttons">
                <button
                  onClick={handleEnviarFoto}
                  disabled={!imagemSelecionada || enviando}
                  className={`analyze-btn ${enviando ? 'uploading' : ''}`}
                >
                  {enviando ? ' Analisando...' : '🔍 Analisar Imagem'}
                </button>

                <button onClick={limparFormulario} className="clear-btn">
                  🗑️ Limpar
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="upload-right-panel">
          {previewUrl ? (
            <div className="preview-section">
              <h3>Preview da Imagem</h3>
              <div className="image-container">
                <img 
                  src={previewUrl} 
                  alt="Preview da imagem selecionada" 
                  className="preview-image"
                />
              </div>
            </div>
          ) : (
            <div className="placeholder-section">
              <div className="placeholder-content">
                <div className="placeholder-icon">🖼️</div>
                <h3>Preview da Imagem</h3>
                <p>A imagem selecionada aparecerá aqui</p>
              </div>
            </div>
          )}

          {resultadoAnalise && (
            <div className="results-section">
              <h3>🔬 Resultado da Análise</h3>
              
              <div className="results-grid">
                {/* Descrição */}
                {resultadoAnalise.description && (
                  <div className="result-card">
                    <div className="card-header">Descrição</div>
                    <div className="card-content">{resultadoAnalise.description}</div>
                  </div>
                )}

                {/* Tags */}
                {resultadoAnalise.tags && resultadoAnalise.tags.length > 0 && (
                  <div className="result-card">
                    <div className="card-header">Tags</div>
                    <div className="tags-container">
                      {resultadoAnalise.tags.map((tag, index) => (
                        <span key={index} className="tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Objetos */}
                {resultadoAnalise.objects && resultadoAnalise.objects.length > 0 && (
                  <div className="result-card">
                    <div className="card-header">Objetos Detectados</div>
                    <div className="objects-grid">
                      {resultadoAnalise.objects.map((objeto, index) => (
                        <div key={index} className="object-item">
                          <span className="object-name">{objeto.name || objeto}</span>
                          {objeto.confidence && (
                            <span className="object-confidence">
                              {(objeto.confidence * 100).toFixed(1)}%
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Confiança */}
                {resultadoAnalise.confidence && (
                  <div className="result-card">
                    <div className="card-header">Confiança Geral</div>
                    <div className="confidence-display">
                      <div className="confidence-bar-container">
                        <div 
                          className="confidence-bar"
                          style={{width: `${(resultadoAnalise.confidence * 100)}%`}}
                        ></div>
                      </div>
                      <span className="confidence-value">
                        {(resultadoAnalise.confidence * 100).toFixed(1)}%
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* JSON Debug */}
              <details className="json-debug">
                <summary>🔧 Dados Técnicos</summary>
                <pre className="json-content">
                  {JSON.stringify(resultadoAnalise, null, 2)}
                </pre>
              </details>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ImageUpload;
