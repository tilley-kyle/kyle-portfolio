import React from 'react';
import './Photo.css';
import image from '../images/Under-Construction.png';

const Photo = () => (
  <div>
  <img className="temp-img" src={image} alt="under construction" />
  <div className="temp">Photography coming soon</div>
  </div>
);

export default Photo;