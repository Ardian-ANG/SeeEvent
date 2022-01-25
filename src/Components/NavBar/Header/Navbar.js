import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logoNav from "./../../../Assets/logos/LogoSencondary.png";
import styles from "./../../../Styling/Navbar.module.css";
import NavIsLogin from "./NavIsLogin";


export default function Navbar() {
  const [scroll, setScroll] = useState(true);
  const location = useLocation();

  const changeColorScroll = () => {
    if (window.scrollY >= 80) {
      setScroll(false);
    } else {
      setScroll(true);
    }
  };
  window.addEventListener("scroll", changeColorScroll);

  return (
    <>
      <nav
        className={`${styles.navbar} navbar sticky-top navbar-expand-lg mx-auto`}
        style={{
          background: location.pathname === "/" && scroll ? "transparent" : "#214457",
        }}
      >
        <div className="container" style={{ maxWidth: "100%" }}>
          <Link className="navbar-brand" to="/">
            <img alt="logo SeeEvent" src={logoNav} width="auto" height="auto" style={{ paddingLeft: "112px" }} />
          </Link>

          <div className="collapse navbar-collapse">
            <div className="navbar-nav ms-auto" style={{ gap: "2rem", paddingRight: "108px" }}>
              <NavIsLogin />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
