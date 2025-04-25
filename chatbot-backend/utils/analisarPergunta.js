// utils/analisarPergunta.js
function analisarPergunta(texto) {
    const pergunta = texto.toLowerCase();
  
    if (pergunta.includes("próximo jogo")) return "proximoJogo";
    if (pergunta.includes("dados da furia")) return "furia";
    if (pergunta.includes("lineup")) return "lineup";
    if (pergunta.includes("último jogo") || pergunta.includes("quanto ficou")) return "ultimoJogo";
    if (pergunta.includes("noticias")) return "noticia";
    if (pergunta.includes("fallen")) return { tipo: "jogador", nome: "FalleN" };
    if (pergunta.includes("yuurih")) return { tipo: "jogador", nome: "yuurih" };
    if (pergunta.includes("yekindar")) return { tipo: "jogador", nome: "YEKINDAR" };
    if (pergunta.includes("kscerato")) return { tipo: "jogador", nome: "KSCERATO" };
    if (pergunta.includes("molodoy")) return { tipo: "jogador", nome: "molodoy" };
  
    return "naoEntendi";
}

export default analisarPergunta;
  