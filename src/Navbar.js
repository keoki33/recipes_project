import React, { Component } from "react";
import { Grid, Image, Container, Menu } from "semantic-ui-react";

import NavbarSearch from "./NavbarSearch";
import NavbarLogin from "./NavbarLogin";
import NavbarDetails from "./NavbarDetails";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class Navbar extends Component {
  state = {};

  whatever = () => {};

  render() {
    return (
      <div className="Navbar">
        <Container>
          <Grid columns={3} divided>
            <Grid.Row>
              <Grid.Column width={2}>
                <h1>Logo</h1>
              </Grid.Column>
              <Grid.Column width={10}>
                <NavbarSearch />
              </Grid.Column>
              <Grid.Column width={3}>
                <NavbarLogin />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default Navbar;
