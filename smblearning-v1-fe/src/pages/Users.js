import React from "react";

import search from "../assets/svgs/search-icon.svg";
import admin from "../assets/svgs/user-plus-round.svg";
import tutor from "../assets/svgs/user-stack.svg";
import student from "../assets/svgs/user-round-invert.svg";
import user from "../assets/svgs/user-round-dark.svg";

import "./Users.css";
import { Link } from "react-router-dom";

function Users() {
  return (
    <section className="users">
      <h1>All Users</h1>
      <div className="users-categories">
        <div className="content">
          <div className="admin-cat d-flex">
            <img src={admin} alt="admin" />
            <div>
              <p className="val">5</p>
              <p>Admin</p>
            </div>
          </div>
          <div className="tutors-cat d-flex">
            <img src={tutor} alt="tutor" />
            <div>
              <p className="val">20</p>
              <p>Tutor</p>
            </div>
          </div>
          <div className="student-cat d-flex">
            <img src={student} alt="student" />
            <div>
              <p className="val">85</p>
              <p>Student</p>
            </div>
          </div>
        </div>
      </div>
      <div className="control-bar d-flex justify-content-between align-items-center">
        <div className="form-group has-search">
          <img src={search} alt="search icon" />
          <input type="text" className="form-control" placeholder="Search" />
        </div>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenu2"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Role
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
            <button className="dropdown-item" type="button">
              Admins
            </button>
            <button className="dropdown-item" type="button">
              Tutors
            </button>
            <button className="dropdown-item" type="button">
              Student
            </button>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </div>
      <div className="table-row">
        <div className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Access</th>
              <th scope="col">Courses</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="d-flex">
                <img src={user} alt="umar muhammad" />
                <div>
                  <p>Umar Muhammad</p>
                  <p>08134660261</p>
                </div>
              </td>
              <td>umarfarouq@gmail.com</td>
              <td>Tutor</td>
              <td>5</td>
              <th scope="row">
                <Link to="/user-profile">edit</Link>
              </th>
            </tr>
          </tbody>
        </div>
      </div>
    </section>
  );
}

export default Users;
