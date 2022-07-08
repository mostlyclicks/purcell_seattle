import React from 'react'
// import { StaticQuery, graphql } from 'gatsby'
import Navbar from './navbar.js'
import Logo from '../images/purcell-communications-logo.png'
import styled from 'styled-components'

const Header = ({links}) => {

  return (
  
      <StyledHeader>
        <img src={Logo} alt="Purcell Communications Logo" />
        <h1>Purcell Communications</h1>
        <Navbar menuLinks={links} />
      </StyledHeader>
  )
}

export default Header

const StyledHeader = styled.header`
  display:flex;
  justify-content:space-between;
  align-items:center;
  background-color: #f2f2df;
  height:110px;
  padding:1.5rem;
  h1 {display:none;}
  img {width:100px;}
`;

