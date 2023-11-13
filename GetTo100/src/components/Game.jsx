function Game(props) {
  if (props.userId === "none") {
    return (
      <div id={props.id} className="game-div">
        <h3>No player yet</h3>
      </div>
    );
  }
  function getUserById(id) {
    for (let i = 0; i < props.playingUsers.length; i++)
      if (props.playingUsers[i].id === id) {
        return i;
      }
    return false;
  }
  //   props.playingUsers.map();
  return (
    <div id={props.id} className="game-div">
      <div className="game-section">
        <h2>{props.playingUsers[getUserById(props.userId)].username}</h2>
        <h3>{props.playingUsers[getUserById(props.userId)].startingNumber}</h3>
        <h1>{props.playingUsers[getUserById(props.userId)].currentNumber}</h1>
        <h3>{props.playingUsers[getUserById(props.userId)].moves}</h3>
      </div>
    </div>
  );
}

export default Game;
