import React from "react";
import ReactDOM from "react-dom";
import { Redirect } from 'react-router-dom'
import Questions from '../../data/questions.json';
import Question from './Question.jsx';

export default class Optimat extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      choice: []
    }
  }

  handleButton(event) {
    event.preventDefault();
    const id = this.props.match.params.id || 0
    const value = event.target.value;
    this.setState(prevState => {
      prevState.choice[id] = value
      prevState.id = prevState.id + 1
      prevState.redirect = true
      return prevState
    })
  }

  render() {
    let id = this.props.match.params.id || 0
    id = Questions[id] ? id : 0;
    const question = Questions[id]

    if (this.state.id != id) {
      return <Redirect to={"/question/" + this.state.id}/>
    }

    return(
      <div>
        <Question 
          question={question} 
          handleButton={this.handleButton.bind(this)} 
        />
      </div>
    );
  }
}