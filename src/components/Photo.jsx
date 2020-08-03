import React from 'react';
import PhotoDisplay from './PhotoDisplay';
import './Photo.css';
import image from '../images/Under-Construction.png';

class Photo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      flickrPhotos: [],
    }
  }

  componentDidMount() {
    fetch('http://localhost:8153/photos')
    .then(  (data) => {
      return data.json();
    })
    .then((photos) => {
      this.setState({ flickrPhotos: photos.photos.photo });
    })
    .catch((err) => {
      console.log('boo', err);
    });
  }

  render() {
    const { flickrPhotos } = this.state;
    return (
      <div className="photo-container">
        <div className="left-column"></div>
        <div className="center-column">
          <PhotoDisplay />
        </div>
        <div className="right-column"></div>
      </div>
    );
  }
};

export default Photo;