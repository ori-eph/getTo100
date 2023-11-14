import { useState } from "react";
import "../css/Join.css";

function Join(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [validationMsg, setValidationMsg] = useState("");

  function LoginUser(user) {
    props.setPlayingUsers((playingUsers) => {
      const number = Math.floor(Math.random() * 100);
      const updatedUser = {
        ...user,
        startingNumber: number,
        currentNumber: number,
        moves: 0,
      };

      const index = playingUsers.findIndex((user) => user === null);
      if (index !== -1) {
        playingUsers[index] = updatedUser;
      }
      return playingUsers;
    });

    props.toggle();
  }

  function validateForm(e) {
    e.preventDefault();
    if (!username || !password) {
      setValidationMsg("u must fill both fields.");
      return;
    }
    const users = JSON.parse(localStorage.getItem("users")).list;
    for (const user of users) {
      if (user.username === username) {
        if (user.password === password) {
          LoginUser(user);
          break;
        }
      }
    }
    setValidationMsg("username or password not correct.");
  }

  return (
    <div className="popup">
      <div className="popup-inner">
        <form className="join-form" onSubmit={validateForm}>
          <h2 style={{ fontSize: "18px", marginTop: "4px" }}>Join</h2>
          <input
            type="text"
            placeholder="player name..."
            name="username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="password..."
            name="pass"
            id="pass"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="validationMsg">{validationMsg}</p>
          <button type="submit">Submit</button>
        </form>
        <button onClick={props.toggle} style={{ marginTop: "9px" }}>
          ✗
        </button>
      </div>
    </div>
  );
}

export default Join;
