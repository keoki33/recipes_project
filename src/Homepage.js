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
                  user={this.props.user}
                  selectedIngredients={this.props.selectedIngredients}
                  timeField={this.props.timeField}
                  updateAppSearch={this.props.updateAppSearch}
                  updateAppUser={this.props.updateAppUser}
                  ingredientsField={this.props.ingredientsField}
                  updateIngredientsField={this.props.updateIngredientsField}
                  updatetimeField={this.props.updatetimeField}
                  {...props}
                  nav={true}
                />
              )}
            />
            <Route
              path="/recipe/:id"
              component={props => <Details {...props} nav={false} />}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Homepage;
