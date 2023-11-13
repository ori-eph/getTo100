function GameBtns(props) {
  function doAction(oparator, number) {
    switch (oparator) {
      case "/":
        return () => {};
    }
  }

  return (
    <button
      onClick={() => doAction(props.oparator, props.number)}
    >{`${props.oparator}${props.oparator}`}</button>
  );
}

export default GameBtns;
