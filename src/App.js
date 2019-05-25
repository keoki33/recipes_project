import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Homepage from "./Homepage";

class App extends Component {
  state = {
    user: "",
    normal: true, //true will load normal site, false will be 2009 site
    selectedIngredients: [],
    timeField: 60,
    ingredientsField: ""
  };

  whatever = () => {};

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
    this.setState({
      timeField: x
    });
  };

  render() {
    return (
      <div className="App">
        <Homepage
          user={this.state.user}
          selectedIngredients={this.state.selectedIngredients}
          timeField={this.state.timeField}
          updateAppSearch={this.updateAppSearch}
          updateAppUser={this.updateAppUser}
          ingredientsField={this.state.ingredientsField}
          updateIngredientsField={this.updateIngredientsField}
          updatetimeField={this.updatetimeField}
        />
      </div>
    );
  }
}

export default App;
