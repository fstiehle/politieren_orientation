import React from "react";
import ReactDOM from "react-dom";

const Category = ({name}) => (<span className={name.toLowerCase()}>{name}</span>)

const Question = ({question}) => {
  let meta = []
  if (question.category && question.category.length > 0) {
    question.category.forEach((element, index) => {
      meta.push(<Category key={index} name={element}/>)
    });
  }
  let pro = []
  if (question.pro && question.pro.length > 0) {
    question.pro.forEach((element, index) => {
      pro.push(<li key={index}>{element}</li>)
    });
  }
  let contra = []
  if (question.contra && question.contra.length > 0) {
    question.contra.forEach((element, index) => {
      contra.push(<li key={index}>{element}</li>)
    });
  }

  return (
    <div className="container">
      <div className="container__item question">
        <div className="meta">{meta}</div>
        <h1>{question.title || "missing"}</h1>
        <p>{question.content || "missing"}</p>
      </div>

      <div className="container__item facts">
        <div className="facts__pro">
          <h4>Pro</h4>
          <ul>
            {pro}
          </ul>
        </div>
        <div className="facts__contra">
          <h4>Contra</h4>
          <ul>
            {contra}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Question