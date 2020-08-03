import React from 'react';
import './Photo.css';

const PhotoDisplay = ({ flickrPhotos }) => {
  const randomNumbers = [];
  for (let i = 0; i < 6; i ++) {
    let newNumber = Math.floor(Math.random() * 30);
    while (randomNumbers.indexOf(newNumber) > -1) {
      newNumber = Math.floor(Math.random() * 30);
    }
    randomNumbers.push(newNumber);
  }
  return (
    <div className="photo-dispaly-container">hi</div>
  )
}

export default PhotoDisplay;