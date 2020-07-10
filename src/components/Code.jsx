import React from 'react';
import './Code.css';

class Code extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div className="code-container">
        <div className="left-column"></div>
        <div className="center-column">
          <h1>Welcome to the Code of Kyle</h1>
        </div>
        <div className="right-column"></div>
      </div>


    )
  }
}

export default Code;