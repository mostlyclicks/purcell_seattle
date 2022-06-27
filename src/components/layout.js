import React from 'react'
import styled from 'styled-components'
import './layout.css'
import Header from './header'
import Footer from './footer'




const Layout = ({children}) => {
  return (
    <StyledContainer>
      <Header />
      <StyledMain>
        <h1>Layout</h1>
        {children}
      </StyledMain>
      <Footer />
    </StyledContainer>
  );
}

export default Layout


const StyledContainer = styled.div`
  display:grid;
  grid-gap:1em;
  background-color:#efefef;
  min-height:100vh;
  border:1px solid purple;
  
`

const StyledMain = styled.main`
  
  border: 1px solid red;
  min-height: 100%;
`;