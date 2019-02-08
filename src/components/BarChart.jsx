import React from "react";
import ReactDOM from "react-dom";
import { HorizontalBar } from "react-chartjs-2";
import Scatter from "react-chartjs-2";
import { Redirect } from 'react-router-dom';
import Calculator from '../Calculator.js';

const party_colors = {
  'AFD' : '#009EE0',
  'CDU' : '#000000',
  'FDP' : '#FFED00',
  'GRÜNE' : '#46962B',
  'LINKE' : '#E20613',
  'SPD' : '#E2001A'
}

const horizontalBarChartData = {
  labels: [],
  datasets: [{
    label: 'Übereinstimmung %',
    backgroundColor: [],
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
      data.push( Math.round(element[1]) );
    });

    const colors = [];
    // match colors to same order
    labels.forEach(element => {
      colors.push(party_colors[element]);
    });

    horizontalBarChartData.datasets[0].data = data;
    horizontalBarChartData.datasets[0].backgroundColor = colors;
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
          }}]},
          'legend': { onClick: () => {} }
          }}>
        </HorizontalBar>
    );
  }
}