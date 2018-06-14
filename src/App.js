import React, { Component } from "react";
import styled from 'styled-components';
import PropTypes from "prop-types";
import { Switch, Route } from "react-router-dom";
import Home from "./containers/Home/index";
import Header from "./components/Header.js";

class App extends Component {
  render() {
    return (
      <AppBody>
        <Header/>
        <Switch>
          <Route to={"/"} component={Home} />
        </Switch>
      </AppBody>
    );
  }
}

App.propTypes = {};

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
`;
