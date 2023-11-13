import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Board from "./components/Board";

function App() {
  const [currentUsers, setCurrentUsers] = useState([]);
  function resetLocalStorage() {
    if (!localStorage.getItem("users")) {
      const users = {
        list: [],
        lastId: 0,
      };
      localStorage.setItem("users", JSON.stringify(users));
    }
  }
  resetLocalStorage();

  const [showing, setShowing] = useState(false);
  function toggleShow() {
    setShowing((showing) => !showing);
  }
  return (
    <>
      <Header toggleShow={toggleShow} showing={showing} />
      <Board currentUsers={currentUsers} setCurrentUsers={setCurrentUsers} />
    </>
  );
}

export default App;
