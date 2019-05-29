import React, { Component } from "react";

// import RecipeCard from "./RecipeCard";
import Navbar from "./Navbar";
import DetailsContent from "./DetailsContent";
import DetailsPlaceholder from "./DetailsPlaceholder";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class Details extends Component {
  state = {
    recipes: [],
    recipe: ""
  };

  componentDidMount() {
    fetch("http://localhost:3000/api/recipes")
      .then(resp => resp.json())
      .then(x =>
        this.setState({ recipes: x.recipes }, () =>
          this.setState({
            recipe: this.state.recipes.filter(
              x => x._id == this.props.match.params.id
            )
          })
        )
      );
    console.log(this.state);
  }

  whatever = () => {};

  render() {
    return (
      <div className="DetailsWrapper">
        <Navbar
          user={this.props.user}
          login={this.props.login}
          logout={this.props.logout}
          recipe={this.state.recipe}
        />
        {this.state.recipe ? (
          <DetailsContent recipe={this.state.recipe} />
        ) : (
          <DetailsPlaceholder />
        )}
      </div>
    );
  }
}

export default Details;
