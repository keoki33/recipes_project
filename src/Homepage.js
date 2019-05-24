import React, { Component } from "react";

import Recipes from "./Recipes";
import Details from "./Details";
import Navbar from "./Navbar";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class Homepage extends Component {
  state = {
    nav: true // if true loads homepage navbar, if false loads detail page navbar
  };

  whatever = () => {};

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar nav={this.state.nav} />
          <Route exact path="/recipes" component={props => <Recipes />} />
          <Route exact path="/recipe" component={props => <Details />} />
        </div>
      </Router>
    );
  }
}

export default Homepage;
