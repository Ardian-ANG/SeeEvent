import "./../../Styling/ButtonSearch.css";

const ButtonSearch = (props) => {
  return (
    <div>
      <button type="button" className="btn-src btn">
        {props.name}
      </button>
    </div>
  );
};

export default ButtonSearch;

// style={props.style}
