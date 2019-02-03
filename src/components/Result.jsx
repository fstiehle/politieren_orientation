import React from "react";
import ReactDOM from "react-dom";
import BarChart from './BarChart.jsx';
import { Redirect } from 'react-router-dom'

export default class Result extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
  // Claculate 
  console.log(this.props.location);

    return(
      <div className="container">
        <div className="container__wrap">
          <div className="container__item">
            
          </div>
        </div>

        <div className="container__wrap">
          <div className="container__item">
            <BarChart result={this.props.location.state.result}></BarChart>
          </div>
        </div>
    </div>
    );
  }
}