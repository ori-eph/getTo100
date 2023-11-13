import "../css/Board.css";
import Game from "./Game";
import ScoreBoard from "./ScoreBoard";

function Board(props) {
  return (
    <div id="board-grid">
      <Game
        id="game1"
        users={props.playingUsers}
        userId={
          props.playingUsers[0] !== null ? props.playingUsers[2].id : "none"
        }
      />
      <Game
        id="game2"
        users={props.playingUsers}
        userId={
          props.playingUsers[1] !== null ? props.playingUsers[2].id : "none"
        }
      />
      <Game
        id="game3"
        users={props.playingUsers}
        userId={
          props.playingUsers[2] !== null ? props.playingUsers[2].id : "none"
        }
      />
      <Game
        id="game4"
        users={props.playingUsers}
        userId={
          props.playingUsers[3] !== null ? props.playingUsers[2].id : "none"
        }
      />
      <ScoreBoard id="scores" />
    </div>
  );
}

export default Board;
