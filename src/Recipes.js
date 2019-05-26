import React, { Component } from "react";

import RecipeCard from "./RecipeCard";
import Navbar from "./Navbar";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class Recipes extends Component {
  state = {
    recipe: [
      {
        id: 7,
        name: "beef",
        ingredient: "steak",
        time: 10,
        url:
          "https://ih0.redbubble.net/image.552715814.6213/flat,1000x1000,075,f.u2.jpg",
        instructions:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum et repellendus odit, veniam voluptatem nemo quisquam cupiditate corporis doloremque nobis sequi iusto labore amet itaque nulla magnam aspernatur consequuntur dolores."
      },
      {
        id: 6,
        name: "chicken",
        ingredient: "steak",
        time: 10,
        url:
          "https://ih0.redbubble.net/image.552715814.6213/flat,1000x1000,075,f.u2.jpg",
        instructions:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum et repellendus odit, veniam voluptatem nemo quisquam cupiditate corporis doloremque nobis sequi iusto labore amet itaque nulla magnam aspernatur consequuntur dolores."
      },
      {
        id: 5,
        name: "cat",
        ingredient: "steak",
        time: 10,
        url:
          "https://ih0.redbubble.net/image.552715814.6213/flat,1000x1000,075,f.u2.jpg",
        instructions:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum et repellendus odit, veniam voluptatem nemo quisquam cupiditate corporis doloremque nobis sequi iusto labore amet itaque nulla magnam aspernatur consequuntur dolores."
      },
      {
        id: 1,
        name: "beef",
        ingredient: "steak",
        time: 10,
        url:
          "https://ih0.redbubble.net/image.552715814.6213/flat,1000x1000,075,f.u2.jpg",
        instructions:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum et repellendus odit, veniam voluptatem nemo quisquam cupiditate corporis doloremque nobis sequi iusto labore amet itaque nulla magnam aspernatur consequuntur dolores."
      },
      {
        id: 2,
        name: "beef",
        ingredient: "steak",
        time: 10,
        url:
          "https://ih0.redbubble.net/image.552715814.6213/flat,1000x1000,075,f.u2.jpg",
        instructions:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum et repellendus odit, veniam voluptatem nemo quisquam cupiditate corporis doloremque nobis sequi iusto labore amet itaque nulla magnam aspernatur consequuntur dolores."
      },
      {
        id: 3,
        name: "pig",
        ingredient: "steak",
        time: 10,
        url:
          "https://ih0.redbubble.net/image.552715814.6213/flat,1000x1000,075,f.u2.jpg",
        instructions:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum et repellendus odit, veniam voluptatem nemo quisquam cupiditate corporis doloremque nobis sequi iusto labore amet itaque nulla magnam aspernatur consequuntur dolores."
      },
      {
        id: 4,
        name: "dog",
        ingredient: "steak",
        time: 10,
        url:
          "https://ih0.redbubble.net/image.552715814.6213/flat,1000x1000,075,f.u2.jpg",
        instructions:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum et repellendus odit, veniam voluptatem nemo quisquam cupiditate corporis doloremque nobis sequi iusto labore amet itaque nulla magnam aspernatur consequuntur dolores."
      }
    ]
  };

  componentWillMount() {
    this.displayRecipes();
  }

  displayRecipes = () => {
    return this.state.recipe.map(x => (
      <RecipeCard
        handleClick={() => this.props.history.push(`/recipe/${x.id}`)}
        key={x.id}
        recipe={x}
      />
    ));
  };

  updateSearch = (search, time) => {
    console.log(search);
    console.log(time);
  };

  whatever = () => {};

  render() {
    return (
      <div className="Recipes">
        <Navbar
          updateSearch={this.updateSearch}
          user={this.props.user}
          nav={this.props.nav}
        />
        <div className="RecipesWrapper">{this.displayRecipes()}</div>
      </div>
    );
  }
}

export default Recipes;
