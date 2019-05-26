import React, { Component } from "react";

// import RecipeCard from "./RecipeCard";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class DetailsContent extends Component {
  state = {};

  whatever = () => {};

  render() {
    return (
      <div className="DetailsContent">
        <h1> {this.props.recipe[0].name}</h1>
        <div className="DetailsImage">
          <h1>image DetailsImage</h1>
        </div>
        <div className="DetailsIngredients">
          <h1>ingredients DetailsIngredients</h1>
        </div>
        <div className="DetailsInstructions">
          <h1>instruction DetailsInstructions</h1>
        </div>
        <div className="DetailsVideo">
          <h1>video DetailsVideo</h1>
        </div>
        {console.log(this.props)}
      </div>
    );
  }
}

export default DetailsContent;
