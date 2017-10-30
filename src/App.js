import React, { Component } from 'react';
import PortFolioFixed from './portfoliofixed.js'
import PortFolioContent from './portfoliocontent.js'
import Edu from './edu';
import MainProjects from './mainprojects';
import {skills, eduList, jobsList} from './data/datasource';
import {Switch, Route}  from 'react-router-dom';
import NoMatch from './NoMatch';
import Nav from './Nav';

class App extends Component {
  render() {
    return (
      <div id="app-container">
        <Nav />
        <PortFolioFixed />
        <Switch>
          <Route exact path="/" component={PortFolioContent} />  //Ruta estática
          <Route path="/cv" render={(props) => (
          <Edu {...props} herSkills={skills} herEdu={eduList}
          herJobs={jobsList}/>
          )}/>

          

          <Route exact path="/Projects"  component={MainProjects}/>
          <Route component={NoMatch} />
        </Switch>
      </div>
    )
  }
}



{/*class App extends Component {
  render() {
    return (
      <div id="app-container">
        <PortFolioFixed />
        <PortFolioContent />
        <Edu herSkills={skills}
        herEdu={eduList}
  herJobs={jobsList}/>
        <MainProjects />
      </div>
    );
  }
}*/}

class HomeView extends Component {
  render() {
    return(
      <section>
      <h2>Home</h2>
      </section>
    )
  }
}

class CV extends Component {
  render() {
    return(
      <section>
      <h2>CV</h2>
      </section>
    )
  }
}

class Projects extends Component {
  render() {
    return(
      <section>
      <h2>Projects</h2>
      </section>
    )
  }
}

export default App;
