import { useState } from "react";
import "../css/Join.css";

function Join(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function submitForm(e) {
    e.preventDefault();

    props.toggle();
  }

  return (
    <div className="popup">
      <div className="popup-inner">
        <form className="join-form" onSubmit={submitForm}>
          <h2>Join</h2>
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
          <button type="submit">Submit</button>
        </form>
        <button onClick={props.toggle}>X</button>
      </div>
    </div>
  );
}

export default Join;
