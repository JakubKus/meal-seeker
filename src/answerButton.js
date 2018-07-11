import React from "react";

export default class AnswerButton extends React.Component {
  render() {
    return (
      <button
        onClick={this.props.toggleAnswer}
        className={this.props.isChecked ? "checked" : ""}
      >
        {this.props.answer}
      </button>
    )
  }
}