import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Homepage from "./Homepage";

class App extends Component {
  state = {
    user: "",
    normal: true, //true will load normal site, false will be 2009 site
    searchTime: 60,
    searchIngredients: [],
    favorites: [
      "5cee639d08e61093a10307c1",
      "5cee639d08e61093a10307c3",
      "5cee639d08e61093a10307c2"
    ]
  };

  whatever = () => {};

  login = event => {
    // event.preventDefault();
    // event.stopPropagation();
    this.setState({ user: event.target.user.value });
    // console.log(this.state);
  };

  logout = event => {
    event.preventDefault();
    this.setState({ user: "" });
  };

  updateAppSearch = (searchTerms, searchTime) => {
    // console.log(searchTerms);
    // console.log(searchTime);
    // this.setState({
    //   searchTerms: searchTerms,
    //   searchTime: searchTime
    // });
  };

  updateAppUser = user => {
    this.setState({
      user: user
    });
  };

  updateIngredientsField = x => {
    this.setState({
      ingredientsField: x
    });
  };

  updatetimeField = x => {
    // console.log(x);
    this.setState({
      timeField: x
    });
  };

  updateAppSearchTime = (search, time) => {
    this.setState({
      searchTime: time,
      searchIngredients: search
    });
  };

  updateFavorites = () => {
    console.log("updatefav");
  };

  render() {
    return (
      <div className="body">
        <Homepage
          searchTime={this.state.searchTime}
          searchIngredients={this.state.searchIngredients}
          updateAppSearchTime={this.updateAppSearchTime}
          favorites={this.state.favorites}
          login={this.login}
          logout={this.logout}
          user={this.state.user}
          updateFavorites={this.updateFavorites}
        />
      </div>
    );
  }
}

export default App;
