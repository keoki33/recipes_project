import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
// import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Homepage from "./Homepage";
import AnimationTest from "./AnimationTest";

class App extends Component {
  state = {
    user: "",
    normal: true, //true will load normal site, false will be 2009 site
    searchTime: 60,
    searchIngredients: [],
    favorites: [],
    userObject: "",
    test: ""
  };

  // when login update favorites array
  // when add fav add and then update state
  // when delete delete and then update state
  // when logout delete fav state

  whatever = () => {};

  login = event => {
    event.preventDefault();
    if (event.target.user.value != "") {
      this.setState({ user: event.target.user.value });
      fetch("http://localhost:3000/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          user: {
            email: `${event.target.user.value}@gmail.com`,
            password: "12345",
            username: event.target.user.value
          }
        })
      })
        .then(resp => resp.json())
        .then(() =>
          fetch("http://localhost:3000/api/users/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            },
            body: JSON.stringify({
              user: {
                email: `${this.state.user}@gmail.com`,
                password: "12345"
              }
            })
          })
            .then(resp => resp.json())
            .then(x =>
              this.setState(
                { userObject: x, favorites: x.user.favorites },
                () =>
                  localStorage.setItem(
                    "token",
                    this.state.userObject.user.token
                  )
              )
            )
        );
    }
  };

  logout = event => {
    event.preventDefault();
    this.setState({
      user: "",
      favorites: []
    });
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

  addFav = id => {
    if (this.state.user != "") {
      // console.log(id);
      // console.log(this.state.userObject.user.token);
      // console.log(this.state.userObject.user.favorites);

      fetch(`http://localhost:3000/api/recipes/${id}/favorite`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
          Authorization: `Token ${this.state.userObject.user.token}` // this is needed
        }
      }).then(resp => resp.json());
      this.setState({ favorites: [...this.state.favorites, id] });
    }
    console.log(this.state.user);
  };

  deleteFav = id => {
    // console.log(id);
    // console.log(this.state.userObject.user.token);
    // console.log(this.state.userObject.user.favorites);

    fetch(`http://localhost:3000/api/recipes/${id}/favorite`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        Authorization: `Token ${this.state.userObject.user.token}` // this is needed
      }
    }).then(resp => resp.json());
    this.setState({ favorites: this.state.favorites.filter(x => x != id) });
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
          deleteFav={this.deleteFav}
          addFav={this.addFav}
        />
      </div>
      // <AnimationTest />
    );
  }
}

export default App;
