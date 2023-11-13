import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Board from "./components/Board";

function App() {
  const [currentUsers, setCurrentUsers] = useState([]);
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
