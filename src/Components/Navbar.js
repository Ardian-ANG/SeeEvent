import { Link, useLocation } from "react-router-dom";
import logoNav from "./Assets/logos/LogoSencondary.png";
import styles from "./Navbar.module.css";
import IsLogin from "./IsLogin";

export default function Navbar() {
  const location = useLocation();

  return (
    <>
      <nav className={`${styles.navbar} navbar sticky-top navbar-expand-lg mx-auto`} style={{ backgroundColor: location.pathname === "/" ? "transparent" : "#214457" }}>
        <div className="container" style={{ maxWidth: "100%" }}>
          <Link className="navbar-brand" to="/">
            <img alt="logo SeeEvent" src={logoNav} width="auto" height="auto" style={{ paddingLeft: "112px" }} />
          </Link>

          <div className="collapse navbar-collapse">
            <div className="navbar-nav ms-auto" style={{ gap: "2rem", paddingRight: "108px" }}>
              <IsLogin />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
