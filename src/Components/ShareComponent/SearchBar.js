import search from './../../Assets/icons/search.png';
import style from './../../Styling/SearchBar.module.css'

const SearchBar = () => {
   return(
      <div className={`${style.search} d-flex align-items-center p-2 bg-light`}>
         
            <div className={style.logoWrapper}>
               <img className={style.searchIcon} src={search} alt="search-icon"/>
            </div>
            <div className={style.inputWrapper}>
               <form className="form-input d-flex align-items-center">
                  <input
                     className={`${style.input} form-control mx-2 px-0 bg-light`} 
                     style={{border:"none" }}
                     type="search" 
                     placeholder="Search events" 
                     aria-label="Search"
               />
               </form>
            </div>
      </div>
   )
}

export default SearchBar