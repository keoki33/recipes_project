import React, { Component } from "react";
import { Link } from "react-router-dom";

// import RecipeCard from "./RecipeCard";

// import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class NavbarLogin extends Component {
  state = {};

  whatever = () => {};

  displayLogin = () => {
    return this.props.user === "" ? (
      <div>
        <form
          onSubmit={event => {
            event.preventDefault();
            this.props.login(event);
          }}
        >
          <input type="text" name="user" />
          <button> Login </button>
        </form>
        <div id="social">
          <img
            src={require(`./s1.png`)}
            alt=""
            width="25"
            height="25"
          />
          <img
            src={require(`./s2.png`)}
            alt=""
            width="25"
            height="25"
          />
          <img
            src={require(`./s3.png`)}
            alt=""
            width="25"
            height="25"
          />
          <a href="https://www.facebook.com">
            <img
              src={require(`./s4.png`)}
              alt=""
              width="25"
              height="25"
            />
          </a>
          <img
            src={require(`./s5.png`)}
            alt=""
            width="25"
            height="25"
          />
        </div>
      </div>
    ) : (
      <div>
        {`Welcome ${this.props.user}  `}
        <br />
        <button
          type="button"
          onClick={event => {
            this.props.logout(event);
          }}
        >
          Logout
        </button>
        <div id="social">
          <img
            src={require(`./s1.png`)}
            alt=""
            width="25"
            height="25"
          />
          <img
            src={require(`./s2.png`)}
            alt=""
            width="25"
            height="25"
          />
          <img
            src={require(`./s3.png`)}
            alt=""
            width="25"
            height="25"
          />
          <img
            src={require(`./s4.png`)}
            alt=""
            width="25"
            height="25"
          />
          <img
            src={require(`./s5.png`)}
            alt=""
            width="25"
            height="25"
          />
        </div>
      </div>
    );
  };

  render() {
    return <div className="NabarLogin">{this.displayLogin()}</div>;
  }
}

export default NavbarLogin;
