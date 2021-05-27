import React from "react";
import { Link } from "react-router-dom";
import "./CourseItem.css";

function CourseItem({ details }) {
  return (
    <div className="course-item">
      <Link to="/">
        <img src={details.courseImg} alt="" className="course-img" />
        <div className="course-body">
          <p className="course-title">{details.courseTitle}</p>
          <p className="course-desc">{details.courseDesc}</p>
        </div>
      </Link>
    </div>
  );
}

export default CourseItem;
