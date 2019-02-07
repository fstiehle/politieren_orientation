import React from "react";
import ReactDOM from "react-dom";
import { HorizontalBar } from "react-chartjs-2";
import Scatter from "react-chartjs-2";
import { Redirect } from 'react-router-dom';
import Calculator from '../Calculator.js';

const colors = {
  'afd' : '',
  'cdu' : '',
  'fdp' : '',
  'gruene' : '',
  'linke' : ''
}

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
    const deviation = Calculator.deviationPercentage(result);

    const labels = [];
    const data = [];
    Object.values(deviation).forEach(element => {
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
              beginAtZero: true
          }}]}}}>
        </HorizontalBar>
    );
  }
}