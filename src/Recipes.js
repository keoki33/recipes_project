import React, { Component } from "react";

import RecipeCard from "./RecipeCard";
import Navbar from "./Navbar";
import RecipeCardPlaceholder from "./RecipeCardPlaceholder";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class Recipes extends Component {
  state = {
    recipe: [],
    ingredientsList: [],
    searchTime: 60,
    searchIngredients: [],
    fetchUrl: "http://localhost:3000/api/recipes"
  };

  componentDidMount() {
    this.loadAllRecipes();
  }

  loadAllRecipes = () => {
    this.setState({ loading: true });
    fetch("http://localhost:3000/api/recipes")
      .then(resp => resp.json())
      .then(x =>
        this.setState({ recipe: x.recipes, loading: false }, () =>
          this.setIngredientList()
        )
      );
  };

  setIngredientList = () => {
    let list = this.state.recipe.map(x => x.IngredientsArr);
    list = list.reduce((a, b) => a.concat(b), []);
    let filter = list.filter(x => x !== "" || null);
    let uniq = [...new Set(filter)];
    let sorted = uniq.sort((a, b) =>
      a.toLowerCase().localeCompare(b.toLowerCase())
    );
    this.setState({ ingredientsList: sorted });
  };

  displayRecipes = () => {
    return this.state.loading ? (
      <RecipeCardPlaceholder />
    ) : (
      this.state.recipe.map(x => (
        <RecipeCard
          handleClick={() => this.props.history.push(`/recipe/${x._id}`)}
          key={x._id}
          recipe={x}
        />
      ))
    );
  };

  updateSearch = (search, time) => {
    console.log(search);

    if (search === undefined || search.length == 0) {
      this.setState({
        searchTime: time,
        searchIngredients: search,
        loading: true
      });
      fetch(`http://localhost:3000/api/recipes/search?q=&time=${time}`)
        .then(resp => resp.json())
        .then(x =>
          this.setState({ recipe: x.recipes, loading: false }, () =>
            this.setIngredientList()
          )
        );
    } else {
      this.setState({
        searchTime: time,
        searchIngredients: search,
        loading: true
      });
      let end = search.join(",");
      let url = "http://localhost:3000/api/recipes/search?q="
        .concat(end)
        .replace(/,*$/, "")
        .concat(`&time=${time}`);
      console.log(url);
      fetch(`${url}`)
        .then(resp => resp.json())
        .then(x =>
          this.setState({ recipe: x.recipes, loading: false }, () =>
            this.setIngredientList()
          )
        );
    }
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
