// utils/analisarPergunta.js
function analisarPergunta(texto) {
    const pergunta = texto.toLowerCase();
  
    if (pergunta.includes("próximo jogo")) return "proximoJogo";
    if (pergunta.includes("furia")) return "furia";
    if (pergunta.includes("lineup")) return "lineup";
    if (pergunta.includes("último jogo") || pergunta.includes("quanto ficou")) return "ultimoJogo";
  
    return "naoEntendi";
  }
  
  export default analisarPergunta;
  