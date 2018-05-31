import React from "react";
import SingleButton from './singleButton';

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
    this.showMeals = this.showMeals.bind(this);
    this.chooseMeal = this.chooseMeal.bind(this);
    this.closeChosenMeal = this.closeChosenMeal.bind(this);
    this.showLinks = this.showLinks.bind(this);
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

  chooseMeal() {
    let activeMeals = this.state.meals.filter(activeMeal => activeMeal.isActive === true);
    let randomMeal = (activeMeals.length > 0) && activeMeals[Math.floor(Math.random() * activeMeals.length)].name;
    this.setState({isMealChosen: true, randomMeal: randomMeal});
  }

  closeChosenMeal() {
    this.setState({isMealChosen: false, randomMeal: "", disableRandomMeal: false, allrecipes: false, simplyrecipes: false, tasteofhome: false})
  }

  showLinks() {
    fetch('https://www.googleapis.com/customsearch/v1?key=AIzaSyCTP476uPipVIGxjoyRRXkIfMUhlDcboH8&cx=016071729215467533297:y_i4qha-dzc&q=' + this.state.randomMeal + ' recipe')
      .then(response => {
        if (response.status !== 200) {
          this.setState({disableRandomMeal: true})
        }
        else {
          return response.json();
        }
      })
      .then(result => {
        if(this.state.disableRandomMeal === false) {
          let allrecipes = false;
          let simplyrecipes = false;
          let tasteofhome = false;
          result.items.map((item) => {
            if (!allrecipes && item.displayLink.includes("allrecipes.com")) {
              this.setState({allrecipes: item.link});
              allrecipes = true;
            }
            if (!simplyrecipes && item.displayLink.includes("simplyrecipes.com")) {
              this.setState({simplyrecipes: item.link});
              simplyrecipes = true;
            }
            if (!tasteofhome && item.displayLink.includes("tasteofhome.com")) {
              this.setState({tasteofhome: item.link});
              tasteofhome = true;
            }
            if (allrecipes || simplyrecipes || tasteofhome) {
              this.setState({randomMeal: ""})
            }
            else {
              this.setState({disableRandomMeal: true})
            }
            return result;
          });
        }
      });
  }

  render() {
    let form = this.state.form.map((element, index) => {
      return (
        element.type === "answer" ?
          <SingleButton answer={element.content}
                        toggleAnswer={this.toggleAnswer.bind(this, index)}
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
    let chooseButtonActive = meals.some(meal => meal.props.className !== "inactive") ? " active" : "";

    let randomMealChosen = this.state.isMealChosen ? "chosen" : "notChosen";
    let turnBlur = this.state.isMealChosen ? " on" : " off";
    let allrecipesFound= this.state.allrecipes ? "" : "hidden";
    let simplyrecipesFound = this.state.simplyrecipes ? "" :"hidden";
    let tasteofhomeFound = this.state.tasteofhome ? "" : "hidden";
    let hideRandomMeal = !(allrecipesFound && simplyrecipesFound && tasteofhomeFound) ? "hidden" : "";


    return(
      <main>
        <div className={"blur" + turnBlur}/>
        <aside className="form"><h1 className="selectTip">Select at least one <img alt="arrow down" src="arrow_down.png"/></h1>{form}</aside>
        <aside className="meals">{meals}</aside>
        <footer className={"chooseButton" + chooseButtonActive}>
          <button disabled={!chooseButtonActive} onClick={this.chooseMeal}>Choose</button>
        </footer>
        <figure className={randomMealChosen}>
          <button className={hideRandomMeal} disabled={this.state.disableRandomMeal} id="randomMeal" onClick={this.showLinks}>{this.state.randomMeal}</button>
          <a className={allrecipesFound} href={this.state.allrecipes.toString()}>AllRecipes.com</a>
          <a className={simplyrecipesFound} href={this.state.simplyrecipes.toString()}>SimplyRecipes.com</a>
          <a className={tasteofhomeFound} href={this.state.tasteofhome.toString()}>TasteOfHome.com</a>
          <span className="close" onClick={this.closeChosenMeal}>&times;</span>
        </figure>
      </main>
    )
  }
}