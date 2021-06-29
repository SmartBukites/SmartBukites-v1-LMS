import React from "react";
import { Link } from "react-router-dom";

import CourseItem from "../components/CourseItem";
import Footer from "../components/Footer";

import "./Courses.css";

function Courses(props) {
  const courses = [
    {
      courseImg: "https://via.placeholder.com/150",
      courseTitle: "Title of Course Here",
      courseDesc:
        "Some little description of the course will appear here. This course will teach you the ins and outs of creating and maintaining a blablablabla! ",
    },
    {
      courseImg: "https://via.placeholder.com/150",
      courseTitle: "Title of Course Here",
      courseDesc:
        "Some little description of the course will appear here. This course will teach you the ins and outs of creating and maintaining a blablablabla! ",
    },
    {
      courseImg: "https://via.placeholder.com/150",
      courseTitle: "Title of Course Here",
      courseDesc:
        "Some little description of the course will appear here. This course will teach you the ins and outs of creating and maintaining a blablablabla! ",
    },
    {
      courseImg: "https://via.placeholder.com/150",
      courseTitle: "Title of Course Here",
      courseDesc:
        "Some little description of the course will appear here. This course will teach you the ins and outs of creating and maintaining a blablablabla! ",
    },
    {
      courseImg: "https://via.placeholder.com/150",
      courseTitle: "Title of Course Here",
      courseDesc:
        "Some little description of the course will appear here. This course will teach you the ins and outs of creating and maintaining a blablablabla! ",
    },
    {
      courseImg: "https://via.placeholder.com/150",
      courseTitle: "Title of Course Here",
      courseDesc:
        "Some little description of the course will appear here. This course will teach you the ins and outs of creating and maintaining a blablablabla! ",
    },
    {
      courseImg: "https://via.placeholder.com/150",
      courseTitle: "Title of Course Here",
      courseDesc:
        "Some little description of the course will appear here. This course will teach you the ins and outs of creating and maintaining a blablablabla! ",
    },
  ];
  return (
    <section className="courses">
      <div className="d-flex justify-content-between align-items-center mb-5">
        <h1>Courses</h1>
        <Link to="/create-course">
          <button className="btn btn-primary cc-btn">Create New Course</button>
        </Link>
      </div>
      <div className="courses-list">
        {courses.map((course, index) => {
          return <CourseItem details={course} key={index} />;
        })}
      </div>

      <Footer />
    </section>
  );
}

export default Courses;
