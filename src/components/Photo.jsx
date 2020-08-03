import React from 'react';
import './Photo.css';
import image from '../images/Under-Construction.png';

class Photo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  async componentDidMount() {
    fetch('http://localhost:8153/photos')
    .then((photos) => {
      console.log('yay', photos);
    })
    .catch((err) => {
      console.log('boo', err);
    })
  }

  render() {
    return (
      <div className="photo-container">
        <div className="left-column"></div>
        <div className="center-column">
          <img className="temp-img" src={image} alt="under construction" />
          <div className="temp">Photography coming soon</div>
        </div>
        <div className="right-column"></div>
      </div>
    )
  }
};

export default Photo;