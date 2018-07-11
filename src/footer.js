import React from "react";

export default class Footer extends React.Component {
  render() {
    const chooseButtonActive = this.props.meals.some(meal => {
      return meal.isActive;
    }) ? " active" : "";
    return (
      <footer className={"chooseButton" + chooseButtonActive}>
        <button disabled={!chooseButtonActive}
                onClick={this.props.chooseMeal}
        >
          Choose
        </button>
      </footer>
    )
  }
}