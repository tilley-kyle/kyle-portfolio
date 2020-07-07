import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import './App.css';

import Home from './components/Home';

class App extends React.Component {
  constructor (props) {
    super (props)
    this.state = {

    }
  }


  render() {
    return (
      <div className="total-container">
        <Router>
        <div className="banner-container">
          <Link to="/">Home</Link>
          <Link to="/About">About Kyle</Link>
          <Link to="/Code">Kyle's Code</Link>
          <Link to="/Photos">Photos a la Kyle</Link>
        </div>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
        <div className="temp">Coming Soon</div>
      </div>
    );
  }
}

export default App;
