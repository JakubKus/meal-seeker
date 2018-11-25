import React from 'react';
import PropTypes from 'prop-types';
import { Collapse } from 'reactstrap';

const Meals = ({ meals }) => (
  <aside className="meals">
    {
      meals.map((element, index) => (
        <Collapse key={index} isOpen={element.isActive}>
          <p>{element.name}</p>
        </Collapse>
      ))
    }
    <div className="filler" />
  </aside>
);

Meals.propTypes = {
  meals: PropTypes.instanceOf(Array).isRequired,
};

export default Meals;
