import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import './App.css';

import logo from './images/Logo_Clear.png';

import Home from './components/Home';
import About from './components/About';
import Code from './components/Code';
import Photo from './components/Photo';
import Footer from './components/Footer';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      seekingJob: true,
    }
  }


  render() {
    const { seekingJob } = this.state;
    return (
      <div className="total-container">
        <Router>
          <div className="banner-container">
            <img className="logo" src={logo} alt="logo here" />
            <div className="header-bar">
              <div className="link-container">
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/About">About Kyle</Link>
                <Link className="link" to="/Code">My Code</Link>
                <Link className="link" to="/Photo">Photography</Link>
              </div>
              <div className="about-me">
                
              </div>
            </div>
          </div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/About">
              <About />
            </Route>
            <Route path="/Code">
              <Code />
            </Route>
            <Route path="/Photo">
              <Photo />
            </Route>
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
