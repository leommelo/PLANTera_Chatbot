import { HLTV } from 'hltv';

async function lastGame() {
  try {
    const response = await HLTV.getTeamStats({id:8297});

    const ultimaPartida = response.matches[0]; 
    
    return `Nosso último jogo foi na ${ultimaPartida.event.name} no mapa ${ultimaPartida.map}. E o resultado foi:\n 
    ${ultimaPartida.team1.name} ${ultimaPartida.result.team1} X  ${ultimaPartida.result.team2} ${ultimaPartida.team2.name} `;
    
  } catch (err) {
    console.error(err);
    return "Não consegui buscar informações sobre o último jogo 😓";
  }
}

export default lastGame;
