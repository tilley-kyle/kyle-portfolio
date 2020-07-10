import React from 'react';
import './Code.css';
import CodeTechStack from './CodeTechStack';

class Code extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      JavaScript: [],
      backEnd: [],
      dataBase: [],
      generic: [],
    }
  }

  render() {
    return (
      <div className="code-container">
        <div className="left-column"></div>
        <div className="center-column">
          <h1>Welcome to the Code of Kyle</h1>
          <CodeTechStack />
        </div>
        <div className="right-column"></div>
      </div>


    )
  }
}

export default Code;