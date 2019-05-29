import React, { Component } from "react";

import Recipes from "./Recipes";
import Details from "./Details";
import Navbar from "./Navbar";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class Homepage extends Component {
  state = {};

  whatever = () => {};

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route
              exact
              path="/recipes"
              component={props => (
                <Recipes
                  updateFavorites={this.props.updateFavorites}
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
              component={props => (
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
