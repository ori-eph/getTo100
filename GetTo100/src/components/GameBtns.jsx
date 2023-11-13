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
        oparator="/"
      />
      <GameBtn
        setPlayingUsers={props.setPlayingUsers}
        setUser={props.setUser}
        number={2}
        user={props.user}
        index={props.index}
        oparator="*"
      />
      <GameBtn
        setPlayingUsers={props.setPlayingUsers}
        setUser={props.setUser}
        number={1}
        user={props.user}
        index={props.index}
        oparator="+"
      />
      <GameBtn
        index={props.index}
        setPlayingUsers={props.setPlayingUsers}
        setUser={props.setUser}
        number={1}
        user={props.user}
        oparator="-"
      />
    </div>
  );
}

export default GameBtns;
