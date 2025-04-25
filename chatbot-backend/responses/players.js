import { HLTV } from 'hltv';

async function players() {
  try {
    const team = await HLTV.getTeamStats({id:8297});
    const jogadores = team.currentLineup;

    const listaJogadores = jogadores.map(jogador => `    ${jogador.name}`).join('\n');

    return `Atualmente nossa Lineup está formada com a seguinte seleção: \n\n${listaJogadores}\n\nGostaria que eu trouxesse informações sobre algum player em específico?`;
  } catch (err) {
    console.error(err);
    return "Não consegui buscar informações sobre o time 😓";
  }
}

export default players;
