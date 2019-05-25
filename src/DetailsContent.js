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
        {console.log(this.props)}
      </div>
    );
  }
}

export default DetailsContent;
