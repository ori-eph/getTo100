import GameBtn from "./GameBtn";
import "../css/Game.css";

function GameBtns(props) {
  return (
    <div className="btns-flex">
      <GameBtn
        setPlayingUsers={props.setPlayingUsers}
        setUser={props.setUser}
        number={2}
        user={props.user}
        index={props.index}
        setTurn={props.setTurn}
        oparator="/"
      />
      <GameBtn
        setPlayingUsers={props.setPlayingUsers}
        setUser={props.setUser}
        number={2}
        user={props.user}
        index={props.index}
        setTurn={props.setTurn}
        oparator="*"
      />
      <GameBtn
        setPlayingUsers={props.setPlayingUsers}
        setUser={props.setUser}
        number={1}
        user={props.user}
        index={props.index}
        setTurn={props.setTurn}
        oparator="+"
      />
      <GameBtn
        index={props.index}
        setPlayingUsers={props.setPlayingUsers}
        setUser={props.setUser}
        number={1}
        user={props.user}
        setTurn={props.setTurn}
        oparator="-"
      />
    </div>
  );
}

export default GameBtns;
