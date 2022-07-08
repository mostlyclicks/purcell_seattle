import React from 'react'
import styled from 'styled-components'
import NavLinks from './navlinks'

const Footer = ({footerLinks}) => {

  return (
    <FooterWrapper>
      <StyledFooter>
        <StyledAddress>
          Purcell Communications | 5611 46th Ave SW Seattle | WA 98136
          <br />
          (608) 381-0112
        </StyledAddress>
        <NavLinks links={footerLinks} />
      </StyledFooter>
    </FooterWrapper>
  );
}

      


export default Footer

const FooterWrapper = styled.div`
  background-color: #151515;
`;

const StyledFooter = styled.footer`
  display: flex;
  justify-content:space-between;
  align-items:center;
  gap:5rem;
  padding: 2rem 0;
  min-height: 100px;
  ul,
  li {
    margin: 0;
    padding: 0;
  }
  li {
    list-style: none;
    line-height: 1.75rem;
    font-size: 14px;
    a {
      color: #f48026;
    }
  }

  @media (min-width: 768px) {
    width: 960px;
    margin: 0 auto;
  }
`;

const StyledAddress = styled.div`
  color:#cdcdcd;
  font-family:'Roboto Slab', serif;
  font-size:18px;
  line-height:1.85rem;
`

