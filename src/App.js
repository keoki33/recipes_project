import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Homepage from "./Homepage";

class App extends Component {
  state = {};

  whatever = () => {};

  render() {
    return (
      <div className="App">
        <Homepage />
      </div>
    );
  }
}

export default App;
