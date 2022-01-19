import Button from './Button'
import search from './../Components/Assets/icons/search.png';

const Search = () => {
   return(
      <div className="search d-flex align-items-center justify-content-end p-2 bg-light" style={{width:"704px", height:"56px", borderRadius:"99px"}}>
         <img className="search-icon" src={search} alt="search-icon" style={{width:"28px", height:"28px"}}/>
         <form className="d-flex align-items-center">
            <input 
               style={{width:"507px", height:"28px", fontSize:"20px", fontWeight:"400", border:"none"}}
               className="form-control mx-3 bg-light" 
               type="search" 
               placeholder="Search events" 
               aria-label="Search"
            />
            <Button 
               name="Search" 
               style={
                  {
                     width:"112px",
                     height:"40px",
                     backgroundColor:"#214457",
                     color:"white", 
                     borderRadius:"20px",
                     fontSize:"16px",
                     fontWeight:"700"
                  }
               }
            />
         </form>
      </div>
   )
}

export default Search;