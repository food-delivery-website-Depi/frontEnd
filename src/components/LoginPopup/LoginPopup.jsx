import { useState } from "react";
import "./loginPopup.css";
import { assets } from "../../assets/frontend_assets/assets";
import PropTypes from "prop-types";

const LoginPopup = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("Login");

  return (
    <div className="login-popup">
      <form className="login-popup login-popup-container">
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img
            src={assets.cross_icon}
            onClick={() => setShowLogin(false)}
            alt=""
          />
        </div>
        <div className="login-popup-inputs">
          {currentState === "Login" ? (
            <> </>
          ) : (
            <input type="text" placeholder="Your Name" required />
          )}
          <input type="email" placeholder="Your Email" required />
          <input type="password" placeholder="Password" required />
        </div>
        <button>
          {currentState === "Sign Up" ? "Create Account" : "Login"}
        </button>
        <div className="login-popup-condition">
          {currentState === "Sign Up" ? (
            <>
              {" "}
              <input type="checkbox" required />{" "}
              <p>I agree to the terms and conditions</p>
            </>
          ) : (
            <> </>
          )}{" "}
          <></>
        </div>
        {currentState === "Login" ? (
          <p>
            Create a New Foodie Account{" "}
            <span onClick={() => setCurrentState("Sign Up")}>Click here</span>{" "}
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrentState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};
LoginPopup.propTypes = {
  setShowLogin: PropTypes.func.isRequired,
};

export default LoginPopup;
