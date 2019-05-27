import React, { Component } from "react";

// import RecipeCard from "./RecipeCard";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class NavbarDetails extends Component {
  state = {};

  whatever = () => {};

  render() {
    return (
      <div className="NavbarDetails">
        <p>NavbarDetails</p>
        <Link to="/recipes">
          <h3>Back to Recipes</h3>
        </Link>
      </div>
    );
  }
}

export default NavbarDetails;
