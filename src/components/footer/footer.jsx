import "./footer.scss";

/* imported images ------- */
import logo from "../../assets/logo.svg";
import tel from "../../assets/icon-phone.svg";
import mail from "../../assets/icon-email.svg";
import location from "../../assets/icon-location.svg";
import facebook from "../../assets/icon-facebook.svg";
import twitter from "../../assets/icon-twitter.svg";
import instagram from "../../assets/icon-instagram.svg";

const Footer = () => {
  return (
    <>
      <div className="footerSection flex">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="footerContainer flex">
          <div className="location flex">
            <img src={location} alt="icon-location" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
          <ul className="contacts">
            <li className=" flex">
              <img src={tel} alt="phone" />
              +1-543-123-4567
            </li>
            <li className="flex">
              <img src={mail} alt="mail" />
              example@fylo.com
            </li>
          </ul>
          <ul className="others">
            <li>About Us</li>
            <li>Jobs</li>
            <li>Press</li>
            <li>Blog</li>
          </ul>
          <ul className="others">
            <li>Contact Us</li>
            <li>Terms</li>
            <li>Privacy</li>
          </ul>
          <ul className="socialMedia">
            <li>
              <img src={facebook} alt="icon facebook" />
            </li>
            <li>
              <img src={twitter} alt="icon twitter" />
            </li>
            <li>
              <img src={instagram} alt="icon instagram" />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
