import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import MessageCircle from "./../../Assets/icons/MessageCircle.png";
import photo from "./../../Assets/img/photo.jpg";
import style from "./../../Styling/Comment.module.css";
import { getComment } from "../../Redux/Action/commentAction";

const Comment = () => {
  const { commentList, loading, error } = useSelector(
    (state) => state.getCommentReducer
  );

  const [newCommentList, setNewCommentList] = useState();
  const [newComment, setNewComment] = useState();

  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(getComment(params.id));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewCommentList([...commentList, newComment]);
    setNewComment("");
  };

  console.log(commentList);

  return (
    <>
      <div className={`${style.commentSection} p-2`}>
        <div className={style.sectionTitle}>
          <span>Comments</span>
        </div>
        <div className={style.commentWrapper}>
          <div className="comment-content">
            <div
              className="profile-user d-flex flex-row"
              className={style.commentHeader}
            >
              <div className={style.imgWrapper}>
                <div className={style.imgUser}>
                  <img src={photo} alt="profil" />
                </div>
              </div>
              <div className={style.profilUserName}>
                <div className={style.userName}>Artieady</div>
                <div className={style.postDate}>2 hours ago</div>
              </div>
            </div>
            <div className={style.commentCaption}>Pucing pala belbi</div>
          </div>
        </div>
        <form
          className={`${style.commentArea} d-flex flex-column`}
          onSubmit={handleSubmit}
        >
          <div className="comment-input">
            <div className="mb-3">
              <textarea
                className={`${style.formControl} form-control`}
                id="exampleFormControlTextarea1"
                rows="3"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className="comment-button text-end">
            <button
              type="button"
              className={`${style.btnComment} btn`}
              type="submit"
              value="submit"
            >
              <img className="btn-icon" src={MessageCircle} alt="" />
              <span className={style.signOut}>Submit</span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Comment;
