import { HLTV } from 'hltv';

async function nextGame() {
  try {
    const matches = await HLTV.getMatches();
    const furiaMatches = matches.filter(
      (match) => match.team1?.id === 6665 || match.team2?.id === 6665
    );

    if (furiaMatches.length === 0) {
      return "A FURIA não tem jogos agendados.";
    }

    const jogo = furiaMatches[0];

    return `Próximo jogo: ${jogo.team1.name} vs ${jogo.team2.name} em ${new Date(jogo.date).toLocaleString()} pelo camp ${jogo.event.name}`;
  } catch (err) {
    console.error(err);
    return "Não consegui buscar o próximo jogo 😓";
  }
}

export default nextGame;
