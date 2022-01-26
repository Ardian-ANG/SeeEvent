import style from "./../../Styling/Pagination.module.css";
import moment from "moment";

const Pagination = (props) => {
  return (
    <div className={`${style.card_event} card`} key={props.id}>
      <img
        src={props.image}
        className={`${style.img_card} card-img-top`}
        alt="..."
      />
      <div className="card-body">
        <span className={`${style.badge} badge px-3 mb-3 text-dark fw-light`}>
          {props.category}
        </span>
        <p className="card-text">
          {moment(props.date).utc().format("ddd, MMM D @ hh:mm A z")}
        </p>
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text flex-end">
          <small className="text-muted">{`By ${props.createdBy}`}</small>
        </p>
      </div>
    </div>
  );
};

export default Pagination;
