import search from "./../../Assets/icons/search.png";
import style from "./../../Styling/Search.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {searchEvent} from './../../Redux/Action/eventsAction';


const Search = () => {

   const navigate = useNavigate();
   const dispatch = useDispatch();
   const [keyword, setKeyword] = useState();
   console.log(keyword)

   const handleClick = (e, keyword) => {
      e.preventDefault();
      dispatch(searchEvent(keyword));
      navigate("/search");
    };


  return (
    <div className={`${style.search} d-flex align-items-center p-2 bg-light`}>
      <div className={style.logoWrapper}>
        <img className={style.searchIcon} src={search} alt="search-icon" />
      </div>
      <div className={style.inputWrapper}>
        <form className="form-input d-flex align-items-center">
          <input
            className={`${style.input} form-control mx-2 px-0 bg-light`}
            type="search"
            placeholder="Search events"
            aria-label="Search"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </form>
      </div>
      <div className={`${style.buttonWrapper} d-flex justify-content-end`}>
        <button
          type="submit"
          className={style.buttonSrc}
          onClick={(e) => {
            handleClick(e, keyword);
          }}
        >
          <span>Search</span>
        </button>
      </div>
    </div>
  );
};

export default Search;
