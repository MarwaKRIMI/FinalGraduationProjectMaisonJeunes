import React from 'react';

import './navbar-user.css';

const Navbar = props => (
  <header className="toolbar">
    <nav className="toolbar_navigation">
    
        <div className="toolbar_logo"><a href="/">MAISON JEUNES</a></div>
       
        <div className="toolbar_navigation-items">
        <ul className="toolbar_navigation-items-left" style={{float:"left"}}>
        <li><a href="#à propos">A props</a></li>
        <li><a href="#evénements">Evénements</a></li>
        <li><a href="#galerie">Galerie</a></li>
        <li><a href="#clubs">Clubs</a></li>
        </ul>
            <ul className="toolbar_navigation-items-right" style={{float:"right"}}>
                <li><a href="/">Profile</a></li>
                <li><a href="/">Messages</a></li>
            </ul>
        </div>
    </nav>
  </header>
);

export default Navbar;