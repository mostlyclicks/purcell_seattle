import React from 'react'
import { Link } from 'gatsby'

const Navbar = ({menuLinks}) => {
  return (
    <div>
      <h2>Navbar</h2>
      {menuLinks.map((link) => {
        return (
          <li>
            <Link to={link.link}>{link.name}</Link>
          </li>
        );
      })}
    </div>
  );

}

export default Navbar