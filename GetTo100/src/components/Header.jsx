import Join from "./Join";
import "../css/Header.css";

function Header(props) {
  return (
    <header>
      <h1
        style={{
          fontWeight: "bolder",
          fontSize: "50px",
          marginBottom: "4vh",
        }}
      >
        Get To 100
      </h1>
      <button
        id="join-btn"
        onClick={props.toggleShow}
        disabled={props.playingUsers.includes(null) ? "" : "true"}
        style={{ fontSize: "16px" }}
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
