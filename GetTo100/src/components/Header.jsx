import Join from "./Join";

function Header(props) {
  return (
    <header>
      <h1 style={{ display: "inline" }}>Get To 100</h1>
      <button
        onClick={props.toggleShow}
        disabled={props.playingUsers.includes(null) ? "" : "true"}
      >
        Join
      </button>
      {props.showing ? (
        <Join
          toggle={props.toggleShow}
          setPlayingUsers={props.setPlayingUsers}
        />
      ) : null}
    </header>
  );
}

export default Header;
