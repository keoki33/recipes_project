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
        <div className="RecipeCard">
          <Card
            onClick={event => {
              this.props.handleClick();
            }}
            raised={true}
          >
            <Image src={this.props.recipe.strMealThumb} wrapped ui={false} />

            <Card.Content>
              <Card.Header>{this.props.recipe.strMeal}</Card.Header>

              <Card.Description>
                Time to cook: {this.props.recipe.time} minutes
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
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
            </Card.Content>
          </Card>
        </div>
      </Router>
    );
  }
}

export default RecipeCard;
