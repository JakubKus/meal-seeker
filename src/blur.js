import React from "react";

export default class Blur extends React.Component {
  render() {
    const turnBlur = this.props.isMealChosen ? " on" : " off";

    return (
      <div className={"blur" + turnBlur}/>
    )
  }
}