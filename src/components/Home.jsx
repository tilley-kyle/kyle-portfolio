import React from 'react';
import './Home.css';
import image from '../images/fricken.jpg';

const Home = () => (
  <div className="home-container">
    <div className="left-column"></div>
    <div className="center-column">
    <img className="fricken" src={image} alt="where is the Fricken?"/>
      <h1 className="title1">Welcome to the Website O' Kyle</h1>
      <div className="top-paragraph">
        Thank you for visitng my site! I am building this to practice my skills as a software engineer and showcase things that I have done
        in engineering, as well as in other parts of my life from running to photography! I'm using Agile methedologies to put up this site so there
        is always a product to see! Follow along, see who I am, and checkout how my site grows!
      </div>
      <div className="recent-container">
        <h3>What is next for Kyle</h3>
        I have a bunch of things I am itching to get to from engineering to brewing! In no particular order...
        <ul className="ul">
          <li className="li">Finish database app for Campro USA</li>
          <li className="li">Fill out 'About Kyle' and 'My Code' components</li>
          <li className="li">Work on sizing, incorporate breakpoints</li>
          <li className="li">Build out 'Photography' component</li>
          <li className="li">blog like component? Less likely</li>
          <li className="li">Master Redux in React</li>
          <li className="li">Determine real running goals and create a plan</li>
          <li className="li">Practice light painting on the Mesa trail</li>
          <li className="li">Decide next beer to brew</li>
        </ul>
      </div>
      <div className="recent-container">
        <h3>Recent Reasons to Revel</h3>
        Simple as the header, but if I must explain it, I'd say "This is a list of highlighted things I have accomplished recently."
        <ul className="ul">
          <li className="li">GRADUATED FROM GALVANIZE/HACK REACTOR!!</li>
          <li className="li">Built an API that can handle thousands of requests per second</li>
          <li className="li">Made Battleship and learned how to use websockets!</li>
          <li className="li">Firts time-lapse, and did it during sunset into night!</li>
          <li className="li">Got back into endurance sports with running and cycling!</li>
          <li className="li">Started a freelance job creating a database app!</li>
        </ul>
      </div>
    </div>
    <div className="right-column"></div>
  </div>
)

export default Home;