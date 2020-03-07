import React from "react";
import "./stylesheet/style.scss";


function Newsletter(){
  return (
    <div>
      <h4 className="newsletter_header">newsletter</h4>
      <div className="newsletter_container">
        <span>
          <img
            className="newsletter_img"
            src="https://ph-files.imgix.net/742f9303-ea31-4ab8-89fa-664e6be69029?auto=format&auto=compress&codec=mozjpeg&cs=strip"
            alt="subscribe"
          />
          <h4 className="newsletter_subheader">
            Remote teams, this is for you
          </h4>
        </span>
        <div className="newsletter_subscribe_container">
          <p className="subscribe_quote">
            Get the best new products in your inbox, every day
            <span role="img" aria-label="jsx-a11y/accessible-emoji">
              👇
            </span>
          </p>
          <input className="subscribe_input" placeholder="Your email" />
          <button className="subscribe">subscribe</button>
        </div>
      </div>
    </div>
  )
}

export default Newsletter;
