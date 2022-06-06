import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Navbar from './navbar.js'
import Logo from '../images/purcell-communications-logo.png'
import styled from 'styled-components'

const Header = () => (
  <StaticQuery
    query={graphql`
      query SiteMetaQuery {
        site {
          siteMetadata {
            title
            menuLinks {
              link
              name
            }
          }
        }
      }
    `}
    render={(data) => (
      <StyledHeader>
        <img src={Logo} alt="Purcell Communications Logo" />
        <h1>Purcell Communications</h1>
        <Navbar menuLinks={data.site.siteMetadata.menuLinks} />
      </StyledHeader>
    )}
  />
);

export default Header

const StyledHeader = styled.header`
  display:flex;
  border:1px solid blue;
  justify-content:space-between;
  align-items:center;
  background-color: #f2f2df;
  width:100%;
  padding:1.5rem;
  h1 {display:none;}
  img {width:100px;}
`;

