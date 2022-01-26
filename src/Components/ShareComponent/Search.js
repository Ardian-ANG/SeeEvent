import search from "./../../Assets/icons/search.png";
import style from "./../../Styling/Search.module.css";
import {useState, useEffect} from 'react';
import { useDispatch } from "react-redux";
// import axios from 'axios';
import { useNavigate } from "react-router-dom";
import {searchEvents} from './../../Redux/Action/eventsAction';


const Search = () => {

   // const keywordRef = useRef();
   const navigate = useNavigate();
   const dispatch = useDispatch();
   // const submitData = (e)=>{
   //    e.preventDefault();
   //    const keyword = keywordRef.current.value;
   //    console.log(keyword);
   // }
   const [keyword, setKeyword] = useState();
   console.log(keyword)

   // const handleChange=(e, value)=>{
   //    e.preventDefault();
   //    setKeyword(e.target.value);
   // }
   const handleClick = (e, keyword) => {
      e.preventDefault();
      dispatch(searchEvents(keyword));
      navigate("/search");
    };

   // useEffect(()=>{
   //       axios
   //          .get(
   //             `https://team-b-see-event.herokuapp.com/api/v1/event?keyword=${keyword}`
   //          )
   //          .then((res)=>{
   //             console.log(res.data.result)
   //          })
   
   // },[keyword])


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
               onChange={(e)=>setKeyword(e.target.value)}
            />
         </form>
         </div>
         <div className={`${style.buttonWrapper} d-flex justify-content-end`}>
         <button type="submit" className={style.buttonSrc} onClick={(e) => {handleClick(e, keyword)}}>
            <span>Search</span>
         </button>
         </div>
      </div>
   );
};

export default Search;
