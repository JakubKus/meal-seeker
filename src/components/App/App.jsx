import React, { Component } from 'react';
import ReactGA from 'react-ga';
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
      clickedMealIndex: -1,
      links: [],
      fetching: { error: false, inProgress: false },
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

  showLinks = (meal, index) => {
    const googleSearchKey = process.env.REACT_APP_GOOGLE_SEARCH_KEY;
    this.setState({ clickedMealIndex: index, fetching: { inProgress: true } });

    fetch(`https://www.googleapis.com/customsearch/v1?key=${googleSearchKey}=${meal} recipe`)
      .then(response => (
        response.ok
          ? response.json()
          : this.setState({ fetching: { inProgress: false } })
      ))
      .then((result) => {
        const links = [];
        result.items.forEach((item) => {
          if (
            item.displayLink.includes('allrecipes.com')
            || item.displayLink.includes('simplyrecipes.com')
            || item.displayLink.includes('tasteofhome.com')
          ) {
            links.push(item.link);
          }
        });
        this.setState(
          links.length
            ? { links, fetching: { inProgress: false } }
            : { links, fetching: { inProgress: false, error: true } },
        );
      })
      .catch((e) => {
        this.setState({ fetching: { error: true, inProgress: false } });
        console.log(e.message);
      });
  };

  gaEvent = (category, action) => {
    ReactGA.event({ category, action });
  };

  render() {
    const {
      form,
      meals,
      clickedMealIndex,
      links,
      fetching,
    } = this.state;

    return (
      <main>
        <header><h1 className="pageTitle">Meal Seeker</h1></header>
        <div className="container">
          <Form
            form={form}
            toggleAnswer={this.toggleAnswer}
            gaEvent={this.gaEvent}
          />
          <Meals
            meals={meals}
            showLinks={this.showLinks}
            clickedMealIndex={clickedMealIndex}
            links={links}
            fetching={fetching}
            gaEvent={this.gaEvent}
          />
        </div>
      </main>
    );
  }
}
