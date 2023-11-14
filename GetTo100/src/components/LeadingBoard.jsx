function LeadingBoard(props) {
  let leadBoard = <p>no players yet.</p>;
  const playersOrganized = [];

  function sortPlayers(players) {
    for (let i = 0; i < players.length; i++) {
      if (players[i] != null) {
        let sum = 0;
        for (let j = 0; j < players[i].scores.length; j++) {
          sum += players[i].scores[j];
        }
        playersOrganized.push({
          name: players[i].username,
          averageScore: sum / players[i].scores.length,
        });
      }
    }

    playersOrganized.sort(function (a, b) {
      if (b.averageScore === a.averageScore) {
        return a.scores.length - b.scores.length;
      }
      return a.averageScore - b.averageScore;
    });

    console.log(playersOrganized);
    return playersOrganized.map((player) => (
      <li key={player.name}>{player.name}</li>
    ));
  }

  const leadList = sortPlayers(props.playingUsers);

  leadBoard = <ol>{leadList}</ol>;

  return (
    <div className="leading-board">
      <h2>Leading Board</h2>
      {leadBoard}
    </div>
  );
}

export default LeadingBoard;
