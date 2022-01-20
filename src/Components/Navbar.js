
import { Link, useLocation } from "react-router-dom";
import logoNav from "./Assets/logos/LogoSencondary.png";
import styles from "./Navbar.module.css";
// import avatar from "./Assets/icons/avatar.png";

export default function Navbar() {
  const location = useLocation()
  return (
    <>
      <nav className={`${styles.navbar} navbar sticky-top navbar-expand-lg mx-auto`} 
      style={{backgroundColor: location.pathname === '/'? 'transparent': '#214457'}}>
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img alt="logo SeeEvent" src={logoNav} width="auto" height="auto" />
          </Link>

          <div className="collapse navbar-collapse">
            <div className="navbar-nav ms-auto" style={{gap: '1.5rem'}}>
              <Link to="/signUp" className="nav-link text-white">
                Sign Up
              </Link>

              <Link to="/signIn" className="nav-link text-white">
                Sign In
              </Link>
              {/* sudah login */}
              {/* <a className="navbar-brand" href="/">
                <img alt="logo SeeEvent" src={avatar} width="auto" height="auto" />
              </a> */}
            </div>
          </div>
        </div>
      </nav>

    </>
  );
}
