import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Navbar from './navbar.js'
import Logo from '../images/purcell-communications-logo.png'

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
    render={data => (
      <div>
        <img src={Logo} alt="Purcell Communications Logo"/>
        <h1>Purcell Communications</h1>
        <Navbar menuLinks={data.site.siteMetadata.menuLinks} />
      </div>
    )}
  />
);

export default Header