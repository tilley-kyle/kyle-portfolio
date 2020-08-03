import React from 'react';
import './Footer.css';

import logo from '../images/Logo_white.png';

const Footer = () => (
  <div className="footer-container">
    <div className="footer-border"></div>
    <div className="footer-content">
      <div className="footer-title">KatilleyTech July 2020</div>
      <img className="footer-logo" src={logo} alt="logo" />
      <div className="footer-techs">
        User interface built with: • React • React Router • Axios <br/>
        Server layer built with: • Express • Node <br/>
        Database layer built with: • MySQL
        </div>
        <div className="version">Version 0.5</div>
    </div>
  </div>
)



export default Footer;