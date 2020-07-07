import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import './App.css';

import TopBanner from './components/TopBanner';

class App extends React.Component {
  constructor (props) {
    super (props)
    this.state = {

    }
  }


  render() {
    return (
      <div className="total-container">
        <TopBanner />
        <div className="temp">Coming Soon</div>
      </div>
    );
  }
}

export default App;
