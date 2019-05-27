import React, { Component } from "react";

// import RecipeCard from "./RecipeCard";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Card, Icon, Image } from "semantic-ui-react";

class RecipeCard extends Component {
  state = {};

  whatever = () => {};

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
              <button>
                {<Icon name="heart" />}
                Add to Favorites
              </button>
            </Card.Content>
          </Card>
        </div>
      </Router>
    );
  }
}

export default RecipeCard;
