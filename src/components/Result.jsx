import React from "react";
import ReactDOM from "react-dom";
import BarChart from './BarChart.jsx';
import { Redirect } from 'react-router-dom'

import AFD from '../../data/answer_afd.json';
import CDU from '../../data/answer_cdu.json';
import FDP from '../../data/answer_fdp.json';
import GRUENE from '../../data/answer_gruene.json';
import LINKE from '../../data/answer_linke.json';

export default class Result extends React.Component {
  constructor(props) {
    super(props);
  }

  calculateDeviation(answers_user, answers_party) {
    if ( Object.keys(answers_party).length !== answers_user.length ) {
      return false;
    }
  
    const result = [];
    answers_user.forEach( ( answer, index ) => {
      result[index] = Math.abs( answers_party[index] - answer );
    });

    return result;
  }

  render() {
    //const answers_user = this.props.location.state.result;
    const answers_user = [ 0, 1, 2, -1, 2, 1, 2 ]
    
    const deviations = {
      'afd' : this.calculateDeviation(answers_user, AFD),
      'cdu' : this.calculateDeviation(answers_user, CDU),
      'fdp' : this.calculateDeviation(answers_user, FDP),
      'gruene' : this.calculateDeviation(answers_user, GRUENE),
      'linke' : this.calculateDeviation(answers_user, LINKE)
    }

    console.log(deviations);

    return(
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
    );
  }
}