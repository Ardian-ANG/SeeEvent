import LogoMain from "./Assets/logos/LogoMain.png";
import FacebookRound from "./Assets/icons/FacebookRound.png";
import Instagram from "./Assets/icons/Instagram.png";
import Twitter from "./Assets/icons/Twitter.png";
import Youtube from "./Assets/icons/Youtube.png";
import "./Footer.css"

const Footer = () => {
   return( 
         <div className="footer d-flex flex-column p-2">
            <div className="footer-content row">
               <div className="footer-left text-start col-4">
                  <div className="footer-logo">
                     <img src={LogoMain} alt="SeeEvent"/>
                  </div>
                  <div className="footer-caption">
                     SeeEvent is a platform where you can create or find an amazing events around the world
                  </div>
                  <div>
                     <div className="follow-us">
                        Follow Us on
                     </div>
                     <div className="social-media d-flex justify-content-between">
                        <a href="#"><img src={FacebookRound} alt="Facebook"/></a>
                        <a href="#"><img src={Instagram} alt="Instagram"/></a>
                        <a href="#"><img src={Twitter} alt="Twitter"/></a>
                        <a href="#"><img src={Youtube} alt="Youtube"/></a>
                     </div>
                  </div>
               </div>
               <div className="footer-right col-8 d-flex flex-row text-start mx-auto">
                  <div className="links">
                     <div>
                        Links
                     </div>
                     <div className="link-list">
                        <ul>
                           <li><a href="#">Home</a></li>
                           <li><a href="#">Explore</a></li>
                           <li><a href="#">My Events</a></li>
                           <li><a href="#">Bookmark</a></li>
                        </ul>
                     </div>
                  </div>
                  <div className="top-categories">
                     <div>
                        Top Categories
                     </div>
                     <div className="link-categories">
                        <ul>
                           <li><a href="#">Design</a></li>
                           <li><a href="#">Photography</a></li>
                           <li><a href="#">Development</a></li>
                           <li><a href="#">Marketing</a></li>
                        </ul>
                     </div>
                  </div>
                  <div className="contact-us">
                     <div>
                        Contact Us
                     </div>
                     <div className="address">
                        <p>Indonesia</p>
                        <p>Jl. Planet Namek No.123, Surabaya</p>
                        <p>Telp: 083849420146</p>
                        <p>Email: johndoe@seevent.com</p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="copy-right row align-items-start">
               <div className="copy-right-capt col-6 text-start">
                  ⓒ 2022 SeeEvent All rights reserved.
               </div>
               <div className="terms col-6">
                  <div className="terms-cond">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                        <a href="#">Helps</a>
                  </div>
               </div>
            </div>
         </div>
   )
}

export default Footer;