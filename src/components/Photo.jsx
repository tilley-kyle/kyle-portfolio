import React from 'react';
import './Photo.css';

class Photo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      flickrPhotos: [],
      selectPhotos: [],
    }
  }

  componentDidMount() {
    fetch('http://localhost:8153/photos')
    .then(  (data) => {
      return data.json();
    })
    .then((photos) => {
      const randomNumbers = [];
      for (let i = 0; i < 6; i ++) {
        let newNumber = Math.floor(Math.random() * 30);
        while (randomNumbers.indexOf(newNumber) > -1) {
          newNumber = Math.floor(Math.random() * 29);
        }
        randomNumbers.push(newNumber);
      }
      const selectPhotos = [];
      randomNumbers.forEach((number) => selectPhotos.push(photos.photos.photo[number]));
      this.setState({
        flickrPhotos: photos.photos.photo,
        selectPhotos: selectPhotos
      });
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
          <div className="photo-heading">
            <img className="heading-photo" src="https://farm66.staticflickr.com/65535/50061978293_5b11e4f89a.jpg" alt="test" />
            <p>;lkjsdflkjsd</p>
          </div>
        </div>
        <div className="right-column"></div>
      </div>
    );
  }
};

export default Photo;
{/* <a data-flickr-embed="true" href="https://www.flickr.com/photos/kyleatilley/50061978293/in/dateposted-public/" title="Prarie Sunflower and Cleveland Peak">
  <img src="https://live.staticflickr.com/65535/50061978293_309b0f5fc3_k.jpg" width="2048" height="1132" alt="Prarie Sunflower and Cleveland Peak" />
</a>
<script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script> */}