import React from "react";
import Calculator from '../Calculator.js'
import Categories from './Categories.jsx'
import Icon from './Icon.jsx'

export default class CategoryChart extends React.Component {
  constructor(props) {
    super(props);
  }

  getChartData(result) {
    const list = []
    
    Object.keys(Categories).forEach(category => {

      const filtered = Calculator.filterAnswers(category, result);
      const deviation = Calculator.calculateAllDeviations(filtered);
      const percentage = Calculator.deviationPercentage(deviation);

      list.push(
        <div class="result-category-chart__item" key={category}>
          <Icon name={category} tooltip={Categories[category]}></Icon>
          <div> {percentage[0][0]}: {percentage[0][1]}% </div>
        </div>
        );
    });
    
    return list;
  }

  render() {
    const list = this.getChartData(this.props.result);

    return(
      <div className="result-category-chart__wrapper">

        <div className="result-category-chart__heading">

          <div className="result-category-chart__title">
            Höchste Übereinstimmung in den Kategorien
          </div>

        </div>
        <div className="result-category-chart">
          {list}
        </div>

      </div>
    );
  }
}