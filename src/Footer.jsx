import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ meals, chooseMeal }) => {
  const anyMealActive = meals.some(meal => meal.isActive);
  return (
    <footer className={anyMealActive ? 'chooseButton active' : 'chooseButton'}>
      <button disabled={!anyMealActive} onClick={chooseMeal}>
        {'Choose'}
      </button>
    </footer>
  );
};

Footer.propTypes = {
  meals: PropTypes.instanceOf(Array).isRequired,
  chooseMeal: PropTypes.func.isRequired,
};

export default Footer;
