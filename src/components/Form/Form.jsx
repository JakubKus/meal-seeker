import React from 'react';
import PropTypes from 'prop-types';
import AnswerButton from '../AnswerButton/AnswerButton';

const Form = ({ form, toggleAnswer, gaEvent }) => (
  <aside className="form">
    <h1 className="selectTip">
      {'Select at least one'}
      <img src="./arrow_down.png" alt="arrow down" />
    </h1>
    {
      form.map((element, index) => (
        element.type === 'answer'
          ? (
            <AnswerButton
              key={index}
              toggleAnswer={() => toggleAnswer(index)}
              isChecked={element.isChecked}
              answer={element.content}
              gaEvent={gaEvent}
            />
          )
          : <p key={index}>{element.content}</p>
      ))
    }
  </aside>
);

Form.propTypes = {
  form: PropTypes.instanceOf(Array).isRequired,
  toggleAnswer: PropTypes.func.isRequired,
  gaEvent: PropTypes.func.isRequired,
};

export default Form;
