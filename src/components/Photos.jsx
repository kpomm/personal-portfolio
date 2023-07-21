import React from 'react';
import images from '../photogrid';

function Photos() {
  return (
    <div>
      <div className="text-section">
        <h2>here are my photos!</h2>
      </div>
      <div className="photo-grid">
        <img src={images.a} alt="" />
        <img src={images.b} alt="" />
        <img src={images.c} alt="" />
        <img src={images.d} alt="" />
        <img src={images.e} alt="" />
        <img src={images.f} alt="" />
        <img src={images.g} alt="" />
        <img src={images.h} alt="" />
        <img src={images.i} alt="" />
        <img src={images.j} alt="" />
        <img src={images.k} alt="" />
        <img src={images.l} alt="" />
        <img src={images.m} alt="" />
        <img src={images.n} alt="" />
        <img src={images.o} alt="" />
        <img src={images.p} alt="" />
        <img src={images.q} alt="" />
        <img src={images.r} alt="" />
      </div>
    </div>
  );
}

export default Photos;
