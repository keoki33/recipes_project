import React, { Component } from "react";

// import RecipeCard from "./RecipeCard";
import Navbar from "./Navbar";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class Details extends Component {
  state = {};

  whatever = () => {};

  render() {
    return (
      <div className="Details">
        <p>Recipe Details Page</p>

        <Link to="/recipes">
          <h1>Back to Recipes</h1>
        </Link>
      </div>
    );
  }
}

export default Details;
