import React from 'react'
import {Link} from 'react-router-dom';

const Nav = () => {
  return (
    <div>
        
        {/* <nav><a href='/'><li>Home</li></a></nav>
        <nav><a href='/About'><li>About</li></a></nav>
        <nav><a href='/Contact'><li>Contact</li></a></nav>
        <nav><a href='/Services'><li>Services</li></a></nav> */}
<nav>
    <Link to = "/"><li>Home</li></Link>
    <Link to = "/About"><li>About</li></Link>
    <Link to = "/Contact"><li>Contact Us</li></Link>
   
</nav>
       
    </div>
  )
}

export default Nav