import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import Search from "./Components/Search";
import Footer from "./Components/Footer";
import NavbarComp from "./Components/NavbarComp";
import "./App.css";
import Home from "./Components";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavbarComp />
        <Routes>
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/search" element={<Search />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;
