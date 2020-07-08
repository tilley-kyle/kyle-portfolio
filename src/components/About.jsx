import React from 'react';
import './About.css';
import img from '../images/me_and_juno.jpg';

const About = () => (
  <div className="about-container">
    <div className="left-column"></div>
    <div className="center-column">
      <img className="about-image" src={img} alt="Juno and me" />
      <h1 className="about-header">Who Is Kyle?</h1>
    </div>
    <div className="right-column"></div>
  </div>
);

export default About;