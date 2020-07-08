import React from 'react';
import './Home.css';
import image from '../images/fricken.jpg';

const Home = () => (
  <div className="home-container">
    <div className="left-column"></div>
    <div className="center-column">
    <img className="fricken" src={image} alt="where is the Fricken?"/>
      <h1 className="title1">Welcome to the world of Kyle</h1>

      <p className="top-paragraph">Here we might find information as to why this site might exist. Will this site be for the Code of Kyle? Will it be for view the world as Kyle
      attempts to capture it through the lenses of a DSLR? Maybe we will learn who Kyle is in a section that describes what this site is About. What about a blog-like section, talking
      about the comings and goings of Kyle's life in Code, photography, or other interests? One thing we do know is that we don't actually know what is to come. This is just a filler paragraph you read.
      </p>
    </div>
    <div className="right-column"></div>
  </div>
)

export default Home;