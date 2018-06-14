import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export default class ParametersOfCalculation extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return(
            <ParametersBody show={this.props.show}>
    
            </ParametersBody>
        ); 
    } 
}

ParametersOfCalculation.defaultProps = {
    show: false
}

ParametersOfCalculation.propTypes = {
    show: PropTypes.bool
};

const ParametersBody = styled.div`
    width: ${props => props.show ? '200px' : '0'};
    position: absolute;
    border: ${props => props.show ? 'none' : '1px solid black'}; 
    height: 400px;
    transition: all 0.375s ease-in-out;
    z-index: 99;
    background: white;
`;