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
  constructor(props) {
    super(props)
    this.state = {

    }
  }


  render() {
    return (
      <div className="total-container">
        <Router>
          <div className="banner-container">
            <div className="link-container">
              <Link className="link" to="/">Home</Link>
              <Link className="link" to="/About">About Kyle</Link>
              <Link className="link" to="/Code">My Code</Link>
              <Link className="link" to="/Photos">Photos a la Kyle</Link>
            </div>
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
