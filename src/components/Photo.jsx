import React from 'react';
import './Photo.css';
import image from '../images/Under-Construction.png';

class Photo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }


  render() {
    return (
      <div>
        <img className="temp-img" src={image} alt="under construction" />
        <div className="temp">Photography coming soon</div>
      </div>
    )
  }
};

export default Photo;