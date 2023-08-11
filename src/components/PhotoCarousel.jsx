/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Slider from 'react-slick';
import imageList from '../photogrid';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default class LazyLoad extends Component {
  render() {
    const settings = {
      dots: true,
      lazyLoad: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 2,
      arrows: true,
      color: '#FFFFFF',
      centerMode: false,
    };

    const images = imageList.map((item, i) => (
      <div className="img-container">
        <img src={item} alt="" />
      </div>
    ));

    return (
      <div>
        <Slider {...settings}>
          {images}
        </Slider>
      </div>
    );
  }
}
