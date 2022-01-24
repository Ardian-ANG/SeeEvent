import styles from "./../../Styling/ErrorPage.module.css";

const ErrorPage = () => {
  return (
    <div className={styles.error_container}>
      <h1 className={styles.error_h1}>404</h1>
      <p className={styles.error_text}>Oops! Something is wrong.</p>
      <a className={styles.error_button} href="#">
        We Cannot find the Destination. Go back?
      </a>
    </div>
  );
};
export default ErrorPage;
