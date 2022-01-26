import styles from "./../../Styling/CreateEvent.module.css";
import Default from "./../../Assets/img/create event default.png";
import Upload from "./../../Assets/icons/upload.png";
import Calender from "./../../Assets/icons/calendar.png";
import NavBar from "../../Components/NavBar/Header/Navbar";
import Footer from "../../Components/NavBar/Footer/Footer";

const CreateEvent = () => {
  return (
    <>
      <NavBar />
      <div className={styles.main_container}>
        <div className={styles.wrapper_container}>
          <div className={styles.title_container}>
            <h3 className={styles.title}>Create a New Event</h3>
          </div>
          <div className={styles.image_container}>
            <img src={Default} alt="Default Pciture" />
          </div>
          <div className={styles.upload_container}>
            <button className={styles.upload}>
              <img
                src={Upload}
                className={styles.upload_icon}
                alt="Upload Button"
              />
              <span className={styles.upload_text}>Upload Image</span>
            </button>
          </div>
          <div className={styles.input_container}>
            <input
              className={styles.title_input}
              required
              placeholder="Title"
            ></input>
            <div className={styles.date_container}>
              <input
                className={styles.date_input}
                required
                placeholder="Date and Time"
              ></input>
              <img
                className={styles.date_icon}
                src={Calender}
                alt="Calender Icon"
              />
            </div>

            <div className={styles.category_container}>
              <select
                class="form-control"
                id="floatingSelect"
                aria-label="Floating label select example"
                required
              >
                <option disabled selected value>
                  Select Category
                </option>
                <option value="Business">Business</option>
                <option value="Design">Design</option>
                <option value="Development">Development</option>
                <option value="Lifestyle">Lifestyle</option>
                <option value="MArketing">Marketing</option>
                <option value="Music">Music</option>
                <option value="Photography">Photography</option>
              </select>
            </div>
            <input className={styles.detail_input} required />
          </div>
          <div className={styles.bottom_container}>
            <button className={styles.create_button} type="submit">
              Create
            </button>
          </div>
          <div className={styles.link_container}>
            <a className={styles.help_link} href={"/"} target="#blank">
              Having an Issue When Creatin New Event?
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default CreateEvent;
