import MessageCircle from './Assets/icons/MessageCircle.png';
import photo from './photo.jpg'
import './Comment.css'

const Comment = () => {
   return (
      <div className="comment-section p-2">
         <div className="section-title">
            <span>Comments</span>
         </div>
         <div className="comment-wrapper">
            <div className="comment-content">
               <div className="profile-user d-flex flex-row">
                  <div className="img-wrapper ">
                     <div className="img-user">
                     <img src={photo} alt="profil" />
                     </div>
                  </div>
                  <div className="profile-userName">
                     <div className="user-name">
                        Artieady
                     </div>
                     <div className="post-date">
                        2 hours ago
                     </div>
                  </div>
               </div>
               <div className="comment-caption">
                  Pucing pala belbi
               </div>
            </div>
         </div>
         <div className="comment-area d-flex flex-column">
            <div className="comment-input">
               <div class="mb-3">
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" ></textarea>
               </div>
            </div>
            <div className="comment-button text-end">
               <button type="button" className="btn-comment btn">
                  <img className="btn-icon" src={MessageCircle} alt="" />
                  <span className="sign-out">Submit</span>
               </button>
            </div>
         </div>
      </div>
   )
}

export default Comment;