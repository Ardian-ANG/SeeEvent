import notFound from "./../../Assets/img/notFound.png";
import style from "./../../Styling/NotFound.module.css";

const NotFound = () => {
  return (
    <div
      className={`${style.not_found} d-flex flex-column py-4 mb-4 gap-5 text-center`}
    >
      <div>
        <img src={notFound} alt="not Found Bro" />
      </div>
      <div>Sorry we couldn't find any events for this search</div>
    </div>
  );
};

export default NotFound;
