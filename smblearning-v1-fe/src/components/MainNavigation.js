import React from "react";

import Logo from "../assets/pngs/smartbukites-logo.png";

import "./MainNavigation.css";

function MainNavigation(props) {
  return (
    <header className="main-navigation">
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={props.openDrawer}
        className="mr-5"
      >
        <path
          d="M20 5V2H0V5H20ZM20 11V8H0V11H20ZM20 17V14H0V17H20Z"
          fill="#38b6ff"
        />
      </svg>

      <img src={Logo} alt="smartbukite" />
    </header>
  );
}

export default MainNavigation;
