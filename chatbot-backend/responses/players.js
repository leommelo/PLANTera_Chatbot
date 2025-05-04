import { HLTV } from 'hltv';

async function players() {
  try {
    const team = await HLTV.getTeamStats({ id: 8297 });
    const jogadores = team.currentLineup;
    console.log(jogadores);
    const listaJogadores = jogadores.map(jogador => `    ${jogador.name}`).join('\n');

    return `A Lineup atual da FURIA tá daquele jeito 🔥:
            \n${listaJogadores}
            \nQuer saber mais sobre algum desses monstros? É só perguntar! 😎`;
  } catch (err) {
    console.error(err);
    return "Não consegui buscar informações sobre o time 😓";
  }
}

export default players;
