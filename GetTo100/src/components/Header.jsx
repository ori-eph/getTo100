import Join from "./Join";

function Header(props) {
  return (
    <header>
      <h1 style={{ display: "inline" }}>Get To 100</h1>
      <button
        onClick={props.toggleShow}
        disabled={props.setCurrentUsers.length < 4 ? "" : "true"}
      >
        Join
      </button>
      {props.showing ? null : (
        <Join
          toggle={props.toggleShow}
          setCurrentUsers={props.setCurrentUsers}
        />
      )}
    </header>
  );
}

export default Header;
