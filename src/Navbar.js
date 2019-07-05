import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Grid, Image, Container, Menu } from "semantic-ui-react";

import NavbarSearch from "./NavbarSearch";
import NavbarLogin from "./NavbarLogin";
import NavbarDetails from "./NavbarDetails";

// import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class Navbar extends Component {
  state = {};

  whatever = () => {};

  navbarMode = () => {
    return this.props.nav ? (
      <div className="navbarSearch">
        <NavbarSearch
          ingredientsList={this.props.ingredientsList}
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
          <Link to="/recipes">
            <img
              src={require(`./logo.jpeg`)}
              alt=""
              width="90"
              height="90"
            />
          </Link>
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
