import styles from "./../../Styling/EventDetail.module.css";
import Share from "./../../Assets/icons/Icon Share.png";
import Save from "./../../Assets/icons/Icon Save.png";
import Calender from "./../../Assets/icons/calendar.png";
import Profile from "./../../Assets/img/profile.jpeg";
import NavBar from "../../Components/NavBar/Header/Navbar";
import Footer from "../../Components/NavBar/Footer/Footer";
import Comment from "./Comment";

const EventDetail = () => {
  return (
    <>
      <NavBar />
      <div className={styles.main_container}>
        <article className={styles.wrapper_container}>
          <div className={styles.top_section_container}>
            <div className={styles.title_container}>
              <h4 className={styles.event_section_title}>
                The International 10: Team Spirit "The Black Horse"
              </h4>
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
                <span className={styles.event_time}>
                  SUN, Dec 24 @ 1.15 AM WIB
                </span>
              </div>
              <div className={styles.category_container}>
                <div className={styles.event_category}>Games</div>
              </div>
            </div>
          </div>
          <div className={styles.body_section_container}>
            <img
              className={styles.event_image}
              alt="event Image"
              src="https://ecs7.tokopedia.net/blog-tokopedia-com/uploads/2021/10/Mengenal-Tim-Spirit-Tim-Underdog-Dota-2-yang-Pertama-Kali-Ikut-Kejuaraan-The-International-10-TI-10.jpg"
            />
            <div className={styles.content_container}>
              <div className={styles.event_detail_left_container}>
                <div className={styles.event_detail_title_container}>
                  <h5 className={styles.event_detail_title}>
                    The International 10: Team Spirit "The Black Horse"
                  </h5>
                </div>
                <p className={styles.event_detail_description}>
                  It's official : Team Spirit are the Dota 2 World Champions.
                  <br />
                  The Russian squad lifted the Aegis of Champions at The
                  International 10 after defeating PSG.LGD 3-2.
                  <br />
                  But just how did this Cinderella story come to fruition?
                  <br />
                  It seems hard to believe now that Team Spirit nearly didn't
                  even make it to The International 10 after failing to secure
                  enough Dota Pro Circuit points during the regular season. The
                  team then found themselves down 2-1 in the finals of the open
                  qualifiers, just one game away from never making it. Now they
                  are the champions.
                  <br />
                  The event did not get off to a great start for Team Spirit as
                  they struggled to find their feet and ended the first day of
                  the Group Stage 0-2, losing to both Vici Gaming and Team
                  Secret, both of whom they went on to knockout during their
                  lower bracket However, Spirit eventually turned it around and
                  managed to get into the upper bracket, with a score of 10-6.
                </p>
              </div>
              <div className={styles.event_detail_right_container}>
                <div className={styles.profile_container}>
                  <div className={styles.profile_picture_container}>
                    <img
                      className={styles.event_detail_profile_picture}
                      alt="Profile Picture"
                      src={Profile}
                    />
                  </div>
                  <div className={styles.event_detail_creator}>
                    <span className={styles.created_by}>Created by</span>
                    <span className={styles.author_name}>Hamdani Abdullah</span>
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
        {/* Bagian Comment */}
        <div className={styles.comments_container}>
          COMMEN DISINI
          <div className={styles.comment_submit}>
            <Comment />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default EventDetail;
