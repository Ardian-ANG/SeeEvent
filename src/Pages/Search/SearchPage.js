import style from "./../../Styling/SearchPage.module.css";
import Pagination from "./Pagination";
import NotFind from "./NotFound";
import Navbar from "../../Components/NavBar/Header/Navbar";
import Footer from "../../Components/NavBar/Footer/Footer";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {searchCategory, getEvents, searchEvent, filterByDate, sortBy} from "../../Redux/Action/eventsAction";

const SearchPage = () => {
  const dispatch = useDispatch();
  const { events, category, searchEvents, categoryEvents, dateEvents, sortEvents } =
    useSelector((data) => data.getEventsReducer);
  const [select, setSelect] = useState("All Categories");
  const [filter, setFilter] = useState("All Time");
  const [sort, setSort] = useState("Date");

  //
  // console.log(dispatch(searchCategory(category)));
  useEffect(() => {
    dispatch(getEvents(events));
    console.log(category);
    if (category) {
      setSelect(category);
      dispatch(searchCategory(category));
    } else if (dateEvents) {
      setFilter(filter)
      dispatch(filterByDate(dateEvents));
    } else if (sortEvents) {
      setSort(sort)
      dispatch(sortBy(sortEvents));
    } else if (searchEvents) {
      dispatch(searchEvent(searchEvents));
    }
  }, []);

  useEffect(() => {
    console.log(categoryEvents);
  }, [categoryEvents]);

  useEffect(() => {
   console.log(dateEvents);
 }, [dateEvents]);

 useEffect(() => {
   console.log(sortEvents);
 }, [sortEvents]);

 useEffect(() => {
   console.log(searchEvents);
 }, [searchEvents]);

 if(categoryEvents){
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
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                >
                  {/* <option selected>Open this select menu</option> */}
                  <option value="All Time">All Time</option>
                  <option value="Today">Today</option>
                  <option value="Tomorrow">Tomorrow</option>
                  <option value="This Week">This Week</option>
                  <option value="This Month">This Month</option>
                  <option value="This Year">This Year</option>
                </select>
                <label htmlFor="floatingSelect">Filter By Date</label>
              </div>
              <div className={`${style.filter_by} form-floating me-4`}>
                <select
                  className="form-select"
                  id="floatingSelect"
                  aria-label="Floating label select example"
                  value={select}
                  onChange={(e) => setSelect(e.target.value)}
                >
                  {/* <option selected>Open this select menu</option> */}
                  <option value="All Categories">All Categories</option>
                  <option value="Photography">Photography</option>
                  <option value="Design">Design</option>
                  <option value="Development">Development</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Business">Business</option>
                  <option value="Lifestyle">Lifestyle</option>
                  <option value="Music">Music</option>
                </select>
                <label htmlFor="floatingSelect">Filter By Category</label>
              </div>
              <div className={`${style.filter_by} form-floating me-4`}>
                <select
                  className="form-select"
                  id="floatingSelect"
                  aria-label="Floating label select example"
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                >
                  {/* <option selected>Open this select menu</option> */}
                  <option value="Date">Date</option>
                  <option value="Name">Name</option>
                </select>
                <label htmlFor="floatingSelect">Sorting By</label>
              </div>
            </div>
            <div className={`${style.result_filter} d-flex justify-content-between gap-4 mt-4`}>
              {categoryEvents.map((event) => {
                return (
                  <Pagination
                    key={event.id}
                    image={event.image}
                    category={event.category?.name}
                    date={event.datetime}
                    title={event.title}
                    createdBy={event.createdBy?.first_name}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
 }else if (dateEvents){
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
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                >
                  {/* <option selected>Open this select menu</option> */}
                  <option value="All Time">All Time</option>
                  <option value="Today">Today</option>
                  <option value="Tomorrow">Tomorrow</option>
                  <option value="This Week">This Week</option>
                  <option value="This Month">This Month</option>
                  <option value="This Year">This Year</option>
                </select>
                <label htmlFor="floatingSelect">Filter By Date</label>
              </div>
              <div className={`${style.filter_by} form-floating me-4`}>
                <select
                  className="form-select"
                  id="floatingSelect"
                  aria-label="Floating label select example"
                  value={select}
                  onChange={(e) => setSelect(e.target.value)}
                >
                  {/* <option selected>Open this select menu</option> */}
                  <option value="All Categories">All Categories</option>
                  <option value="Photography">Photography</option>
                  <option value="Design">Design</option>
                  <option value="Development">Development</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Business">Business</option>
                  <option value="Lifestyle">Lifestyle</option>
                  <option value="Music">Music</option>
                </select>
                <label htmlFor="floatingSelect">Filter By Category</label>
              </div>
              <div className={`${style.filter_by} form-floating me-4`}>
                <select
                  className="form-select"
                  id="floatingSelect"
                  aria-label="Floating label select example"
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                >
                  {/* <option selected>Open this select menu</option> */}
                  <option value="Date">Date</option>
                  <option value="Name">Name</option>
                </select>
                <label htmlFor="floatingSelect">Sorting By</label>
              </div>
            </div>
            <div className={`${style.result_filter} d-flex justify-content-between gap-4 mt-4`}>
              {dateEvents.map((event) => {
                return (
                  <Pagination
                    key={event.id}
                    image={event.image}
                    category={event.category?.name}
                    date={event.datetime}
                    title={event.title}
                    createdBy={event.createdBy?.first_name}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
}else if(sortEvents){
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
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                >
                  {/* <option selected>Open this select menu</option> */}
                  <option value="All Time">All Time</option>
                  <option value="Today">Today</option>
                  <option value="Tomorrow">Tomorrow</option>
                  <option value="This Week">This Week</option>
                  <option value="This Month">This Month</option>
                  <option value="This Year">This Year</option>
                </select>
                <label htmlFor="floatingSelect">Filter By Date</label>
              </div>
              <div className={`${style.filter_by} form-floating me-4`}>
                <select
                  className="form-select"
                  id="floatingSelect"
                  aria-label="Floating label select example"
                  value={select}
                  onChange={(e) => setSelect(e.target.value)}
                >
                  {/* <option selected>Open this select menu</option> */}
                  <option value="All Categories">All Categories</option>
                  <option value="Photography">Photography</option>
                  <option value="Design">Design</option>
                  <option value="Development">Development</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Business">Business</option>
                  <option value="Lifestyle">Lifestyle</option>
                  <option value="Music">Music</option>
                </select>
                <label htmlFor="floatingSelect">Filter By Category</label>
              </div>
              <div className={`${style.filter_by} form-floating me-4`}>
                <select
                  className="form-select"
                  id="floatingSelect"
                  aria-label="Floating label select example"
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                >
                  {/* <option selected>Open this select menu</option> */}
                  <option value="Date">Date</option>
                  <option value="Name">Name</option>
                </select>
                <label htmlFor="floatingSelect">Sorting By</label>
              </div>
            </div>
            <div className={`${style.result_filter} d-flex justify-content-between gap-4 mt-4`}>
              {sortEvents.map((event) => {
                return (
                  <Pagination
                    key={event.id}
                    image={event.image}
                    category={event.category?.name}
                    date={event.datetime}
                    title={event.title}
                    createdBy={event.createdBy?.first_name}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }else if(searchEvents){
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
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                >
                  {/* <option selected>Open this select menu</option> */}
                  <option value="All Time">All Time</option>
                  <option value="Today">Today</option>
                  <option value="Tomorrow">Tomorrow</option>
                  <option value="This Week">This Week</option>
                  <option value="This Month">This Month</option>
                  <option value="This Year">This Year</option>
                </select>
                <label htmlFor="floatingSelect">Filter By Date</label>
              </div>
              <div className={`${style.filter_by} form-floating me-4`}>
                <select
                  className="form-select"
                  id="floatingSelect"
                  aria-label="Floating label select example"
                  value={select}
                  onChange={(e) => setSelect(e.target.value)}
                >
                  {/* <option selected>Open this select menu</option> */}
                  <option value="All Categories">All Categories</option>
                  <option value="Photography">Photography</option>
                  <option value="Design">Design</option>
                  <option value="Development">Development</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Business">Business</option>
                  <option value="Lifestyle">Lifestyle</option>
                  <option value="Music">Music</option>
                </select>
                <label htmlFor="floatingSelect">Filter By Category</label>
              </div>
              <div className={`${style.filter_by} form-floating me-4`}>
                <select
                  className="form-select"
                  id="floatingSelect"
                  aria-label="Floating label select example"
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                >
                  {/* <option selected>Open this select menu</option> */}
                  <option value="Date">Date</option>
                  <option value="Name">Name</option>
                </select>
                <label htmlFor="floatingSelect">Sorting By</label>
              </div>
            </div>
            <div className={`${style.result_filter} d-flex justify-content-between gap-4 mt-4`}>
              {searchEvents.map((event) => {
                return (
                  <Pagination
                    key={event.id}
                    image={event.image}
                    category={event.category?.name}
                    date={event.datetime}
                    title={event.title}
                    createdBy={event.createdBy?.first_name}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }else{
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
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                >
                  {/* <option selected>Open this select menu</option> */}
                  <option value="All Time">All Time</option>
                  <option value="Today">Today</option>
                  <option value="Tomorrow">Tomorrow</option>
                  <option value="This Week">This Week</option>
                  <option value="This Month">This Month</option>
                  <option value="This Year">This Year</option>
                </select>
                <label htmlFor="floatingSelect">Filter By Date</label>
              </div>
              <div className={`${style.filter_by} form-floating me-4`}>
                <select
                  className="form-select"
                  id="floatingSelect"
                  aria-label="Floating label select example"
                  value={select}
                  onChange={(e) => setSelect(e.target.value)}
                >
                  {/* <option selected>Open this select menu</option> */}
                  <option value="All Categories">All Categories</option>
                  <option value="Photography">Photography</option>
                  <option value="Design">Design</option>
                  <option value="Development">Development</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Business">Business</option>
                  <option value="Lifestyle">Lifestyle</option>
                  <option value="Music">Music</option>
                </select>
                <label htmlFor="floatingSelect">Filter By Category</label>
              </div>
              <div className={`${style.filter_by} form-floating me-4`}>
                <select
                  className="form-select"
                  id="floatingSelect"
                  aria-label="Floating label select example"
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                >
                  {/* <option selected>Open this select menu</option> */}
                  <option value="Date">Date</option>
                  <option value="Name">Name</option>
                </select>
                <label htmlFor="floatingSelect">Sorting By</label>
              </div>
            </div>
            <NotFind />
          </div>
        </div>
        <Footer />
      </>
    );
  }
};

export default SearchPage;

