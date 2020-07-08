import React from 'react';
import './About.css';
import meAndJuno from '../images/me_and_juno.jpg';

const About = () => (
  <div className="about-container">
    <div className="left-column"></div>
    <div className="center-column">
      <img className="about-image" src={meAndJuno} alt="Juno and me" />
      <h1 className="about-header">Who Is Kyle?</h1>
      <div className="about-top-paragraph">
        You've found your way onto my site, either on purpose or by stumbling here following random links as you explore deeper and deeper into the World Wide Web.
        Either way you are here now, so let me tell you who I am!
      </div>
      <div className="about-interest-container">
        <h3>Programming</h3>
          I'm a full stack Software Engineer utilizing JavaScript, React, Express, Nodejs, AWS, SQL and NoSQL databases to get the job done! I originally learn how to code
          at Galvanize/Hack Reactor. There I learned:
          <ul className="about-ul">
            <li className="li">Coding best practices</li>
            <li className="li">JS and its popular technologies</li>
            <li className="li">Soft skills like pair programing and Agile workflow</li>
            <li className="li">How to autonomously and elegently solve challenges</li>
            <li className="li">Grit through working 70+ hours per week constantly facing new technologies, topics, and problems</li>
          </ul>
          I'm always looking for what I can learn next. I'm never satisfied with going through the motions and staying stagnant with what I know. I am happiest
          when I am contributing real code that is making real change for the better!
      </div>
    </div>
    <div className="right-column"></div>
  </div>
);

export default About;