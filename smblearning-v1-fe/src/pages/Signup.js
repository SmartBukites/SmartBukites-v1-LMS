import React from "react";

import Navbar from "../components/Navbar";

import "./Signup.css";

function Signup() {
  return (
    <>
      <Navbar />
      <div className="signup">
        <div className="center">
          <h1>Welcome to SmartBukite Academy</h1>
          <p>Create an account to enjoy our unique services</p>

          <form>
            <div className="form-group mb-4">
              <label for="exampleInputName1">NAME</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputName1"
                aria-describedby="nameHelp"
                placeholder="Badiru Abubakar"
              />
            </div>
            <div className="form-group mb-4">
              <label for="exampleInputEmail1">EMAIL</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="username@domain.com"
              />
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">PASSWORD</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Enter your password"
              />
            </div>
            <div className="btn-holders text-right">
              {/* <button type="button" className="btn btn-link">
              Forget Password?
            </button> */}
              <button type="submit" className="btn btn-primary signup-btn">
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
