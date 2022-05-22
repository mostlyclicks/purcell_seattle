import React from 'react'
import Header from './header'


const Layout = ({children}) => {
  return (
    <>
      <Header />
      <h1>Layout</h1>
      {children}
    </>
  )
}

export default Layout