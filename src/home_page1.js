// import logo from './logo.svg';
import './App.css';
import './lib/animate/animate.min.css';
import './lib/lightbox/css/lightbox.min.css';
import './lib/owlcarousel/assets/owl.carousel.min.css';
import './css/bootstrap.min.css';
import './css/style.css';



// src/App.js
import React, { useEffect } from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import $ from 'jquery';
import 'owl.carousel';




// window.$ = window.jQuery = $;

function HomePage() {

    // useEffect(() => {
    //     // Initialize Owl Carousel when the component mounts
    //     $('.owl-carousel').owlCarousel({
    //       loop: true,
    //       margin: 10,
    //       nav: true,
    //       items: 1,
    //       autoplay: true,
    //       autoplayTimeout: 3000,
    //       autoplayHoverPause: true,
    //     });
    //   }, []); // Empty dependency array ensures this runs once after component mounts

  return (
      <div>
          {/*<head>*/}
              <meta charSet="utf-8"/>
                  <title>Mrig Analytics</title>
                  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
                      <meta content="" name="keywords"/>
                          <meta content="" name="description"/>

                              {/*<!-- Google Web Fonts -->*/}
                              <link rel="preconnect" href="https://fonts.googleapis.com"/>
                                  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                                      <link
                                          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Roboto:wght@400;500;700;900&display=swap"
                                          rel="stylesheet"/>

                                          {/*<!-- Icon Font Stylesheet -->*/}
                                          <link rel="stylesheet"
                                                href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"/>
                                          <link
                                              href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
                                              rel="stylesheet"/>

                                              {/*<!-- Libraries Stylesheet -->*/}
                                              <link rel="stylesheet" href="./lib/animate/animate.min.css"/>
                                              <link href="./lib/lightbox/css/lightbox.min.css" rel="stylesheet"/>
                                                  <link href="./lib/owlcarousel/assets/owl.carousel.min.css"
                                                        rel="stylesheet"/>


                                                      {/*<!-- Customized Bootstrap Stylesheet -->*/}
                                                      <link href="./css/bootstrap.min.css" rel="stylesheet"/>

                                                          {/*<!-- Template Stylesheet -->*/}
                                                          <link href="./css/style.css" rel="stylesheet"/>
          {/*</head>*/}

          {/*<body>*/}

          {/*/!*<!-- Spinner Start -->*!/*/}
          {/*<div id="spinner"*/}
          {/*     className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">*/}
          {/*    <div className="spinner-border text-primary" style={{width: '3rem', height: '3rem'}} role='status'>*/}
          {/*        <span className="sr-only">Loading...</span>*/}
          {/*    </div>*/}
          {/*</div>*/}
          {/*/!*<!-- Spinner End -->*!/*/}

          {/*<!-- Topbar Start -->*/}
          <div className="container-fluid topbar bg-light px-5 d-none d-lg-block">
              <div className="row gx-0 align-items-center">
                  <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
                      <div className="d-flex flex-wrap">
                          <a href="https://www.google.com" className="text-muted small me-4"><i
                              className="fas fa-map-marker-alt text-primary me-2"></i>Find A Location</a>
                          <a href="tel:+01234567890" className="text-muted small me-4"><i
                              className="fas fa-phone-alt text-primary me-2"></i>+01234567890</a>
                          <a href="mailto:example@gmail.com" className="text-muted small me-0"><i
                              className="fas fa-envelope text-primary me-2"></i>Example@gmail.com</a>
                      </div>
                  </div>
                  <div className="col-lg-4 text-center text-lg-end">
                      <div className="d-inline-flex align-items-center" style={{height: '45px'}}>
                          <a href="https://www.google.com"><small className="me-3 text-dark"><i className="fa fa-user text-primary me-2"></i>Register</small></a>
                          <a href="https://www.google.com"><small className="me-3 text-dark"><i
                              className="fa fa-sign-in-alt text-primary me-2"></i>Login</small></a>
                          <div className="dropdown">
                              <a href="https://www.google.com" className="dropdown-toggle text-dark" data-bs-toggle="dropdown"><small><i
                                  className="fa fa-home text-primary me-2"></i> My Dashboard</small></a>
                              <div className="dropdown-menu rounded">
                                  <a href="https://www.google.com" className="dropdown-item"><i className="fas fa-user-alt me-2"></i> My
                                      Profile</a>
                                  <a href="https://www.google.com" className="dropdown-item"><i
                                      className="fas fa-comment-alt me-2"></i> Inbox</a>
                                  <a href="https://www.google.com" className="dropdown-item"><i
                                      className="fas fa-bell me-2"></i> Notifications</a>
                                  <a href="https://www.google.com" className="dropdown-item"><i className="fas fa-cog me-2"></i> Account
                                      Settings</a>
                                  <a href="https://www.google.com" className="dropdown-item"><i className="fas fa-power-off me-2"></i> Log
                                      Out</a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          {/*<!-- Topbar End -->*/}

          {/*<!-- Navbar & Hero Start -->*/}
          <div className="container-fluid position-relative p-0">
              <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                  <a href="/" className="navbar-brand p-0">
                      <h1 className="text-primary"><i className="fas fa-search-dollar me-3"></i>MrigAnalyics</h1>
                      {/*<!-- <img src="img/logo.png" alt="Logo"> -->*/}
                  </a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                          data-bs-target="#navbarCollapse">
                      <span className="fa fa-bars"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarCollapse">
                      <div className="navbar-nav ms-auto py-0">
                          <a href="/" className="nav-item nav-link active">Home</a>
                          <a href="/news" className="nav-item nav-link">News</a>
                          <a href="/marketpage" className="nav-item nav-link">Markets</a>
                          {/*<!--                        <a href="service.html" class="nav-item nav-link">Services</a>-->*/}
                          <div className="nav-item dropdown">
                              <a href="/services" className="nav-link" data-bs-toggle="dropdown">
                                  <span className="dropdown-toggle">Services</span>
                              </a>
                              <div className="dropdown-menu m-0">
                                  <a href="/stock" className="dropdown-item">Stocks</a>
                                  <a href="/mf" className="dropdown-item">Mutual Funds</a>
                                <a href="/ia" className=" dropdown-item">Investment Advisory</a>
                                <a href="/folio" className=" dropdown-item">Portfolio</a>
                                <a href="/ra" className=" dropdown-item">Risk Analytics</a>
                                <a href="/softs" className=" dropdown-item">Software</a>
                                <a href="/ds" className=" dropdown-item">Data Services</a>
                            </div>
                        </div>
                        <a href="/blog" className=" nav-item nav-link">Blogs</a>
                                  <a href="/about" className="nav-item nav-link">About</a>
                                  <a href="/contact" className="nav-item nav-link">Contact Us</a>
                              </div>
                              <a href="https://www.google.com" className="btn btn-primary rounded-pill py-2 px-4 my-3 my-lg-0 flex-shrink-0">Get
                                  Started</a>
                          </div>
              </nav>

              {/*<!-- Carousel Start -->*/}
              <div className="header-carousel owl-carousel">
                  <div className="header-carousel-item">
                      <img src="./img/carousel-1.jpg" className="img-fluid w-100" alt="Image"/>
                          <div className="carousel-caption">
                              <div className="container">
                                  <div className="row gy-0 gx-5">
                                      <div className="col-lg-0 col-xl-5"></div>
                                      <div className="col-xl-7 animated fadeInLeft">
                                          <div className="text-sm-center text-md-end">
                                              <h4 className="text-primary text-uppercase fw-bold mb-4">Welcome To MRIG
                                                  Analytics</h4>
                                              <h1 className="display-4 text-uppercase text-white mb-4">Financial
                                                  Solutions</h1>
                                              <p className="mb-5 fs-5"> We provide Advisory and Analytical solutions to
                                                  help your Investment Process
                                              </p>
                                              <div
                                                  className="d-flex justify-content-center justify-content-md-end flex-shrink-0 mb-4">
                                                  <a className="btn btn-light rounded-pill py-3 px-4 px-md-5 me-2"
                                                     href="https://www.google.com"><i className="fas fa-play-circle me-2"></i> Watch
                                                      Video</a>
                                                  <a className="btn btn-primary rounded-pill py-3 px-4 px-md-5 ms-2"
                                                     href="https://www.google.com">Learn More</a>
                                              </div>
                                              <div
                                                  className="d-flex align-items-center justify-content-center justify-content-md-end">
                                                  <h2 className="text-white me-2">Follow Us:</h2>
                                                  <div className="d-flex justify-content-end ms-2">
                                                      <a className="btn btn-md-square btn-light rounded-circle me-2"
                                                         href="https://www.google.com"><i className="fab fa-facebook-f"></i></a>
                                                      <a className="btn btn-md-square btn-light rounded-circle mx-2"
                                                         href="https://www.google.com"><i className="fab fa-twitter"></i></a>
                                                      <a className="btn btn-md-square btn-light rounded-circle mx-2"
                                                         href="https://www.google.com"><i className="fab fa-instagram"></i></a>
                                                      <a className="btn btn-md-square btn-light rounded-circle ms-2"
                                                         href="https://www.google.com"><i className="fab fa-linkedin-in"></i></a>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                  </div>
                  <div className="header-carousel-item">
                      <img src="./img/carousel-2.jpg" className="img-fluid w-100" alt="Image"/>
                          <div className="carousel-caption">
                              <div className="container">
                                  <div className="row g-5">
                                      <div className="col-12 animated fadeInUp">
                                          <div className="text-center">
                                              <h4 className="text-primary text-uppercase fw-bold mb-4">Welcome To MRIG
                                                  Analytics</h4>
                                              <h1 className="display-4 text-uppercase text-white mb-4">Invest your money
                                                  with higher return</h1>
                                              <p className="mb-5 fs-5">Use our Analytical platforms and Advisory screens
                                                  to select stocks and funds. Our Option Strategy screen helps to
                                                  monetize unique opportunities available in the market according to
                                                  your risk tolerance
                                              </p>
                                              <div className="d-flex justify-content-center flex-shrink-0 mb-4">
                                                  <a className="btn btn-light rounded-pill py-3 px-4 px-md-5 me-2"
                                                     href="https://www.google.com"><i className="fas fa-play-circle me-2"></i> Watch
                                                      Video</a>
                                                  <a className="btn btn-primary rounded-pill py-3 px-4 px-md-5 ms-2"
                                                     href="https://www.google.com">Learn More</a>
                                              </div>
                                              <div className="d-flex align-items-center justify-content-center">
                                                  <h2 className="text-white me-2">Follow Us:</h2>
                                                  <div className="d-flex justify-content-end ms-2">
                                                      <a className="btn btn-md-square btn-light rounded-circle me-2"
                                                         href="https://www.google.com"><i className="fab fa-facebook-f"></i></a>
                                                      <a className="btn btn-md-square btn-light rounded-circle mx-2"
                                                         href="https://www.google.com"><i className="fab fa-twitter"></i></a>
                                                      <a className="btn btn-md-square btn-light rounded-circle mx-2"
                                                         href="https://www.google.com"><i className="fab fa-instagram"></i></a>
                                                      <a className="btn btn-md-square btn-light rounded-circle ms-2"
                                                         href="https://www.google.com"><i className="fab fa-linkedin-in"></i></a>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                  </div>
                  <div className="header-carousel-item">
                      <img src="./img/carousel-2.jpg" className="img-fluid w-100" alt="Image"/>
                          <div className="carousel-caption">
                              <div className="container">
                                  <div className="row g-5">
                                      <div className="col-12 animated fadeInUp">
                                          <div className="text-center">
                                              <h4 className="text-primary text-uppercase fw-bold mb-4">Welcome To MRIG
                                                  Analytics</h4>
                                              <h1 className="display-4 text-uppercase text-white mb-4">Portfolio and
                                                  Analytical Services</h1>
                                              <p className="mb-5 fs-5">Our Portfolio solutions helps to analyze its
                                                  risks and performance and various stress scenarios.
                                                  Fixed Income analytics platform helps the pricing and risk analysis of
                                                  complex instruments.
                                              </p>
                                              <div className="d-flex justify-content-center flex-shrink-0 mb-4">
                                                  <a className="btn btn-light rounded-pill py-3 px-4 px-md-5 me-2"
                                                     href="https://www.google.com"><i className="fas fa-play-circle me-2"></i> Watch
                                                      Video</a>
                                                  <a className="btn btn-primary rounded-pill py-3 px-4 px-md-5 ms-2"
                                                     href="https://www.google.com">Learn More</a>
                                              </div>
                                              <div className="d-flex align-items-center justify-content-center">
                                                  <h2 className="text-white me-2">Follow Us:</h2>
                                                  <div className="d-flex justify-content-end ms-2">
                                                      <a className="btn btn-md-square btn-light rounded-circle me-2"
                                                         href="https://www.google.com"><i className="fab fa-facebook-f"></i></a>
                                                      <a className="btn btn-md-square btn-light rounded-circle mx-2"
                                                         href="https://www.google.com"><i className="fab fa-twitter"></i></a>
                                                      <a className="btn btn-md-square btn-light rounded-circle mx-2"
                                                         href="https://www.google.com"><i className="fab fa-instagram"></i></a>
                                                      <a className="btn btn-md-square btn-light rounded-circle ms-2"
                                                         href="https://www.google.com"><i className="fab fa-linkedin-in"></i></a>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                  </div>

              </div>
              {/*<!-- Carousel End -->*/}
          </div>
          {/*<!-- Navbar & Hero End -->*/}

          {/*<!--    <div id="root"></div>-->*/}

          {/*<!-- Abvout Start -->*/}
          <div className="container-fluid about py-5">
              <div className="container py-5">
                  <div className="row g-5 align-items-center">
                      <div className="col-xl-7 wow fadeInLeft" data-wow-delay="0.2s">
                          <div>
                              <h4 className="text-primary">About Us</h4>
                              <h1 className="display-5 mb-4">Meet our company unless miss the opportunity</h1>
                              <p className="mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum velit
                                  temporibus repudiandae ipsa, eaque perspiciatis cumque incidunt tenetur sequi
                                  reiciendis.
                              </p>
                              <div className="row g-4">
                                  <div className="col-md-6 col-lg-6 col-xl-6">
                                      <div className="d-flex">
                                          <div><i className="fas fa-lightbulb fa-3x text-primary"></i></div>
                                          <div className="ms-4">
                                              <h4>Business Consuluting</h4>
                                              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-md-6 col-lg-6 col-xl-6">
                                      <div className="d-flex">
                                          <div><i className="bi bi-bookmark-heart-fill fa-3x text-primary"></i></div>
                                          <div className="ms-4">
                                              <h4>Year Of Expertise</h4>
                                              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-sm-6">
                                      <a href="https://www.google.com" className="btn btn-primary rounded-pill py-3 px-5 flex-shrink-0">Discover
                                          Now</a>
                                  </div>
                                  <div className="col-sm-6">
                                      <div className="d-flex">
                                          <i className="fas fa-phone-alt fa-2x text-primary me-4"></i>
                                          <div>
                                              <h4>Call Us</h4>
                                              <p className="mb-0 fs-5" style={{letterspacing: '1px'}}>+01234567890</p>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-5 wow fadeInRight" data-wow-delay="0.2s">
                          <div className="bg-primary rounded position-relative overflow-hidden">
                              <img src="./img/about-2.png" className="img-fluid rounded w-100" alt=""/>
                                  <div id="root"></div>
                                  <div className="" style={{position: 'absolute', top: '-15px', right: '-15px'}}>
                                      <img src="./img/about-3.png" className="img-fluid"
                                           style={{width: '150px', height: '150px', opacity: '0.7'}} alt=""/>
                                  </div>
                                  <div className=""
                                       style={{position: 'absolute', top: '-20px', left: '10px', transform: 'rotate(90deg)'}}>
                                      <img src="./img/about-4.png" className="img-fluid"
                                           style={{width: '100px', height: '150px', opacity: '0.9'}} alt=""/>
                                  </div>
                                  <div className="rounded-bottom">
                                      <img src="./img/about-5.jpg" className="img-fluid rounded-bottom w-100" alt=""/>
                                  </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          {/*<!-- About End -->*/}

          {/*<!-- Services Start -->*/}
          <div className="container-fluid service pb-5">
              <div className="container pb-5">
                  <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s"
                       style={{maxwidth: '800px'}}>
                      <h4 className="text-primary">Our Services</h4>
                      <h1 className="display-5 mb-4">We Services provided best offer</h1>
                      <p className="mb-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur adipisci
                          facilis cupiditate recusandae aperiam temporibus corporis itaque quis facere, numquam, ad
                          culpa deserunt sint dolorem autem obcaecati, ipsam mollitia hic.
                      </p>
                  </div>
                  <div className="row g-4">
                      <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.2s">
                          <div className="service-item">
                              <div className="service-img">
                                  <img src="./img/service-1.jpg" className="img-fluid rounded-top w-100" alt="Image"/>
                              </div>
                              <div className="rounded-bottom p-4">
                                  <a href="https://www.google.com" className="h4 d-inline-block mb-4"> Strategy Consulting</a>
                                  <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
                                      sint? Excepturi facilis neque nesciunt similique officiis veritatis,
                                  </p>
                                  <a className="btn btn-primary rounded-pill py-2 px-4" href="https://www.google.com">Learn More</a>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.4s">
                          <div className="service-item">
                              <div className="service-img">
                                  <img src="./img/service-2.jpg" className="img-fluid rounded-top w-100" alt="Image"/>
                              </div>
                              <div className="rounded-bottom p-4">
                                  <a href="https://www.google.com" className="h4 d-inline-block mb-4">Financial Advisory</a>
                                  <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
                                      sint? Excepturi facilis neque nesciunt similique officiis veritatis,
                                  </p>
                                  <a className="btn btn-primary rounded-pill py-2 px-4" href="https://www.google.com">Learn More</a>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.6s">
                          <div className="service-item">
                              <div className="service-img">
                                  <img src="./img/service-3.jpg" className="img-fluid rounded-top w-100" alt="Image"/>
                              </div>
                              <div className="rounded-bottom p-4">
                                  <a href="https://www.google.com" className="h4 d-inline-block mb-4">Managements</a>
                                  <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
                                      sint? Excepturi facilis neque nesciunt similique officiis veritatis,
                                  </p>
                                  <a className="btn btn-primary rounded-pill py-2 px-4" href="https://www.google.com">Learn More</a>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.2s">
                          <div className="service-item">
                              <div className="service-img">
                                  <img src="./img/service-4.jpg" className="img-fluid rounded-top w-100" alt="Image"/>
                              </div>
                              <div className="rounded-bottom p-4">
                                  <a href="https://www.google.com" className="h4 d-inline-block mb-4">Supply Optimization</a>
                                  <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
                                      sint? Excepturi facilis neque nesciunt similique officiis veritatis,
                                  </p>
                                  <a className="btn btn-primary rounded-pill py-2 px-4" href="https://www.google.com">Learn More</a>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.4s">
                          <div className="service-item">
                              <div className="service-img">
                                  <img src="./img/service-5.jpg" className="img-fluid rounded-top w-100" alt="Image"/>
                              </div>
                              <div className="rounded-bottom p-4">
                                  <a href="https://www.google.com" className="h4 d-inline-block mb-4">Hr Consulting</a>
                                  <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
                                      sint? Excepturi facilis neque nesciunt similique officiis veritatis,
                                  </p>
                                  <a className="btn btn-primary rounded-pill py-2 px-4" href="https://www.google.com">Learn More</a>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.6s">
                          <div className="service-item">
                              <div className="service-img">
                                  <img src="./img/service-6.jpg" className="img-fluid rounded-top w-100" alt="Image"/>
                              </div>
                              <div className="rounded-bottom p-4">
                                  <a href="https://www.google.com" className="h4 d-inline-block mb-4">Marketing Consulting</a>
                                  <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
                                      sint? Excepturi facilis neque nesciunt similique officiis veritatis,
                                  </p>
                                  <a className="btn btn-primary rounded-pill py-2 px-4" href="https://www.google.com">Learn More</a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          {/*<!-- Services End -->*/}

          {/*<!-- Features Start -->*/}
          <div className="container-fluid feature pb-5">
              <div className="container pb-5">
                  <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s"
                       style={{maxwidth: '800px'}}>
                      <h4 className="text-primary">Our Features</h4>
                      <h1 className="display-5 mb-4">Connecting businesses, ideas, and people for greater impact.</h1>
                      <p className="mb-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur adipisci
                          facilis cupiditate recusandae aperiam temporibus corporis itaque quis facere, numquam, ad
                          culpa deserunt sint dolorem autem obcaecati, ipsam mollitia hic.
                      </p>
                  </div>
                  <div className="row g-4">
                      <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.2s">
                          <div className="feature-item p-4">
                              <div className="feature-icon p-4 mb-4">
                                  <i className="fas fa-chart-line fa-4x text-primary"></i>
                              </div>
                              <h4>Global Management</h4>
                              <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea hic
                                  laborum odit pariatur...
                              </p>
                              <a className="btn btn-primary rounded-pill py-2 px-4" href="https://www.google.com">Learn More</a>
                          </div>
                      </div>
                      <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.4s">
                          <div className="feature-item p-4">
                              <div className="feature-icon p-4 mb-4">
                                  <i className="fas fa-university fa-4x text-primary"></i>
                              </div>
                              <h4>Corporate Banking</h4>
                              <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea hic
                                  laborum odit pariatur...
                              </p>
                              <a className="btn btn-primary rounded-pill py-2 px-4" href="https://www.google.com">Learn More</a>
                          </div>
                      </div>
                      <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.6s">
                          <div className="feature-item p-4">
                              <div className="feature-icon p-4 mb-4">
                                  <i className="fas fa-file-alt fa-4x text-primary"></i>
                              </div>
                              <h4>Asset Management</h4>
                              <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea hic
                                  laborum odit pariatur...
                              </p>
                              <a className="btn btn-primary rounded-pill py-2 px-4" href="https://www.google.com">Learn More</a>
                          </div>
                      </div>
                      <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.8s">
                          <div className="feature-item p-4">
                              <div className="feature-icon p-4 mb-4">
                                  <i className="fas fa-hand-holding-usd fa-4x text-primary"></i>
                              </div>
                              <h4>Investment Bank</h4>
                              <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea hic
                                  laborum odit pariatur...
                              </p>
                              <a className="btn btn-primary rounded-pill py-2 px-4" href="https://www.google.com">Learn More</a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          {/*<!-- Features End -->*/}


          {/*<!-- Offer Start -->*/}
          <div className="container-fluid offer-section pb-5">
              <div className="container pb-5">
                  <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s"
                       style={{maxwidth: '800px'}}>
                      <h4 className="text-primary">Our Offer</h4>
                      <h1 className="display-5 mb-4">Benefits We offer</h1>
                      <p className="mb-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur adipisci
                          facilis cupiditate recusandae aperiam temporibus corporis itaque quis facere, numquam, ad
                          culpa deserunt sint dolorem autem obcaecati, ipsam mollitia hic.
                      </p>
                  </div>
                  <div className="row g-5 align-items-center">
                      <div className="col-xl-5 wow fadeInLeft" data-wow-delay="0.2s">
                          <div className="nav nav-pills bg-light rounded p-5">
                              <a className="accordion-link p-4 active mb-4" data-bs-toggle="pill" href="#collapseOne">
                                  <h5 className="mb-0">Lending money for investment of your new projects</h5>
                              </a>
                              <a className="accordion-link p-4 mb-4" data-bs-toggle="pill" href="#collapseTwo">
                                  <h5 className="mb-0">Lending money for investment of your new projects</h5>
                              </a>
                              <a className="accordion-link p-4 mb-4" data-bs-toggle="pill" href="#collapseThree">
                                  <h5 className="mb-0">Mobile payment is more flexible and easy for all investors</h5>
                              </a>
                              <a className="accordion-link p-4 mb-0" data-bs-toggle="pill" href="#collapseFour">
                                  <h5 className="mb-0">all transaction is kept free for the member of pro traders</h5>
                              </a>
                          </div>
                      </div>
                      <div className="col-xl-7 wow fadeInRight" data-wow-delay="0.4s">
                          <div className="tab-content">
                              <div id="collapseOne" className="tab-pane fade show p-0 active">
                                  <div className="row g-4">
                                      <div className="col-md-7">
                                          <img src="./img/offer-1.jpg" className="img-fluid w-100 rounded" alt=""/>
                                      </div>
                                      <div className="col-md-5">
                                          <h1 className="display-5 mb-4">The stock market provides a venue...</h1>
                                          <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                              Corporis amet sequi molestiae tenetur eum mollitia, blanditiis, magnam
                                              illo magni error dolore unde perspiciatis tempore et totam corrupti
                                              dignissimos aut praesentium?
                                          </p>
                                          <a className="btn btn-primary rounded-pill py-2 px-4" href="https://www.google.com">Learn More</a>
                                      </div>
                                  </div>
                              </div>
                              <div id="collapseTwo" className="tab-pane fade show p-0">
                                  <div className="row g-4">
                                      <div className="col-md-7">
                                          <img src="./img/offer-2.jpg" className="img-fluid w-100 rounded" alt=""/>
                                      </div>
                                      <div className="col-md-5">
                                          <h1 className="display-5 mb-4">The stock market provides a venue...</h1>
                                          <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                              Corporis amet sequi molestiae tenetur eum mollitia, blanditiis, magnam
                                              illo magni error dolore unde perspiciatis tempore et totam corrupti
                                              dignissimos aut praesentium?
                                          </p>
                                          <a className="btn btn-primary rounded-pill py-2 px-4" href="https://www.google.com">Learn More</a>
                                      </div>
                                  </div>
                              </div>
                              <div id="collapseThree" className="tab-pane fade show p-0">
                                  <div className="row g-4">
                                      <div className="col-md-7">
                                          <img src="./img/offer-3.jpg" className="img-fluid w-100 rounded" alt=""/>
                                      </div>
                                      <div className="col-md-5">
                                          <h1 className="display-5 mb-4">The stock market provides a venue...</h1>
                                          <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                              Corporis amet sequi molestiae tenetur eum mollitia, blanditiis, magnam
                                              illo magni error dolore unde perspiciatis tempore et totam corrupti
                                              dignissimos aut praesentium?
                                          </p>
                                          <a className="btn btn-primary rounded-pill py-2 px-4" href="https://www.google.com">Learn More</a>
                                      </div>
                                  </div>
                              </div>
                              <div id="collapseFour" className="tab-pane fade show p-0">
                                  <div className="row g-4">
                                      <div className="col-md-7">
                                          <img src="./img/offer-4.jpg" className="img-fluid w-100 rounded" alt=""/>
                                      </div>
                                      <div className="col-md-5">
                                          <h1 className="display-5 mb-4">The stock market provides a venue...</h1>
                                          <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                              Corporis amet sequi molestiae tenetur eum mollitia, blanditiis, magnam
                                              illo magni error dolore unde perspiciatis tempore et totam corrupti
                                              dignissimos aut praesentium?
                                          </p>
                                          <a className="btn btn-primary rounded-pill py-2 px-4" href="https://www.google.com">Learn More</a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          {/*<!-- Offer End -->*/}

          {/*<!-- Blog Start -->*/}
          <div className="container-fluid blog pb-5">
              <div className="container pb-5">
                  <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s"
                       style={{maxwidth: '800px'}}>
                      <h4 className="text-primary">Our Blog & News</h4>
                      <h1 className="display-5 mb-4">Articles For Pro Traders</h1>
                      <p className="mb-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur adipisci
                          facilis cupiditate recusandae aperiam temporibus corporis itaque quis facere, numquam, ad
                          culpa deserunt sint dolorem autem obcaecati, ipsam mollitia hic.
                      </p>
                  </div>
                  <div className="owl-carousel blog-carousel wow fadeInUp" data-wow-delay="0.2s">
                      <div className="blog-item p-4">
                          <div className="blog-img mb-4">
                              <img src="./img/service-1.jpg" className="img-fluid w-100 rounded" alt=""/>
                                  <div className="blog-title">
                                      <a href="https://www.google.com" className="btn">Dividend Stocks</a>
                                  </div>
                          </div>
                          <a href="https://www.google.com" className="h4 d-inline-block mb-3">Options Trading Business?</a>
                          <p className="mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore aut
                              aliquam suscipit error corporis accusamus labore....
                          </p>
                          <div className="d-flex align-items-center">
                              <img src="./img/testimonial-1.jpg" className="img-fluid rounded-circle"
                                   style={{width: '60px', height: '60px'}} alt=""/>
                                  <div className="ms-3">
                                      <h5>Admin</h5>
                                      <p className="mb-0">October 9, 2025</p>
                                  </div>
                          </div>
                      </div>
                      <div className="blog-item p-4">
                          <div className="blog-img mb-4">
                              <img src="./img/service-2.jpg" className="img-fluid w-100 rounded" alt=""/>
                                  <div className="blog-title">
                                      <a href="https://www.google.com" className="btn">Non-Dividend Stocks</a>
                                  </div>
                          </div>
                          <a href="https://www.google.com" className="h4 d-inline-block mb-3">Options Trading Business?</a>
                          <p className="mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore aut
                              aliquam suscipit error corporis accusamus labore....
                          </p>
                          <div className="d-flex align-items-center">
                              <img src="./img/testimonial-2.jpg" className="img-fluid rounded-circle"
                                   style={{width: '60px', height: '60px'}} alt=""/>
                                  <div className="ms-3">
                                      <h5>Admin</h5>
                                      <p className="mb-0">October 9, 2025</p>
                                  </div>
                          </div>
                      </div>
                      <div className="blog-item p-4">
                          <div className="blog-img mb-4">
                              <img src="./img/service-3.jpg" className="img-fluid w-100 rounded" alt=""/>
                                  <div className="blog-title">
                                      <a href="https://www.google.com" className="btn">Dividend Stocks</a>
                                  </div>
                          </div>
                          <a href="https://www.google.com" className="h4 d-inline-block mb-3">Options Trading Business?</a>
                          <p className="mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore aut
                              aliquam suscipit error corporis accusamus labore....
                          </p>
                          <div className="d-flex align-items-center">
                              <img src="./img/testimonial-3.jpg" className="img-fluid rounded-circle"
                                   style={{width: '60px', height: '60px'}} alt=""/>
                                  <div className="ms-3">
                                      <h5>Admin</h5>
                                      <p className="mb-0">October 9, 2025</p>
                                  </div>
                          </div>
                      </div>
                      <div className="blog-item p-4">
                          <div className="blog-img mb-4">
                              <img src="./img/service-4.jpg" className="img-fluid w-100 rounded" alt=""/>
                                  <div className="blog-title">
                                      <a href="https://www.google.com" className="btn">Non-Dividend Stocks</a>
                                  </div>
                          </div>
                          <a href="https://www.google.com" className="h4 d-inline-block mb-3">Options Trading Business?</a>
                          <p className="mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore aut
                              aliquam suscipit error corporis accusamus labore....
                          </p>
                          <div className="d-flex align-items-center">
                              <img src="./img/testimonial-1.jpg" className="img-fluid rounded-circle"
                                   style={{width: '60px', height: '60px'}} alt=""/>
                                  <div className="ms-3">
                                      <h5>Admin</h5>
                                      <p className="mb-0">October 9, 2025</p>
                                  </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          {/*<!-- Blog End -->*/}


          {/*<!-- FAQs Start -->*/}
          <div className="container-fluid faq-section pb-5">
              <div className="container pb-5 overflow-hidden">
                  <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s"
                       style={{maxwidth: '800px'}}>
                      <h4 className="text-primary">FAQs</h4>
                      <h1 className="display-5 mb-4">Frequently Asked Questions</h1>
                      <p className="mb-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur adipisci
                          facilis cupiditate recusandae aperiam temporibus corporis itaque quis facere, numquam, ad
                          culpa deserunt sint dolorem autem obcaecati, ipsam mollitia hic.
                      </p>
                  </div>
                  <div className="row g-5 align-items-center">
                      <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.2s">
                          <div className="accordion accordion-flush bg-light rounded p-5" id="accordionFlushSection">
                              <div className="accordion-item rounded-top">
                                  <h2 className="accordion-header" id="flush-headingOne">
                                      <button className="accordion-button collapsed rounded-top" type="button"
                                              data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                                              aria-expanded="false" aria-controls="flush-collapseOne">
                                          What Does This Tool Do?
                                      </button>
                                  </h2>
                                  <div id="flush-collapseOne" className="accordion-collapse collapse"
                                       aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushSection">
                                      <div className="accordion-body">Placeholder content for this accordion, which is
                                          intended to demonstrate the <code>.accordion-flush</code> class. This is the
                                          first item's accordion body.
                                      </div>
                                  </div>
                              </div>
                              <div className="accordion-item">
                                  <h2 className="accordion-header" id="flush-headingTwo">
                                      <button className="accordion-button collapsed" type="button"
                                              data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo"
                                              aria-expanded="false" aria-controls="flush-collapseTwo">
                                          What Are The Disadvantages Of Online Trading?
                                      </button>
                                  </h2>
                                  <div id="flush-collapseTwo" className="accordion-collapse collapse"
                                       aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushSection">
                                      <div className="accordion-body">Placeholder content for this accordion, which is
                                          intended to demonstrate the <code>.accordion-flush</code> class. This is the
                                          second item's accordion body. Let's imagine this being filled with some actual
                                          content.
                                      </div>
                                  </div>
                              </div>
                              <div className="accordion-item">
                                  <h2 className="accordion-header" id="flush-headingThree">
                                      <button className="accordion-button collapsed" type="button"
                                              data-bs-toggle="collapse" data-bs-target="#flush-collapseThree"
                                              aria-expanded="false" aria-controls="flush-collapseThree">
                                          Is Online Trading Safe?
                                      </button>
                                  </h2>
                                  <div id="flush-collapseThree" className="accordion-collapse collapse"
                                       aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushSection">
                                      <div className="accordion-body">Placeholder content for this accordion, which is
                                          intended to demonstrate the <code>.accordion-flush</code> class. This is the
                                          second item's accordion body. Let's imagine this being filled with some actual
                                          content.
                                      </div>
                                  </div>
                              </div>
                              <div className="accordion-item">
                                  <h2 className="accordion-header" id="flush-headingFour">
                                      <button className="accordion-button collapsed" type="button"
                                              data-bs-toggle="collapse" data-bs-target="#flush-collapseFour"
                                              aria-expanded="false" aria-controls="flush-collapseFour">
                                          What Is Online Trading, And How Dose It Work?
                                      </button>
                                  </h2>
                                  <div id="flush-collapseFour" className="accordion-collapse collapse"
                                       aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushSection">
                                      <div className="accordion-body">Placeholder content for this accordion, which is
                                          intended to demonstrate the <code>.accordion-flush</code> class. This is the
                                          second item's accordion body. Let's imagine this being filled with some actual
                                          content.
                                      </div>
                                  </div>
                              </div>
                              <div className="accordion-item">
                                  <h2 className="accordion-header" id="flush-headingFive">
                                      <button className="accordion-button collapsed" type="button"
                                              data-bs-toggle="collapse" data-bs-target="#flush-collapseFive"
                                              aria-expanded="false" aria-controls="flush-collapseFive">
                                          Which App Is Best For Online Trading?
                                      </button>
                                  </h2>
                                  <div id="flush-collapseFive" className="accordion-collapse collapse"
                                       aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushSection">
                                      <div className="accordion-body">Placeholder content for this accordion, which is
                                          intended to demonstrate the <code>.accordion-flush</code> class. This is the
                                          second item's accordion body. Let's imagine this being filled with some actual
                                          content.
                                      </div>
                                  </div>
                              </div>
                              <div className="accordion-item rounded-bottom">
                                  <h2 className="accordion-header" id="flush-headingSix">
                                      <button className="accordion-button collapsed" type="button"
                                              data-bs-toggle="collapse" data-bs-target="#flush-collapseSix"
                                              aria-expanded="false" aria-controls="flush-collapseSix">
                                          How To Create A Trading Account?
                                      </button>
                                  </h2>
                                  <div id="flush-collapseSix" className="accordion-collapse collapse"
                                       aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushSection">
                                      <div className="accordion-body">Placeholder content for this accordion, which is
                                          intended to demonstrate the <code>.accordion-flush</code> class. This is the
                                          third item's accordion body. Nothing more exciting happening here in terms of
                                          content, but just filling up the space to make it look, at least at first
                                          glance, a bit more representative of how this would look in a real-world
                                          application.
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.2s">
                          <div className="bg-primary rounded">
                              <img src="./img/about-2.png" className="img-fluid w-100" alt=""/>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          {/*<!-- FAQs End -->*/}


          {/*<!-- Team Start -->*/}
          <div className="container-fluid team pb-5">
              <div className="container pb-5">
                  <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s"
                       style={{maxwidth: '800px'}}>
                      <h4 className="text-primary">Our Team</h4>
                      <h1 className="display-5 mb-4">Meet Our Advisers</h1>
                      <p className="mb-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur adipisci
                          facilis cupiditate recusandae aperiam temporibus corporis itaque quis facere, numquam, ad
                          culpa deserunt sint dolorem autem obcaecati, ipsam mollitia hic.
                      </p>
                  </div>
                  <div className="row g-4">
                      <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.2s">
                          <div className="team-item">
                              <div className="team-img">
                                  <img src="./img/team-1.jpg" className="img-fluid" alt=""/>
                              </div>
                              <div className="team-title">
                                  <h4 className="mb-0">David James</h4>
                                  <p className="mb-0">Profession</p>
                              </div>
                              <div className="team-icon">
                                  <a className="btn btn-primary btn-sm-square rounded-circle me-3" href="https://www.google.com"><i
                                      className="fab fa-facebook-f"></i></a>
                                  <a className="btn btn-primary btn-sm-square rounded-circle me-3" href="https://www.google.com"><i
                                      className="fab fa-twitter"></i></a>
                                  <a className="btn btn-primary btn-sm-square rounded-circle me-3" href="https://www.google.com"><i
                                      className="fab fa-linkedin-in"></i></a>
                                  <a className="btn btn-primary btn-sm-square rounded-circle me-0" href="https://www.google.com"><i
                                      className="fab fa-instagram"></i></a>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.4s">
                          <div className="team-item">
                              <div className="team-img">
                                  <img src="./img/team-2.jpg" className="img-fluid" alt=""/>
                              </div>
                              <div className="team-title">
                                  <h4 className="mb-0">David James</h4>
                                  <p className="mb-0">Profession</p>
                              </div>
                              <div className="team-icon">
                                  <a className="btn btn-primary btn-sm-square rounded-circle me-3" href="/"><i
                                      className="fab fa-facebook-f"></i></a>
                                  <a className="btn btn-primary btn-sm-square rounded-circle me-3" href="/"><i
                                      className="fab fa-twitter"></i></a>
                                  <a className="btn btn-primary btn-sm-square rounded-circle me-3" href="/"><i
                                      className="fab fa-linkedin-in"></i></a>
                                  <a className="btn btn-primary btn-sm-square rounded-circle me-0" href="/"><i
                                      className="fab fa-instagram"></i></a>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.6s">
                          <div className="team-item">
                              <div className="team-img">
                                  <img src="./img/team-3.jpg" className="img-fluid" alt=""/>
                              </div>
                              <div className="team-title">
                                  <h4 className="mb-0">David James</h4>
                                  <p className="mb-0">Profession</p>
                              </div>
                              <div className="team-icon">
                                  <a className="btn btn-primary btn-sm-square rounded-circle me-3" href="/"><i
                                      className="fab fa-facebook-f"></i></a>
                                  <a className="btn btn-primary btn-sm-square rounded-circle me-3" href="/"><i
                                      className="fab fa-twitter"></i></a>
                                  <a className="btn btn-primary btn-sm-square rounded-circle me-3" href="/"><i
                                      className="fab fa-linkedin-in"></i></a>
                                  <a className="btn btn-primary btn-sm-square rounded-circle me-0" href="/"><i
                                      className="fab fa-instagram"></i></a>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.8s">
                          <div className="team-item">
                              <div className="team-img">
                                  <img src="./img/team-4.jpg" className="img-fluid" alt=""/>
                              </div>
                              <div className="team-title">
                                  <h4 className="mb-0">David James</h4>
                                  <p className="mb-0">Profession</p>
                              </div>
                              <div className="team-icon">
                                  <a className="btn btn-primary btn-sm-square rounded-circle me-3" href="/"><i
                                      className="fab fa-facebook-f"></i></a>
                                  <a className="btn btn-primary btn-sm-square rounded-circle me-3" href="/"><i
                                      className="fab fa-twitter"></i></a>
                                  <a className="btn btn-primary btn-sm-square rounded-circle me-3" href="/"><i
                                      className="fab fa-linkedin-in"></i></a>
                                  <a className="btn btn-primary btn-sm-square rounded-circle me-0" href="/"><i
                                      className="fab fa-instagram"></i></a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          {/*<!-- Team End -->*/}

          {/*<!-- Testimonial Start -->*/}
          <div className="container-fluid testimonial pb-5">
              <div className="container pb-5">
                  <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s"
                       style={{maxwidth: '800px'}}>
                      <h4 className="text-primary">Testimonial</h4>
                      <h1 className="display-5 mb-4">Our Clients Riviews</h1>
                      <p className="mb-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur adipisci
                          facilis cupiditate recusandae aperiam temporibus corporis itaque quis facere, numquam, ad
                          culpa deserunt sint dolorem autem obcaecati, ipsam mollitia hic.
                      </p>
                  </div>
                  <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.2s">
                      <div className="testimonial-item">
                          <div className="testimonial-quote-left">
                              <i className="fas fa-quote-left fa-2x"></i>
                          </div>
                          <div className="testimonial-img">
                              <img src="./img/testimonial-1.jpg" className="img-fluid" alt="Image"/>
                          </div>
                          <div className="testimonial-text">
                              <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                                  blanditiis excepturi quisquam temporibus voluptatum reprehenderit culpa, quasi
                                  corrupti laborum accusamus.
                              </p>
                          </div>
                          <div className="testimonial-title">
                              <div>
                                  <h4 className="mb-0">Person Name</h4>
                                  <p className="mb-0">Profession</p>
                              </div>
                              <div className="d-flex text-primary">
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                              </div>
                          </div>
                          <div className="testimonial-quote-right">
                              <i className="fas fa-quote-right fa-2x"></i>
                          </div>
                      </div>
                      <div className="testimonial-item">
                          <div className="testimonial-quote-left">
                              <i className="fas fa-quote-left fa-2x"></i>
                          </div>
                          <div className="testimonial-img">
                              <img src="./img/testimonial-2.jpg" className="img-fluid" alt="Image"/>
                          </div>
                          <div className="testimonial-text">
                              <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                                  blanditiis excepturi quisquam temporibus voluptatum reprehenderit culpa, quasi
                                  corrupti laborum accusamus.
                              </p>
                          </div>
                          <div className="testimonial-title">
                              <div>
                                  <h4 className="mb-0">Person Name</h4>
                                  <p className="mb-0">Profession</p>
                              </div>
                              <div className="d-flex text-primary">
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                              </div>
                          </div>
                          <div className="testimonial-quote-right">
                              <i className="fas fa-quote-right fa-2x"></i>
                          </div>
                      </div>
                      <div className="testimonial-item">
                          <div className="testimonial-quote-left">
                              <i className="fas fa-quote-left fa-2x"></i>
                          </div>
                          <div className="testimonial-img">
                              <img src="./img/testimonial-3.jpg" className="img-fluid" alt="Image"/>
                          </div>
                          <div className="testimonial-text">
                              <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                                  blanditiis excepturi quisquam temporibus voluptatum reprehenderit culpa, quasi
                                  corrupti laborum accusamus.
                              </p>
                          </div>
                          <div className="testimonial-title">
                              <div>
                                  <h4 className="mb-0">Person Name</h4>
                                  <p className="mb-0">Profession</p>
                              </div>
                              <div className="d-flex text-primary">
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                              </div>
                          </div>
                          <div className="testimonial-quote-right">
                              <i className="fas fa-quote-right fa-2x"></i>
                          </div>
                      </div>
                      <div className="testimonial-item">
                          <div className="testimonial-quote-left">
                              <i className="fas fa-quote-left fa-2x"></i>
                          </div>
                          <div className="testimonial-img">
                              <img src="./img/testimonial-2.jpg" className="img-fluid" alt="Image"/>
                          </div>
                          <div className="testimonial-text">
                              <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                                  blanditiis excepturi quisquam temporibus voluptatum reprehenderit culpa, quasi
                                  corrupti laborum accusamus.
                              </p>
                          </div>
                          <div className="testimonial-title">
                              <div>
                                  <h4 className="mb-0">Person Name</h4>
                                  <p className="mb-0">Profession</p>
                              </div>
                              <div className="d-flex text-primary">
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                              </div>
                          </div>
                          <div className="testimonial-quote-right">
                              <i className="fas fa-quote-right fa-2x"></i>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          {/*<!-- Testimonial End -->*/}

        {/*}<!-- Footer Start -->*/}
        <div class="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">
            <div class="container py-5 border-start-0 border-end-0" style={{border: '1px solid', bordercolor: 'rgb(255, 255, 255, 0.08)'}}>
                <div class="row g-5">
                    <div class="col-md-6 col-lg-6 col-xl-4">
                        <div class="footer-item">
                            <a href="/" class="p-0">
                                <h4 class="text-white"><i class="fas fa-search-dollar me-3"></i>Mrig Analytics</h4>
                                {/*}<!-- <img src="img/logo.png" alt="Logo"> -->*/}
                            </a>
                            <p class="mb-4">Dolor amet sit justo amet elitr clita ipsum elitr est.Lorem ipsum dolor sit amet, consectetur adipiscing...</p>
                            <div class="d-flex">
                                <a href="https://www.google.com" class="bg-primary d-flex rounded align-items-center py-2 px-3 me-2">
                                    <i class="fas fa-apple-alt text-white"></i>
                                    <div class="ms-3">
                                        <small class="text-white">Download on the</small>
                                        <h6 class="text-white">App Store</h6>
                                    </div>
                                </a>
                                <a href="https://www.google.com" class="bg-dark d-flex rounded align-items-center py-2 px-3 ms-2">
                                    <i class="fas fa-play text-primary"></i>
                                    <div class="ms-3">
                                        <small class="text-white">Get it on</small>
                                        <h6 class="text-white">Google Play</h6>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6 col-xl-2">
                        <div class="footer-item">
                            <h4 class="text-white mb-4">Quick Links</h4>
                            <a href="https://www.google.com"><i class="fas fa-angle-right me-2"></i> About Us</a>
                            <a href="https://www.google.com"><i class="fas fa-angle-right me-2"></i> Feature</a>
                            <a href="https://www.google.com"><i class="fas fa-angle-right me-2"></i> Attractions</a>
                            <a href="https://www.google.com"><i class="fas fa-angle-right me-2"></i> Tickets</a>
                            <a href="https://www.google.com"><i class="fas fa-angle-right me-2"></i> Blog</a>
                            <a href="https://www.google.com"><i class="fas fa-angle-right me-2"></i> Contact us</a>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6 col-xl-3">
                        <div class="footer-item">
                            <h4 class="text-white mb-4">Support</h4>
                            <a href="https://www.google.com"><i class="fas fa-angle-right me-2"></i> Privacy Policy</a>
                            <a href="https://www.google.com"><i class="fas fa-angle-right me-2"></i> Terms & Conditions</a>
                            <a href="https://www.google.com"><i class="fas fa-angle-right me-2"></i> Disclaimer</a>
                            <a href="https://www.google.com"><i class="fas fa-angle-right me-2"></i> Support</a>
                            <a href="https://www.google.com"><i class="fas fa-angle-right me-2"></i> FAQ</a>
                            <a href="https://www.google.com"><i class="fas fa-angle-right me-2"></i> Help</a>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6 col-xl-3">
                        <div class="footer-item">
                            <h4 class="text-white mb-4">Contact Info</h4>
                            <div class="d-flex align-items-center">
                                <i class="fas fa-map-marker-alt text-primary me-3"></i>
                                <p class="text-white mb-0">123 Street New York.USA</p>
                            </div>
                            <div class="d-flex align-items-center">
                                <i class="fas fa-envelope text-primary me-3"></i>
                                <p class="text-white mb-0">info@example.com</p>
                            </div>
                            <div class="d-flex align-items-center">
                                <i class="fa fa-phone-alt text-primary me-3"></i>
                                <p class="text-white mb-0">(+012) 3456 7890</p>
                            </div>
                            <div class="d-flex align-items-center mb-4">
                                <i class="fab fa-firefox-browser text-primary me-3"></i>
                                <p class="text-white mb-0">Yoursite@ex.com</p>
                            </div>
                            <div class="d-flex">
                                <a class="btn btn-primary btn-sm-square rounded-circle me-3" href="https://www.google.com"><i class="fab fa-facebook-f text-white"></i></a>
                                <a class="btn btn-primary btn-sm-square rounded-circle me-3" href="https://www.google.com"><i class="fab fa-twitter text-white"></i></a>
                                <a class="btn btn-primary btn-sm-square rounded-circle me-3" href="https://www.google.com"><i class="fab fa-instagram text-white"></i></a>
                                <a class="btn btn-primary btn-sm-square rounded-circle me-0" href="https://www.google.com"><i class="fab fa-linkedin-in text-white"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/*<!-- Footer End -->*/}

          {/*<!-- Copyright Start -->*/}
          <div className="container-fluid copyright py-4">
              <div className="container">
                  <div className="row g-4 align-items-center">
                      <div className="col-md-6 text-center text-md-start mb-md-0">
                          <span className="text-body"><a href="https://www.google.com" className="border-bottom text-white"><i
                              className="fas fa-copyright text-light me-2"></i>Your Site Name</a>, All right reserved.</span>
                      </div>
                      <div className="col-md-6 text-center text-md-end text-body">
                          Designed By <a className="border-bottom text-white" href="https://htmlcodex.com">HTML
                          Codex</a>
                      </div>
                  </div>
              </div>
          </div>
          {/*<!-- Copyright End -->*/}


          {/*<!-- Back to Top -->*/}
          <a href="https://www.google.com" className="btn btn-primary btn-lg-square rounded-circle back-to-top"><i
              className="fa fa-arrow-up"></i></a>


          {/*<!-- JavaScript Libraries -->*/}
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
          <script src="./lib/wow/wow.min.js"></script>
          <script src="./lib/easing/easing.min.js"></script>
          <script src="./lib/waypoints/waypoints.min.js"></script>
          <script src="./lib/counterup/counterup.min.js"></script>
          <script src="./lib/lightbox/js/lightbox.min.js"></script>
          <script src="./lib/owlcarousel/owl.carousel.min.js"></script>

          {/*<!-- Template Javascript -->*/}
          <script src="./js/main.js"></script>
          {/*</body>*/}


      </div>
  );
}

export default HomePage;
