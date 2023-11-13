import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Board from "./components/Board";

function App() {
  const [showing, setShowing] = useState(false);
  function toggleShow() {
    setShowing((showing) => !showing);
  }
  return (
    <>
      <Header toggleShow={toggleShow} showing={showing} />
      <Board />
    </>
  );
}

export default App;
