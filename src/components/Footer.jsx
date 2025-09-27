import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div id="footer">
      <div className="business-hours">
        <h3>Business Hours</h3>
        <p className="days">Monday: 11am - 9pm</p>
        <p className="days">Tuesday: 11am - 9pm</p>
        <p className="days">Wednesday: 11am - 9pm</p>
        <p className="days">Thursday: 11am - 9pm</p>
        <p className="days">Friday: 11am - 9pm</p>
        <p className="days">Saturday: 11am - 9pm</p>
        <p className="days">Sunday: 11am - 9pm</p>
      </div>
      <div className="links">
        <div className="media-links">
          <a href="https://www.instagram.com">
            <FaInstagram className="media-img"/>
          </a>
        </div>
        <div className="media-links">
          <a href="https://www.facebook.com">
            <FaFacebook className="media-img"/>
          </a>
        </div>
        <div className="media-links">
          <a href="https://www.facebook.com">
            <img src="../images/img.jpg" alt=""></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
