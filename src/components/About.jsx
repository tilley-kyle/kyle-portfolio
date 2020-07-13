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
        Either way you are here now, so let me tell you who I am! I'm a energetic person who thinks 'type 2' fun is the best time! I program, run, do photography, brew better
        and try to use my time to the fullest!
      </div>
      <div className="about-interest-container">
        <h3>Programmer</h3>
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
      <div className="about-interest-container">
        <h3>Runner</h3>
        I love to run and the longer the better! Any excuse to use my body and get into nature is great, but running is my phsycial passion. To date I've run races
        at the 5k, 15k, 50k, and 50mi. Sure there are days when I go to lace up my shoes and I can swear my legs are made of lead, but I've never been unhappy that I
        got myself out there (runner's high is a real thing!).
      </div>
      <div className="about-interest-container">
        <h3>Dog Dad</h3>
        Juno, who you can see on the top of this page along side a bearded version of myself and gracing the top banner of every page here, is my best friend since adopting her
        Feb 7th, 2018. Rescued from Chataqua Park in Boulder as a puppy, she has been at my side running, doing agility, and most importantly playing fetch.
      </div>
      <div className="about-interest-container">
        <h3>Photographer</h3>
        Do I think I'm creative? Yes. Do I like to enjoy the beauty of Nature? Yes. Do I like activities that take a lot of trial/error and practice? Yes.
        Do I like using technology to solve problems? Yes. <br/> Well those are the reasons why I love photographing landscapes, the night sky, wild animals
        and Juno alike!
      </div>
      <div className="about-interest-container">
        <h3>Brewer</h3>
        Beer. Cold delicious nectar of the gods. A crisp IPA on a hot day, a cool lager after a long run, a smooth stout on a cold winter day. How much
        better that tastes when I know I made it when I get to find out if my month of work, waiting, and sanitizing paid off! It's also a great time
        with friends who I started B(eer)TR Brewing with to get together for a couple evenings of making and enjoying beer.
      </div>
    </div>
    <div className="right-column"></div>
  </div>
);

export default About;