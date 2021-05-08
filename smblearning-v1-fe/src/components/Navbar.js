import React from "react";

import Logo from "../assets/pngs/smartbukites-logo.png";

import "./Navbar.css";

function Navbar() {
  return (
    <nav class="navbar navbar-light bg-white fixed">
      <a class="navbar-brand" href="#">
        <img src={Logo} alt="" loading="lazy" />
      </a>

      {/* <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Home <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Features
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Pricing
            </a>
          </li>
        </ul>
      </div> */}
    </nav>
  );
}

export default Navbar;
