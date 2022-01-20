// import Basic from "./Formik";
// import avatar from "./Assets/icans/avatar.png";
import { Link } from "react-router-dom";
import logoNav from "./Assets/logos/LogoSencondary.png";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <>
      <nav className={`${styles.navbar} navbar sticky-top navbar-expand-lg mx-auto`}>
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img alt="logo SeeEvent" src={logoNav} width="auto" height="auto" />
          </Link>

          <div className="collapse navbar-collapse">
            <div className="navbar-nav ms-auto">
              <Link to="/signUp" className="nav-link" style={{ textDecoration: "none", marginRight: "1.5rem", color: "white" }}>
                Sign Up
              </Link>

              <Link to="/signIn" className="nav-link" style={{ textDecoration: "none", color: "white" }}>
                Sign In
              </Link>
              {/* sudah login */}
              {/* <a className="navbar-brand" href="#">
                <img alt="logo SeeEvent" src={avatar} width="auto" height="auto" />
              </a> */}
            </div>
          </div>
        </div>
      </nav>
      {/* <Basic/> */}
    </>
  );
}
