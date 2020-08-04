import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Photo.css';

const CarouselComponent = ({ selectPhotos }) => {
  if (!selectPhotos) {
    return <div></div>
  }
  return (
    <div>
      <Carousel>
        {selectPhotos.map((photo) => {
          const sourceURL = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_b.jpg`;
          return (
            <Carousel.Item>
              <img
                className="carousel-img"
                src={sourceURL}
                alt={photo.title}
              />
              <Carousel.Caption>
                <h3>{photo.title}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          )
        })}
      </Carousel>
    </div>
  );
}

export default CarouselComponent;