import React, { Component } from "react";

// import RecipeCard from "./RecipeCard";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Card, Icon, Image, Placeholder } from "semantic-ui-react";

class RecipeCard extends Component {
  state = {
    favourite: false
  };

  whatever = () => {};

  toggleFavorite = () => {
    return this.state.favourite ? (
      <Icon name="heart" style={{ color: "red" }} />
    ) : (
      <Icon name="heart" />
    );
  };

  render() {
    return (
      <Router>
        <div
          className="RecipeCard"
          onClick={event => {
            this.props.handleClick();
          }}
        >
          <img
            src={this.props.recipe.strMealThumb}
            // width="100px"
            // height="100px"
            alt=""
          />
          <h4>{this.props.recipe.strMeal}</h4>
          Time to cook: {this.props.recipe.time} minutes
          <button
            onClick={event => {
              event.stopPropagation();
              this.state.favourite
                ? this.setState({ favourite: false })
                : this.setState({ favourite: true });
            }}
          >
            {this.toggleFavorite()}
            {this.state.favourite === false && "Add to Favourites"}
          </button>
        </div>
      </Router>
    );
  }
}

export default RecipeCard;
