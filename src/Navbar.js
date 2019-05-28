import React, { Component } from "react";
import { Grid, Image, Container, Menu } from "semantic-ui-react";

import NavbarSearch from "./NavbarSearch";
import NavbarLogin from "./NavbarLogin";
import NavbarDetails from "./NavbarDetails";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class Navbar extends Component {
  state = {};

  whatever = () => {};

  navbarMode = () => {
    return this.props.nav ? (
      <div className="navbarSearch">
        <NavbarSearch
          updateSearch={this.props.updateSearch}
          user={this.props.user}
        />
      </div>
    ) : (
      <div className="navbarDetails">
        <NavbarDetails recipe={this.props.recipe} />
      </div>
    );
  };

  render() {
    return (
      <div className="navbar">
        <div className="navbarLogo">
          <img
            src={require(`/Users/flatironschool/Development/recipes_project/src/logo.jpeg`)}
            alt=""
            width="80"
            height="80"
          />
        </div>
        {this.navbarMode()}
        <div className="navbarLogin">
          <NavbarLogin
            login={this.props.login}
            logout={this.props.logout}
            user={this.props.user}
            updateAppUser={this.props.updateAppUser}
          />
        </div>
      </div>
    );
  }
}

export default Navbar;
