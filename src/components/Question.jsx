import React from "react";
import Buttons from "./Buttons.jsx";
import Categories from "./Categories.jsx";
import Icon from "./Icon.jsx";

const Question = ({qid, total, question, handleButton}) => {

  let meta = []
  if (question.category && question.category.length > 0) {
    question.category.forEach((element, index) => {
      meta.push(<Icon key={index} name={element} tooltip={Categories[element]}></Icon>)
    });
  }

  return (
    <div className="test-container">
      <div className="test-container__wrap left-col">
        <div className="test-container__item frage">
          <div className="test-meta top">
            <span className="test-meta__number fortschritt">
              {qid + 1} / {total}
            </span>
          </div>

          <div class="these">
            <div class="icon-tags"> {meta} </div>
          </div>

          <div class="text"> 
            <h1>{question.title || "missing"}</h1>
            <p>{question.content || "missing"}</p>
          </div>

        </div>
        <Buttons click={handleButton}/>
      </div>

      <div className="test-container__wrap right-col">
        <div className="test-container__item factsheet">
          <div dangerouslySetInnerHTML={{__html: question.html}} />
        </div>
      </div>
    </div>
  )
}

export default Question