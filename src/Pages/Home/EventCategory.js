import styles from "./../../Styling/EventCategory.module.css";

const EventCategory = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.wrapper_container}>
        <div className={styles.category_header}>
          <h3 className={styles.content_header}>Explore Event by Category</h3>
        </div>
        <div className={styles.top_button}>
          <button className={styles.first_button}>
            <span className={styles.first_category}>Business</span>
          </button>
          <button className={styles.second_button}>
            <span className={styles.second_category}>Design</span>
          </button>
          <button className={styles.third_button}>
            <span className={styles.third_category}>Development</span>
          </button>
          <button className={styles.fourth_button}>
            <span className={styles.fourth_category}>Lifestyle</span>
          </button>
        </div>
        <div className={styles.bot_button}>
          <button className={styles.fifth_button}>
            <span className={styles.fifth_category}>Marketing</span>
          </button>
          <button className={styles.sixth_button}>
            <span className={styles.sixth_category}>Music</span>
          </button>
          <button className={styles.sevent_button}>
            <span className={styles.seventh_category}>Photography</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default EventCategory;
