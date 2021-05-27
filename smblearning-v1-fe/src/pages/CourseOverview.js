import React from "react";

import Collapsible from "../components/Collapsible";
import Footer from "../components/Footer";

import "./CourseOverview.css";

function CourseOverview() {
  return (
    <section className="course-overview">
      <h2>Title of the Course</h2>
      <div className="course-nav">
        <a href="#">Course title</a> <span>--</span> <a href="#">View</a>
      </div>
      <div className="course-desc">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam illo
          blanditiis, doloribus tempore dolorum, corrupti quae tenetur vero
          ratione earum ipsa! Sapiente exercitationem facilis aperiam eaque
          ratione tenetur ipsam a?
        </p>
        <ul className="course-objectives">
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
        </ul>
      </div>

      <h2 className="c-over">Course Overview</h2>
      <video src=""></video>

      <div className="start-btn-holder text-right">
        <button type="submit" className="btn btn-primary">
          Start course
        </button>
      </div>

      <div className="course-progress">
        <p>Course progress:</p>
        <div class="progress">
          <div
            class="progress-bar"
            role="progressbar"
            aria-valuenow="0"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>

      <div className="course-outline">
        <p className="title">Course Outline</p>
        <div className="outline-wrap">
          <ul>
            <li className="sub-title">Overview of the course</li>
            <li>
              <Collapsible summary="Topic One Title">
                <p>Subtopic Lorem, ipsum.</p>
                <p>Subtopic Lorem, ipsum.</p>
                <p>Subtopic Lorem, ipsum.</p>
              </Collapsible>
            </li>
            <li>
              <Collapsible summary="Topic Two Title">
                <p>Subtopic Lorem, ipsum.</p>
                <p>Subtopic Lorem, ipsum.</p>
              </Collapsible>
            </li>
          </ul>
        </div>
      </div>

      <Footer />
    </section>
  );
}

export default CourseOverview;
