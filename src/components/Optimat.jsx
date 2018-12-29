import React from "react";
import ReactDOM from "react-dom";
import Questions from '../../data/questions.json';
import Question from './Question.jsx';

export default class Optimat extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      choice: {}
    }
  }

  render() {
    let id = this.props.match.params.id || 0
    id = Questions[id] ? id : 0;
    const question = Questions[id]

    return(
      <div>
        <Question question={question} />
      </div>
    );
  }
}