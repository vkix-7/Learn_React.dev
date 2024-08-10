import React from 'react'
import {Link} from 'react-router-dom';
import './Nav.css';
const Nav = () => {
  return (<>
    
        
        {/* <nav><a href='/'><li>Home</li></a></nav>
        <nav><a href='/About'><li>About</li></a></nav>
        <nav><a href='/Contact'><li>Contact</li></a></nav>
        <nav><a href='/Services'><li>Services</li></a></nav> */}

<nav class="navbar">
  <div class="container1">
    <a href="#" class="logo">Logo</a></div>
    <div class="right">
    <ul class="nav-links">
    <Link to = "/"><li>Home</li></Link>
    <Link to = "/About"><li>About</li></Link>
    <Link to = "/Contact"><li>Contact Us</li></Link>
    </ul>
   
  </div>
</nav> 
    </>
  )
}

export default Nav