import { HLTV } from 'hltv';

async function players(name) {
  try {
    const player = await HLTV.getPlayerByName({name: name});


    return `Nosso grandioso ${name} está atualmente com ${player.age} anos e nasceu em: ${player.country.name}.

            🔫 KDA: ${player.statistics.rating}

            Você pode acompanhar ele pela Twitch em: <a href="${player.twitch}" target="_blank">${player.twitch}</a>
            
            Ou pelo Instagram em: <a href="${player.instagram}" target="_blank">${player.instagram}</a>
    `;
  } catch (err) {
    console.error(err);
    return `Não consegui buscar informações sobre o ${name} 😓`;
  }
}

export default players;
