import GameBtns from "./GameBtns";
import { useState } from "react";

function Game(props) {
  const [user, setUser] = useState(props.user);
  const [didWin, setDidWin] = useState(false);
  let movesText = user.moves == 1 ? "move" : "moves";
  return (
    <div id={props.id} className="game-div">
      <div className="game-section">
        <h2>{user.username}&apos;s game</h2>
        <h3>Started with {user.startingNumber}</h3>
        <h1>{user.currentNumber}</h1>
        <h3>
          {user.moves} {movesText}
        </h3>
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
        <button
          onClick={() => {
            const number = Math.floor(Math.random() * 100);
            console.log(number);
            // setUser((prev) => {
            //   return {
            //     ...prev,
            //     startingNumber: number,
            //     currentNumber: number,
            //     moves: 0,
            //   };
            // });
          }}
          style={didWin ? { display: "inline" } : { display: "none" }}
        >
          New Game
        </button>
      </div>
    </div>
  );
}

export default Game;
