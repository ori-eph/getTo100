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
        setDidWin={props.setDidWin}
        oparator="/"
        disabled={props.disabled}
      />
      <GameBtn
        setPlayingUsers={props.setPlayingUsers}
        setUser={props.setUser}
        number={2}
        setDidWin={props.setDidWin}
        user={props.user}
        index={props.index}
        setTurn={props.setTurn}
        oparator="*"
        disabled={props.disabled}
      />
      <GameBtn
        setPlayingUsers={props.setPlayingUsers}
        setUser={props.setUser}
        number={1}
        user={props.user}
        index={props.index}
        setTurn={props.setTurn}
        oparator="+"
        setDidWin={props.setDidWin}
        disabled={props.disabled}
      />
      <GameBtn
        index={props.index}
        setPlayingUsers={props.setPlayingUsers}
        setUser={props.setUser}
        number={1}
        user={props.user}
        setTurn={props.setTurn}
        oparator="-"
        setDidWin={props.setDidWin}
        disabled={props.disabled}
      />
    </div>
  );
}

export default GameBtns;
