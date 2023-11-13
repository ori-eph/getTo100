import Join from "./Join";

function Header(props) {
  return (
    <header>
      <h1 style={{ display: "inline" }}>Get To 100</h1>
      <button onClick={props.toggleShow}>Join</button>
      {props.showing ? null : <Join toggle={props.toggleShow} />}
    </header>
  );
}

export default Header;
