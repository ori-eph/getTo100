function GameBtn(props) {
  function findCurrent(prev) {
    for (const key in prev) {
      if (key === "currentNumber") {
        return prev[key];
      }
    }
  }

  function doAction(oparator, number) {
    switch (oparator) {
      case "/":
        props.setUser((prev) => {
          let current = findCurrent(prev);
          return {
            ...prev,
            currentNumber: Math.floor(current / number),
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
              scores: [...prev.scores, props.user.moves],
            };
          });
        }
        break;
      case "*":
        props.setUser((prev) => {
          let current = findCurrent(prev);
          return {
            ...prev,
            currentNumber: Math.floor(current * number),
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
              scores: [...prev.scores, props.user.moves],
            };
          });
        }
        break;
      case "+":
        props.setUser((prev) => {
          let current = findCurrent(prev);
          return {
            ...prev,
            currentNumber: Math.floor(current + number),
          };
        });
        props.setPlayingUsers((prev) => [
          ...prev.slice(0, props.index),
          props.user,
          ...prev.slice(props.index + 1),
        ]);
        if (props.user.currentNumber + 1 === 100) {
          console.log("hi");
        }
        if (props.user.currentNumber + 1 === 100) {
          props.setUser((prev) => {
            return {
              ...prev,
              scores: [...prev.scores, props.user.moves],
            };
          });
        }
        break;
      case "-":
        props.setUser((prev) => {
          let current = findCurrent(prev);
          return {
            ...prev,
            currentNumber: Math.floor(current - number),
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
              scores: [...prev.scores, props.user.moves],
            };
          });
        }
        break;
    }
  }

  return (
    <button
      onClick={() => doAction(props.oparator, props.number)}
    >{`${props.oparator}${props.number}`}</button>
  );
}

export default GameBtn;
