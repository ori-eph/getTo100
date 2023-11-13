import "../css/Board.css";
import Game from "./Game";
import ScoreBoard from "./ScoreBoard";

function Board(props) {
  return (
    <div id="board-grid">
      <Game
        id="game1"
        playingUsers={props.playingUsers}
        userId={
          props.playingUsers.length > 0 ? props.playingUsers[0].id : "none"
        }
      />
      <Game
        id="game2"
        playingUsers={props.playingUsers}
        userId={props.playingUsers[1] > 1 ? props.playingUsers[1].id : "none"}
      />
      <Game
        id="game3"
        playingUsers={props.playingUsers}
        userId={props.playingUsers[2] > 2 ? props.playingUsers[2].id : "none"}
      />
      <Game
        id="game4"
        playingUsers={props.playingUsers}
        userId={props.playingUsers[3] > 3 ? props.playingUsers[3].id : "none"}
      />
      <ScoreBoard id="scores" />
    </div>
  );
}

export default Board;
