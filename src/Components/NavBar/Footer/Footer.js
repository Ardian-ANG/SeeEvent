import LogoMain from "./../../../Assets/logos/LogoMain.png";
import FacebookRound from "./../../../Assets/icons/FacebookRound.png";
import Instagram from "./../../../Assets/icons/Instagram.png";
import Twitter from "./../../../Assets/icons/Twitter.png";
import Youtube from "./../../../Assets/icons/Youtube.png";
import style from "./../../../Styling/Footer.module.css";

const Footer = () => {
  return (
    <div className={`${style.footer} d-flex flex-column gap-4`}>
      <div className={`${style.footer_content} row`}>
        <div className={`${style.footer_left} text-start col-4`}>
          <div className={style.footer_logo}>
            <img src={LogoMain} alt="SeeEvent" />
          </div>
          <div className={style.footer_caption}>
            SeeEvent is a platform where you can create or find an amazing
            events around the world
          </div>
          <div>
            <div className={style.follow_us}>Follow Us on</div>
            <div
              className={`${style.social_media} d-flex justify-content-between`}
            >
              <a href="#">
                <img src={FacebookRound} alt="Facebook" />
              </a>
              <a href="#">
                <img src={Instagram} alt="Instagram" />
              </a>
              <a href="#">
                <img src={Twitter} alt="Twitter" />
              </a>
              <a href="#">
                <img src={Youtube} alt="Youtube" />
              </a>
            </div>
          </div>
        </div>
        <div
          className={`${style.footer_right} col-8 d-flex flex-row text-start mx-auto`}
        >
          <div className={style.links}>
            <div>Links</div>
            <div className={style.link_list}>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Explore</a>
                </li>
                <li>
                  <a href="#">My Events</a>
                </li>
                <li>
                  <a href="#">Bookmark</a>
                </li>
              </ul>
            </div>
          </div>
          <div className={style.top_categories}>
            <div>Top Categories</div>
            <div className={style.link_categories}>
              <ul>
                <li>
                  <a href="#">Design</a>
                </li>
                <li>
                  <a href="#">Photography</a>
                </li>
                <li>
                  <a href="#">Development</a>
                </li>
                <li>
                  <a href="#">Marketing</a>
                </li>
              </ul>
            </div>
          </div>
          <div className={style.contact_us}>
            <div>Contact Us</div>
            <div className={style.address}>
              <p>Indonesia</p>
              <p>Jl. Planet Namek No.123, Surabaya</p>
              <p>Telp: 083849420146</p>
              <p>Email: johndoe@seevent.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className={`${style.copy_right} d-flex row align-items-start`}>
        <div className={`${style.copy_right_capt} col-6 text-start`}>
          ⓒ 2022 SeeEvent All rights reserved.
        </div>
        <div className={`${style.terms} col-6 text-end`}>
          <div className={style.terms_cond}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Helps</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
