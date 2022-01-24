import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./Pages/Home/Home";
import SignUp from "./Pages/SignUp/SingUp";
import SignIn from "./Pages/SignIn/SignIn";
import SearchPage from "./Pages/Search/SearchPage";
import EventDetail from "./Pages/Event/EventDetail";
import CreateEvent from "./Pages/Event/CreateEvent";
// import Search from './Components/Search';
// import ButtonSearch from './Components/ButtonSearch';
// import { PrivateRoute } from './Components/Route/PrivateRoute';
// import { useSelector } from 'react-redux';
import Profile from "./Pages/ProfilePage/Profile";
import Error from "./Pages/Error/Error";

function App() {
//    const userLogin = useSelector(state => state.userLogin);
//   const { userInfo } = userLogin;
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/event" element={<EventDetail />} />
        <Route path="/createEvent" element={<CreateEvent />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}
export default App;
