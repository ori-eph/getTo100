import GameBtns from "./GameBtns";
import { useState } from "react";

function Game(props) {
  const [user, setUser] = useState(props.user);
  //   if (props.user.id === "none") {
  //     return (
  //       <div id={props.id} className="game-div">
  //         <h3>No player yet</h3>
  //       </div>
  //     );
  //   }
  //   function getUserById(id) {
  //     for (let i = 0; i < props.playingUsers.length; i++)
  //       if (props.playingUsers[i].id === id) {
  //         return i;
  //       }
  //     return false;
  //   }
  //   const user = props.playingUsers[getUserById(props.userId)];
  //   props.playingUsers.map();
  return (
    <div id={props.id} className="game-div">
      <div className="game-section">
        <h2>{user.username}</h2>
        <h3>{user.startingNumber}</h3>
        <h1>{user.currentNumber}</h1>
        <h3>{user.moves}</h3>
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
