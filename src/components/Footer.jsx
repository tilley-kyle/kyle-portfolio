import React from 'react';
import './Footer.css';

import logo from '../images/Logo_white.png';

const Footer = () => (
  <div className="footer-container">
    <div className="footer-border"></div>
    <div className="footer-content">
      <div className="footer-title">KatilleyTech August 2020</div>
      <img className="footer-logo" src={logo} alt="logo" />
      <div className="footer-techs">
        User Interface Technologies: • React • React Router • Axios <br/>
        Server Layer Technologies: • Express • Node <br/>
        Database Layer Technology: • MySQL (Not Implemented Yet)
        </div>
    </div>
  </div>
)



export default Footer;