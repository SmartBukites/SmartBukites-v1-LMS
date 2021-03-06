import React from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/pngs/smartbukites-logo.png";

import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-light bg-white fixed">
      <Link className="navbar-brand" to="/">
        <img src={Logo} alt="" loading="lazy" />
      </Link>
    </nav>
  );
}

export default Navbar;
