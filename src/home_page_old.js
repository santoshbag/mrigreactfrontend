// import logo from './logo.svg';
import './App.css';
import './lib/animate/animate.min.css';
import './lib/lightbox/css/lightbox.min.css';
import './lib/owlcarousel/assets/owl.carousel.min.css';
import './css/bootstrap.min.css';
import './css/style.css';



// src/App.js
import React, { useEffect } from 'react';

function HomePage() {

  return (
        <iframe
        src="./home.html"
        width="100%"
        height="100%"
        style={{ border: 'none', position: 'absolute', top: 0, left: 0, bottom: 0, right: 0 }}
    />
  );
}

export default HomePage;
