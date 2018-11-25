import React from "react";

export default class RandomMealPopup extends React.Component {
  render() {
    const randomMealChosen = this.props.isMealChosen ? "chosen" : "notChosen";

    const allrecipesFound= this.props.allrecipes ? "" : "hidden";
    const simplyrecipesFound = this.props.simplyrecipes ? "" :"hidden";
    const tasteofhomeFound = this.props.tasteofhome ? "" : "hidden";

    const hideRandomMeal = !(allrecipesFound
      && simplyrecipesFound
      && tasteofhomeFound) ? "hidden" : "";

    return (
      <figure className={randomMealChosen}>
        <button className={hideRandomMeal}
                disabled={this.props.disableRandomMeal}
                id="randomMeal"
                onClick={this.props.showLinks}
        >
          {this.props.randomMeal}
        </button>
        <a className={allrecipesFound}
           href={this.props.allrecipes.toString()}
        >
          AllRecipes.com
        </a>
        <a className={simplyrecipesFound}
           href={this.props.simplyrecipes.toString()}
        >
          SimplyRecipes.com
        </a>
        <a className={tasteofhomeFound}
           href={this.props.tasteofhome.toString()}
        >
          TasteOfHome.com
        </a>
        <span className="close" onClick={this.props.closeChosenMeal}>×</span>
      </figure>
    )
  }
}
