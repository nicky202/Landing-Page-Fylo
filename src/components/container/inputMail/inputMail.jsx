import { useState } from "react";
import "./inputMail.scss";

const InputMail = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");

  const handleValidation = () => {
    const regEmail = /^([a-z\d-]+)@([a-z\d-]+)\.([a-z]{2,8})$/;
    if (regEmail.test(email)) {
      setError(false);
      document.querySelector(".error").style.display = "none";
    } else {
      setError(true);
      document.querySelector(".error").style.display = "block";
    }
  };
  console.log(error);

  return (
    <div className="inputMailSection flex">
      <div className="card flex">
        <h1>Get early access today</h1>
        <p>
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
        <div className="inputDiv flex">
          <div className="input">
            <input
              type="text"
              placeholder="email@example.com"
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className="error">Please enter a valid email address</span>
          </div>
          <button onClick={handleValidation}>Get Started For Free</button>
        </div>
      </div>
    </div>
  );
};

export default InputMail;
