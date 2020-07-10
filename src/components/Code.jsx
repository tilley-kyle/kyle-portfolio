import React from 'react';
import './Code.css';
import CodeTechStack from './CodeTechStack';

import battleship from '../images/battleship_main.PNG';

class Code extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      JavaScript: ['JavaScript(ES5/ES6)', 'React', 'React Router', 'Webpack', 'Babel', 'Axios', 'HTML', 'CSS', 'JQuery'],
      backEnd: ['Node.js', 'Express.js', 'Redis', 'Socket.IO'],
      dataBase: ['MongoDB', 'MySQL', 'Redis'],
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
          <h1>Kyle's Tech Stack</h1>
          <CodeTechStack JavaScript={JavaScript} backEnd={backEnd} dataBase={dataBase} testing={testing} generic={generic} />
          <h1>Highlighted Projects</h1>
          <img className="battleship" src={battleship} alt="battleship picture" />
          <div className="project-container">
            {/* <img className="battleship" src={battleship} alt="battleship picture" /> */}
            <h3>Battleship: The Board Game... Onlinified</h3>
            <p className="project-paragraph">
              As you might assume by looking at the name, this projcet was to make the classic board game 'Battleship' and turn it into an
              online multiplayer experience. My goals from the onset were to use Minimum Viable Product design principles, and to learn
              to make a live multiplayer game using Sockets.IO.
            </p>
          </div>
        </div>
        <div className="right-column"></div>
      </div>


    )
  }
}

export default Code;