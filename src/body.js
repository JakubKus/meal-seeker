import React from "react";
import Form from './form';
import Meals from "./meals";
import Footer from "./footer";
import RandomMealPopup from "./randomMealPopup";
import Blur from "./blur";

export default class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: [
        {type: "question",  content: "Preparation time [mins]"},
        {type: "answer",    content: "Less than 10",   isChecked: false},
        {type: "answer",    content: "10 - 20",        isChecked: false},
        {type: "answer",    content: "More than 20",   isChecked: false},
        {type: "question",  content: "Temperature"},
        {type: "answer",    content: "Hot",            isChecked: false},
        {type: "answer",    content: "Cold",           isChecked: false},
        {type: "question",  content: "Flavor"},
        {type: "answer",    content: "Salty",          isChecked: false},
        {type: "answer",    content: "Sweet",          isChecked: false},
        {type: "answer",    content: "Spicy",          isChecked: false},
        {type: "question",  content: "Calories / serving"},
        {type: "answer",    content: "Less than 100",  isChecked: false},
        {type: "answer",    content: "100 - 300",      isChecked: false},
        {type: "answer",    content: "More than 300",  isChecked: false},
        {type: "question",  content: "Macros"},
        {type: "answer",    content: "High carb",      isChecked: false},
        {type: "answer",    content: "High fat",       isChecked: false},
        {type: "answer",    content: "High protein",   isChecked: false}
      ],
      meals: [
        { name: "Apple pie",
          properties: ["More than 20", "Hot", "Cold", "Sweet", "More than 300", "High carb", "High fat"],
          isActive: false
        },
        { name: "Burger",
          properties: ["10 - 20", "Hot", "Salty", "More than 300", "High fat", "High protein"],
          isActive: false
        },
        { name: "Casserole",
          properties: ["More than 20", "Hot", "Salty", "More than 300", "High fat"],
          isActive: false
        },
        { name: "Cereal",
          properties: ["Less than 10", "Cold", "Sweet", "100 - 300", "High carb"],
          isActive: false
        },
        { name: "Cheesecake",
          properties: ["More than 20", "Cold", "Sweet", "More than 300", "High carb", "High fat"],
          isActive: false
        },
        { name: "Chicken with rice",
          properties: ["10 - 20", "Hot", "Salty", "Spicy", "More than 300", "High carb", "High protein"],
          isActive: false
        },
        { name: "Drop scones",
          properties: ["Less than 10", "Hot", "Sweet", "100 - 300", "High carb"],
          isActive: false
        },
        { name: "Kebab",
          properties: ["More than 20", "Hot", "Salty", "Spicy", "More than 300", "High fat", "High protein"],
          isActive: false
        },
        { name: "Lasagne bolognese",
          properties: ["More than 20", "Hot", "Salty", "More than 300", "High carb", "High fat"],
          isActive: false
        },
        { name: "Letcho",
          properties: ["10 - 20", "Hot", "Salty", "Spicy",  "100 - 300", "High fat"],
          isActive: false
        },
        { name: "Omelette",
          properties: ["Less than 10", "Hot", "Salty", "Sweet", "Less than 100", "High fat"],
          isActive: false
        },
        { name: "Pancakes",
          properties: ["Less than 10", "Hot", "Sweet", "100 - 300", "High carb"],
          isActive: false
        },
        { name: "Pizza",
          properties: ["More than 20", "Hot", "Salty", "Spicy", "More than 300", "High carb", "High fat"],
          isActive: false
        },
        { name: "Pork chop",
          properties: ["10 - 20", "Hot", "Salty", "More than 300", "High fat", "High protein"],
          isActive: false
        },
        { name: "Porridge",
          properties: ["Less than 10", "Hot", "Sweet", "Less than 100", "High carb"],
          isActive: false
        },
        { name: "Potato pancakes",
          properties: ["10 - 20", "Hot", "Salty", "100 - 300", "High carb", "High fat"],
          isActive: false
        },
        { name: "Salmon penne",
          properties: ["10 - 20", "Hot", "Salty", "More than 300", "High fat", "High protein"],
          isActive: false
        },
        { name: "Scrambled eggs",
          properties: ["Less than 10", "Hot", "Salty", "Less than 100", "High fat", "High protein"],
          isActive: false
        },
        { name: "Spaghetti bolognese",
          properties: ["More than 20", "Hot", "Salty", "100 - 300", "High carb"],
          isActive: false
        },
        { name: "Tiramisu",
          properties: ["More than 20", "Cold", "Sweet", "More than 300", "High carb", "High fat"],
          isActive: false
        },
        { name: "Toasts",
          properties: ["Less than 10", "Hot", "Salty", "Less than 100", "High carb"],
          isActive: false
        }
      ],
      isMealChosen: false,
      randomMeal: "",
      disableRandomMeal: false,
      allrecipes: false,
      simplyrecipes: false,
      tasteofhome: false
    };
  }

  toggleAnswer = (answerIndex) => {
    const formElement = this.state.form[answerIndex];
    const updatedForm = this.state.form;
    updatedForm.splice(answerIndex, 1, {
      ...formElement,
      isChecked: formElement.isChecked === false
    });
    this.setState({form: updatedForm}, this.showMeals)
  };

  showMeals = () => {
    const selectedProperties = [];
    this.state.form.forEach(formProperty => {
      if(formProperty.type === "answer")
        if(formProperty.isChecked)
          selectedProperties.push(formProperty.content)
    });
    const updatedMeals = this.state.meals.map(meal => {
      if(selectedProperties.length) {
        let shouldShowMeal = selectedProperties.every(selectedProperty => {
          return meal.properties.includes(selectedProperty);
        });
        return {...meal, isActive: shouldShowMeal}
      }
      else return {...meal, isActive: false}
    });
    this.setState({meals: updatedMeals})
  };

  chooseMeal = () => {
    const activeMeals = this.state.meals.filter(activeMeal =>
      activeMeal.isActive
    );
    const activeMealsNum = activeMeals.length;
    const randomMealIndex = Math.floor(Math.random() * activeMealsNum);
    const randomMeal = activeMealsNum && activeMeals[randomMealIndex].name;
    this.setState({isMealChosen: true, randomMeal: randomMeal});
  };

  closeChosenMeal = () => {
    this.setState({
      isMealChosen: false,
      randomMeal: "",
      disableRandomMeal: false,
      allrecipes: false,
      simplyrecipes: false,
      tasteofhome: false
    })
  };

  showLinks = () => {
    fetch(`https://www.googleapis.com/customsearch/v1?key=AIzaSyCTP476uPipVIGxjoyRRXkIfMUhlDcboH8&cx=016071729215467533297:y_i4qha-dzc&q=${this.state.randomMeal} recipe`)
      .then(response => {
        if (response.status.ok)
          this.setState({disableRandomMeal: true});
        else
          return response.json();
      })
      .then(result => {
        if(this.state.disableRandomMeal === false) {
          const allrecipes = this.state.allrecipes;
          const simplyrecipes = this.state.simplyrecipes;
          const tasteofhome = this.state.tasteofhome;
          result.items.forEach((item) => {
            const resultLink = item.displayLink;
            if (!allrecipes && resultLink.includes("allrecipes.com"))
              this.setState({allrecipes: item.link});
            if (!simplyrecipes && resultLink.includes("simplyrecipes.com"))
              this.setState({simplyrecipes: item.link});
            if (!tasteofhome && resultLink.includes("tasteofhome.com"))
              this.setState({tasteofhome: item.link});
            if (allrecipes || simplyrecipes || tasteofhome)
              this.setState({randomMeal: ""});
            else
              this.setState({disableRandomMeal: true});
          });
        }
      });
  };

  render() {

    return (
      <main>
        <Blur isMealChosen={this.state.isMealChosen}/>
        <Form form={this.state.form}
              toggleAnswer={this.toggleAnswer}
        />
        <Meals meals={this.state.meals}/>
        <Footer meals={this.state.meals}
                chooseMeal={this.chooseMeal}
        />
        <RandomMealPopup isMealChosen={this.state.isMealChosen}
                         allrecipes={this.state.allrecipes}
                         simplyrecipes={this.state.simplyrecipes}
                         tasteofhome={this.state.tasteofhome}
                         randomMeal={this.state.randomMeal}
                         disableRandomMeal={this.state.disableRandomMeal}
                         showLinks={this.showLinks}
                         closeChosenMeal={this.closeChosenMeal}
        />
      </main>
    )
  }
}