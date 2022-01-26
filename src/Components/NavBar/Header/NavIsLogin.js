import avatar from "../../Assets/icons/avatar.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
<<<<<<< HEAD
=======
import styles from "./../../../Styling/NavIsLogin.module.css";
>>>>>>> 352a507178799921aa4fdf9c09357b36dba542e6

export default function NavIsLogin() {
  const { userReducer } = useSelector((state) => state);
  const { token } = userReducer;

  if (token) {
    return (
      <div className="d-flex" style={{gap: '1rem'}}>
        <button className={`${styles.btn_create_event} my-auto`} type="submit" style={{ borderRadius: "99px", width: "184px", height: "40px" }}>
          Create Event
        </button>
        <div className="my-auto" style={{width:'2px', height: '40px', background:'white'}}></div>
        <a className="navbar-brand" href="/profile">
          <img alt="logo SeeEvent" src={avatar} width="auto" height="auto" />
        </a>
      </div>
    );
  } else {
    return (
      <>
        <Link
          to="/signUp"
          className="nav-link text-white"
          style={{ fontSize: "20px" }}
        >
          Sign Up
        </Link>

        <Link
          to="/signIn"
          className="nav-link text-white"
          style={{ fontSize: "20px" }}
        >
          Sign In
        </Link>

        <button className={`${styles.btn_create_event} my-auto`} type="submit" style={{ borderRadius: "99px", width: "184px", height: "40px" }}>
          Create Event
        </button>
      </>
    );
  }
}
