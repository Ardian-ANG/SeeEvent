import search from './../Components/Assets/icons/search.png';
import './Search.css'

const Search = () => {
   return(
      <div className="search d-flex align-items-center p-2 bg-light">
         
            <div className="logo-wrapper">
               <img className="search-icon" src={search} alt="search-icon"/>
            </div>
            <div className="input-wrapper">
               <form className="form-input d-flex align-items-center">
                  <input 
                     className="form-control mx-2 px-0 bg-light" 
                     type="search" 
                     placeholder="Search events" 
                     aria-label="Search"
               />
               </form>
            </div>
            <div className="button-wrapper d-flex justify-content-end">
               <button type="button" className="button-src" >
                  <span>Search</span>
               </button>
            </div>
         
      </div>
   )
}

export default Search;