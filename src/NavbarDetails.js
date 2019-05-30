import React, { Component } from "react";

// import RecipeCard from "./RecipeCard";

import { Link } from "react-router-dom";

class NavbarDetails extends Component {
  state = {};

  whatever = () => {};

  render() {
    return (
      <div className="NavbarDetails">
        <h1>{this.props.recipe[0] && this.props.recipe[0].strMeal}</h1>
        {console.log(this.props.recipe[0])}

        <Link to="/recipes">Back to Recipes</Link>
      </div>
    );
  }
}

export default NavbarDetails;
