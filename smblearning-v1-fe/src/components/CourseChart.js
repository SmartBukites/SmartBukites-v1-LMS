import React from "react";
import { Pie } from "react-chartjs-2";

const state = {
  labels: ["Completed", "In progress"],
  datasets: [
    {
      label: "Course",
      borderWidth: 1,
      backgroundColor: ["#C6EBF7", "#00B2EE"],
      hoverBackgroundColor: ["#C6EBF7", "#00B2EE"],
      data: [70, 30],
    },
  ],
};

export default class CourseChart extends React.Component {
  render() {
    return (
      <div>
        <Pie data={state} />
      </div>
    );
  }
}
