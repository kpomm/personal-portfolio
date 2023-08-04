import React from 'react';
import Carousel from './Carousel';

function Photos(props) {
  return (
    <div>
      <div className="text-section">
        <h2>here are my photos!</h2>
      </div>
      {/* <div className="photo-grid">
        {imageList}
      </div> */}
      <div>
        <Carousel />
      </div>
    </div>
  );
}

export default Photos;
