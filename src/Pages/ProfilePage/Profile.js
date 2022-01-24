import logOut from './../../Assets/icons/logOut.png';
import photo from './../../Assets/img/photo.jpg';
import style from './../../Styling/Profile.module.css';

const Profile = () => {
   return(
      <div className="d-flex flex-column p-2 bd-highlight">
         <div className="text-center">
            <img className={style.imgProfile} src={photo} alt="..."/>
         </div>
         <div className="profileInfo">
            <h3 className={style.profileName}>
               Pratur Anahata Pratama
            </h3>
            <p className={style.profileEmail}>
               praturanhata45@gmail.com
            </p>
         </div>
         <div className={style.signOutBtn}>
            <button type="button" className={`${style.btnSignOut} btn`}>
               <img className={style.btnIcon} src={logOut} alt="" />
               <span className={style.signOut}>Sign Out</span>
            </button>
         </div>
      </div>
   )
}

export default Profile;