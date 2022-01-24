import style from "./../../Styling/SearchPage.module.css";
import Pagination from "./Pagination";
import NotFind from "./NotFound";
import Navbar from "../../Components/NavBar/Header/Navbar";
import Footer from "../../Components/NavBar/Footer/Footer";

const SearchPage = () => {
  return (
    <>
      <Navbar />
      <div className={`${style.search_container} d-flex bd-highlight`}>
        <div className={`${style.page_wrapper} d-flex flex-column`}>
          <div className="result_caption">Showing 68 results for "How to"</div>
          <div className={`${style.search_filter} d-flex flex-row py-4`}>
            <div className={`${style.filter_by} form-floating me-4`}>
              <select
                className="form-select"
                id="floatingSelect"
                aria-label="Floating label select example"
              >
                <option selected>Open this select menu</option>
                <option value="1">All Time</option>
                <option value="2">Today</option>
                <option value="3">Tomorrow</option>
                <option value="3">This Week</option>
                <option value="3">This Month</option>
                <option value="3">This Year</option>
              </select>
              <label for="floatingSelect">Filter By Date</label>
            </div>
            <div className={`${style.filter_by} form-floating me-4`}>
              <select
                className="form-select"
                id="floatingSelect"
                aria-label="Floating label select example"
              >
                <option selected>Open this select menu</option>
                <option value="1">All Categories</option>
                <option value="2">Photography</option>
                <option value="3">Desain</option>
                <option value="3">Development</option>
                <option value="3">Marketing</option>
                <option value="3">Bussiness</option>
                <option value="3">Lifestyle</option>
                <option value="3">Music</option>
              </select>
              <label for="floatingSelect">Filter By Category</label>
            </div>
            <div className={`${style.filter_by} form-floating me-4`}>
              <select
                className="form-select"
                id="floatingSelect"
                aria-label="Floating label select example"
              >
                <option selected>Open this select menu</option>
                <option value="1">Date</option>
                <option value="2">Name</option>
              </select>
              <label for="floatingSelect">Sorting By</label>
            </div>
          </div>
          <Pagination />
          <NotFind />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SearchPage;
