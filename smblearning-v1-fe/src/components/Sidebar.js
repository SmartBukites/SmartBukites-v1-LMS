import React from "react";
import { NavLink } from "react-router-dom";

import User from "../assets/pngs/user.png";
import dashboard from "../assets/svgs/home.svg";
import createUser from "../assets/svgs/user-plus.svg";
import courses from "../assets/svgs/book.svg";
import userRound from "../assets/svgs/user-round.svg";
import examQuiz from "../assets/svgs/question-mark.svg";

import "./Sidebar.css";

function Sidebar(props) {
  return (
    <aside className="sidenav">
      <header className="page-header">
        <nav>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="back-btn"
            onClick={props.closeDrawer}
          >
            <path
              d="M4 12H20"
              stroke="#38b6ff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13 5L20 12L13 19"
              stroke="#38b6ff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <div className="user-avatar text-center">
            <img src={User} alt="badiru abubakar" />

            <div className="info">
              <p className="user-name mb-1 font-weight-bolder">
                {`${props.user.firstName} ${props.user.lastName}`}
              </p>
              <p className="user-role">Admin</p>
            </div>
          </div>
          <ul className="nav-menu mt-5">
            <li>
              <NavLink to="/dashboard">
                <img src={dashboard} alt="dashboard" />
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/new-user">
                <img src={createUser} alt="create-user" />
                <span>Create User</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/courses">
                <img src={courses} alt="courses" />
                <span>Courses</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/users">
                <img src={userRound} alt="users" />
                <span>Users</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/quiz-exams">
                <img src={examQuiz} alt="exams/quiz" />
                <span>Exams/Quiz</span>
              </NavLink>
            </li>

            {/* <li>
              {" "}
              <a href="#">
                <svg
                  width="14"
                  height="20"
                  viewBox="0 0 14 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1V10L5 6V9H11V11H5V14L0 10V19C0 19.2652 0.105357 19.5196 0.292893 19.7071C0.48043 19.8946 0.734784 20 1 20H13C13.2652 20 13.5196 19.8946 13.7071 19.7071C13.8946 19.5196 14 19.2652 14 19V1C14 0.734784 13.8946 0.48043 13.7071 0.292893C13.5196 0.105357 13.2652 0 13 0Z"
                    fill="black"
                    fillOpacity="0.8"
                  />
                </svg>

                <span>Logout</span>
              </a>
            </li> */}
          </ul>
        </nav>
      </header>
    </aside>
  );
  // return ReactDOM.createPortal(content, document.getElementById("drawer-hook"));
}

export default Sidebar;
