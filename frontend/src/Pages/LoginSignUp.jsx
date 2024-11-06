import React from "react";
import "../Scss/Pages/LoginSignUp.scss";

const LoginSignUp = () => {
  return (
    <div className="LoginSignUp">
      <div className="LoginSignUp-container">
        <h1>Sign Up</h1>
        <form className="LoginSignUp-fields">
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign Up</button>
        </form>
        <p className="LoginSignUp-login">
          Already have an account? <span>Log in</span>
        </p>
        <div className="LoginSignUp-agree">
          <input type="checkbox" name="agree" id="agree" />
          <p>By continuing, i agree to the terms of use & privicy policy.</p>
        </div>
      </div>
    </div>
  );
};
export default LoginSignUp;
