import styles from "./../../Styling/AttendEvent.module.css";
import Share from "./../../Assets/icons/Icon Share.png";
import Save from "./../../Assets/icons/Icon Save.png";

const attendEvent = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.wrapper_container}>
        <div className={styles.header_container}>
          <h3 className={styles.design_header}>Design Event</h3>
          <a className={styles.more_event} href="" target={"_blank"}>
            More Events
          </a>
        </div>
        <div className={styles.content_container}>
          {/* First Card */}
          <div className={styles.card_container}>
            <img
              className={styles.event_image}
              src="https://i.pinimg.com/564x/42/09/1f/42091f95cfd84f1ce9a5bec3a1c1a35c.jpg"
              alt="Momo"
            />
            <div className={styles.event_container}>
              <div className={styles.event_top}>
                <div className={styles.category_container}>
                  <div className={styles.event_category}>K-Pop</div>
                </div>
                <div className={styles.event_button}>
                  <a>
                    <img src={Save} alt="save" />
                  </a>
                  <a>
                    <img src={Share} alt="share" />
                  </a>
                </div>
              </div>
              <div className={styles.event_bot}>
                <div className={styles.event_time_container}>
                  <span className={styles.event_time}>
                    SUN, 24 @ 1.15 AM WIB{" "}
                  </span>
                </div>
                <div className={styles.event_title_container}>
                  <span className={styles.event_title}>
                    How to become a loyal fans of Momo
                  </span>
                </div>
                <div className={styles.event_author_container}>
                  <span className={styles.event_author}>
                    by Hamdani Abdullah
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Second Card */}
          <div className={styles.card_container}>
            <img
              className={styles.event_image}
              src="https://i.pinimg.com/564x/42/09/1f/42091f95cfd84f1ce9a5bec3a1c1a35c.jpg"
              alt="Momo"
            />
            <div className={styles.event_container}>
              <div className={styles.event_top}>
                <div className={styles.category_container}>
                  <div className={styles.event_category}>K-Pop</div>
                </div>
                <div className={styles.event_button}>
                  <a>
                    <img src={Save} alt="save" />
                  </a>
                  <a>
                    <img src={Share} alt="share" />
                  </a>
                </div>
              </div>
              <div className={styles.event_bot}>
                <div className={styles.event_time_container}>
                  <span className={styles.event_time}>
                    SUN, 24 @ 1.15 AM WIB{" "}
                  </span>
                </div>
                <div className={styles.event_title_container}>
                  <span className={styles.event_title}>
                    How to become a loyal fans of Momo
                  </span>
                </div>
                <div className={styles.event_author_container}>
                  <span className={styles.event_author}>
                    by Hamdani Abdullah
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Third Card */}
          <div className={styles.card_container}>
            <img
              className={styles.event_image}
              src="https://i.pinimg.com/564x/42/09/1f/42091f95cfd84f1ce9a5bec3a1c1a35c.jpg"
              alt="Momo"
            />
            <div className={styles.event_container}>
              <div className={styles.event_top}>
                <div className={styles.category_container}>
                  <div className={styles.event_category}>K-Pop</div>
                </div>
                <div className={styles.event_button}>
                  <a>
                    <img src={Save} alt="save" />
                  </a>
                  <a>
                    <img src={Share} alt="share" />
                  </a>
                </div>
              </div>
              <div className={styles.event_bot}>
                <div className={styles.event_time_container}>
                  <span className={styles.event_time}>
                    SUN, 24 @ 1.15 AM WIB{" "}
                  </span>
                </div>
                <div className={styles.event_title_container}>
                  <span className={styles.event_title}>
                    How to become a loyal fans of Momo
                  </span>
                </div>
                <div className={styles.event_author_container}>
                  <span className={styles.event_author}>
                    by Hamdani Abdullah
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Fourth Card */}
          <div className={styles.card_container}>
            <img
              className={styles.event_image}
              src="https://i.pinimg.com/564x/42/09/1f/42091f95cfd84f1ce9a5bec3a1c1a35c.jpg"
              alt="Momo"
            />
            <div className={styles.event_container}>
              <div className={styles.event_top}>
                <div className={styles.category_container}>
                  <div className={styles.event_category}>K-Pop</div>
                </div>
                <div className={styles.event_button}>
                  <a>
                    <img src={Save} alt="save" />
                  </a>
                  <a>
                    <img src={Share} alt="share" />
                  </a>
                </div>
              </div>
              <div className={styles.event_bot}>
                <div className={styles.event_time_container}>
                  <span className={styles.event_time}>
                    SUN, 24 @ 1.15 AM WIB{" "}
                  </span>
                </div>
                <div className={styles.event_title_container}>
                  <span className={styles.event_title}>
                    How to become a loyal fans of Momo
                  </span>
                </div>
                <div className={styles.event_author_container}>
                  <span className={styles.event_author}>
                    by Hamdani Abdullah
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default attendEvent;
