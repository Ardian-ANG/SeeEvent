import avatar from "./Assets/icons/avatar.png";
import { Link } from "react-router-dom";
export default function IsLogin() {
    const isLogin = localStorage.getItem("token") ? true : false;
//   setInterval(()=> {console.log('tesssst')}, 1000)
    if (isLogin) {
      return (
        <a className="navbar-brand" href="/">
          <img alt="logo SeeEvent" src={avatar} width="auto" height="auto" />
        </a>
      );
    } else {
      return (
        <>
          <Link to="/signUp" className="nav-link text-white" style={{ fontSize: "20px" }}>
            Sign Up
          </Link>
  
          <Link to="/signIn" className="nav-link text-white" style={{ fontSize: "20px" }}>
            Sign In
          </Link>
        </>
      );
    }
  }