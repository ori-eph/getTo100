import GameBtns from "./GameBtns";
import { useState } from "react";

function Game(props) {
  const [user, setUser] = useState(props.user);
  return (
    <div id={props.id} className="game-div">
      <div className="game-section">
        <h2>{user.username}</h2>
        <h3>{user.startingNumber}</h3>
        <h1>{user.currentNumber}</h1>
        <h3>{user.moves}</h3>
        <h4>{user.scores}</h4>
        <GameBtns
          index={props.index}
          setUser={setUser}
          user={user}
          setPlayingUsers={props.setPlayingUsers}
        />
        <button
          onClick={() => {
            props.setPlayingUsers((prev) => [
              ...prev.slice(0, props.index),
              null,
              ...prev.slice(props.index + 1),
            ]);
          }}
        >
          Quit
        </button>
      </div>
    </div>
  );
}

export default Game;
