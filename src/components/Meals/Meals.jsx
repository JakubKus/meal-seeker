import React from 'react';
import PropTypes from 'prop-types';
import { Collapse } from 'reactstrap';

const Meals = ({
  meals,
  showLinks,
  clickedMealIndex,
  links,
  fetching,
}) => (
  <aside className="meals">
    {
      meals.map((element, index) => (
        <Collapse key={index} isOpen={element.isActive}>
          {
            clickedMealIndex !== index
              ? (
                <button onClick={() => showLinks(element.name, index)}>
                  {element.name}
                </button>
              )
              : (
                <div className={fetching.inProgress ? 'fetching' : 'fetched'}>
                  <p>{element.name}</p>
                  <div className="links">
                    {
                      links.map((link, linkIndex) => (
                        <a href={link} key={linkIndex}>Link</a>
                      ))
                    }
                  </div>
                  <img src="./spinner.svg" className="fetching" alt="fetching" />
                  <img
                    src="./error.svg"
                    className={fetching.error ? 'error' : ''}
                    alt="error"
                  />
                </div>
              )
          }
        </Collapse>
      ))
    }
    <div className="filler" />
  </aside>
);

Meals.propTypes = {
  meals: PropTypes.instanceOf(Array).isRequired,
  showLinks: PropTypes.func.isRequired,
  clickedMealIndex: PropTypes.number.isRequired,
  links: PropTypes.instanceOf(Array).isRequired,
  fetching: PropTypes.instanceOf(Object).isRequired,
};

export default Meals;
