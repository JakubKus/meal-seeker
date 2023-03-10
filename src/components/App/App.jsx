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
        { type: 'answer', content: 'Less than 10', value: 'LessThan10', isChecked: false },
        { type: 'answer', content: '10 - 20', value: 'From10To20', isChecked: false },
        { type: 'answer', content: 'More than 20', value: 'MoreThan20', isChecked: false },
        { type: 'question', content: 'Temperature' },
        { type: 'answer', content: 'Hot', value: 'Hot', isChecked: false },
        { type: 'answer', content: 'Cold', value: 'Cold', isChecked: false },
        { type: 'question', content: 'Flavor' },
        { type: 'answer', content: 'Salty', value: 'Salty', isChecked: false },
        { type: 'answer', content: 'Sweet', value: 'Sweet', isChecked: false },
        { type: 'answer', content: 'Spicy', value: 'Spicy', isChecked: false },
        { type: 'question', content: 'Calories / serving' },
        { type: 'answer', content: 'Less than 100', value: 'LessThan100', isChecked: false },
        { type: 'answer', content: '100 - 300', value: 'From100To300', isChecked: false },
        { type: 'answer', content: 'More than 300', value: 'MoreThan300', isChecked: false },
        { type: 'question', content: 'Macros' },
        { type: 'answer', content: 'High carb', value: 'HighCarb', isChecked: false },
        { type: 'answer', content: 'High fat', value: 'HighFat', isChecked: false },
        { type: 'answer', content: 'High protein', value: 'HighProtein', isChecked: false },
      ],
      meals: [],
      clickedMealIndex: -1,
      links: [],
      fetching: { error: false, inProgress: false },
    };
  }

  componentDidMount() {
    fetch('https://meal-seeker-api.jkus.dev/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `{
          meals {
            name
            properties {
              calories
              flavor
              macros
              preparationTime
              temperature
            }
          }
        }`,
      }),
    }).then((x) => x.json()).then((res) => {
      this.setState({
        meals: res.data.meals.map((meal) => ({
          ...meal,
          properties: Object.values(meal.properties).flatMap((property) => property),
          isActive: false,
        })),
      });
    });
  }

  gaEvent = (category, action) => {
    ReactGA.event({ category, action });
  };

  showMeals = () => {
    const { form, meals } = this.state;
    const selectedProperties = [];

    form.forEach((formProperty) => {
      if (formProperty.type === 'answer' && formProperty.isChecked) {
        selectedProperties.push(formProperty.value);
      }
    });

    const matchingMeals = meals.map((meal) => {
      if (selectedProperties.length) {
        const shouldActivate = selectedProperties.every((selectedProperty) => (
          meal.properties.includes(selectedProperty)
        ));
        return { ...meal, isActive: shouldActivate };
      }
      return { ...meal, isActive: false };
    });

    this.setState({ meals: matchingMeals });
  };

  resetForm = () => {
    const { form } = this.state;

    const resettedForm = form.map((element) => {
      if (element.type === 'answer') {
        return { ...element, isChecked: false };
      }
      return element;
    });

    this.setState({ form: resettedForm }, this.showMeals);
  };

  showLinks = (meal, index) => {
    const googleSearchKey = process.env.REACT_APP_GOOGLE_SEARCH_KEY;
    const googleSearchEngineId = process.env.REACT_APP_GOOGLE_SEARCH_ENGINE_ID;
    const links = [];

    this.setState({ clickedMealIndex: index, fetching: { inProgress: true } });

    fetch(`https://www.googleapis.com/customsearch/v1?key=${googleSearchKey}&cx=${googleSearchEngineId}&q=${meal} recipe`)
      .then((response) => (
        response.ok
          ? response.json()
          : this.setState({ fetching: { inProgress: false } })
      ))
      .then((result) => {
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

  toggleAnswer = (answerIndex) => {
    const { form } = this.state;
    const answer = form[answerIndex];

    form.splice(answerIndex, 1, {
      ...answer,
      isChecked: answer.isChecked === false,
    });

    this.setState({ form }, this.showMeals);
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
        <header>
          <button className="title" onClick={this.resetForm}>Meal Seeker</button>
        </header>
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
