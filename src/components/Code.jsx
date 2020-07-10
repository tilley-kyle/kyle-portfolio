import React from 'react';
import './Code.css';
import CodeTechStack from './CodeTechStack';

class Code extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      JavaScript: ['JavaScript(ES5/ES6)', 'React', 'React Router', 'Webpack', 'Babel', 'Axios', 'HTML', 'CSS', 'JQuery'],
      backEnd: ['Node.js', 'Express.js', 'Redis', 'Socket.IO'],
      dataBase: ['MongoDB', 'MySQL'],
      testing: ['Mocha', 'Chai'],
      generic: ['Git', 'npm', 'AWS', 'Heroku', 'Bash'],
    }
  }

  componentDidMount() {
    //get request to database that will store my techs to make for easier input of new techs learned
  }

  render() {
    const { JavaScript, backEnd, dataBase, testing, generic } = this.state;
    return (
      <div className="code-container">
        <div className="left-column"></div>
        <div className="center-column">
          <h1>Welcome to the Code of Kyle</h1>
          <CodeTechStack JavaScript={JavaScript} backEnd={backEnd} dataBase={dataBase} testing={testing} generic={generic} />
        </div>
        <div className="right-column"></div>
      </div>


    )
  }
}

export default Code;