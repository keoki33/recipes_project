import React, { Component } from "react";

// import RecipeCard from "./RecipeCard";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class NavbarLogin extends Component {
  state = {};

  whatever = () => {};

  displayLogin = () => {
    return this.props.user === "" ? (
      <div>
        <form
          onSubmit={event => {
            this.props.login(event);
          }}
        >
          <input type="text" name="user" />
          <button> Login </button>
        </form>
      </div>
    ) : (
      <div>
        {`Welcome ${this.props.user}  `}
        <br />
        <button
          onClick={event => {
            this.props.logout();
          }}
        >
          {" "}
          Logout{" "}
        </button>
      </div>
    );
  };

  render() {
    return <div className="NabarLogin">{this.displayLogin()}</div>;
  }
}

export default NavbarLogin;
