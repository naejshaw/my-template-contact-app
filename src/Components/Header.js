import React, { Component } from 'react';
import logo from '../logo.svg';
import styled from 'styled-components';

const Logo = styled.img`
  animation: App-logo-spin infinite 20s linear;
  height: 80px;

`

const AppHeader = styled.div`
  background-color: #222;
  width: 100%;
  margin: 0;
  top: 0;
  padding: 0.25rem;
  color: white;
  display: flex;
  justify-content: space-between;
  position: fixed;
  align-items: center;
`

const Container = styled.div`
  display: flex;
  align-items: center;
`

const List = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding-right: 1rem;
`

const Link = styled.a`
  &:hover{
    color: blue;
    cursor: pointer;
  }
`
const Header = ({company}) => {
    return (
        <AppHeader className="App-header">
          <Container>
            <Logo src={logo} alt="logo" />
            <h2>{company}</h2>
          </Container>
          <Container>
            <List>
              <Link>Home</Link>
              <Link>About</Link>
              <Link>Services</Link>
              <Link>Testimonials</Link>
              <Link>Contact</Link>
            </List>
          </Container>
        </AppHeader>
    );
}

export default Header;
