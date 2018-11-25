import React, { Component } from 'react';
import Form from '../Form/Form';
import Meals from '../Meals/Meals';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: [
        { type: 'question', content: 'Preparation time [mins]' },
        { type: 'answer', content: 'Less than 10', isChecked: false },
        { type: 'answer', content: '10 - 20', isChecked: false },
        { type: 'answer', content: 'More than 20', isChecked: false },
        { type: 'question', content: 'Temperature' },
        { type: 'answer', content: 'Hot', isChecked: false },
        { type: 'answer', content: 'Cold', isChecked: false },
        { type: 'question', content: 'Flavor' },
        { type: 'answer', content: 'Salty', isChecked: false },
        { type: 'answer', content: 'Sweet', isChecked: false },
        { type: 'answer', content: 'Spicy', isChecked: false },
        { type: 'question', content: 'Calories / serving' },
        { type: 'answer', content: 'Less than 100', isChecked: false },
        { type: 'answer', content: '100 - 300', isChecked: false },
        { type: 'answer', content: 'More than 300', isChecked: false },
        { type: 'question', content: 'Macros' },
        { type: 'answer', content: 'High carb', isChecked: false },
        { type: 'answer', content: 'High fat', isChecked: false },
        { type: 'answer', content: 'High protein', isChecked: false },
      ],
      meals: [
        {
          name: 'Apple pie',
          properties: [
            'More than 20',
            'Hot',
            'Cold',
            'Sweet',
            'More than 300',
            'High carb',
            'High fat',
          ],
          isActive: false,
        },
        {
          name: 'Burger',
          properties: [
            '10 - 20',
            'Hot', 'Salty',
            'More than 300',
            'High fat',
            'High protein',
          ],
          isActive: false,
        },
        {
          name: 'Casserole',
          properties: [
            'More than 20',
            'Hot',
            'Salty',
            'More than 300',
            'High fat',
          ],
          isActive: false,
        },
        {
          name: 'Cereal',
          properties: [
            'Less than 10',
            'Cold',
            'Sweet',
            '100 - 300',
            'High carb',
          ],
          isActive: false,
        },
        {
          name: 'Cheesecake',
          properties: [
            'More than 20',
            'Cold',
            'Sweet',
            'More than 300',
            'High carb',
            'High fat',
          ],
          isActive: false,
        },
        {
          name: 'Chicken with rice',
          properties: [
            '10 - 20',
            'Hot',
            'Salty',
            'Spicy',
            'More than 300',
            'High carb',
            'High protein',
          ],
          isActive: false,
        },
        {
          name: 'Drop scones',
          properties: [
            'Less than 10',
            'Hot',
            'Sweet',
            '100 - 300',
            'High carb',
          ],
          isActive: false,
        },
        {
          name: 'Kebab',
          properties: [
            'More than 20',
            'Hot',
            'Salty',
            'Spicy',
            'More than 300',
            'High fat',
            'High protein',
          ],
          isActive: false,
        },
        {
          name: 'Lasagna bolognese',
          properties: [
            'More than 20',
            'Hot',
            'Salty',
            'More than 300',
            'High carb',
            'High fat',
          ],
          isActive: false,
        },
        {
          name: 'Letcho',
          properties: [
            '10 - 20',
            'Hot',
            'Salty',
            'Spicy',
            '100 - 300',
            'High fat',
          ],
          isActive: false,
        },
        {
          name: 'Omelette',
          properties: [
            'Less than 10',
            'Hot',
            'Salty',
            'Sweet',
            'Less than 100',
            'High fat',
          ],
          isActive: false,
        },
        {
          name: 'Pancakes',
          properties: [
            'Less than 10',
            'Hot',
            'Sweet',
            '100 - 300',
            'High carb',
          ],
          isActive: false,
        },
        {
          name: 'Pizza',
          properties: [
            'More than 20',
            'Hot',
            'Salty',
            'Spicy',
            'More than 300',
            'High carb',
            'High fat',
          ],
          isActive: false,
        },
        {
          name: 'Pork chop',
          properties: [
            '10 - 20',
            'Hot',
            'Salty',
            'More than 300',
            'High fat',
            'High protein',
          ],
          isActive: false,
        },
        {
          name: 'Porridge',
          properties: [
            'Less than 10',
            'Hot',
            'Sweet',
            'Less than 100',
            'High carb',
          ],
          isActive: false,
        },
        {
          name: 'Potato pancakes',
          properties: [
            '10 - 20',
            'Hot',
            'Salty',
            '100 - 300',
            'High carb',
            'High fat',
          ],
          isActive: false,
        },
        {
          name: 'Salmon penne',
          properties: [
            '10 - 20',
            'Hot',
            'Salty',
            'More than 300',
            'High fat',
            'High protein',
          ],
          isActive: false,
        },
        {
          name: 'Scrambled eggs',
          properties: [
            'Less than 10',
            'Hot',
            'Salty',
            'Less than 100',
            'High fat',
            'High protein',
          ],
          isActive: false,
        },
        {
          name: 'Spaghetti bolognese',
          properties: [
            'More than 20',
            'Hot',
            'Salty',
            '100 - 300',
            'High carb',
          ],
          isActive: false,
        },
        {
          name: 'Tiramisu',
          properties: [
            'More than 20',
            'Cold',
            'Sweet',
            'More than 300',
            'High carb',
            'High fat',
          ],
          isActive: false,
        },
        {
          name: 'Toasts',
          properties: [
            'Less than 10',
            'Hot',
            'Salty',
            'Less than 100',
            'High carb',
          ],
          isActive: false,
        },
      ],
      allrecipes: false,
      simplyrecipes: false,
      tasteofhome: false,
    };
  }

  toggleAnswer = (answerIndex) => {
    const { form } = this.state;
    const answer = form[answerIndex];
    form.splice(answerIndex, 1, {
      ...answer,
      isChecked: answer.isChecked === false,
    });
    this.setState({ form }, this.showMeals);
  };

  showMeals = () => {
    const { form, meals } = this.state;
    const selectedProperties = [];
    form.forEach((formProperty) => {
      if (formProperty.type === 'answer' && formProperty.isChecked) {
        selectedProperties.push(formProperty.content);
      }
    });

    const matchingMeals = meals.map((meal) => {
      if (selectedProperties.length) {
        const doesMealActivate = selectedProperties.every(selectedProperty => (
          meal.properties.includes(selectedProperty)
        ));
        return { ...meal, isActive: doesMealActivate };
      }
      return { ...meal, isActive: false };
    });

    this.setState({ meals: matchingMeals });
  };

  showLinks = () => {
    const {
      randomMeal,
      disableRandomMeal,
      allrecipes,
      simplyrecipes,
      tasteofhome,
    } = this.state;

    const googleSearchKey = process.env.REACT_APP_GOOGLE_SEARCH_KEY;
    fetch(`https://www.googleapis.com/customsearch/v1?key=${googleSearchKey}=${randomMeal} recipe`)
      .then(response => (
        response.ok
          ? response.json()
          : this.setState({ disableRandomMeal: true })
      ))
      .then((result) => {
        if (disableRandomMeal === false) {
          result.items.forEach((item) => {
            const resultLink = item.displayLink;
            if (!allrecipes && resultLink.includes('allrecipes.com')) {
              this.setState({ allrecipes: item.link });
            }
            if (!simplyrecipes && resultLink.includes('simplyrecipes.com')) {
              this.setState({ simplyrecipes: item.link });
            }
            if (!tasteofhome && resultLink.includes('tasteofhome.com')) {
              this.setState({ tasteofhome: item.link });
            }
            if (allrecipes || simplyrecipes || tasteofhome) {
              this.setState({ randomMeal: '' });
            } else {
              this.setState({ disableRandomMeal: true });
            }
          });
        }
      });
  };

  render() {
    const {
      form,
      meals,
      allrecipes,
      simplyrecipes,
      tasteofhome,
    } = this.state;

    return (
      <main>
        <header><h1 className="pageTitle">Meal Seeker</h1></header>
        <div className="container">
          <Form form={form} toggleAnswer={this.toggleAnswer} />
          <Meals meals={meals} />
        </div>
      </main>
    );
  }
}
