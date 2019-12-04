import React, { Component, Fragment, createRef} from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Navbar from './components/Navbar/Navbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import Carousel from './components/Carousel/Carousel';
//Skedoodle images
import skedoodle from './images/projects/skedoodle.png';
import skedoodle1 from './images/projects/skedoodle1.png';
import skedoodle2 from './images/projects/skedoodle2.png';
import skedoodle3 from './images/projects/skedoodle3.png';
import skedoodle4 from './images/projects/skedoodle4.png';

//Scheduler images
import scheduler from './images/projects/scheduler.png';
import scheduler1 from './images/projects/scheduler1.png';
import scheduler2 from './images/projects/scheduler2.png';

//Tweeter images
import tweeter from './images/projects/tweeter.png';
import tweeter1 from './images/projects/tweeter1.png';
import tweeter2 from './images/projects/tweeter2.png';


const skeddodleProp = [ skedoodle, skedoodle1, skedoodle2, skedoodle3, skedoodle4 ];
const schedulerProp = [ scheduler, scheduler1, scheduler2 ];
const tweeterProp = [ tweeter, tweeter1, tweeter2 ];

const particleOpt = {
    particles: {
      number: {
        value: 150,
        density: {
          enable: true,
          value_area: 2000
        }
      },
      size: {
        value: 3
      },
      move: {
        speed: 5
      }
    }
}


class App extends Component {
  constructor(props) {
    super(props);
    this.scrollAbout = createRef();
    this.scrollProject = createRef();
  }

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

  scrollToAbout = () => {
    this.setState({sideDrawerOpen: false});
    this.scrollAbout.current.scrollIntoView({ behavior: "smooth" });
  }

  scrollToProject = () => {
    this.setState({sideDrawerOpen: false});
    this.scrollProject.current.scrollIntoView({ behavior: "smooth" });
  }

  render() {
    let backDrop;

    if(this.state.sideDrawerOpen) {
      backDrop = <Backdrop click={this.backDropClickHandler}/>
    }

    return (
      <Fragment>
        <div style={{height: "100%"}}>
          <Navbar drawerClickHandler={this.drawerToggleClickEvet} scrollAbout={this.scrollToAbout} scrollProject={this.scrollToProject}/>
          <SideDrawer show={this.state.sideDrawerOpen} scrollAbout={this.scrollToAbout} scrollProject={this.scrollToProject}/>
          {backDrop}
        </div>
      <main className="wrapper">
        <section className="section parallax bgHeader">
          <Particles className="particle" params={particleOpt}/>
          <div className="info-container">
            <div className="circle-image"/>
            <h1 className="name">Karl Eisen Yabut</h1>
            <h2>Full Stack Developer</h2>
          </div>
        </section>
        <section ref={this.scrollAbout} className="section about">
          <div className="aboutMe">
            <h1>Hi! I'm Karl, a Full Stack Developer based in Toronto, Canada. Welcome to my page!</h1>
            <p className="descP">
              I've been interested in technology ever since high-school, Grade 11 to be precise. 
              My very first programming project (a 2D vending machine) was so much fun and it led me to pursue a career in technology.
            </p>
            <p className="descP">
              After I decided that I wanted to build softwares, I went to Centennial College for Software Engineering.
              It was a greate experience, but at the same time I thought that it was not enough.
              They taught me many things to the point that it was hard to master one thing, and I was only an adequate developer.
            </p>
            <p className="descP">
              So, I decided that I should focus on one thing.
              I then found out about bootcamps for developers.
              I enrolled to a Full-Stack Development bootcamp called Lighthouse Labs.
              The bootcamp was a great challenge that fully enabled my passion towards being a developer!
            </p>
          </div>
        </section>
        <section ref={this.scrollProject} className="project">
          <div className="myProject">
            <h1 className="allProjects">Projects</h1>
          </div>
          <div className="projectsContainer">
            <div className="projectContainer">
              <div className="descContainer">
                <h1 className="projectTitle">Skedoodle</h1>
                <p>A combination of broken telephone and pictionary party game.</p>                
                <div className="btnContainer">
                  <button className="githubBtn">github</button>
                </div>
              </div>
              <div className="carouselContainer">
                <Carousel items={skeddodleProp}/>
                <div className="techStackContainer">
                  <p>Technologies</p>
                  <div className="techStack">
                    ReactJS
                  </div>
                  <div className="techStack">
                    Socket.IO
                  </div>
                  <div className="techStack">
                    Node
                  </div>
                  <div className="techStack">
                    Express
                  </div>
                  <div className="techStack">
                    PostgreSQL
                  </div>
                </div>
              </div>
            </div>
            <div className="projectContainer">
              <div className="descContainer">
                <h1 className="projectTitle">Scheduler</h1>
                <p>A website application for setting up interviews.</p>
                <div className="btnContainer">
                  <button className="githubBtn">github</button>
                </div>
              </div>
              <div className="carouselContainer">
                <Carousel items={schedulerProp}/>
                <div className="techStackContainer">
                  <p>Technologies</p>
                  <div className="techStack">
                    ReactJS
                  </div>
                  <div className="techStack">
                    Node
                  </div>
                  <div className="techStack">
                    Express
                  </div>
                  <div className="techStack">
                    PostgreSQL
                  </div>
                </div>
              </div>
            </div>
            <div className="projectContainer">
              <div className="descContainer">
                <h1 className="projectTitle">Tweeter</h1>
                <p>Twitter clone powered by AJAX</p>
                <div className="btnContainer">
                  <button className="githubBtn">github</button>
                </div>
              </div>
              <div className="carouselContainer">
                <Carousel items={tweeterProp}/>
                <div className="techStackContainer">
                  <p>Technologies</p>
                  <div className="techStack">
                    jQuery
                  </div>
                  <div className="techStack">
                    Node
                  </div>
                  <div className="techStack">
                    Express
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section parallax bgProject">
        </section>
      </main>
  
      </Fragment>
    );
  }
}

export default App;
