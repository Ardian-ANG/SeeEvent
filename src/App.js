import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./Pages/Home/Home";
import Navbar from "./Components/NavBar/Header/Navbar";
import SignUp from "./Pages/SignUp/SingUp";
import SignIn from "./Pages/SignIn/SignIn";
import Comment from "./Pages/Event/Comment";
import Footer from "./Components/NavBar/Footer/Footer";
import SearchPage from "./Pages/Search/SearchPage";
import SearchBar from "./Components/ShareComponent/SearchBar";
import DesignEvent from "./Pages/Home/DesignEvent";
import AttendEvent from "./Pages/Home/AttendEvent";
import EventCategory from "./Pages/Home/EventCategory";
import ErrorPage from "./Pages/Error/Error";
import Search from "./Components/ShareComponent/Search";
import Footer from "./Components/NavBar/Footer/Footer";
import EventDetail from "./Pages/Event/EventDetail";
import CreateEvent from "./Pages/Event/CreateEvent";
// import Search from './Components/Search';
// import ButtonSearch from './Components/ButtonSearch';

function App() {
   return (
      <div>
         <BrowserRouter>
         <Navbar />
         <SearchBar/>
         <SearchPage />
         <Routes>
               <Route path="/signUp" element={<SignUp />} />
               <Route path="/signIn" element={<SignIn />} />
               <Route path="/" element={<Home />} />
            </Routes>
         <Comment/>
         <CreateEvent />
         <DesignEvent />
         <EventCategory />
         <AttendEvent />
         <EventDetail />
         <ErrorPage />
         <Search/>

         <Footer />
         </BrowserRouter>
      </div>
   );
}
export default App;
