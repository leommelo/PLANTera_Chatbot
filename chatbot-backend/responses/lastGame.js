import { HLTV } from 'hltv';

async function lastGame() {
  try {
    const response = await HLTV.getTeamStats({id:8297});

    const ultimaPartida = response.matches[0]; 
    console.log(ultimaPartida);
    
    return `Nosso último jogo foi na <strong>${ultimaPartida.event.name}</strong> no mapa <strong>${ultimaPartida.map}</strong>. E o resultado foi:\n 
    <strong>${ultimaPartida.team1.name}</strong> ${ultimaPartida.result.team1} X  ${ultimaPartida.result.team2} <strong>${ultimaPartida.team2.name}</strong> `;
    
  } catch (err) {
    console.error(err);
    return "Não consegui buscar informações sobre o último jogo 😓";
  }
}

export default lastGame;
