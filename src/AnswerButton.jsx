import React from 'react';
import PropTypes from 'prop-types';

const AnswerButton = ({ toggleAnswer, isChecked, answer }) => (
  <button onClick={toggleAnswer} className={isChecked ? 'checked' : ''}>
    {answer}
  </button>
);

AnswerButton.propTypes = {
  toggleAnswer: PropTypes.func.isRequired,
  isChecked: PropTypes.bool.isRequired,
  answer: PropTypes.string.isRequired,
};

export default AnswerButton;
