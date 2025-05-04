// utils/analisarPergunta.js

const padroes = {
    proximoJogo: [
      "próximo jogo", "proximo jogo", "próxima partida", "proxima partida",
      "próximo game", "proximo game", "next game", "next match",
      "quando vai ser", "quando será", "quando sera", "data do próximo jogo"
    ],
    furia: [
      "dados da furia", "informações da furia", "info da furia", "sobre a furia",
      "história da furia", "estatísticas da furia", "estatisticas da furia",
    ],
    lineup: [
      "lineup", "escalação", "jogadores atuais", "time atual", "quem está no time",
      "composição do time", "roster", "time da furia"
    ],
    ultimoJogo: [
      "último jogo", "ultimo jogo", "quanto ficou", "placar anterior",
      "resultado do último jogo", "resultado anterior", "como foi o jogo"
    ],
    noticia: [
      "notícias", "noticia", "novidades", "atualizações", "últimas notícias",
      "novas informações", "tem alguma novidade", "noticias"
    ],
  };
  
  const jogadores = {
    fallen: "FalleN",
    yuurih: "yuurih",
    yekindar: "YEKINDAR",
    kscerato: "KSCERATO",
    molodoy: "molodoy",
  };
  
  function analisarPergunta(texto) {
    const pergunta = texto.toLowerCase();
  
    for (const [chave, expressoes] of Object.entries(padroes)) {
      if (expressoes.some(exp => pergunta.includes(exp))) {
        return chave;
      }
    }
  
    for (const [apelido, nome] of Object.entries(jogadores)) {
      if (pergunta.includes(apelido)) {
        return { tipo: "jogador", nome };
      }
    }
  
    return "naoEntendi";
  }
  
  export default analisarPergunta;
  