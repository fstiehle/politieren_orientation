import React from "react";
import BarChart from './BarChart.jsx';
import CategoryChart from './CategoryChart.jsx';
import PartyChart from './PartyChart.jsx';
import CategorySelection from './CategorySelection.jsx';
import Calculator from '../Calculator.js';
import Categories from './Categories.jsx';
import ls from 'local-storage'

export default class Result extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      "categoriesSelected" : Object.keys(Categories)
    }
  }

  handleCategorySelect(e) {
    if ( !e.target.id ) {
      return;
    }
    const select = e.target.id;
    
    this.setState((prevState) => {
      const list = prevState.categoriesSelected;

      if ( list.includes(select) ) {
        list.splice( list.indexOf(select), 1 );
      } else {
        list.push(select);
      }

      return { "categoriesSelected" : list };
    });
  }

  render() {
    const answers_user = this.props.match.params.r.split(",");
    const toFilter = this.state.categoriesSelected;
    const filtered = Calculator.filterAnswers( toFilter, answers_user );
    const deviations = Calculator.calculateAllDeviations( filtered );

    return(
      <div>
        <div class="result-container__wrapper">
          <div className="result-container">
            <CategorySelection 
              click={this.handleCategorySelect.bind(this)}
              selected={this.state.categoriesSelected}>
            </CategorySelection>
          </div>
        </div>

        <div class="result-container__wrapper">
          <div className="result-container">
            <div className="result-container__item">
              Chart 1
            </div>
          </div>

          <div className="result-container">
            <div className="result-container__item">
              <BarChart result={deviations}></BarChart>
            </div>
          </div>
        </div>

        <div class="result-container__wrapper">
          <div className="result-container">
            <div className="result-container__item">
              <CategoryChart result={answers_user}></CategoryChart>
            </div>
          </div>

          <div className="result-container">
            <div className="result-container__item">
              <PartyChart result={answers_user}></PartyChart>
            </div>
          </div>
        </div>
      </div>
    );
  }
}