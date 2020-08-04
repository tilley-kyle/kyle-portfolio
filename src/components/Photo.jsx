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

  // componentDidMount() {
  //   const { flickrPhotos } = this.state;
  //   const flickerPhotosCount = flickrPhotos.length;
  //   fetch('http://localhost:8153/photos')
  //   .then( (data) => {
  //     return data.json();
  //   })
  //   .then((photos) => {
  //     const randomNumbers = [];
  //     for (let i = 0; i < 6; i ++) {
  //       let newNumber = Math.floor(Math.random() * flickerPhotosCount);
  //       while (randomNumbers.indexOf(newNumber) > -1) {
  //         newNumber = Math.floor(Math.random() * flickerPhotosCount);
  //       }
  //       randomNumbers.push(newNumber);
  //     }
  //     const selectPhotos = [];
  //     randomNumbers.forEach((number) => selectPhotos.push(photos.photos.photo[number]));
  //     this.setState({
  //       flickrPhotos: photos.photos.photo,
  //       selectPhotos: selectPhotos
  //     });
  //   })
  //   .catch((err) => {
  //     console.log('boo', err);
  //   });
  // }

  render() {
    const { flickrPhotos } = this.state;
    return (
      <div className="photo-container">
        <div className="left-column"></div>
        <div className="center-column-photo">
          <div className="photo-heading">
            <a data-flickr-embed="true" href="https://www.flickr.com/photos/kyleatilley/50061978293/in/dateposted-public/" title="Prarie Sunflower and Cleveland Peak">
              <img className="heading-photo" src="https://live.staticflickr.com/65535/50061978293_309b0f5fc3_k.jpg" alt="Prarie Sunflower and Cleveland Peak" />
            </a>
            <h2 className="heading-title">Photography</h2>
            <p className="heading-paragraph">
              I love getting outside, and when I'm not running or biking I have my camera with me. As an amatuer photographer I like to capture scenes thoughout nature, especially the mountains and the night sky.
            </p>
          </div>
          <table className="selected-photos">
            <tr>
              <td>
                <a data-flickr-embed="true" href="https://www.flickr.com/photos/kyleatilley/50062035938/in/dateposted-public/" title="Milky Way from Independence and Zsuiama Ln">
                  <img className= "milky-way-photo" src="https://live.staticflickr.com/65535/50062035938_2583671d8e_k.jpg" alt="Milky Way from Independence and Zsuiama Ln" />
                </a>
              </td>
              <td className="td">
                <p className="p">One of my first attemps at capturing the Milky Way above Columbine Colorado.</p>
                <p className="pInfo">Taken: 2016/06/05</p>
              </td>
            </tr>
            </table>
            <table className="selected-photos">
            <tr>
              <td>
                <p className="p">I took this shot of a fox who I still haven't figured out what happened. It either was in a fight or had Mange.</p>
                <p className="pInfo">Taken: 2016/03/30</p>
              </td>
              <td>
                <a data-flickr-embed="true" href="https://www.flickr.com/photos/kyleatilley/50062220853/in/dateposted-public/" title="Fightin&#x27; Fox">
                  <img className="fighting-fox"src="https://live.staticflickr.com/65535/50062220853_232dbf9afe_k.jpg" alt="Fightin&#x27; Fox" />
                </a>
              </td>
            </tr>
          </table>
          <table className="selected-photos">
            <tr>
              <td>
                <a data-flickr-embed="true" href="https://www.flickr.com/photos/kyleatilley/50066039877/in/dateposted-public/" title="Juno, more natural">
                  <img className="juno-colored" src="https://live.staticflickr.com/65535/50066039877_2f636144c3_k.jpg" alt="Juno, more natural" />
                </a>
              </td>
              <td className="td">
                <p className="p">Juno. My adventure accomplice. Always by my side and deals with my picture taking of both her and the world around.<br/>What a good girl!</p>
                <p className="pInfo">Taken: 2020/06/24</p>
              </td>
            </tr>
            </table>
        </div>
        <div className="right-column"></div>
      </div>
    );
  }
};

export default Photo;