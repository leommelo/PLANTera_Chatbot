import { HLTV } from 'hltv';

async function lastGame() {
  try {
    const response = await HLTV.getTeamStats({id:8297});

    const ultimaPartida = response.matches[0]; 
    console.log(ultimaPartida);
    
    return `O último confronto foi na ${ultimaPartida.event.name}, no mapa ${ultimaPartida.map}. E olha o placar:
            <strong>${ultimaPartida.team1.name}</strong> ${ultimaPartida.result.team1} x ${ultimaPartida.result.team2} <strong>${ultimaPartida.team2.name}</strong>.

            Foi bala pra todo lado! 💥
`;
    
  } catch (err) {
    console.error(err);
    return "Não consegui buscar informações sobre o último jogo 😓";
  }
}

export default lastGame;
