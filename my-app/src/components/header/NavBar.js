import React, { Component } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

// https://webdesign.tutsplus.com/tutorials/how-to-build-a-responsive-navigation-bar-with-flexbox--cms-33535

const StyledNavBar = styled.nav`
    display: block;
    width: 100%;
    height: 50px;
    color: white;
`;

const StyledHeaderButtons = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: flex-end;
`;

const StyledNavButton = styled.li`
    padding: 10px;
    color: white;
    text-decoration: none;
    &:visited: {
        color: white;

    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    &:visited: {
        color: white;
    }
`;

class NavBar extends Component {
    render() {
        return (
            <StyledNavBar>
                <StyledHeaderButtons>
                    <StyledNavButton><StyledLink to="/">Home</StyledLink></StyledNavButton>
                    <StyledNavButton><StyledLink to="/about">About</StyledLink></StyledNavButton>
                    <StyledNavButton><StyledLink to="/contact">Contact</StyledLink></StyledNavButton>
                    <StyledNavButton><a href="/EvanLinResume.pdf">Resume</a></StyledNavButton>
                </StyledHeaderButtons>
            </StyledNavBar>
        )
    }
}

export default NavBar;