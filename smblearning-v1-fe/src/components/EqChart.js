import React from "react";
import { Doughnut } from "react-chartjs-2";

const state = {
  labels: ["Completed", "In progress"],
  datasets: [
    {
      label: "Exam Quiz",
      borderWidth: 1,
      backgroundColor: ["#C6EBF7", "#00B2EE"],
      hoverBackgroundColor: ["#C6EBF7", "#00B2EE"],
      data: [25, 75],
    },
  ],
};

export default class EqChart extends React.Component {
  render() {
    return (
      <div>
        <Doughnut
          data={state}
          options={{
            title: {
              display: false,
              text: "Exam Quiz Chart",
              fontSize: 20,
            },
            legend: {
              display: false,
              position: "right",
            },
          }}
        />
      </div>
    );
  }
}
