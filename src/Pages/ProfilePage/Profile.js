import logOut from "./../../Assets/icons/logOut.png";
import style from "./../../Styling/Profile.module.css";
import Navbar from "../../Components/NavBar/Header/Navbar";
import Footer from "../../Components/NavBar/Footer/Footer";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogOut } from "../../Redux/Action/userAction";

  const Profile = () => {
  const { userReducer } = useSelector((state) => state);
  const { user } = userReducer;
  const profil = JSON.parse(user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogOut = (e) => {
    e.preventDefault();
    dispatch(userLogOut());
    navigate("/");
  };
  return (
    <>
      <Navbar />
      <div className="d-flex flex-column justify-content-center mx-auto p-2 w-75 bd-highlight">
        <div className="text-center">
          <img className={style.imgProfile} src={profil.image} alt="..." />
        </div>
        <div className="profileInfo text-center">
          <h3 className={style.profileName}>
            {profil.first_name} {profil.last_name}
          </h3>
          <p className={style.profileEmail}>{profil.email}</p>
        </div>
        <div className={`${style.signOutBtn} text-center`}>
          <button type="button" className={`${style.btnSignOut} btn`}>
            <img className={style.btnIcon} src={logOut} alt="" />
            <span className={style.signOut} onClick={handleLogOut}>
              Sign Out
            </span>
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
