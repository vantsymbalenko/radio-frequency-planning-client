import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
import {MapWithAKmlLayer} from "../../components/Map";
import ParametersOfCalculation from '../../components/ParametersOfCalculation';

class Home extends React.Component {
  render() {
    return (
        <HomeBody>
            <ParametersOfCalculation show={this.props.parameters}/>
            <MapWithAKmlLayer/>
        </HomeBody>
    );
  }
}

Home.propTypes = {
  parameters: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    parameters: state.appData.parameters
  };
};

const mapStateToDispatch = {};

export default withRouter(connect(mapStateToProps, mapStateToDispatch)(Home));

const HomeBody = styled.div`
  flex: 1;
`;
