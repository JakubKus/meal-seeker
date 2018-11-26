import React from 'react';
import PropTypes from 'prop-types';

const AnswerButton = ({
  toggleAnswer,
  isChecked,
  answer,
  gaEvent,
}) => (
  <button
    onClick={() => {
      toggleAnswer();
      gaEvent('Answer', answer);
    }}
    className={isChecked ? 'checked' : ''}
  >
    {answer}
  </button>
);

AnswerButton.propTypes = {
  toggleAnswer: PropTypes.func.isRequired,
  isChecked: PropTypes.bool.isRequired,
  answer: PropTypes.string.isRequired,
  gaEvent: PropTypes.func.isRequired,
};

export default AnswerButton;
