import express, { json } from 'express';
import cors from 'cors';

import analisarPergunta from './utils/analisarPergunta.js';
import proximoJogo from './responses/nextGame.js';
import aboutFuria from './responses/aboutFuria.js';
import ultimoJogo from './responses/lastGame.js';
import players from './responses/players.js';
import aboutPlayer from './responses/aboutPlayer.js'
import news from './responses/News.js';

const app = express();
app.use(cors());
app.use(json());

app.post('/mensagem', async (req, res) => {
  const { texto } = req.body;

  const tipo = analisarPergunta(texto);

  let resposta = "";
  if (typeof tipo === 'object' && tipo.tipo === "jogador") {
    resposta = await aboutPlayer(tipo.nome);
  } else {
    switch (tipo) {
      case "proximoJogo":
        resposta = await proximoJogo();
        break;

      case "ultimoJogo":
        resposta = await ultimoJogo();
        break;

      case "furia":
        resposta = await aboutFuria();
        break;

      case "lineup":
        resposta = await players();
        break;

      case "jogador":
        resposta = await jogador(tipo.nome);
        break;

      case "noticia":
        resposta = await news();
        break;

      case "naoEntendi":
        resposta = "Desculpe, não entendi sua pergunta. Tente perguntar sobre próximos jogos, últimos resultados, jogadores ou dados da Fúria.";
        break;

      default:
        resposta = "Desculpe, não entendi sua pergunta.";
        break;
    }
  }

  res.json({ resposta });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
