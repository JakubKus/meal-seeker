import React from "react";
import { Collapse } from 'reactstrap';

export default class Meals extends React.Component {
  render() {
    const meals = this.props.meals.map((element, index) => {
      return (
        <Collapse key={index}
          isOpen={element.isActive}
        >
          <p>{element.name}</p>
        </Collapse>
      );
    });
    return <aside className="meals">{meals}<div className="filler"/></aside>
  }
}