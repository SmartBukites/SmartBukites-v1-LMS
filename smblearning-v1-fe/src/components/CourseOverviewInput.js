import React, { useState } from "react";

import ReactQuill from "react-quill"; // ES6
import "react-quill/dist/quill.snow.css"; // ES6

import FileUpload from "./FileUpload";
import DocEditor from "./DocEditor";

function CourseOverviewInput() {
  const [overview, setOverview] = useState({
    courseThumbnail: "",
    courseDescription: "",
    coursePreview: "",
  });

  console.log(overview);
  return (
    <div className="course_overview_input">
      <form action="">
        <div className="course_thumbnail mb-5">
          <p>Course Thumbnail</p>
          <FileUpload
            captureChange={(file) =>
              setOverview({ ...overview, courseThumbnail: file })
            }
          />
        </div>
        <div className="course_description mb-5">
          <p>Course Description</p>
          <ReactQuill
            value={overview.courseDescription}
            onChange={(desc) =>
              setOverview({ ...overview, courseDescription: desc })
            }
          />
        </div>
        <div className="course_video mb-4">
          <p>Course Overview Video Link</p>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="courseOverviewVidLink"
              placeholder="Enter Course Overview Video Link"
              value={overview.coursePreview}
              onChange={(link) =>
                setOverview({ ...overview, coursePreview: link.target.value })
              }
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default CourseOverviewInput;
