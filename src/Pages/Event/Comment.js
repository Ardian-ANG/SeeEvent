import MessageCircle from './../../Assets/icons/MessageCircle.png';
import photo from './../../Assets/img/photo.jpg';
import style from './../../Styling/Comment.module.css';

const Comment = () => {
   return (
      <div className={`${style.commentSection} p-2`}>
         <div className={style.sectionTitle}>
            <span>Comments</span>
         </div>
         <div className={style.commentWrapper}>
            <div className="comment-content">
               <div className="profile-user d-flex flex-row">
                  <div className={style.imgWrapper}>
                     <div className={style.imgUser}>
                        <img src={photo} alt="profil" />
                     </div>
                  </div>
                  <div className={style.profilUserName}>
                     <div className={style.userName}>
                        Artieady
                     </div>
                     <div className={style.postDate}>
                        2 hours ago
                     </div>
                  </div>
               </div>
               <div className={style.commentCaption}>
                  Pucing pala belbi
               </div>
            </div>
         </div>
         <div className={`${style.commentArea} d-flex flex-column`}>
            <div className="comment-input">
               <div class="mb-3">
                  <textarea className={`${style.formControl} form-control`} id="exampleFormControlTextarea1" rows="3" ></textarea>
               </div>
            </div>
            <div className="comment-button text-end">
               <button type="button" className={`${style.btnComment} btn`}>
                  <img className="btn-icon" src={MessageCircle} alt="" />
                  <span className={style.signOut}>Submit</span>
               </button>
            </div>
         </div>
      </div>
   )
}

export default Comment;