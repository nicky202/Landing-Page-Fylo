import "./comments.scss";

/* imported images ------ */
import profile1 from "../../../assets/profile-1.jpg";
import profile2 from "../../../assets/profile-2.jpg";
import profile3 from "../../../assets/profile-3.jpg";
import quotes from "../../../assets/bg-quotes.png";

const Comments = () => {
  return (
    <>
      <div className="commentsSection flex">
        <div className="quotes">
          <img src={quotes} alt="quotes" />
        </div>
        <div className="cardComment flex">
          <div className="comment">
            <p>
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
          </div>
          <div className="profile flex">
            <div className="image">
              <img src={profile1} alt="profile" />
            </div>
            <div className="details">
              <p className="name">Satish Patel</p>
              <p className="function">Founder & CEO, Huddle</p>
            </div>
          </div>
        </div>

        <div className="cardComment flex">
          <div className="comment">
            <p>
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
          </div>
          <div className="profile flex">
            <div className="image">
              <img src={profile2} alt="profile" />
            </div>
            <div className="details">
              <p className="name">Bruce McKenzie</p>
              <p className="function">Founder & CEO, Huddle</p>
            </div>
          </div>
        </div>

        <div className="cardComment flex">
          <div className="comment">
            <p>
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
          </div>
          <div className="profile flex">
            <div className="image">
              <img src={profile3} alt="profile" />
            </div>
            <div className="details">
              <p className="name">Iva Boyd </p>
              <p className="function">Founder & CEO, Huddle</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comments;
