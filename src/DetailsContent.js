import React, { Component } from "react";

// import RecipeCard from "./RecipeCard";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class DetailsContent extends Component {
  state = {};

  whatever = () => {};

  displayIngredients = () => {
    let measure = this.props.recipe[0].MeasurementsArr.map(x => x);
    let ingredients = this.props.recipe[0].IngredientsArr.map(x => x);
    let list = [];
    measure.forEach((item, index) => {
      list.push(item.concat(` ${ingredients[index]}`));
    });
    const filtered = list.filter(x => x !== " ");
    return filtered.map(x => <li>{x}</li>);
  };

  render() {
    return (
      <div className="detailsContent">
        <div className="detailsImage">
          <h1>{this.props.recipe[0].strMeal}</h1>
          <img
            width="420"
            height="315"
            src={this.props.recipe[0].strMealThumb}
            alt={this.props.recipe[0].strMealThumb}
          />
        </div>
        <div className="detailsIngredients">
          <ul>{this.displayIngredients()}</ul>
        </div>
        <div className="detailsInstructions">
          <iframe
            width="420"
            height="315"
            src={this.props.recipe[0].strYoutube.replace("watch?v=", "embed/")}
          />
          <p>{this.props.recipe[0].strInstructions}</p>
        </div>
        <div className="detailsVideo">
          <iframe
            width="420"
            height="315"
            src={this.props.recipe[0].strYoutube.replace("watch?v=", "embed/")}
          />
        </div>
      </div>
    );
  }
}

export default DetailsContent;
