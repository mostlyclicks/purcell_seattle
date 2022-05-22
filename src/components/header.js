import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Navbar from './navbar.js'

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
        <h1>Purcell Communications</h1>
        <Navbar menuLinks={data.site.siteMetadata.menuLinks} />
      </div>
    )}
  />
);

export default Header