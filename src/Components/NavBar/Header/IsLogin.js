import avatar from "../../Assets/icons/avatar.png";
import { Link, useNavigate } from "react-router-dom";

export default function IsLogin() {
  const isLogin = localStorage.getItem("token") ? true : false;
  const navigate = useNavigate();
  //   setInterval(()=> {console.log('tesssst')}, 1000)
  const handleLogOut = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    navigate("/signIn");
  };
  if (isLogin) {
    return (
      <a onClick={handleLogOut} className="navbar-brand" href="/">
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
