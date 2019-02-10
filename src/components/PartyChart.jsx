import React from "react";
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

  handlePartySelect(e) {

    if ( !e.target.id ) {
      return;
    }

    const selected = parties.findIndex( (value) => value == e.target.id );

    if ( selected < 0 ) {
      return;
    }

    this.setState( { party: selected } );
  }

  getChartHeader() {  
    const list = [];

    parties.forEach(party => {

      const htmlClass = parties[this.state.party] == party ? "result-party-chart__selection__item--active" : "";

      list.push(
        <button id={party} onClick={this.handlePartySelect.bind(this)} 
          className={ htmlClass + " no-button result-party-chart__selection__item" }
          key={party}>
          <Icon name={party} tooltip={party}></Icon>
        </button>
        );
    
    });

    return list;
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
          <Icon tooltip={Categories[category]} name={category}></Icon>
          <div> {percentage[0][1]}% </div>
        </div>
        );
    });
    
    return list;
  }

  render() {
    const header = this.getChartHeader();
    const list = this.getChartData(this.props.result);
    
    return(
      <div className="result-party-chart__wrapper">
        <div className="result-party-chart__heading">
          
          <div className="result-party-chart__title">
            Höchste Übereinstimmung in den Parteien
          </div>

          <div className="result-party-chart__selection">
            {header}
          </div>

        </div>
        <div className="result-party-chart">
          {list}
        </div>
      </div>
    );
  }
}