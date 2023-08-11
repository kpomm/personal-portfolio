import React from 'react';
// import Carousel from './Carousel';
import LazyLoad from './PhotoCarousel';

function Photos(props) {
  return (
    <div>
      <div className="react-slider">
        <LazyLoad />
      </div>
      <div>
        {/* <Carousel /> */}
      </div>
    </div>
  );
}

export default Photos;
