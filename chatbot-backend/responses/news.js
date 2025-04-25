import { HLTV } from 'hltv';

async function news() {
  try {
    const infos = await HLTV.getTeam({ id: 8297 });
    const noticia1 = infos.news[0];
    const noticia2 = infos.news[1];
    const noticia3 = infos.news[2];

    return `Estas são as últimas envolvendo nossa FURIA:

    Título: <strong>${noticia1.name}</strong>
    Link: <a href="https://www.hltv.org${noticia1.link}" target="_blank"><strong>https://www.hltv.org${noticia1.link}</strong></a>
    
    Título: <strong>${noticia2.name}</strong>
    Link: <a href="https://www.hltv.org${noticia2.link}" target="_blank"><strong>https://www.hltv.org${noticia2.link}</strong></a>
    
    Título: <strong>${noticia3.name}</strong>
    Link: <a href="https://www.hltv.org${noticia3.link}" target="_blank"><strong>https://www.hltv.org${noticia3.link}</strong></a>
    `;
  } catch (err) {
    console.error(err);
    return "Não consegui buscar informações sobre a FURIA 😓";
  }
}

export default news;
