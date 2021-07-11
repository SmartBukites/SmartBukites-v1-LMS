import React, { useState, useEffect } from "react";
import FileUpload from "./FileUpload";

import "./AddTopic.css";

function AddTopic({ captureTopic, currentTopic }) {
  const [topic, setTopic] = useState({
    topicName: "",
    topicVidL: "",
    topicFile: "",
  });

  useEffect(() => {
    currentTopic && setTopic(currentTopic);
  }, [currentTopic]);

  console.log("current topic", currentTopic);

  //Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const info = { ...topic };
    info[name] = value;
    setTopic(info);
  };

  const handleTopicSubmit = (e) => {
    e.preventDefault();
    captureTopic(topic);
    setTopic({ topicName: "", topicVidL: "", topicFile: "" });
  };

  return (
    <div className="add_topic">
      <form action="" onSubmit={handleTopicSubmit} id="addTopicForm">
        <div className="d-flex justify-content-between align-item-center mb-3">
          <p className="topic_name my-auto">Topic</p>
          {/* <button className="btn btn-danger">Delete</button> */}
          <button className="btn btn-danger">X</button>
        </div>
        <div className="mb-3 topic_name_input">
          <input
            type="text"
            className="form-control"
            id="topicNameInput"
            placeholder="Enter Class Title..."
            name="topicName"
            value={topic.topicName}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="mb-3 topic_videolink_input">
          <input
            type="url"
            className="form-control"
            id="topicVideoLink"
            placeholder="Enter class video link..."
            name="topicVidL"
            value={topic.topicVidL}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="file_upload">
          <p>Topic Reading Materials</p>
          <FileUpload
            captureChange={(file) => setTopic({ ...topic, topicFile: file })}
          />
        </div>
        <div className="text-right">
          <button
            className="btn btn-primary"
            type="submit"
            onClick={handleTopicSubmit}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTopic;
