import React from 'react'
import Slider from 'react-slick'

import DuckImage from '../assets/Duck.jpg'
import reactLogo from '../assets/reactLogo.png'
import babelLogo from '../assets/babelLogo.png'
import webpackLogo from '../assets/webpackLogo.png'
import reduxLogo from '../assets/reduxLogo.png'
import reactrouterLogo from '../assets/reactrouterLogo.png'
import './HomeView.scss'

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
}

export const HomeView = () => (
  <div>
    <h4>Technologies Used on This Test</h4>
    <Slider {...settings}>
      <div><img className='carouselimg' src={reactLogo} alt='reactLogo' /></div>
      <div><img className='carouselimg' src={reduxLogo} alt='reduxLogo' /></div>
      <div><img className='carouselimg' src={webpackLogo} alt='webpackLogo' /></div>
      <div><img className='carouselimg' src={reactrouterLogo} alt='reactrouterLogo' /></div>
      <div><img className='carouselimg' src={babelLogo} alt='babelLogo' /></div>
    </Slider>
  </div>
)

export default HomeView
