import "./NavBar.scss";

export default function NavBar() {
  return (
    <div className="navbar">
      {/*sidebar*/}
      <div className="wrapper">
        <span>
          <img className="logo" src="/clint.png" alt="Clint Devs" />
        </span>
        <div className="social">
          <a href="#">
            <img src="/facebook.png" alt="" />
          </a>
          <a href="#">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="#">
            <img src="/youtube.png" alt="" />
          </a>
          <a href="#">
            <img src="/dribble.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
