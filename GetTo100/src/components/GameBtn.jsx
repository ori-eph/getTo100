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
        console.log(props.user);
        props.setUser((prev) => {
          let current = findCurrent(prev);
          return {
            ...prev,
            currentNumber: Math.floor(current / number),
          };
        });
        console.log(props.user);
        props.setPlayingUsers((prev) => [
          ...prev.slice(0, props.index),
          props.user,
          ...prev.slice(props.index + 1),
        ]);
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
