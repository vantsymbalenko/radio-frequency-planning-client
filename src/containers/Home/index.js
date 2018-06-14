import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
import { MapWithAKmlLayer } from "../../components/Map";
import ParametersOfCalculation from "../../components/ParametersOfCalculation";

class Home extends React.Component {
  render() {
    return (
      <HomeBody>
        <ParametersOfCalculation show={this.props.parameters} />
        <MapWithAKmlLayer url={this.props.url}/>
      </HomeBody>
    );
  }
}

Home.propTypes = {
  parameters: PropTypes.bool,
  url: PropTypes.string
};

const mapStateToProps = state => {
  return {
    parameters: state.appData.parameters,
    url: state.appData.data.url
  };
};

const mapStateToDispatch = {};

export default withRouter(connect(mapStateToProps, mapStateToDispatch)(Home));

const HomeBody = styled.div`
  flex: 1;
  position: relative;
`;
