import LogoMain from "./Assets/logos/LogoMain.png"
import FacebookRound from "./Assets/icons/FacebookRound.png"
import Instagram from "./Assets/icons/Instagram.png"
import Twitter from "./Assets/icons/Twitter.png"
import Youtube from "./Assets/icons/Youtube.png"

const Footer = () => {
   return( 
         <div className="d-flex flex-column p-2" style={{backgroundColor:"#214457"}}>
            <div className="row" style={{marginLeft:"108px", marginRight:"108px", marginTop:"49px", marginBottom:"48px"}}>
               <div className="footer-left text-start col-4">
                  <div className="footer-logo">
                     <img src={LogoMain} alt="SeeEvent" />
                  </div>
                  <div style={{margintop:"16px", marginBottom:"32px"}}>
                     SeeEvent is a platform where you can create or find an amazing events around the world
                  </div>
                  <div>
                     <div className="followUs">
                        Follow Us on
                     </div>
                     <div className="socialMedia d-flex justify-content-between" style={{width:"176px", height:"32px", marginTop:"8px"}}>
                        <img src={FacebookRound} alt="Facebook" />
                        <img src={Instagram} alt="Instagram" />
                        <img src={Twitter} alt="Twitter" />
                        <img src={Youtube} alt="Youtube" />
                     </div>
                  </div>
               </div>
               <div className="footer-right col-8 d-flex flex-row justify-content-evenly text-start">
                  <div className="links">
                     <div>
                        Links
                     </div>
                     <div>
                        <ul>
                           <li><a href="#">Home</a></li>
                           <li><a href="#">Explore</a></li>
                           <li><a href="#">My Events</a></li>
                           <li><a href="#">Bookmark</a></li>
                        </ul>
                     </div>
                  </div>
                  <div className="topCategories">
                  <div>
                        Top Categories
                     </div>
                     <div>
                        <ul>
                           <li><a href="#">Design</a></li>
                           <li><a href="#">Photography</a></li>
                           <li><a href="#">Development</a></li>
                           <li><a href="#">Marketing</a></li>
                        </ul>
                     </div>
                  </div>
                  <div className="contactUs">
                     <div>
                        Contact Us
                     </div>
                     <div>
                        <p>Indonesia</p>
                        <p>Jl. Planet Namek No.123, Surabaya</p>
                        <p>Telp: 083849420146</p>
                        <p>Email: johndoe@seevent.com</p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="row align-items-start" style={{marginLeft:"108px", marginRight:"108px", marginBottom:"48px"}}>
               <div className="col-6 text-start">
                  ⓒ 2022 SeeEvent All rights reserved.
               </div>
               <div className="col-6 text-end">
                  <div>
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