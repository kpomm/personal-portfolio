import React from 'react';
import HoverCarousel from 'hover-carousel';
import imageList from '../photogrid';

function Carousel() {
  return (
    <div className="hover-carousel">
      <HoverCarousel images={imageList} />
    </div>
  );
}

export default Carousel;
