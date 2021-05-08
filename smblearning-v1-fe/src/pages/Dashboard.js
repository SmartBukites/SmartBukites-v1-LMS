import React from "react";
import { PieChart } from "react-minimal-pie-chart";
import "./Dashboard.css";

function Dashboard(props) {
  return (
    <section className="dashboard">
      <h1>Dashbaord</h1>
      <div className="dashboard-items d-flex justify-content-between mb-4">
        <div className="t-tutors item">
          <svg
            width="40"
            height="28"
            viewBox="0 0 40 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26 12H40V16H26V12ZM28 20H40V24H28V20ZM24 4H40V8H24V4ZM4 28H24V26C24 20.486 19.514 16 14 16H10C4.486 16 0 20.486 0 26V28H4ZM12 14C15.99 14 19 10.99 19 7C19 3.01 15.99 0 12 0C8.01 0 5 3.01 5 7C5 10.99 8.01 14 12 14Z"
              fill="#00B2EE"
            />
          </svg>
          <p className="title">Total Tutors</p>
          <p className="num">50</p>
        </div>
        <div className="t-users item">
          <svg
            width="29"
            height="40"
            viewBox="0 0 29 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 40H28.5714V32.8571C28.5684 30.2059 27.5139 27.6641 25.6392 25.7894C23.7644 23.9147 21.2227 22.8602 18.5714 22.8571H10C7.34876 22.8602 4.80698 23.9147 2.93227 25.7894C1.05756 27.6641 0.0030248 30.2059 0 32.8571V40Z"
              fill="#00B2EE"
            />
            <path
              d="M4.28564 10C4.28564 11.9778 4.87213 13.9112 5.97095 15.5557C7.06976 17.2002 8.63155 18.4819 10.4588 19.2388C12.2861 19.9957 14.2967 20.1937 16.2365 19.8079C18.1764 19.422 19.9582 18.4696 21.3567 17.0711C22.7552 15.6725 23.7076 13.8907 24.0935 11.9509C24.4794 10.0111 24.2813 8.00043 23.5244 6.17317C22.7676 4.3459 21.4858 2.78412 19.8413 1.6853C18.1969 0.58649 16.2635 0 14.2856 0C11.6335 0 9.08994 1.05357 7.21458 2.92893C5.33921 4.8043 4.28564 7.34784 4.28564 10Z"
              fill="#00B2EE"
            />
          </svg>
          <p className="title">Total Users</p>
          <p className="num">2000</p>
        </div>
        <div className="t-courses item">
          <svg
            width="32"
            height="40"
            viewBox="0 0 32 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M30 0H1.42857C0.638393 0 0 0.638393 0 1.42857V38.5714C0 39.3616 0.638393 40 1.42857 40H30C30.7902 40 31.4286 39.3616 31.4286 38.5714V1.42857C31.4286 0.638393 30.7902 0 30 0ZM22.6786 12.5848L20.6027 11.0714L18.3929 12.6518V2.67857H22.6786V12.5848Z"
              fill="#00B2EE"
            />
          </svg>

          <p className="title">Total Courses</p>
          <p className="num">120</p>
        </div>
      </div>
      <h2 className="mb-3 mt-2">Academic Analytics</h2>
      <div className="second-items">
        <div className="first-row d-flex mb-4">
          <div className="completed">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="24" height="24" fill="#00B2EE" />
            </svg>
            <span>Completed</span>
          </div>
          <div className="inprogress">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="24" height="24" fill="#00B2EE" fill-opacity="0.25" />
            </svg>
            <span>In Progress</span>
          </div>
        </div>
        <div className="second-row d-flex">
          <div className="charts">
            <div className="exam_quiz_stats">
              {/* <PieChart
                data={[
                  { title: "One", value: 10, color: "#E38627" },
                  { title: "Two", value: 15, color: "#C13C37" },
                  { title: "Three", value: 20, color: "#6A2135" },
                ]}
              /> */}
              <p className="text-center">Exam/Quiz</p>
            </div>
            <div className="courses_stats">
              {/* <PieChart
                data={[
                  { title: "One", value: 10, color: "#E38627" },
                  { title: "Two", value: 15, color: "#C13C37" },
                  { title: "Three", value: 20, color: "#6A2135" },
                ]}
              /> */}
              <p className="text-center">Courses</p>
            </div>
          </div>
          <div className="bar text-center">
            <p className="text-center">Students activities in last 7 days</p>
            <div className="progress mb-3">
              <div
                className="progress-bar bg-info"
                role="progressbar"
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <div className="d-flex stats justify-content-between">
              <div className="active-stats">
                <svg
                  width="14"
                  height="13"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.780762"
                    y="0.222549"
                    width="12.2776"
                    height="12.2776"
                    fill="#00B2EE"
                  />
                </svg>
                <span className="pl-3">42% active</span>
              </div>
              <div className="inactive-stats">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.316895"
                    y="0.222565"
                    width="12.2776"
                    height="12.2776"
                    fill="#C4C4C4"
                    fill-opacity="0.6"
                  />
                </svg>
                <span className="pl-3">58% Not active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
