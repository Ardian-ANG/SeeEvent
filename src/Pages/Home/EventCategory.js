import { searchCategory } from "../../Redux/Action/eventsAction";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import styles from "./../../Styling/EventCategory.module.css";

const EventCategory = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = (e, category) => {
    e.preventDefault();
    dispatch(searchCategory(category));
    navigate("/search");
  };
  return (
    <div className={styles.main_container}>
      <div className={styles.wrapper_container}>
        <div className={styles.category_header}>
          <h3 className={styles.content_header}>Explore Event by Category</h3>
        </div>
        <div className={styles.top_button}>
          <button
            className={styles.first_button}
            onClick={(e) => {
              handleClick(e, "Business");
            }}
          >
            <span className={styles.first_category}>Business</span>
          </button>
          <button
            className={styles.second_button}
            onClick={(e) => {
              handleClick(e, "Design");
            }}
          >
            <span className={styles.second_category}>Design</span>
          </button>
          <button
            className={styles.third_button}
            onClick={(e) => {
              handleClick(e, "Development");
            }}
          >
            <span className={styles.third_category}>Development</span>
          </button>
          <button
            className={styles.fourth_button}
            onClick={(e) => {
              handleClick(e, "Lifestyle");
            }}
          >
            <span className={styles.fourth_category}>Lifestyle</span>
          </button>
        </div>
        <div className={styles.bot_button}>
          <button
            className={styles.fifth_button}
            onClick={(e) => {
              handleClick(e, "Marketing");
            }}
          >
            <span className={styles.fifth_category}>Marketing</span>
          </button>
          <button
            className={styles.sixth_button}
            onClick={(e) => {
              handleClick(e, "Music");
            }}
          >
            <span className={styles.sixth_category}>Music</span>
          </button>
          <button
            className={styles.sevent_button}
            onClick={(e) => {
              handleClick(e, "Photography");
            }}
          >
            <span className={styles.seventh_category}>Photography</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default EventCategory;
