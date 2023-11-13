import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Board from "./components/Board";

function App() {
  const [currentUsers, setCurrentUsers] = useState([]);
  const [openSpots, setOpenSpots] = useState([1, 2, 3, 4]);

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
      <Header
        toggleShow={toggleShow}
        showing={showing}
        currentUsers={currentUsers}
        setCurrentUsers={setCurrentUsers}
        openSpots={openSpots}
        setOpenSpots={setOpenSpots}
      />
      <Board playingUsers={currentUsers} setCurrentUsers={setCurrentUsers} />
    </>
  );
}

export default App;
