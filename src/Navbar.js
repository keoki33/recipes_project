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
                {this.props.nav ? (
                  <NavbarSearch
                    user={this.props.user}
                    selectedIngredients={this.props.selectedIngredients}
                    timeField={this.props.timeField}
                    updateAppSearch={this.props.updateAppSearch}
                    updateAppUser={this.props.updateAppUser}
                    ingredientsField={this.props.ingredientsField}
                    updateIngredientsField={this.props.updateIngredientsField}
                    updatetimeField={this.props.updatetimeField}
                  />
                ) : (
                  <NavbarDetails />
                )}
              </Grid.Column>
              <Grid.Column width={3}>
                <NavbarLogin
                  user={this.props.user}
                  updateAppUser={this.props.updateAppUser}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default Navbar;
