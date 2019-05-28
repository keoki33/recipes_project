import React, { Component } from "react";

import RecipeCard from "./RecipeCard";
import Navbar from "./Navbar";
import RecipeCardPlaceholder from "./RecipeCardPlaceholder";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class Recipes extends Component {
  state = {
    recipe: [],
    ingredientsList: []
  };

  componentDidMount() {
    this.setState({ loading: true });
    fetch("http://localhost:3000/api/recipes")
      .then(resp => resp.json())
      .then(x =>
        this.setState({ recipe: x.recipes, loading: false }, () =>
          this.setIngredientList()
        )
      );
  }

  setIngredientList = () => {
    let list = this.state.recipe.map(x => x.IngredientsArr);
    list = list.reduce((a, b) => a.concat(b), []);
    let filter = list.filter(x => x !== "" || null);
    let uniq = [...new Set(filter)];
    this.setState({ ingredientsList: uniq });
  };

  displayRecipes = () => {
    return this.state.loading ? (
      <RecipeCardPlaceholder />
    ) : (
      this.state.recipe.map(x => (
        <RecipeCard
          handleClick={() => this.props.history.push(`/recipe/${x.idMeal}`)}
          key={x.idMeal}
          recipe={x}
        />
      ))
    );
  };

  updateSearch = (search, time) => {
    console.log(search);
    console.log(time);
  };

  whatever = () => {};

  render() {
    return (
      <div className="Recipes">
        {/* {console.log(this.state.recipe)} */}
        <Navbar
          login={this.props.login}
          logout={this.props.logout}
          updateSearch={this.updateSearch}
          user={this.props.user}
          nav={this.props.nav}
          ingredientsList={this.state.ingredientsList}
          // recipes={this.state.recipe}
        />
        <div className="RecipesWrapper">{this.displayRecipes()}</div>
      </div>
    );
  }
}

export default Recipes;
