import { HLTV } from 'hltv';

async function aboutFuria() {
  try {
    const response = await HLTV.getTeamStats({id:8297});

    return `A FURIA tá voando baixo! 🐆💨

    ✅ Vitórias: ${response.overview.wins}    
    ❌ Derrotas: ${response.overview.losses}  
    🔫 Kills: ${response.overview.totalKills}  
    💀 Mortes: ${response.overview.totalDeaths}

    Tá achando que é brincadeira? Isso aqui é CS RAIZ! 😎
 `;
    
  } catch (err) {
    console.error(err);
    return "Não consegui buscar informações sobre a FURIA 😓";
  }
}

export default aboutFuria;
