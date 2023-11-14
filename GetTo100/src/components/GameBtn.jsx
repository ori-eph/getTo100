function GameBtn(props) {
  function doAction(oparator, number) {
    switch (oparator) {
      case "/":
        props.setUser((prev) => {
          return {
            ...prev,
            currentNumber: Math.floor(prev.currentNumber / number),
            moves: prev.moves + 1,
          };
        });
        props.setPlayingUsers((prev) => [
          ...prev.slice(0, props.index),
          props.user,
          ...prev.slice(props.index + 1),
        ]);
        if (props.user.currentNumber / 2 === 100) {
          props.setUser((prev) => {
            return {
              ...prev,
              scores: [...prev.scores, prev.moves],
            };
          });
          props.setDidWin(true);
        }
        props.setTurn();
        break;
      case "*":
        props.setUser((prev) => {
          return {
            ...prev,
            currentNumber: Math.floor(prev.currentNumber * number),
            moves: prev.moves + 1,
          };
        });
        props.setPlayingUsers((prev) => [
          ...prev.slice(0, props.index),
          props.user,
          ...prev.slice(props.index + 1),
        ]);
        if (props.user.currentNumber * 2 === 100) {
          props.setUser((prev) => {
            return {
              ...prev,
              scores: [...prev.scores, prev.moves],
            };
          });
          props.setDidWin(true);
        }
        props.setTurn();
        break;
      case "+":
        props.setUser((prev) => {
          return {
            ...prev,
            currentNumber: Math.floor(prev.currentNumber + number),
            moves: prev.moves + 1,
          };
        });
        props.setPlayingUsers((prev) => [
          ...prev.slice(0, props.index),
          props.user,
          ...prev.slice(props.index + 1),
        ]);
        if (props.user.currentNumber + 1 === 100) {
          props.setUser((prev) => {
            return {
              ...prev,
              scores: [...prev.scores, prev.moves],
            };
          });
          props.setDidWin(true);
        }
        props.setTurn();
        break;
      case "-":
        props.setUser((prev) => {
          return {
            ...prev,
            currentNumber: Math.floor(prev.currentNumber - number),
            moves: prev.moves + 1,
          };
        });
        props.setPlayingUsers((prev) => [
          ...prev.slice(0, props.index),
          props.user,
          ...prev.slice(props.index + 1),
        ]);
        if (props.user.currentNumber - 1 === 100) {
          props.setUser((prev) => {
            return {
              ...prev,
              scores: [...prev.scores, prev.moves],
            };
          });
          props.setDidWin(true);
        }
        props.setTurn();
        break;
    }
  }

  return (
    <button
      onClick={() => doAction(props.oparator, props.number)}
      disabled={props.didWin}
    >{`${props.oparator}${props.number}`}</button>
  );
}

export default GameBtn;
