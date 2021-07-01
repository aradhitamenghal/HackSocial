import React from 'react';
import { Link } from 'react-router-dom';

const Navbar=()=> {
    return (
 
    <nav>
    <div className="nav-wrapper">
      < Link to="/" className="brand-logo left">HackSocial</Link>
      <ul id="nav-mobile" className="right">
        <li><Link to="/Signin">Sign In</Link></li>
        <li><Link to="/Signup">Sign Up</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
    </div>
  </nav>

    )
}

export default Navbar;
