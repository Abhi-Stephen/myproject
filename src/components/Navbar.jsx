// Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
        
      <NavLink to="/" exact="true" activeclassname="active">Home</NavLink>
      <NavLink to="/skills" activeclassname="active">Skills</NavLink>
      <NavLink to="/projects" activeclassname="active">Projects</NavLink>
    </nav>
  );
};

export default Navbar;
