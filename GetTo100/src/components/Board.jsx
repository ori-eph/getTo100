import { useState } from "react";
import "../css/Board.css";
import Game from "./Game";
import ScoreBoard from "./ScoreBoard";

function Board(props) {
  const [turn, setTurn] = useState(0);

  function giveTurnToNextPlayer() {
    let nextPIndex = -1;

    for (let i = turn + 1; i < props.playingUsers.length; i++) {
      if (props.playingUsers[i] !== null) {
        nextPIndex = i;
        break;
      }
    }
    if (nextPIndex === -1) {
      for (let i = 0; i <= turn; i++) {
        if (props.playingUsers[i] !== null) {
          nextPIndex = i;
          break;
        }
      }
    }

    setTurn(nextPIndex);
  }

  const gamesJsx = props.playingUsers.map((user, index) => {
    if (user === null) {
      return (
        <div
          id={`game${index}`}
          className="game-div emptyGame"
          key={`game${index}`}
        >
          <h1>no player yet...</h1>
        </div>
      );
    }
    return (
      <Game
        key={user.id}
        id={`game${index}`}
        setPlayingUsers={props.setPlayingUsers}
        user={user}
        index={index}
        turn={turn}
        setTurn={giveTurnToNextPlayer}
      />
    );
  });

  return (
    <div id="board-grid">
      {gamesJsx}
      <ScoreBoard playingUsers={props.playingUsers} />
      <p>{turn}</p>
    </div>
  );
}

export default Board;
