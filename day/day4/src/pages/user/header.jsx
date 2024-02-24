import React, { useState } from 'react';
import '/src/assets/css/header.css'; 
import { Link } from 'react-router-dom';
import logo from '/src/assets/images/load1.gif'; // Import your logo image
import { AiFillYuque } from "react-icons/ai";
import { height } from '@mui/system';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="Logo" />
          {/* <AiFillYuque /> */}
          <a>Student Enquiry System</a>
        </div>
        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          {/* <a href="#features">Features</a> */}
          <Link to="/home">Home</Link>
          {/* <Link to="/login">Login</Link> */}
         <Link to="/adhome">Admin</Link>
          <Link to='/profile'>Profile</Link>
        </div>
        <div className="navbar-toggle" onClick={toggleNavbar}>
          <div className={`toggle-icon ${isOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
