import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <StyledFooter>
      <p>footer</p>
    </StyledFooter>
  );
}

export default Footer

const StyledFooter = styled.footer`
  border:1px solid green;
  min-height:100px;
`

