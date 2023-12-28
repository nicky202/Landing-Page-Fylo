import "./container.scss";

import Advantages from "./advantages/advantages";
import Comments from "./comments/comments";
import InputMail from "./inputMail/inputMail";

/* imported images -------- */
import bgCurvy from "../../assets/bg-curvy-desktop.svg";
import bgCurvy2 from "../../assets/bg-curvy-mobile.svg";
import img from "../../assets/illustration-stay-productive.png";
import arrow from "../../assets/icon-arrow.svg";

const Container = () => {
  return (
    <>
      <div className="containerSection flex">
        <div className="curvy-desktop">
          <img src={bgCurvy} alt="bg curvy-desktop" />
        </div>
        <div className="curvy-mobile">
          <img src={bgCurvy2} alt="bg curvy-mobile" />
        </div>
        <Advantages />
        <div className="productiveSection flex">
          <div className="image">
            <img src={img} alt="illustration-stay-productive" />
          </div>
          <div className="flex">
            <h1>Stay productive, wherever you are</h1>
            <p>
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your file storage needs.
            </p>
            <p>
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </p>
            <a href="" className="link flex">
              See how Fylo works
              <img src={arrow} alt="arrow" />
            </a>
          </div>
        </div>
        <Comments />
        <InputMail />
      </div>
    </>
  );
};

export default Container;
