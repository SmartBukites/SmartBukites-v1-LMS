import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "../axios";
import { setUserSession } from "../utils/Common";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { ReactComponent as Wait } from "../assets/svgs/loader.svg";

import "./Login.css";

function Login(props) {
  let history = useHistory();

  const [isError, setIsError] = useState(false);
  const [loader, setLoader] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // handle button click of login form
  const handleLogin = (event) => {
    event.preventDefault();
    setIsError(false);
    setLoader(true);

    axios
      .post("/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          console.log(response);
          setLoader(false);
          setUserSession(response.data.token);
          // setUserSession(response.data.token, response.data.user);
          history.push("/dashboard");
        } else {
          setIsError(true);
          setLoader(false);
        }
      })
      .catch((error) => {
        console.log(error);
        setLoader(false);
      });
  };

  return (
    <>
      <Navbar />
      <div className="login">
        <div className="center">
          <h1>Welcome to SmartBukite Academy</h1>
          <p>Login and continue to enjoy our unique services</p>

          <form onSubmit={handleLogin}>
            <div className="form-group mb-4">
              <label htmlFor="exampleInputEmail1">EMAIL</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="username@domain.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">PASSWORD</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="btn-holders d-flex justify-content-between">
              <button type="button" className="btn btn-link">
                Forget Password?
              </button>
              <button
                type="submit"
                className="btn btn-primary login-btn"
                style={{ background: loader ? "#ccc" : null }}
                onClick={handleLogin}
              >
                {!loader ? "Log in" : <Wait />}
              </button>
            </div>
          </form>
          {isError && (
            <div>The username or password provided were incorrect!</div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
