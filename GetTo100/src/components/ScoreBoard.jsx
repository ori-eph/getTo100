function ScoreBoard(props) {
  function findPlayers(users) {
    let count = 0;
    users.forEach((user) => {
      user !== null ? count++ : (count += 0);
    });
    return count;
  }
  function usersWithoutNull(users) {
    const onlyUsers = users.filter((user) => user !== null);
    return onlyUsers;
  }
  function findUserWithMostMoves(users) {
    const playerWithMostWins = usersWithoutNull(users).reduce(
      (prev, current) => {
        return prev.moves > current.moves ? prev : current;
      }
    );
    return playerWithMostWins;
  }
  function findUserWithLeastMoves(users) {
    const playerWithMostWins = usersWithoutNull(users).reduce(
      (prev, current) => {
        console.log("p " + prev);
        console.log("c " + current);
        return prev.moves < current.moves ? prev : current;
      }
    );
    return playerWithMostWins;
  }

  console.log(props.playingUsers);
  return (
    <div id="scores">
      {props.playingUsers.findIndex((user) => user !== null) >= 0 ? (
        findPlayers(props.playingUsers) === 1 ? (
          <h3>You are the only player right now</h3>
        ) : (
          <div>
            <h4>
              {findUserWithMostMoves(props.playingUsers).username} did the most
              moves
            </h4>
            <h4>
              {findUserWithLeastMoves(props.playingUsers).username} did the
              least moves
            </h4>
          </div>
        )
      ) : (
        <h3>No players yet</h3>
      )}
    </div>
  );
}

export default ScoreBoard;
