import { HLTV } from 'hltv';

async function aboutFuria() {
  try {
    const response = await HLTV.getTeamStats({id:8297});

    return `Atualmente nossa FURIA está com INCRÍVEIS ${response.overview.wins} vitórias ✅ e APENAS ${response.overview.losses} derrotas ❌.\n
    E nesses jogos, tivemos ${response.overview.totalKills} kills 🔫 e só ${response.overview.totalDeaths} mortes 💀.\n
    Nosso time é SINISTRO!! `;
    
  } catch (err) {
    console.error(err);
    return "Não consegui buscar informações sobre a FURIA 😓";
  }
}

export default aboutFuria;
