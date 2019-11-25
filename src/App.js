import React, { Component, Fragment} from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Navbar from './components/Navbar/Navbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';

const particleOpt = {
    particles: {
      number: {
        value: 150,
        density: {
          enable: true,
          value_area: 3000
        }
      }
    }
}


class App extends Component {

  state = {
    sideDrawerOpen: false
  };
  
  drawerToggleClickEvet = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backDropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render() {
    let backDrop;

    if(this.state.sideDrawerOpen) {
      backDrop = <Backdrop click={this.backDropClickHandler}/>
    }

    return (
      <Fragment>
        <div style={{height: "100%"}}>
          <Navbar drawerClickHandler={this.drawerToggleClickEvet}/>
          <SideDrawer show={this.state.sideDrawerOpen}/>
          {backDrop}
        </div>
      <main className="wrapper">
        <section className="section parallax bgHeader">
          <Particles className="particle" params={particleOpt}/>
          <h1 className="name">Karl Eisen Yabut</h1>
        </section>
        <section className="section projects">
        </section>
        <section className="section parallax bgProject">
          <h1>SO FWUFFY AWWW</h1>
        </section>
      </main>
  
      </Fragment>
    );
  }
}

export default App;
