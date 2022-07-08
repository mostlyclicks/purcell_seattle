import React from 'react'
import { Link } from "gatsby";

const NavLinks = ({links}) => {
  return (
    <ul>
      {links.map((link) => {
        return (
          <li>
            <Link to={link.link}>{link.name}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export default NavLinks
 