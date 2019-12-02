import React from 'react';
import './SideDrawer.css';

const sideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if(props.show) {
    drawerClasses = 'side-drawer open'
  }
  return (
  <nav className={drawerClasses}>
    <ul>
      <li><span onClick={props.scrollAbout}>About Me</span></li>
      <li><span onClick={props.scrollProject}>Projects</span></li>
    </ul>
  </nav>
  );
};

export default sideDrawer;