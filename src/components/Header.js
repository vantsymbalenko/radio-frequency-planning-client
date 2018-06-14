import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {toggleParams} from '../actions/toggleParams.js';

const Header = (props) => {
    return(
        <HeaderBody>
            <ListMenuIcon onClick={props.toggleParams}>
                <Item/>
                <Item/>
                <Item/>
                <Item/>     
            </ListMenuIcon>
        </HeaderBody>
    );
}

Header.propTypes = {
    toggleParams: PropTypes.func
};

const mapStateToProps = () => {
    return {}
};

const mapStateToDispatch = {
    toggleParams
};

export default connect(mapStateToProps, mapStateToDispatch)(Header);

const HeaderBody = styled.div`
    height: 60px;
    background: gray;
    display: flex;
    align-content: center;
    align-items: center;
    padding: 10px 30px;
`;

const ListMenuIcon = styled.ul`
    width: 40px;
    height: 40px;
    background: none;
    border: none;
    list-style: none;
    display: flex;
    flex-direction: column;
    transition: all 0.5s ease;
    &:hover{
        cursor: pointer;
        & > li{
            // box-shadow: 0px 0px 2px 2px lightgray; 
        }
    }

`;

const Item = styled.li`
    width: 100%;
    height: 4px;
    background: darkgray;
    border: none;
    margin-top: 6px;
`;