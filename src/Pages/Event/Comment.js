import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";

import MessageCircle from "./../../Assets/icons/MessageCircle.png";
import style from "./../../Styling/Comment.module.css";
import { getComment, postComment } from "../../Redux/Action/commentAction";

const Comment = () => {
  const { commentList } = useSelector((state) => state.getCommentReducer);
  const { token } = useSelector((state) => state.userReducer);

  const [newComment, setNewComment] = useState();

  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(getComment(params.id));
  }, []);

  //time for comments
  const time = new Date();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      description: newComment,
      event_id: params.id,
      createdAt: time,
    };

    dispatch(postComment(data, params.id));
    setNewComment("");
  };

  return (
    <>
      <div className={`${style.commentSection} p-2`}>
        <div className={style.sectionTitle}>
          <span>Comments</span>
        </div>
        {/* MAPPING COMMENTS FROM API */}
        {commentList.map((comment) => (
          <div className={style.commentWrapper} key={comment.id}>
            <div className="comment-content">
              <div
                className="profile-user d-flex flex-row"
                className={style.commentHeader}
              >
                <div className={style.imgWrapper}>
                  <div className={style.imgUser}>
                    <img src={comment.users?.image} alt="Profil Image" />
                  </div>
                </div>
                <div className={style.profilUserName}>
                  <div className={style.userName}>
                    {comment.users?.first_name} {""}
                    {comment.users?.last_name}
                  </div>
                  <div className={style.postDate}>
                    {moment(comment.createdAt).startOf("day").fromNow()}
                  </div>
                </div>
              </div>
              <div className={style.commentCaption}>{comment.description}</div>
            </div>
          </div>
        ))}
        <div className={style.user_container}>
          <img src={MessageCircle} alt="User Profile"></img>
          <span>User Name</span>
        </div>
        <form
          className={`${style.commentArea} d-flex flex-column`}
          onSubmit={(e) => handleSubmit(e)}
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
            <button className={`${style.btnComment} btn`} type="submit">
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
