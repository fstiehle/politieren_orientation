import React from "react";
import ReactDOM from "react-dom";
import { HorizontalBar } from "react-chartjs-2";
import Scatter from "react-chartjs-2";
import { Redirect } from 'react-router-dom'

const horizontalBarChartData = {
  labels: [],
  datasets: [{
    label: 'Zustimmung',
    backgroundColor: [
      "",
      "",
      "",
      "",
      ""
    ],
    borderWidth: 0,
    data: [ ]
  }],
};

export default class Result extends React.Component {
  constructor(props) {
    super(props);
  }

  getChartData(result) {
    const deviations = {};

    const entries = Object.entries(result);
    for (const [party, deviation] of entries) {

      // Sum deviation
      const total_deviation = deviation.reduce((a, b) => a + b);

      // Deviation in %
      deviations[party] = 100 - total_deviation / (entries.length * 4) * 100;
    }

    // Sort for best match
    const sorted = Object.entries(deviations).sort((a, b) => b[1] - a[1]);
    const labels = []
    const data = []
    Object.values(sorted).forEach(element => {
      labels.push(element[0]);
      data.push(element[1]);
    });

    horizontalBarChartData.datasets[0].data = data;
    horizontalBarChartData.labels = labels;
    return horizontalBarChartData;
  }

  render() {
    return(
      <HorizontalBar 
        data={this.getChartData(this.props.result)}
        options={{ scales: { xAxes: [{
          ticks: {
              beginAtZero:true
          }}]}}}>
        </HorizontalBar>
    );
  }
}