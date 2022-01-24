import { Link } from "react-router-dom";
import styles from "./../../Styling/ErrorPage.module.css";
import Navbar from "../../Components/NavBar/Header/Navbar";
import Footer from "../../Components/NavBar/Footer/Footer";
const ErrorPage = () => {
  return (
    <>
      <Navbar />
      <div className={styles.error_container}>
        <h1 className={styles.error_h1}>404</h1>
        <p className={styles.error_text}>Oops! Something is wrong.</p>
        <Link to="/" className={styles.error_button}>
          We Cannot find the Destination. Go back?
        </Link>
      </div>
      <Footer />
    </>
  );
};
export default ErrorPage;
