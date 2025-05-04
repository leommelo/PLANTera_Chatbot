import { HLTV } from 'hltv';

async function players(name) {
  try {
    const player = await HLTV.getPlayerByName({name: name});


    return `O brabo do ${name} tem atualmente ${player.age} anos e nasceu na gloriosa ${player.country.name}!
            
            🔫 KDA absurdo: ${player.statistics.rating}

            Você pode acompanhar ele pela Twitch em: <a href="${player.twitch}" target="_blank">${player.twitch}</a>
            
            Ou pelo Instagram em: <a href="${player.instagram}" target="_blank">${player.instagram}</a>
    `;
  } catch (err) {
    console.error(err);
    return `Não consegui buscar informações sobre o ${name} 😓`;
  }
}

export default players;
