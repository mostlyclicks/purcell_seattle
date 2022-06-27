import React, { useState } from 'react'
import NavLinks from './navlinks'
import styled from 'styled-components'


const Navbar = ({menuLinks}) => {

  const [webNavOpen, setWebNavOpen] = useState(false)


  return (
    <div>
      
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
  @media (min-width: 768px) {
    display:block;
    ul,
    li {
      margin: 0;
      padding: 0;
      list-style: none;
      font-family:'Roboto Slab', serif;
      font-weight:bold;
    }
    ul {
      display: flex;
      margin-right: 50px;
      a {
        color: rgba(0, 0, 0, 0.7);
        padding: 7px 10px;
        border-right: 1px dotted black;
        text-decoration: none;
        &:last-child {
          border-right: 1px solid rgba(0, 0, 0, 0);
        }
        &:hover {
          background-color: #f48026;
          color: rgba(0, 0, 0, 1);
        }
      }
    }
  }
`; 

const WebNav = styled.div`
  display: block;
  position: absolute;
  left: 0px;
  top: 0;
  
  width: 200px;

  @media (min-width: 768px) {
    display: none;
  }
`;

