import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Homepage from "./Homepage";

class App extends Component {
  state = {
    user: "",
    normal: true //true will load normal site, false will be 2009 site
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

  render() {
    return (
      <div className="body">
        <Homepage
          login={this.login}
          logout={this.logout}
          user={this.state.user}
        />
      </div>
    );
  }
}

export default App;
