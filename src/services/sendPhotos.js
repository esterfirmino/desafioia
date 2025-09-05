// services/sendPhotos.js
export default async function enviarFoto(image, token) {
  try {
    const formData = new FormData();
    
    // Verificar se é um arquivo válido
    if (image instanceof File) {
      formData.append("file", image);
    } else if (image.uri && image.type && image.name) {
      // Para casos onde a imagem vem com estrutura {uri, type, name}
      try {
        const response = await fetch(image.uri);
        const blob = await response.blob();
        const file = new File([blob], image.name, { type: image.type });
        formData.append("file", file);
      } catch {
        throw new Error("Erro ao processar a imagem selecionada");
      }
    } else {
      throw new Error("Formato de imagem inválido");
    }

    console.log("Enviando requisição para:", "https://andradeapps.online/api/upload");
    console.log("Token:", token ? "Token presente" : "Token ausente");

    const res = await fetch("https://andradeapps.online/api/upload", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    console.log("Status da resposta:", res.status);

    if (!res.ok) {
      let errorMessage = `HTTP ${res.status}: ${res.statusText}`;
      
      try {
        const errorData = await res.json();
        errorMessage = errorData.error || errorData.message || errorMessage;
      } catch (parseError) {
        console.warn("Não foi possível fazer parse do erro JSON:", parseError);
      }
      
      throw new Error(errorMessage);
    }

    const resultado = await res.json();
    console.log("Upload realizado com sucesso:", resultado);
    return resultado;
    
  } catch (error) {
    console.error('Erro detalhado na função enviarFoto:', error);
    
    // Melhorar mensagens de erro para o usuário
    if (error.message.includes('Failed to fetch') || 
        error.message.includes('ERR_CONNECTION_REFUSED') ||
        error.message.includes('NetworkError')) {
      throw new Error(`🚫 Erro de conexão com o microserviço!
      
📋 Possíveis causas:
1️⃣ Servidor https://andradeapps.online/ está temporariamente indisponível
2️⃣ Problemas de conectividade com a internet
3️⃣ Bloqueio de CORS ou certificado SSL
4️⃣ Token de autenticação inválido

💡 Verifique se o servidor está respondendo em: https://andradeapps.online/api/upload`);
    } else if (error.message.includes('Unauthorized') || error.message.includes('401')) {
      throw new Error('🔐 Token de autenticação inválido. Verifique suas credenciais.');
    } else if (error.message.includes('413') || error.message.includes('too large')) {
      throw new Error('📁 Arquivo muito grande. Tente uma imagem menor (máximo 5MB).');
    } else if (error.message.includes('403')) {
      throw new Error('🚫 Acesso negado. Verifique se você tem permissão para usar este serviço.');
    } else if (error.message.includes('404')) {
      throw new Error('🔍 Endpoint não encontrado. Verifique se o serviço está configurado corretamente.');
    } else if (error.message.includes('500')) {
      throw new Error('⚠️ Erro interno do servidor. Tente novamente em alguns minutos.');
    } else if (error.message.includes('CORS')) {
      throw new Error('🌐 Erro de CORS. O servidor precisa permitir requisições do seu domínio.');
    }
    
    throw error; 
  }
}