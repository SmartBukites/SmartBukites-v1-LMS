import React from "react";

import Footer from "../components/Footer";

import "./NewUser.css";

function NewUser(props) {
  return (
    <section className="new-user">
      <h1>Create User</h1>
      <div className="cv">
        <form className="content form">
          <div className="form-group">
            <label htmlFor="emailAddress">Email address</label>
            <input
              type="email"
              className="form-control"
              id="emailAddress"
              placeholder="name@example.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="tel"
              className="form-control"
              id="phoneNumber"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="form-group">
            <label htmlFor="userAccess">User Access</label>
            <select className="form-control" id="userAccess">
              <option>Select User Access</option>
              <option>Student</option>
              <option>Tutor</option>
              <option>Admin</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="courses">Courses</label>
            <select className="form-control" id="courses">
              <option>Select Registered Courses</option>
              <option>Maths</option>
              <option>Biology</option>
              <option>Physics</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="btn-create text-center">
            <button type="submit" className="btn btn-primary">
              Create User
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </section>
  );
}

export default NewUser;
