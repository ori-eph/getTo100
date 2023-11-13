import "../css/Board.css";
import Game from "./Game";
import ScoreBoard from "./ScoreBoard";

function Board() {
  return (
    <div id="board-grid">
      <Game id="game1" />
      <Game id="game2" />
      <Game id="game3" />
      <Game id="game4" />
      <ScoreBoard id="scores" />
    </div>
  );
}

export default Board;
