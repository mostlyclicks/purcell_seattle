import React from 'react'
import Header from './header'
import Footer from './footer'


const Layout = ({children}) => {
  return (
    <>
      <Header />
      <h1>Layout</h1>
      {children}
      <Footer />
    </>
  )
}

export default Layout