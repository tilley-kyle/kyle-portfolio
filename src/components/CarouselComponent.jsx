import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Photo.css';

const CarouselComponent = ({ selectedPhotos }) => {
  console.log(selectedPhotos)
  return (
    <div>
      {/* <Carousel>
        {selectedPhotos.map((photo) => {
          return (
            <Carousel.Item>
              <img
                className="carousel-img"
                src=""
                alt={photo.title}
              />
              <Carousel.Caption>
                <h3>{photo.title}</h3>
                <p>{photo.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          )
        })}
      </Carousel> */}
    </div>
  );
}

export default CarouselComponent;