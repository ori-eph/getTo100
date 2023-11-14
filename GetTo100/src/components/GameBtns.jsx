import GameBtn from "./GameBtn";
import "../css/Game.css";

function GameBtns(props) {
  const btnArray = [
    { op: "/", num: 2 },
    { op: "*", num: 2 },
    { op: "+", num: 1 },
    { op: "-", num: 1 },
  ];

  const buttonsJsx = btnArray.map((btn) => {
    return (
      <GameBtn
        key={`${props.user.id}-${btn.op}`}
        setPlayingUsers={props.setPlayingUsers}
        setUser={props.setUser}
        number={btn.num}
        user={props.user}
        index={props.index}
        setTurn={props.setTurn}
        setDidWin={props.setDidWin}
        didWin={props.didWin}
        operator={btn.op}
        myTurn={props.myTurn}
      />
    );
  });

  return <div className="btns-flex">{buttonsJsx}</div>;
}

export default GameBtns;
