import { HLTV } from 'hltv';

async function news() {
  try {
    const infos = await HLTV.getTeam({ id: 8297 });
    const noticia1 = infos.news[0];
    const noticia2 = infos.news[1];
    const noticia3 = infos.news[2];

    return `As últimas quentinhas da nossa FURIA 🐆🔥:

    📰 <strong>${noticia1.name}</strong>  
    🔗 <a href="https://www.hltv.org${noticia1.link}">Link</a>

    📰 <strong>${noticia2.name}</strong>  
    🔗 <a href="https://www.hltv.org${noticia2.link}">Link</a>

    📰 <strong>${noticia3.name}</strong>  
    🔗 <a href="https://www.hltv.org${noticia3.link}">Link</a>

    Fica de olho que vem mais por aí!
    `;
  } catch (err) {
    console.error(err);
    return "Não consegui buscar informações sobre a FURIA 😓";
  }
}

export default news;
