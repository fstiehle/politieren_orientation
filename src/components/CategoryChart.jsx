import React from "react";
import ReactDOM from "react-dom";
import Calculator from '../Calculator.js'
import Categories from './Categories.jsx'
import Icon from './Icon.jsx'

export default class CategoryChart extends React.Component {
  constructor(props) {
    super(props);
  }

  getChartData(result) {
    const list = []
    
    Object.keys(Categories).forEach(cat => {
      const filtered = Calculator.filterAnswers(cat, result);
      const deviation = Calculator.calculateAllDeviations(filtered);
      const percentage = Calculator.deviationPercentage(deviation);

      list.push(
        <div key={cat}>
          <Icon name={cat}></Icon>
          <div> {percentage[0][0]}: {percentage[0][1]}% </div>
        </div>
        );
    });
    
    return list;
  }

  

  render() {
    const list = this.getChartData(this.props.result);
    return(
      <div>
        {list}
      </div>
    );
  }
}