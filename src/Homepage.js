import React, { Component } from "react";

import Recipes from "./Recipes";
import Details from "./Details";
// import Navbar from "./Navbar";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class Homepage extends Component {
  state = {
    recipe: []
  };

  whatever = () => {};

  loadAllRecipes = () => {
    fetch("http://localhost:3000/api/recipes")
      .then(resp => resp.json())
      .then(x => this.setState({ recipe: x.recipes, loading: false }));
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route
              exact
              path="/recipes"
              render={props => (
                <Recipes
                  recipes={this.state.recipe}
                  deleteFav={this.props.deleteFav}
                  addFav={this.props.addFav}
                  favorites={this.props.favorites}
                  searchTime={this.props.searchTime}
                  searchIngredients={this.props.searchIngredients}
                  login={this.props.login}
                  logout={this.props.logout}
                  user={this.props.user}
                  {...props}
                  nav={true}
                />
              )}
            />
            <Route
              path="/recipe/:id"
              render={props => (
                <Details
                  login={this.props.login}
                  logout={this.props.logout}
                  user={this.props.user}
                  {...props}
                  nav={false}
                />
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Homepage;
