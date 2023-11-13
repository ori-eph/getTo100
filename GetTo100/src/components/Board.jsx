import "../css/Board.css";
import Game from "./Game";
import ScoreBoard from "./ScoreBoard";

function Board(props) {
  const gamesJsx = props.playingUsers.map((user, index) => {
    if (user === null) {
      return (
        <div id={`game${index}`} className="game-div emptyGame" key={index}>
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
      />
    );
  });
  return (
    <div id="board-grid">
      {gamesJsx}
      <ScoreBoard id="scores" />
    </div>
  );
}

export default Board;
