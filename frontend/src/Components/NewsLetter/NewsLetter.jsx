import React from "react";
import "./NewsLetter.scss";

const NewsLetter = () => {
  return (
    <div className="newsletter">
      <h1>Get exclusive offers on your E-mail.</h1>
      <p>Subscribe to our lewletter and stay updated.</p>
      <form action="post">
        <input type="email" placeholder="Your email id" />
        <button>Subscribe</button>
      </form>
    </div>
  );
};
export default NewsLetter;
