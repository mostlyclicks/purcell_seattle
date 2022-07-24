import React from 'react'
import { StaticQuery, graphql } from "gatsby";
import styled from 'styled-components'
import './layout.css'
import Header from './header'
import Footer from './footer'




const Layout = ({ children }) => (
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
      <StyledContainer>
        <Header links={data.site.siteMetadata.menuLinks} />
        <StyledMain>{children}</StyledMain>
        <Footer footerLinks={data.site.siteMetadata.menuLinks} />
      </StyledContainer>
    )}
  />
);

export default Layout


const StyledContainer = styled.div`
  display:grid;
  grid-gap:1em;
  min-height:100vh;
  width:100%;
 
  
  

`

const StyledMain = styled.main`
  min-height: 100%;
  min-height: 80vh;
  

  @media (min-width: 768px) {
    width: 960px;
    margin: 0 auto;
  }
`;