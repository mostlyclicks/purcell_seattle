import React, { useState } from 'react'
import NavLinks from './navlinks'
import styled from 'styled-components'


const Navbar = ({menuLinks}) => {

  const [webNavOpen, setWebNavOpen] = useState(false)


  return (
    <div>
      <h2>Navbar</h2>
      <DesktopNav>
        <NavLinks links={menuLinks} />
      </DesktopNav>

      

      <WebNav>
        <button onClick={() => setWebNavOpen(!webNavOpen)}>clickme</button>
        <NavLinks links={menuLinks} />
      </WebNav>
      


      
    </div>
  );

}

export default Navbar

const DesktopNav = styled.div`
  display:none;
  @media (min-width:768px) {
    display:block;
  }
` 

const WebNav = styled.div`
  display: block;
  position: absolute;
  left: 0px;
  top: 0;
  background-color: red;
  width: 200px;

  @media (min-width: 768px) {
    display: none;
  }
`;

