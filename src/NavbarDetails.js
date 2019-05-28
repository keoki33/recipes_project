import React, { Component } from "react";

// import RecipeCard from "./RecipeCard";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class NavbarDetails extends Component {
  state = {};

  whatever = () => {};

  render() {
    return (
      <div className="NavbarDetails">
        {/* <h1>{this.props.recipe[0].strMeal}</h1> */}
        {console.log(this.props)}

        <Link to="/recipes">Back to Recipes</Link>
      </div>
    );
  }
}

export default NavbarDetails;
