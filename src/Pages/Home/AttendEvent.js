import styles from "./../../Styling/AttendEvent.module.css";
import Share from "./../../Assets/icons/Icon Share.png";
import Save from "./../../Assets/icons/Icon Save.png";
import { getAttendEvent } from "../../Redux/Action/eventsAction";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import moment from "moment";
import { Link } from "react-router-dom";

const AttendEvent = () => {
  const { attendEvents } = useSelector((state) => state.getEventsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAttendEvent());
  }, []);

  return (
    <div className={styles.main_container}>
      <div className={styles.wrapper_container}>
        <div className={styles.header_container}>
          <h3 className={styles.design_header}>
            Attend Event that Starting Soon
          </h3>
          <a className={styles.more_event} href={"/search"} target={""}>
            More Events
          </a>
        </div>
        <div className={styles.content_container}>
          {/*  CALLING CARD EVENT*/}
          {attendEvents.map((event) => (
            <Link
              className={styles.card_container}
              key={event.id}
              to={`/event/${event.id}`}
            >
              <div className={styles.image_container}>
                <img
                  className={styles.event_image}
                  src={event.image}
                  alt="Momo"
                />
              </div>
              <div className={styles.event_container}>
                <div className={styles.event_top}>
                  <div className={styles.category_container}>
                    <div className={styles.event_category}>
                      {event.category?.name}
                    </div>
                  </div>
                  <div className={styles.event_button}>
                    <img src={Save} alt="save" />
                    <img src={Share} alt="share" />
                  </div>
                </div>
                <div className={styles.event_bot}>
                  <div className={styles.event_time_container}>
                    <span className={styles.event_time}>
                      {moment(event.datetime)
                        .utc()
                        .format("ddd, MMM D @ hh:mm A z")}
                    </span>
                  </div>
                  <div className={styles.event_title_container}>
                    <span className={styles.event_title}>{event.title}</span>
                  </div>
                  <div className={styles.event_author_container}>
                    <span className={styles.event_author}>
                      by {event.createdBy?.first_name}{" "}
                      {event.createdBy?.last_name}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default AttendEvent;
