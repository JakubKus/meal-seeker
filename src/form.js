import React from "react";
import AnswerButton from "./answerButton";

export default class Form extends React.Component {
  render() {
    const form = this.props.form.map((element, index) => {
      return (
        element.type === "answer"
          ? <AnswerButton toggleAnswer={() => this.props.toggleAnswer(index)}
                          isChecked={element.isChecked}
                          answer={element.content}
                          key={index}
          />
          : <p key={index}>{element.content}</p>
      )
    });

    return (
      <aside className="form">
        <h1 className="selectTip">
          Select at least one
          <img alt="arrow down" src="arrow_down.png"/>
        </h1>
        {form}
      </aside>
    )
  }
}