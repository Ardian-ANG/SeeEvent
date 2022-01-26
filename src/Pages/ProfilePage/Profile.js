import logOut from "./../../Assets/icons/logOut.png";
import photo from "./../../Assets/img/photo.jpg";
import style from "./../../Styling/Profile.module.css";
import Navbar from "../../Components/NavBar/Header/Navbar";
import Footer from "../../Components/NavBar/Footer/Footer";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setUser, userLogOut } from "../../Redux/Action/userAction";
import axios from "axios";


const Profile = () => {
  const { user, token } = useSelector((state) => state);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(()=>{
    const setProfile = async () => {
      try {
        const response = await axios({
          method: "GET",
          url: "https://team-b-see-event.herokuapp.com/api/v1/account/",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        // console.log(response.data.result);
        dispatch(dispatch(setUser(response.data.result)));
      } catch (error) {
        console.log(error);
      }
    };
  
    setProfile();
  
  },[dispatch, token])



  const handleLogOut = (e) => {
    e.preventDefault();
    dispatch(userLogOut());
    navigate("/");
  };
  return (
    <>
      <Navbar />
      <div className="d-flex flex-column p-2 bd-highlight">
        <div className="text-center">
          <img className={style.imgProfile} src={user.image} alt="..." />
        </div>
        <div className="profileInfo">
          <h3 className={style.profileName}>{user.first_name} {user.last_name}</h3>
          <p className={style.profileEmail}>{user.email}</p>
        </div>
        <div className={style.signOutBtn}>
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
