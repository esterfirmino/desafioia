// Exemplo de microserviço para testar a aplicação
// Para usar: node example-server.js

const express = require('express');
const multer = require('multer');
const cors = require('cors');

const app = express();
const port = 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Configurar multer para upload de arquivos
const upload = multer({
  dest: 'uploads/',
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB máximo
  },
});

// Endpoint de saúde (opcional)
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Servidor funcionando' });
});

// Endpoint principal para upload de imagens
app.post('/api/upload', upload.single('file'), (req, res) => {
  try {
    console.log('📸 Upload recebido!');
    console.log('Arquivo:', req.file?.originalname);
    console.log('Tamanho:', req.file?.size, 'bytes');
    console.log('Token:', req.headers.authorization);

    // Simular processamento de IA
    const mockAnalysis = {
      description: `Análise concluída para ${req.file?.originalname || 'imagem'}. Este é um exemplo de resposta do microserviço.`,
      confidence: Math.random() * 0.3 + 0.7, // 70-100%
      tags: ['animal', 'natureza', 'foto'],
      objects: [
        {
          name: 'Animal detectado',
          confidence: Math.random() * 0.2 + 0.8 // 80-100%
        }
      ],
      timestamp: new Date().toISOString(),
      filename: req.file?.originalname
    };

    // Simular delay do processamento
    setTimeout(() => {
      res.json({
        success: true,
        message: 'Imagem processada com sucesso!',
        analysis: mockAnalysis
      });
    }, 1000);

  } catch (error) {
    console.error('Erro no processamento:', error);
    res.status(500).json({
      success: false,
      error: 'Erro interno do servidor',
      message: error.message
    });
  }
});

// Endpoint para listar uploads (opcional)
app.get('/api/uploads', (req, res) => {
  res.json({
    message: 'Endpoint para listar uploads processados',
    count: 0,
    uploads: []
  });
});

// Tratamento de erros
app.use((error, req, res, next) => {
  if (error instanceof multer.MulterError) {
    if (error.code === 'LIMIT_FILE_SIZE') {
      return res.status(413).json({
        success: false,
        error: 'Arquivo muito grande',
        message: 'O arquivo deve ter no máximo 5MB'
      });
    }
  }
  
  res.status(500).json({
    success: false,
    error: 'Erro interno do servidor',
    message: error.message
  });
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`🚀 Microserviço rodando em http://localhost:${port}`);
  console.log(`📋 Endpoints disponíveis:`);
  console.log(`   GET  /api/health  - Status do servidor`);
  console.log(`   POST /api/upload  - Upload de imagens`);
  console.log(`   GET  /api/uploads - Listar uploads`);
  console.log(`\n🔧 Para instalar dependências:`);
  console.log(`   npm install express multer cors`);
});