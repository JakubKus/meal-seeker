import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class FoodPicker extends React.Component {
  render() {
    return(
      <main className="container">
        <h2 className="pageTitle">Food Picker</h2>
        <Body/>
      </main>
    )
  }
}

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: [
        {type: "question",  content: "Calories / 100g"},
        {type: "answer",    content: "Less than 200",  isChecked: false},
        {type: "answer",    content: "200 - 500",      isChecked: false},
        {type: "answer",    content: "More than 500",  isChecked: false},
        {type: "question",  content: "Flavor"},
        {type: "answer",    content: "Salty",          isChecked: false},
        {type: "answer",    content: "Sweet",          isChecked: false},
        {type: "answer",    content: "Spicy",          isChecked: false},
        {type: "answer",    content: "Bitter",         isChecked: false},
        {type: "answer",    content: "Sour",           isChecked: false},
        {type: "question",  content: "Preparation time [mins]"},
        {type: "answer",    content: "Less than 5",    isChecked: false},
        {type: "answer",    content: "5 - 15",         isChecked: false},
        {type: "answer",    content: "More than 15",   isChecked: false},
        {type: "question",  content: "Difficulty level"},
        {type: "answer",    content: "Easy",           isChecked: false},
        {type: "answer",    content: "Medium",         isChecked: false},
        {type: "answer",    content: "Hard",           isChecked: false},
        {type: "answer",    content: "Very hard",      isChecked: false},
        {type: "question",  content: "Temperature"},
        {type: "answer",    content: "Hot",            isChecked: false},
        {type: "answer",    content: "Cold",           isChecked: false},
        {type: "question",  content: "Macros"},
        {type: "answer",    content: "High carb",      isChecked: false},
        {type: "answer",    content: "High fat",       isChecked: false},
        {type: "answer",    content: "High protein",   isChecked: false}
      ],
      meals: [
        {name: "Pizza",     properties: ["200 - 500", "Salty", "More than 15", "Medium", "Hot", "High carb"],       isActive: false},
        {name: "Pancakes",  properties: ["200 - 500", "Sweet", "5 - 15", "Medium", "Hot", "High carb", "High fat"], isActive: false}
      ]
    };
    this.showMeals = this.showMeals.bind(this)
  }

  toggleAnswer(answerIndex) {
    let formElement = this.state.form[answerIndex];
    let updatedForm = this.state.form;
    updatedForm.splice(answerIndex, 1, {type: formElement.type, content: formElement.content, isChecked: formElement.isChecked === false});
    this.setState({form: updatedForm}, this.showMeals)
  }

  showMeals() {
    let showMeal;
    let updatedMeals = this.state.meals.map((meal) => {
      showMeal = "unknown";
      this.state.form.map((formProperty) => {
        if (showMeal)
        if (formProperty.type === "answer")
        if (formProperty.isChecked)
          showMeal = meal.properties.some(mealProperty => mealProperty === formProperty.content);
        return showMeal;
      });
      return {name: meal.name, isActive: showMeal === true, properties: meal.properties}
    });
    this.setState({meals: updatedMeals})
  }

  render() {
    let form = this.state.form.map((element, index) => {
      return (
        element.type === "answer" ?
          <SingleButton answer={element.content}
            checkAnswer={this.toggleAnswer.bind(this, index)}
            isChecked={this.state.form[index].isChecked}
            key={index}
          />
        :
          <p key={index}>{element.content}</p>
      )
    });

    let meals = this.state.meals.map((element, index) => {
      return <p key={index} className={element.isActive ? "" : "inactive"}>{element.name}</p>
    });

    let chooseButton = meals.some(meal => meal.props.className !== "inactive");

    return(
      <div>
        <aside className="form">{form}</aside>
        <aside className="meals">{meals}</aside>
        <footer className={chooseButton ? "chooseButton active" : "chooseButton"}>
          <button>Choose</button>
        </footer>
      </div>
    )
  }
}

class SingleButton extends React.Component {
  render() {
    return (
      <button name="answer" onClick={this.props.checkAnswer} className={this.props.isChecked ? "checked" : ""}>{this.props.answer}</button>
    )
  }
}

ReactDOM.render( <FoodPicker/>, document.getElementById('root') );