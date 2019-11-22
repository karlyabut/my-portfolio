import React from 'react';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Navbar.css';

const navbar = props => (
  <header className="navbar">
    <nav className="navbar__navigation">
      <div className="navbar__toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler}/>
      </div>
      <div className="navbar__logo"><a href="/">KEY</a></div>
      <div className="spacer" />
      <div className="navbar__navigation-items">
        <ul>
          <li><a href="/">About Me</a></li>
          <li><a href="/">Projects</a></li>
        </ul>
      </div>
    </nav>
  </header>
)

export default navbar;