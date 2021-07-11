import React, { useState } from "react";
import "./AddExamQ.css";

function AddExamQ({ captureNewExamQ }) {
  const [examQ, setExamQ] = useState({
    examQues: "",
    examAns: [{ answerText: "", isCorrect: "" }],
  });

  //Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const info = { ...examQ };
  };

  const handleInputCheck = (event) => {
    const info = { ...examQ };
    console.log(event.target);
    console.log(info);
  };

  const handleTopicSubmit = (e) => {
    e.preventDefault();
    captureNewExamQ(examQ);
    setExamQ({ examQues: "", examAns: [], correctAns: "" });
  };

  console.log(examQ);

  return (
    <div className="add_examq">
      <form action="" onSubmit={handleTopicSubmit} id="addExamQForm">
        <p>Topic Quiz</p>
        <div className="mb-3 examq_input">
          <input
            type="text"
            className="form-control"
            id="topicNameInput"
            placeholder="Enter Quiz/Exam Ques..."
            name="examQues"
            value={examQ.examQues}
            onChange={(e) => setExamQ({ ...examQ, examQues: e.target.value })}
          />
        </div>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">S/N</th>
              <th scope="col">Option</th>
              <th scope="col">Correct</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">a</th>
              <td>
                <div className="examq_option_input">
                  <input
                    type="text"
                    className="form-control"
                    id="examAnsInput0"
                    placeholder="Enter Quiz/Exam Ans..."
                    name={`examAns${[0]}`}
                    value={examQ.examAns[0].answerText}
                    onChange={(e) => handleInputChange(e)}
                  />
                </div>
              </td>
              <td>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name={`examAns`}
                    id={`examAns${[0]}`}
                    onChange={(e) => handleInputCheck(e)}
                  />
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">b</th>
              <td>
                <div className="examq_option_input">
                  <input
                    type="text"
                    className="form-control"
                    id="examAnsInput1"
                    placeholder="Enter Quiz/Exam Ans..."
                    name={`examAns${[1]}`}
                    value={examQ.examAns[1]}
                    onChange={(e) => handleInputChange(e)}
                  />
                </div>
              </td>
              <td>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name={`examAns`}
                    id={`examAns${[1]}`}
                    onChange={(e) => handleInputCheck(e)}
                  />
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">c</th>
              <td>
                <div className="examq_option_input">
                  <input
                    type="text"
                    className="form-control"
                    id="examAnsInput2"
                    placeholder="Enter Quiz/Exam Ans..."
                    name={`examAns${[2]}`}
                    value={examQ.examAns[2]}
                    onChange={(e) => handleInputChange(e)}
                  />
                </div>
              </td>
              <td>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name={`examAns`}
                    id={`examAns${[2]}`}
                    onChange={(e) => handleInputCheck(e)}
                  />
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">d</th>
              <td>
                <div className="examq_option_input">
                  <input
                    type="text"
                    className="form-control"
                    id="examAnsInput3"
                    placeholder="Enter Quiz/Exam Ans..."
                    name={`examAns${[3]}`}
                    value={examQ.examAns[3]}
                    onChange={(e) => handleInputChange(e)}
                  />
                </div>
              </td>
              <td>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name={`examAns`}
                    id={`examAns${[3]}`}
                    onChange={(e) => handleInputCheck(e)}
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="text-right">
          <button className="save_examq">Save</button>
        </div>
      </form>
    </div>
  );
}

export default AddExamQ;
