import avatar from "../../Assets/icons/avatar.png";
import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";


export default function NavIsLogin() {
  const isLogin = localStorage.getItem("token") ? true : false;

  // const { token } = useSelector((state) => state);


  if (isLogin) {
    return (
      <a className="navbar-brand" href="/profile">
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
