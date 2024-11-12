import logo from '../logo.svg';
import '../App.css';
import '../css/style.css';
import '../lib/animate/animate.min.css';
import '../lib/lightbox/css/lightbox.min.css';
import '../lib/owlcarousel/assets/owl.carousel.min.css';
import '../css/bootstrap.min.css';
// src/App.js
import React from 'react';
import HeaderCarousel from "./header_carousel";



function Carousel({activetag="home"}) {
    console.log("HIGHLIGHT PAGE",activetag)
  return (
      activetag === "home" ?
          <HeaderCarousel/>
          :
        ""
);
}

export default Carousel;



