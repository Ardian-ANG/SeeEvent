import bgImg from "./../../Assets/img/banner.png";
import Search from "../../Components/ShareComponent/Search";
import styles from "./../../Styling/index.module.css";
import AttendEvent from "./AttendEvent";
import DesignEvent from "./DesignEvent";
import EventCategory from "./EventCategory";
import Footer from "../../Components/NavBar/Footer/Footer";
import Navbar from "../../Components/NavBar/Header/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div
        className={`container-fluid ${styles.banner}`}
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className={`container ${styles.banner_content}`}>
          <div
            className="textContent me-auto"
            style={{ width: "496px", height: "247px" }}
          >
            <h1 className={styles.title}>
              <span style={{ color: "#F2D555" }}>Create </span>or
              <span style={{ color: "#F2D555" }}> Find</span> <br />
              interesting
              <br />
              <span style={{ color: "#F2D555" }}>Events</span> around
              <br />
              The world
            </h1>
          </div>
          <Search />
        </div>
      </div>
      <DesignEvent />
      <EventCategory />
      <AttendEvent />
      <Footer />
    </>
  );
}
