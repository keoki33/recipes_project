import React, { Component } from "react";

// import RecipeCard from "./RecipeCard";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Placeholder } from "semantic-ui-react";

class DetailsPlaceholder extends Component {
  state = {};

  whatever = () => {};

  render() {
    return (
      <div className="DetailsPlaceholder">
        <Placeholder>
          <Placeholder.Paragraph>
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder.Paragraph>
          <Placeholder.Paragraph>
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder.Paragraph>
        </Placeholder>
      </div>
    );
  }
}

export default DetailsPlaceholder;
