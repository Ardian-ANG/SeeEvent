// import Basic from "./Formik";
// import avatar from "./avatar.png";
import { Link } from "react-router-dom";
import logo from "./logo.png";

export default function NavbarComp() {
  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg mx-auto" style={{ backgroundColor: "#214457", height: "112px" }}>
        <div className="container">
          <Link to='/'>
          <a className="navbar-brand" href="#">
            <img alt="logo SeeEvent" src={logo} width="auto" height="auto" />
          </a></Link>

          <div className="collapse navbar-collapse">
            <div className="navbar-nav ms-auto">
              <Link to="/signUp" style={{ textDecoration: "none", marginRight: "1.5rem" }}>
                <a className="nav-link" style={{ color: "white" }}>
                  Sign Up
                </a>
              </Link>

              <Link to="/signIn" style={{ textDecoration: "none" }}>
                <a className="nav-link" style={{ color: "white" }}>
                  Sign In
                </a>
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
