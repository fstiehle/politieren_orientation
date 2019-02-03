import React from "react";
import ReactDOM from "react-dom";
import HorizontalBar from "react-chartjs-2";
import Scatter from "react-chartjs-2";
import { Redirect } from 'react-router-dom'

const parties = [
  "Grüne",
  "Afd",
  "CDU",
  "SPD"
];

const horizontalBarChartData = {
  labels: parties,
  datasets: [{
    label: 'Zustimmung',
    backgroundColor: [
      "",
      "",
      "",
      "",
    ],
    borderWidth: 0,
    data: [ // Percentage agreement 
      0,
      20,
      40,
      60,
    ]
  }]
};

export default class Result extends React.Component {
  constructor(props) {
    super(props);
  }

  getChartData(result) {
    console.log(result);
    // Berechne Abweichung

    horizontalBarChartData.datasets[0].data = [1,2,3,4] // percentages
    return horizontalBarChartData;
  }

  render() {
    return(
      <HorizontalBar data={this.getChartData(this.props.result)}></HorizontalBar>
    );
  }
}