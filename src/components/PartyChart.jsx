import React from "react";
import ReactDOM from "react-dom";
import Calculator from '../Calculator.js'
import Categories from './Categories.jsx'
import Icon from './Icon.jsx'

const parties = [
  'CDU',
  'SPD',
  'GRÜNE',
  'LINKE',
  'FDP',
  'AFD',
];

const getRandomInt = function(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export default class PartyChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      party: getRandomInt(parties.length - 1)
    }
  }

  getChartData(result) {
    const party = this.state.party;
    const list = [];

    Object.keys(Categories).forEach(category => {

      const filtered = Calculator.filterAnswers(category, result);
      const deviation = Calculator.calculateDeviationForParty(filtered, parties[party]);
      const percentage = Calculator.deviationPercentage(deviation);

      list.push(
        <div className="result-party-chart__item" key={category}>
          <Icon name={category}></Icon>
          <div> {percentage[0][1]}% </div>
        </div>
        );
    });
    
    return list;
  }

  render() {
    const list = this.getChartData(this.props.result);
    
    return(
      <div className="result-party-chart__wrapper">
        <div className="result-party-chart__heading">
          
          <div className="result-party-chart__title">
            Höchste Übereinstimmung in den Parteien
          </div>

          {parties[this.state.party]}

        </div>
        <div className="result-party-chart">
          {list}
        </div>
      </div>
    );
  }
}