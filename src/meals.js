import React from "react";

export default class Meals extends React.Component {
  render() {
    const meals = this.props.meals.map((element, index) => {
      return (
        <p key={index}
           className={element.isActive ? "" : "inactive"}
        >
          {element.name}
        </p>
      );
    });
    return <aside className="meals">{meals}<div className="filler"/></aside>
  }
}