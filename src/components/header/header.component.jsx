import React from 'react';
import {Link} from 'react-router-dom';
import './header.styles.css';

const Header = () => (
    <div> 
    <div className="header">
          <Link className="navbar-header" to='/'>
              <h2>News Blog</h2>
             </Link>
           <div className="header-right">
               <Link  to='/trending' >Trending</Link>
               <Link  to='/archive' >Archive</Link>
               <Link  to='/contact' >Contact Us</Link>
               </div>   

    </div>
    </div>
    

);

export default Header;
