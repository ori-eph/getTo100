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

  function checkTie(users, moves) {
    const userWithSameScore = usersWithoutNull(users).filter(
      (user) => user.moves === moves
    );
    return userWithSameScore;
  }

  //   function findUserWithMostMoves(users) {
  //     const playerWithMostWins = usersWithoutNull(users).reduce(
  //       (prev, current) => {
  //         return prev.moves > current.moves ? prev : current;
  //       }
  //     );
  //     return playerWithMostWins;
  //   }

  function usersWithLeastMoves(users) {
    const movesArr = usersWithoutNull(users).map((user) => user.moves);
    const min = Math.min(...movesArr);
    const usersWithLeastArr = checkTie(usersWithoutNull(users), min);
    return usersWithLeastArr;
  }

  function usersWithMostMoves(users) {
    const movesArr = usersWithoutNull(users).map((user) => user.moves);
    console.log(movesArr);
    const max = Math.max(...movesArr);
    const usersWithMostArr = checkTie(usersWithoutNull(users), max);
    return usersWithMostArr;
  }

  function strUsernames(users) {
    let str = "";
    for (let i = 0; i < users.length; i++) {
      str += users[i].username;
      if (i !== users.length - 1) {
        str += " & ";
      }
    }
    return str;
  }

  //   function findUserWithLeastMoves(users) {
  //     const playerWithMostWins = usersWithoutNull(users).reduce(
  //       (prev, current) => {
  //         console.log("p " + prev);
  //         console.log("c " + current);
  //         return prev.moves < current.moves ? prev : current;
  //       }
  //     );
  //     return playerWithMostWins;
  //   }

  return (
    <div id="scores">
      {props.playingUsers.findIndex((user) => user !== null) >= 0 ? (
        findPlayers(props.playingUsers) === 1 ? (
          <h3>You are the only player right now</h3>
        ) : strUsernames(usersWithLeastMoves(props.playingUsers)) ===
          strUsernames(usersWithMostMoves(props.playingUsers)) ? (
          <h3>There is a tie in moves</h3>
        ) : (
          <div>
            <h4>
              {strUsernames(usersWithMostMoves(props.playingUsers))} did the
              most moves
            </h4>
            <h4>
              {strUsernames(usersWithLeastMoves(props.playingUsers))} did the
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
