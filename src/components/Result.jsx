import React from "react";
import ReactDOM from "react-dom";
import BarChart from './BarChart.jsx';
import CategoryChart from './CategoryChart.jsx';
import { Redirect } from 'react-router-dom'
import Calculator from '../Calculator.js';

export default class Result extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    //const answers_user = this.props.location.state.result;
    const answers_user = [ 0, 1, 2, -1, 2, 1, 2 ];
    const deviations = Calculator.calculateAllDeviations(answers_user);

    return(
      <div>
        <div className="container">
          <div className="container__wrap">
            <div className="container__item">
              
            </div>
          </div>

          <div className="container__wrap">
            <div className="container__item">
              <BarChart result={deviations}></BarChart>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="container__wrap">
            <div className="container__item">
              <CategoryChart result={answers_user}></CategoryChart>
            </div>
          </div>

          <div className="container__wrap">
            <div className="container__item">
              <BarChart result={deviations}></BarChart>
            </div>
          </div>
        </div>
      </div>
    );
  }
}