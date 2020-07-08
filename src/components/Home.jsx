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
      <div className="recent-container">
        Here we might find some information on what Kyle has planned next in the pipeline. Is he going to build a cool new app? Learn a crazy new tech? Run another ultra-marathon?
        Maybe he'll take a sweet shot of the Milky Way? Who knows, but yet again you are reading filler.
        <ul className="ul">
          <li className="li">Build out 'About Kyle' component</li>
          <li className="li">Build out 'My Code' component</li>
          <li className="li">Build out 'Photography' component</li>
          <li className="li">Put finalized info into each component</li>
          <li className="li">blog like component?</li>
          <li className="li">Get back to training</li>
          <li className="li">Put a recently completed list on the home page, celebrate my baller-status!</li>
        </ul>
      </div>
      <div className="recent-container">
        In this section we will list the things Kyle has recently completed. Did he just go on an adventure?
        Did he just complete classes? Learn any new technologies? Finish a race or a hard workout?
        <ul className="ul">
          <li className="li">finished Galvanize</li>
          <li className="li">SDC</li>
          <li className="li">MVP</li>
          <li className="li">Firts time-lapse</li>
        </ul>
      </div>
    </div>
    <div className="right-column"></div>
  </div>
)

export default Home;