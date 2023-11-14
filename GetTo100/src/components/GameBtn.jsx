function GameBtn(props) {
  function plus(number) {
    props.setUser((prev) => {
      return {
        ...prev,
        currentNumber: Math.floor(prev.currentNumber + number),
        moves: prev.moves + 1,
      };
    });
    props.setPlayingUsers((prev) => {
      return [
        ...prev.slice(0, props.index),
        { ...props.user, moves: prev[props.index].moves + 1 },
        ...prev.slice(props.index + 1),
      ];
    });
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
  }

  function minus(number) {
    props.setUser((prev) => {
      return {
        ...prev,
        currentNumber: Math.floor(prev.currentNumber - number),
        moves: prev.moves + 1,
      };
    });
    props.setPlayingUsers((prev) => {
      return [
        ...prev.slice(0, props.index),
        { ...props.user, moves: prev[props.index].moves + 1 },
        ...prev.slice(props.index + 1),
      ];
    });
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
  }

  function divide(number) {
    props.setPlayingUsers((prev) => {
      return [
        ...prev.slice(0, props.index),
        { ...props.user, moves: prev[props.index].moves + 1 },
        ...prev.slice(props.index + 1),
      ];
    });
    props.setUser((prev) => {
      return {
        ...prev,
        currentNumber: Math.floor(prev.currentNumber / number),
        moves: prev.moves + 1,
      };
    });
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
  }

  function multiply(number) {
    props.setUser((prev) => {
      return {
        ...prev,
        currentNumber: Math.floor(prev.currentNumber * number),
        moves: prev.moves + 1,
      };
    });
    props.setPlayingUsers((prev) => {
      return [
        ...prev.slice(0, props.index),
        { ...props.user, moves: prev[props.index].moves + 1 },
        ...prev.slice(props.index + 1),
      ];
    });
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
  }

  function doAction(operator, number) {
    switch (operator) {
      case "/":
        divide(number);
        break;

      case "*":
        multiply(number);
        break;

      case "+":
        plus(number);
        break;

      case "-":
        minus(number);
        break;
    }
  }

  return (
    <button
      style={{ margin: "0.3vw" }}
      className="game-btn"
      onClick={() => doAction(props.operator, props.number)}
      disabled={props.didWin || !props.myTurn}
    >{`${props.operator}${props.number}`}</button>
  );
}

export default GameBtn;
