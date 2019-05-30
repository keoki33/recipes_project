import React, { Component } from "react";

// import RecipeCard from "./RecipeCard";

import { BrowserRouter as Router } from "react-router-dom";
// import { Icon } from "semantic-ui-react";

class RecipeCard extends Component {
  state = {
    favourite: false
  };

  whatever = () => {};

  toggleFavorite = () => {
    if (this.props.favorites.includes(this.props.recipe._id)) {
      // console.log(this.props.recipe._id);
      return (
        <button
          onClick={event => {
            event.stopPropagation();
            this.props.deleteFav(this.props.recipe._id);
          }}
          style={{ color: "red" }}
        >
          ♥
        </button>
      );
    } else
      return (
        <button
          onClick={event => {
            event.stopPropagation();
            this.props.addFav(this.props.recipe._id);
          }}
        >
          Add to Favorites ♥
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
          <p style={{ fontSize: 20 }}>{this.props.recipe.strMeal}</p>
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
