import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Profile</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/hobbies">Hobbies</Link></li>
        <li><Link to="/cv">CV</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/blog">Blog</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
