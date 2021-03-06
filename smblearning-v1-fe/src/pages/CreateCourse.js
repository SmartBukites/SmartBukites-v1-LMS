import React, { useState } from "react";
import styled from "styled-components";
import { useHistory, Link } from "react-router-dom";
import { authMiddleWare } from "../utils/auth";
import axios from "../axios";

import CourseOverviewInput from "../components/CourseOverviewInput";
import AddTopic from "../components/AddTopic";
import AddExamQ from "../components/AddExamQ";
import Footer from "../components/Footer";
import "./CreateCourse.css";

const List = styled.li`
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.688rem;
  text-align: left;

  ${({ activeTopic }) =>
    activeTopic &&
    `
    background: rgba(0, 178, 238, 0.25);
  `}
`;
const ButtonGroup = styled.div`
  display: flex;
`;

function CreateCourse() {
  let history = useHistory();

  const [course, setCourse] = useState({
    courseTitle: "",
    courseThumbnail: "",
    thumbnailErr: "",
    courseDescription: "",
    courseChapters: [
      {
        topicName: "Quadratic Equation",
        topicVidL: "https://www.google.com",
        topicFile: "",
        topicExams: {
          examQues: "What is lorem",
          examAns: [
            { answerText: "dummy text", isCorrect: true },
            { answerText: "not dummy text", isCorrect: false },
            { answerText: "biology text", isCorrect: false },
            { answerText: "physics text", isCorrect: false },
          ],
        },
      },
    ],
  });

  const [activeTopic, setActiveTopic] = useState();
  const [activeExam, setActiveExam] = useState();

  //Handle add topic click
  const handleAddTopic = () => {
    const dupCourse = { ...course };
    if (
      course.courseChapters[course.courseChapters.length - 1].topicName !==
        "" &&
      activeTopic !== undefined
    )
      dupCourse.courseChapters.push({
        topicName: "",
        topicVidL: "",
        topicFile: "",
      });
    setCourse(dupCourse);
  };

  //Handle addTopic Data
  const captureTopic = (data) => {
    console.log("data", data);
    if (course.courseChapters.indexOf(activeTopic) !== -1) {
      const dupCourse = { ...course };
      // dupCourse.courseChapters.push(data);
      dupCourse.courseChapters[course.courseChapters.indexOf(activeTopic)] =
        data;
      setCourse(dupCourse);
    } else {
      setCourse({
        ...course,
        courseChapters: [...course.courseChapters, data],
      });
    }
  };

  //Handle add Exam click
  const handleAddExamQ = (index) => {
    setCourse({
      ...course,
      courseChapters: [
        ...course.courseChapters,
        {
          ...course.courseChapters[index],
          topicExams: {
            examQues: "",
            examAns: [],
            correctAns: "",
          },
        },
      ],
    });
  };

  //Handle addExam Data
  const captureNewExamQ = (data) => {
    setCourse({
      ...course,
      courseChapters: [...course.courseChapters, { topicExams: data }],
    });
  };

  //Handle image input upload
  const handleImageUpload = ({ file }) => {
    authMiddleWare(history);
    const authToken = sessionStorage.getItem("AuthToken");
    let form_data = new FormData();
    form_data.append("image", file);
    axios.defaults.headers.common = { Authorization: `Bearer ${authToken}` };
    axios
      .post("/user/image", form_data, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response);
      })
      // .then(() => {
      //   window.location.reload();
      // })
      .catch((error) => {
        if (error.response.status === 403) {
          history.push("/login");
        }
        console.log(error);
        setCourse({
          thumbnailErr: "Error in posting the data",
        });
      });
  };

  const Tabs = [
    <CourseOverviewInput captureOverview={(data) => captureTopic(data)} />,
    <AddTopic
      captureTopic={(data) => captureTopic(data)}
      currentTopic={activeTopic}
    />,
    <AddExamQ captureNewExamQ={(data) => captureNewExamQ(data)} />,
  ];

  console.log("active topic", activeTopic);

  const [activeTabRight, setActiveTabRight] = useState(Tabs[0]);

  return (
    <div className="course_create">
      <h2>Course Creation</h2>
      <div className="course-nav">
        <Link to="#">Courses</Link> <span>/</span> <Link to="#">View</Link>
      </div>
      <div className="ctitle_btns d-flex justify-content-between align-items-center mb-5">
        <div className="form-group my-auto course-title-form">
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Enter Title of Coures....."
            onChange={(e) =>
              setCourse({ ...course, courseTitle: e.target.value })
            }
            name="courseTitle"
            value={course.courseTitle}
          />
        </div>
        <div className="d-flex btn-holders justify-content-between">
          <button className="btn btn-success">Save to draft</button>
          <button className="btn btn-primary">Publish</button>
          <button className="btn btn-link">
            <svg
              width="40"
              height="42"
              viewBox="0 0 40 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M38.3333 7.5H31.6667V3.33333C31.6667 1.49479 30.1719 0 28.3333 0H11.6667C9.82812 0 8.33333 1.49479 8.33333 3.33333V7.5H1.66667C0.744792 7.5 0 8.24479 0 9.16667V10.8333C0 11.0625 0.1875 11.25 0.416667 11.25H3.5625L4.84896 38.4896C4.93229 40.2656 6.40104 41.6667 8.17708 41.6667H31.8229C33.6042 41.6667 35.0677 40.2708 35.151 38.4896L36.4375 11.25H39.5833C39.8125 11.25 40 11.0625 40 10.8333V9.16667C40 8.24479 39.2552 7.5 38.3333 7.5ZM27.9167 7.5H12.0833V3.75H27.9167V7.5Z"
                fill="#EE3C00"
              />
            </svg>
            <span className="ml-2">Delete</span>
          </button>
        </div>
      </div>
      <div className="d-flex contents mb-5">
        <div className="_left">
          <div>
            <p
              className="px-4 py-4 course_overview"
              onClick={() => setActiveTabRight(Tabs[0])}
            >
              Course Overview
            </p>
            <div
              className="px-4 topics"
              onClick={() => setActiveTabRight(Tabs[1])}
            >
              <p>Topics</p>
              <ul>
                {course.courseChapters.map((topic) => {
                  return (
                    <List
                      key={topic.topicName}
                      activeTopic={activeTopic === topic}
                      onClick={() => setActiveTopic(topic)}
                      className="py-2 mb-3 pl-4"
                    >
                      {topic.topicName || "untitle"}
                    </List>
                  );
                })}
                <li>
                  <button
                    className="btn btn-link py-2 pl-4"
                    onClick={handleAddTopic}
                  >
                    <svg
                      width="24"
                      height="27"
                      viewBox="0 0 24 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.016 21.3333H24V2.66667C24 1.196 22.804 0 21.3333 0H4C2.392 0 0 1.06533 0 4V22.6667C0 25.6013 2.392 26.6667 4 26.6667H24V24H4.016C3.4 23.984 2.66667 23.7413 2.66667 22.6667C2.66667 21.592 3.4 21.3493 4.016 21.3333ZM6.66667 9.33333H10.6667V5.33333H13.3333V9.33333H17.3333V12H13.3333V16H10.6667V12H6.66667V9.33333Z"
                        fill="#00B2EE"
                      />
                    </svg>
                    <span className="ml-4">Add Topic</span>
                  </button>
                </li>
              </ul>
            </div>
            <div
              className="px-4 exam"
              onClick={() => setActiveTabRight(Tabs[2])}
            >
              <p>Exam</p>
              <ul>
                {course.courseChapters.map((topic) => {
                  return (
                    <List
                      key={topic.topicName}
                      activeTopic={activeExam === topic}
                      onClick={() => setActiveExam(topic)}
                      className="py-2 mb-3 pl-4"
                    >
                      {topic.topicName || "untitle"}
                    </List>
                  );
                })}
                <li>
                  <button
                    className="btn btn-link py-2 pl-4"
                    onClick={handleAddExamQ}
                  >
                    Add Exams
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="_right">
          {activeTabRight}
          <div className="preview_publish_btns d-flex justify-content-between">
            <button className="btn btn-link preview_btn">
              <span className="mr-3">Preview Course</span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.25 15H18.75C18.5511 15 18.3603 15.079 18.2197 15.2197C18.079 15.3603 18 15.5511 18 15.75V21H3V6H9.75C9.94891 6 10.1397 5.92098 10.2803 5.78033C10.421 5.63968 10.5 5.44891 10.5 5.25V3.75C10.5 3.55109 10.421 3.36032 10.2803 3.21967C10.1397 3.07902 9.94891 3 9.75 3H2.25C1.65326 3 1.08097 3.23705 0.65901 3.65901C0.237053 4.08097 0 4.65326 0 5.25L0 21.75C0 22.3467 0.237053 22.919 0.65901 23.341C1.08097 23.7629 1.65326 24 2.25 24H18.75C19.3467 24 19.919 23.7629 20.341 23.341C20.7629 22.919 21 22.3467 21 21.75V15.75C21 15.5511 20.921 15.3603 20.7803 15.2197C20.6397 15.079 20.4489 15 20.25 15ZM22.875 0H16.875C15.8733 0 15.3727 1.21453 16.0781 1.92188L17.753 3.59672L6.32812 15.0173C6.22325 15.1219 6.14003 15.2461 6.08325 15.3828C6.02647 15.5195 5.99724 15.6662 5.99724 15.8142C5.99724 15.9623 6.02647 16.1089 6.08325 16.2456C6.14003 16.3824 6.22325 16.5066 6.32812 16.6111L7.39078 17.6719C7.4953 17.7768 7.61949 17.86 7.75624 17.9168C7.89298 17.9735 8.03959 18.0028 8.18766 18.0028C8.33572 18.0028 8.48233 17.9735 8.61908 17.9168C8.75582 17.86 8.88001 17.7768 8.98453 17.6719L20.4037 6.24938L22.0781 7.92188C22.7812 8.625 24 8.13281 24 7.125V1.125C24 0.826631 23.8815 0.540483 23.6705 0.329505C23.4595 0.118526 23.1734 0 22.875 0V0Z"
                  fill="black"
                  fillOpacity="0.8"
                />
              </svg>
            </button>
            <button className="btn btn-primary publish_btn">Publish</button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default CreateCourse;
