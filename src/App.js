import React, { Component } from "react";
import PropTypes from "prop-types";
import { Switch, Route } from "react-router-dom";
import Home from "./containers/Home/index";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route to={"/"} component={Home} />
      </Switch>
    );
  }
}

App.propTypes = {};

export default App;
