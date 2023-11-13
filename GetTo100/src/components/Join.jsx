import { useState } from "react";
import "../css/Join.css";

function Join(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [validationMsg, setValidationMsg] = useState("");

  function submitForm() {
    const users = JSON.parse(localStorage.getItem("users"));
    users.lastId++;
    const newUser = {
      username,
      password,
      active: true,
      scores: [],
      id: users.lastId,
    };

    users.list.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    props.setPlayingUsers((users) => {
      const number = Math.floor(Math.random() * 100);
      const updatedUser = {
        ...newUser,
        startingNumber: number,
        currentNumber: number,
        moves: 0,
      };

      const index = users.findIndex((user) => user === null);

      if (index !== -1) {
        users[index] = updatedUser;
      }

      return users;
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
        setValidationMsg("user already exists.");
        return;
      }
    }
    submitForm();
  }

  return (
    <div className="popup">
      <div className="popup-inner">
        <form className="join-form" onSubmit={validateForm}>
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
          <p className="validationMsg">{validationMsg}</p>
          <button type="submit">Submit</button>
        </form>
        <button onClick={props.toggle}>✗</button>
      </div>
    </div>
  );
}

export default Join;
