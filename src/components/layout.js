import React from 'react'
import styled from 'styled-components'
import Header from './header'
import Footer from './footer'




const Layout = ({children}) => {
  return (
    <StyledContainer>
      <Header />
      <h1>Layout</h1>
      {children}
      <Footer />
    </StyledContainer>
  )
}

export default Layout


const StyledContainer = styled.div`
  background-color:#cdcdcd;
`