import React, { Component } from "react";

// import RecipeCard from "./RecipeCard";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Icon } from "semantic-ui-react";

class RecipeCard extends Component {
  state = {
    favourite: false
  };

  whatever = () => {};

  toggleFavorite = () => {
    if (this.props.favorites.includes(this.props.recipe._id)) {
      console.log(this.props.recipe._id);
      return (
        <button
          onClick={event => {
            event.stopPropagation();
            this.props.updateFavorites();
          }}
        >
          Add to Favorites ♥
        </button>
      );
    } else
      return (
        <button
          onClick={event => {
            event.stopPropagation();
            this.props.updateFavorites();
          }}
          style={{ color: "red" }}
        >
          ♥
        </button>
      );
  };
  //     <Icon name="heart" style={{ color: "red" }} />
  //   ) : (
  //     <Icon name="heart" />
  //   );
  // };

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
          {/* <button
            onClick={event => {
              event.stopPropagation();
              this.props.updateFavorites();
            }}
          >
            {this.toggleFavorite()}
          </button> */}
          {this.toggleFavorite()}
        </div>
      </Router>
    );
  }
}

export default RecipeCard;
