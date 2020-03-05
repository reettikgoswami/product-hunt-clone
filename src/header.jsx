import React from "react";
import ReactDom from "react-dom";
import "./stylesheet/header.scss";
let Header = props => {
  return (
    <div className="header">
      <div className="header_container">
        <div className="logo_searchbar_menu_wrapper">
          <div className="logo">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none" fillRule="evenodd">
                <path
                  d="M40 20c0 11.046-8.954 20-20 20S0 31.046 0 20 8.954 0 20 0s20 8.954 20 20"
                  fill="#DA552F"
                ></path>
                <path
                  d="M22.667 20H17v-6h5.667a3 3 0 0 1 0 6m0-10H13v20h4v-6h5.667a7 7 0 1 0 0-14"
                  fill="#FFF"
                ></path>
              </g>
            </svg>
          </div>

          <form className="search_form" action="">
            <span className="search_icon">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.383 10.347a5.796 5.796 0 1 1 .965-.964L15 14.036l-.964.964-4.653-4.653zm-3.588-.12a4.432 4.432 0 1 0 0-8.863 4.432 4.432 0 0 0 0 8.863z"
                  fill="#BBB"
                  fillRule="evenodd"
                ></path>
              </svg>
            </span>
            <div>
              <input
                autoComplete="off"
                className="search_input"
                data-test="search-input"
                name="q"
                placeholder="Discover your next favorite thing…"
              />
            </div>
          </form>
          <ul className="header_ul_flex">
            <li>Deals</li>
            <li>Jobs</li>
            <li>Makers</li>
            <li>Radio</li>
            <li>Ships</li>
            <li>
              <svg
                width="20"
                height="4"
                viewBox="0 0 20 4"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 4A2 2 0 1 0 2.001.001 2 2 0 0 0 2 4zm8 0a2 2 0 1 0 .001-3.999A2 2 0 0 0 10 4zm8 0a2 2 0 1 0 .001-3.999A2 2 0 0 0 18 4z"
                  fill="#BBB"
                  fillRule="evenodd"
                ></path>
              </svg>
            </li>
          </ul>
        </div>
        <div className="login_signup_container">
          <button className="btn login_btn">log in</button>
          <button className="btn sign_up_btn">sign up</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
