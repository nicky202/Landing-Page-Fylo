import "./header.scss";

/*imported images------------ */
import logo from "../../assets/logo.svg";
import intro from "../../assets/illustration-intro.png";

const Header = () => {
  return (
    <>
      <div className="headerSection flex">
        <div className="headerTop flex">
          <div className="logo">
            <img src={logo} alt="logo " />
          </div>
          <ul className="menu">
            <li className="menuItem">
              <a href="" className="menuLink">
                Features
              </a>
            </li>
            <li className="menuItem">
              <a href="" className="menuLink">
                Team
              </a>
            </li>
            <li className="menuItem">
              <a href="" className="menuLink">
                Sign In
              </a>
            </li>
          </ul>
        </div>
        <div className="headerBottom flex">
          <div className="imageHeader">
            <img src={intro} alt="intro" />
          </div>
          <h1>All your files in one secure location, accessible anywhere.</h1>
          <p>
            Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends
            family, and co-workers.
          </p>
          <button>Get Started</button>
        </div>
      </div>
    </>
  );
};

export default Header;
