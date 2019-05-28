import React, { Component } from "react";
import { Form, Input, Search, Select } from "semantic-ui-react";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class NavbarSearch extends Component {
  state = {
    timeField: 60,
    ingredientsField: "",
    ingredients: ["beef", "chocolate", "chicken", "dog", "cat"],
    selectedIngredients: []
  };

  whatever = () => {};

  handleClick = event => {
    // console.log(this.state.ingredientsField);
    // console.log(this.state.timeField);
    this.state.ingredientsField !== "" &&
      !this.state.selectedIngredients.includes(this.state.ingredientsField) &&
      this.setState(
        {
          selectedIngredients: [
            ...this.state.selectedIngredients,
            this.state.ingredientsField
          ],
          ingredientsField: ""
        },
        () => {
          this.props.updateSearch(
            this.state.selectedIngredients,
            this.state.timeField
          );
        }
      );
  };

  displayIngredients = () => {
    return this.props.ingredientsList.map(x => <option key={x} value={x} />);
  };

  ingredientButtons = () => {
    return this.state.selectedIngredients.map(x => (
      <button
        onClick={event => {
          this.deleteIngredient(event);
        }}
        key={x}
        className="iButton"
        type=""
        name={x}
      >
        {x} x
      </button>
    ));
  };

  deleteIngredient = e => {
    // console.log(e.target.name);
    this.setState({
      selectedIngredients: this.state.selectedIngredients.filter(
        x => x !== e.target.name
      )
    });
  };

  render() {
    return (
      <div>
        <Form>
          <Form.Field>
            <div className="ui action input">
              <div className="navbarSearch">
                <Input
                  onChange={event => {
                    this.setState({ ingredientsField: event.target.value });
                  }}
                  value={this.state.ingredientsField}
                  name="ingredients"
                  id="ingredients"
                  list="Ingredients"
                  placeholder="Choose Ingredient"
                />
                <datalist id="Ingredients">
                  {this.displayIngredients()}
                </datalist>
              </div>
              <div>
                <Input
                  placeholder="Default 60 mins"
                  name="time"
                  value={this.state.timeField}
                  onChange={event => {
                    // this.props.updatetimeField(event.target.value);
                    this.setState({ timeField: event.target.value });
                  }}
                />
              </div>
              <button
                onClick={event => {
                  this.handleClick(event);
                }}
                className="ui action input"
                type=""
              >
                Select
              </button>
            </div>
          </Form.Field>
        </Form>
        {this.ingredientButtons()}
      </div>
    );
  }
}

export default NavbarSearch;
