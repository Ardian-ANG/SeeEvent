import logOut from './Assets/icons/logOut.png';
import photo from './photo.jpg'
import './Profile.css'

const Profile = () => {
   return(
      <div className="d-flex flex-column p-2 bd-highlight">
         <div className="text-center">
            <img className="img-profile" src={photo} alt="..."/>
         </div>
         <div className="profile-info">
            <h3 className="profile-name">
               Pratur Anahata Pratama
            </h3>
            <p className="profile-email">
               praturanhata45@gmail.com
            </p>
         </div>
         <div className="sign-out-btn">
            <button type="button" className="btn-sign-out btn">
               <img className="btn-icon" src={logOut} alt="" />
               <span className="sign-out">Sign Out</span>
            </button>
         </div>
      </div>
   )
}

export default Profile;