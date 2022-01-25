import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";

import styles from "./../../Styling/EventDetail.module.css";
import Share from "./../../Assets/icons/Icon Share.png";
import Save from "./../../Assets/icons/Icon Save.png";
import Calender from "./../../Assets/icons/calendar.png";
import { getEventDetail } from "../../Redux/Action/eventDetailAction";
import NavBar from "../../Components/NavBar/Header/Navbar";
import Footer from "../../Components/NavBar/Footer/Footer";
import Comment from "./Comment";

const EventDetail = () => {
  const dispatch = useDispatch();

  const { event, loading, error } = useSelector(
    (state) => state.getEventDetailReducer
  );

  const params = useParams();

  useEffect(() => {
    dispatch(getEventDetail(params.id));
  }, []);

  //setting time
  const newTime = moment(event.datetime).utc().format("ddd, MMM D @ hh:mm A z");
  const commentTime = moment(event.datetime).startOf("day").fromNow();

  return (
    <>
      <NavBar />
      <div className={styles.main_container}>
        <article className={styles.wrapper_container}>
          <div className={styles.top_section_container}>
            <div className={styles.title_container}>
              <h4 className={styles.event_section_title}>{event.title}</h4>
            </div>
            <div className={styles.event_summary_container}>
              <div className={styles.calender_container}>
                <img
                  className={styles.event_calender}
                  src={Calender}
                  alt="Date Calender"
                />
              </div>
              <div className={styles.time_container}>
                <span className={styles.event_time}>{newTime}</span>
              </div>
              <div className={styles.category_container}>
                <div className={styles.event_category}>
                  {event.category?.name}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.body_section_container}>
            <img
              className={styles.event_image}
              alt="event Image"
              src={event.image}
            />
            <div className={styles.content_container}>
              <div className={styles.event_detail_left_container}>
                <div className={styles.event_detail_title_container}>
                  <h5 className={styles.event_detail_title}>{event.title}</h5>
                </div>
                <p className={styles.event_detail_description}>
                  {event.detail}
                </p>
                {/* Bagian Comment */}
                <div className={styles.comment_container}>
                  <Comment />
                </div>
              </div>
              <div className={styles.event_detail_right_container}>
                <div className={styles.profile_container}>
                  <div className={styles.profile_picture_container}>
                    <img
                      className={styles.event_detail_profile_picture}
                      alt="Profile Picture"
                      src={event.createdBy?.image}
                    />
                  </div>
                  <div className={styles.event_detail_creator}>
                    <span className={styles.created_by}>Created by</span>
                    <span className={styles.author_name}>
                      {event.createdBy?.first_name} {event.createdBy?.last_name}
                    </span>
                  </div>
                </div>
                <div className={styles.event_detail_button_container}>
                  <button className={styles.share_container}>
                    <img
                      className={styles.share_icon}
                      src={Share}
                      alt="Share Icon"
                    />
                    <span className={styles.share_text}>Share</span>
                  </button>
                  <button className={styles.save_container}>
                    <img
                      className={styles.save_icon}
                      src={Save}
                      alt="Save Icon"
                    />
                    <span className={styles.save_text}>Save</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
      <Footer />
    </>
  );
};
export default EventDetail;
