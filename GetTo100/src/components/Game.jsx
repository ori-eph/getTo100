import GameBtns from "./GameBtns";
import { useState } from "react";

function Game(props) {
  const [user, setUser] = useState(props.user);
  const [didWin, setDidWin] = useState(false);
  let movesText = user.moves == 1 ? "move" : "moves";
  let style = didWin ? { display: "inline" } : { display: "none" };
  let myTurn = props.turn === props.index ? true : false;
  if (didWin && myTurn) {
    props.setTurn();
  }
  const [imgUrl, setImgUrl] = useState("../public/images/closedDoor.png");

  function logOutUser() {
    const users = JSON.parse(localStorage.getItem("users"));
    users.list = users.list.map((userInLc) => {
      if (user.id === userInLc.id) {
        return user;
      } else {
        return userInLc;
      }
    });
    localStorage.setItem("users", JSON.stringify(users));
    props.setPlayingUsers((prev) => [
      ...prev.slice(0, props.index),
      null,
      ...prev.slice(props.index + 1),
    ]);
    if (!didWin) {
      props.setTurn();
    }
  }

  return (
    <div
      id={props.id}
      className={
        "game-div " +
        (myTurn ? "myTurn" : "waitingTurn") +
        (didWin ? " isWiningGif" : "")
      }
    >
      <div className="game-section">
        <h2>{user.username}&apos;s game</h2>
        <h3>Started with {user.startingNumber}</h3>
        <h1 className={didWin ? "winAnimation" : ""}>{user.currentNumber}</h1>
        <h3>
          {user.moves} {movesText}
        </h3>
        <GameBtns
          myTurn={myTurn}
          index={props.index}
          setUser={setUser}
          user={user}
          didWin={didWin}
          setDidWin={setDidWin}
          setPlayingUsers={props.setPlayingUsers}
          setTurn={props.setTurn}
        />

        {user.scores.length === 0 ? (
          <h4>No scores yet</h4>
        ) : (
          <h4>Scores: {user.scores.toString()}</h4>
        )}
        <button
          id="quit-game-btn"
          onClick={logOutUser}
          onMouseOver={() => setImgUrl("../public/images/openDoor.png")}
          onMouseOut={() => setImgUrl("../public/images/closedDoor.png")}
        >
          <img src={imgUrl} id="quit-img1" />
        </button>
        <button
          id="new-game-btn"
          onClick={() => {
            const number = Math.floor(Math.random() * 100);
            setDidWin(false);
            setUser((prev) => {
              return {
                ...prev,
                startingNumber: number,
                currentNumber: number,
                moves: 0,
              };
            });
          }}
          style={style}
        >
          New Game
        </button>
      </div>
    </div>
  );
}

export default Game;
