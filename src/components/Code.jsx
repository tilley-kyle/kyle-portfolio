import React from 'react';
import './Code.css';
import CodeTechStack from './CodeTechStack';
import Footer from './Footer';

import battleship from '../images/battleship_main.PNG';
import aws from '../images/aws_logo.png';
import github from '../images/github_logo.png';
import js from '../images/js_logo.png';
import mocha from '../images/mocha_logo.png';
import mongo from '../images/mongo_logo.png';
import mysql from '../images/mysql_logo.png';
import node from '../images/node_logo.png';
import react from '../images/react_logo.png';
import redis from '../images/redis_logo.png';
import socket from '../images/socket.io_logo.png';

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
          <div className="tech-logo-container">
            <img className="odd img-row" src={node} alt="Node Logo" />
            <img className="odd img-row" src={js} alt="JavaScript Logo" />
            <img className="odd img-row" src={aws} alt="AWS Logo" />
            <br />
            <img className="even-first img-row" src={mysql} alt="MySQL Logo" />
            <img className="even-second  mongo" src={mongo} alt="MongoDB Logo" />
            <br />
            <img className="odd img-row" src={github} alt="Github.io Logo" />
            <img className="odd img-row" src={mocha} alt="Mocha Logo" />
            <img className="odd img-row" src={socket} alt="Socket.io Logo" />
            <br />
            <img className="even-first img-row" src={redis} alt="Redis Logo" />
            <img className="even-second react" src={react} alt="React Logo" />
          </div>
          <CodeTechStack JavaScript={JavaScript} backEnd={backEnd} dataBase={dataBase} testing={testing} generic={generic} />
          <h1>Highlighted Projects</h1>
          <img className="battleship" src={battleship} alt="battleship picture" />
          <div className="project-container">
            <h3>Battleship: The Board Game... Onlinified</h3>
            <p className="project-paragraph">
              As you might assume by looking at the name, this projcet was to make the classic board game 'Battleship' and turn it into an
              online multiplayer experience. My goals from the onset were to use Minimum Viable Product design principles, and to learn
              to make a live multiplayer game using Sockets.IO.
            </p>
            <ul className="next-steps">
              <h4>NextSteps</h4>
              <li className="li-steps">Build functionality for different instances of the game to be played at once</li>
              <li className="li-steps">Add a radar animation to cycle as users play and are guessing where opponents ships are</li>
              <li className="li-steps">Makes ships to be represented by shapes, not letters</li>
              <li className="li-steps">Styling, primarily in the top bar</li>
            </ul>
          </div>
        </div>
        <div className="right-column"></div>
        <Footer />
      </div>


    )
  }
}

export default Code;