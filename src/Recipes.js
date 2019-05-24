import React, { Component } from "react";

import RecipeCard from "./RecipeCard";
import Navbar from "./Navbar";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class Recipes extends Component {
  state = {};

  whatever = () => {};

  render() {
    return (
      <div className="Recipes">
        <RecipeCard />
      </div>
    );
  }
}

export default Recipes;
