import React from "react";

export default class SingleButton extends React.Component {
  render() {
    return (
      <button name="answer" onClick={this.props.toggleAnswer} className={this.props.isChecked ? "checked" : ""}>{this.props.answer}</button>
    )
  }
}