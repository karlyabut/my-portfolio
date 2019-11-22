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
      <main class="wrapper">
      <div className="App">
        <header className="App-header">
          <Particles className="particle" params={particleOpt}/>
          <h1>Karl Eisen Yabut</h1>
        </header>
      </div>
      <div>
        <h1>new section</h1>
      </div>
      <section class="section parallax bg1">
        <h1>Such Adorableness</h1>
      </section>
      <section class="section static">
      </section>
      <section class="section parallax bg2">
        <h1>SO FWUFFY AWWW</h1>
      </section>
      </main>
  
      </Fragment>
    );
  }
}

export default App;
