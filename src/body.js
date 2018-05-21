import React from "react";
import SingleButton from './singleButton';

export default class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: [
        {type: "question",  content: "Calories / 100g"},
        {type: "answer",    content: "Less than 100",  isChecked: false},
        {type: "answer",    content: "100 - 300",      isChecked: false},
        {type: "answer",    content: "More than 300",  isChecked: false},
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
        { name: "Beef curry",
          properties: ["100 - 300", "Salty", "More than 15", "Hard", "Hot", "High protein"],
          isActive: false
        },
        { name: "Cereal flakes",
          properties: ["More than 300", "Sweet", "Less than 5", "Easy", "Cold", "High carb"],
          isActive: false
        },
        { name: "Cheesecake",
          properties: ["More than 300", "Sweet", "More than 15", "Medium", "Cold", "High fat"],
          isActive: false
        },
        { name: "Lasagne bolognese",
          properties: ["100 - 300", "Salty", "More than 15", "Very hard", "Hot", "High fat"],
          isActive: false
        },
        { name: "Pancakes",
          properties: ["100 - 300", "Sweet", "5 - 15", "Medium", "Hot", "High carb", "High protein"],
          isActive: false
        },
        { name: "Pizza",
          properties: ["100 - 300", "Salty", "More than 15", "Medium", "Hot", "High carb"],
          isActive: false
        },
        { name: "Pork chop",
          properties: ["100 - 300", "Salty", "More than 15", "Medium", "Hot", "High carb"],
          isActive: false
        },
        { name: "Salmon penne",
          properties: ["100 - 300", "Salty", "More than 15", "Medium", "Hot", "High protein", "High carb"],
          isActive: false
        },
        { name: "Tiramisu",
          properties: ["100 - 300", "Sweet", "More than 15", "Hard", "Cold", "High fat"],
          isActive: false
        },
        { name: "Tuna Mornay",
          properties: ["Less than 100", "Salty", "More than 15", "Medium", "Hot", "High carb"],
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
    //fetch('https://www.googleapis.com/customsearch/v1?key=AIzaSyCTP476uPipVIGxjoyRRXkIfMUhlDcboH8&cx=016071729215467533297:y_i4qha-dzc&start=10&q=' + randomMeal + ' recipe')
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
      <div>
        <div className={"blur" + turnBlur}/>
        <aside className="form">{form}</aside>
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
      </div>
    )
  }
}