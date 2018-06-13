import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
import {MapWithAKmlLayer} from "../../components/Map";

class Home extends React.Component {
  render() {
    return (
        <HomeBody>
            <MapWithAKmlLayer/>
        </HomeBody>
    );
  }
}

Home.propTypes = {};

const mapStateToProps = state => {
  return {};
};

const mapStateToDispatch = {};

export default withRouter(connect(mapStateToProps, mapStateToDispatch)(Home));

const HomeBody = styled.div``;
