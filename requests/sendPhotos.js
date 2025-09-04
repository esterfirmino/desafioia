// requests/sendPhotos.js
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
      } catch (blobError) {
        throw new Error("Erro ao processar a imagem selecionada");
      }
    } else {
      throw new Error("Formato de imagem inválido");
    }

    console.log("Enviando requisição para:", "http://localhost:3000/api/upload");
    console.log("Token:", token ? "Token presente" : "Token ausente");

    const res = await fetch("http://localhost:3000/api/upload", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        // NÃO definir Content-Type - o FormData define automaticamente
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
    if (error.message.includes('Failed to fetch')) {
      throw new Error('Erro de conexão. Verifique se o servidor está rodando.');
    } else if (error.message.includes('NetworkError')) {
      throw new Error('Erro de rede. Verifique sua conexão com a internet.');
    }
    
    throw error; // Re-lança o erro original se não for um caso específico
  }
}