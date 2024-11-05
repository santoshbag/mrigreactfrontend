// import logo from './logo.svg';
import './App.css';
import './lib/animate/animate.min.css';
import './lib/lightbox/css/lightbox.min.css';
import './lib/owlcarousel/assets/owl.carousel.min.css';
import './css/bootstrap.min.css';
import './css/style.css';



// src/App.js
import React from 'react';
// import LineChart from './LineChart';
// import CandlestickChart from './candlestick'
// import ConvertAndPrint from "./convertnprint";
import Stockchart from "./components/stockchart_plotly";
import OiTree from "./components/levelchart_plotly";
// import DynamicSubplots from "./components/testplotly";
import Chartgrid from "./components/chartgrid";
import TableDisplay from "./components/tableDisplay";
import DisplayTable from "./components/tableDisplay";
import StockSearch from "./components/search";
import Footer from "./pages/footer";
import NAV from "./pages/nav";
import Topbar from "./pages/topbar";
import MarketOption from "./components/marketoptions";

function MarketPage() {
  return (
      <div>
        {/*<head>*/}
            <meta charSet="utf-8"/>
                <title>Markets </title>
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

                                            <link href="../public/lib/animate/animate.min.css" rel="stylesheet"/>
                                                <link href="../public/lib/lightbox/css/lightbox.min.css" rel="stylesheet"/>
                                                    <link href="../public/lib/owlcarousel/assets/owl.carousel.min.css"
                                                          rel="stylesheet"/>

        {/*<!-- Customized Bootstrap Stylesheet -->*/}
                                                        <link href="../public/css/bootstrap.min.css" rel="stylesheet"/>
        {/*<!-- Template Stylesheet -->*/}
                                                            <link href="../public/css/style.css" rel="stylesheet"/>
        {/*</head>*/}
        {/*<body>*/}

        {/*<div id="spinner"*/}
        {/*     className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">*/}
        {/*    <div className="spinner-border text-primary" style={{width: '3rem', height: '3rem'}} role="status">*/}
        {/*        <span className="sr-only">Loading...</span>*/}
        {/*    </div>*/}
        {/*</div>*/}

       {/*<!-- Topbar Start -->*/}
        <Topbar/>
        {/*<div>*/}
        {/*<!-- Topbar End -->*/}
        {/*<!-- Navbar & Hero Start -->*/}
        <div class="container-fluid position-relative p-0">
            <NAV activetag="marketpage"/>

            {/*<!-- Header Start -->*/}
            <div class="container-fluid bg-breadcrumb">
                 <div class="container text-center py-5" style={{maxwidth: '500px'}}>
                     <h4 class="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">Market Landscape </h4>
            {/*        /!*<ol class="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">*!/*/}
            {/*        /!*    <li class="breadcrumb-item"><a href="index1.html">Home</a></li>*!/*/}
            {/*        /!*    <li class="breadcrumb-item"><a href="#">Pages</a></li>*!/*/}
            {/*        /!*    <li class="breadcrumb-item active text-primary">Service</li>*!/*/}
            {/*        /!*</ol>*!/*/}
                </div>
            </div>

            {/*<!-- Carousel Start -->*/}
            <div class="header-carousel owl-carousel">
                <div class="header-carousel-item">
                    <img src="img/carousel-1.jpg" class="img-fluid w-100" alt="Image"/>
                    <div class="carousel-caption">
                        <div class="container">
                            <div class="row gy-0 gx-5">
                                <div class="col-lg-0 col-xl-5"></div>
                                <div class="col-xl-7 animated fadeInLeft">
                                    <div class="text-sm-center text-md-end">
                                        <h4 class="text-primary text-uppercase fw-bold mb-4">Welcome To MRIG Analytics</h4>
                                        <h1 class="display-4 text-uppercase text-white mb-4">Financial Solutions</h1>
                                        <p class="mb-5 fs-5"> We provide Advisory and Analytical solutions to help your Investment Process
                                        </p>
                                        <div class="d-flex justify-content-center justify-content-md-end flex-shrink-0 mb-4">
                                            <a class="btn btn-light rounded-pill py-3 px-4 px-md-5 me-2" href="#"><i class="fas fa-play-circle me-2"></i> Watch Video</a>
                                            <a class="btn btn-primary rounded-pill py-3 px-4 px-md-5 ms-2" href="#">Learn More</a>
                                        </div>
                                        <div class="d-flex align-items-center justify-content-center justify-content-md-end">
                                            <h2 class="text-white me-2">Follow Us:</h2>
                                            <div class="d-flex justify-content-end ms-2">
                                                <a class="btn btn-md-square btn-light rounded-circle me-2" href=""><i class="fab fa-facebook-f"></i></a>
                                                <a class="btn btn-md-square btn-light rounded-circle mx-2" href=""><i class="fab fa-twitter"></i></a>
                                                <a class="btn btn-md-square btn-light rounded-circle mx-2" href=""><i class="fab fa-instagram"></i></a>
                                                <a class="btn btn-md-square btn-light rounded-circle ms-2" href=""><i class="fab fa-linkedin-in"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="header-carousel-item">
                    <img src="img/carousel-2.jpg" class="img-fluid w-100" alt="Image"/>
                    <div class="carousel-caption">
                        <div class="container">
                            <div class="row g-5">
                                <div class="col-12 animated fadeInUp">
                                    <div class="text-center">
                                        <h4 class="text-primary text-uppercase fw-bold mb-4">Welcome To MRIG Analytics</h4>
                                        <h1 class="display-4 text-uppercase text-white mb-4">Invest your money with higher return</h1>
                                        <p class="mb-5 fs-5">Use our Analytical platforms and Advisory screens to select stocks and funds. Our Option Strategy screen helps to
                                            monetize unique opportunities available in the market according to your risk tolerance
                                        </p>
                                        <div class="d-flex justify-content-center flex-shrink-0 mb-4">
                                            <a class="btn btn-light rounded-pill py-3 px-4 px-md-5 me-2" href="#"><i class="fas fa-play-circle me-2"></i> Watch Video</a>
                                            <a class="btn btn-primary rounded-pill py-3 px-4 px-md-5 ms-2" href="#">Learn More</a>
                                        </div>
                                        <div class="d-flex align-items-center justify-content-center">
                                            <h2 class="text-white me-2">Follow Us:</h2>
                                            <div class="d-flex justify-content-end ms-2">
                                                <a class="btn btn-md-square btn-light rounded-circle me-2" href=""><i class="fab fa-facebook-f"></i></a>
                                                <a class="btn btn-md-square btn-light rounded-circle mx-2" href=""><i class="fab fa-twitter"></i></a>
                                                <a class="btn btn-md-square btn-light rounded-circle mx-2" href=""><i class="fab fa-instagram"></i></a>
                                                <a class="btn btn-md-square btn-light rounded-circle ms-2" href=""><i class="fab fa-linkedin-in"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="header-carousel-item">
                    <img src="img/carousel-2.jpg" class="img-fluid w-100" alt="Image"/>
                    <div class="carousel-caption">
                        <div class="container">
                            <div class="row g-5">
                                <div class="col-12 animated fadeInUp">
                                    <div class="text-center">
                                        <h4 class="text-primary text-uppercase fw-bold mb-4">Welcome To MRIG Analytics</h4>
                                        <h1 class="display-4 text-uppercase text-white mb-4">Portfolio and Analytical Services</h1>
                                        <p class="mb-5 fs-5">Our Portfolio solutions helps to analyze its risks and performance and various stress scenarios.
                                            Fixed Income analytics platform helps the pricing and risk analysis of complex instruments.
                                        </p>
                                        <div class="d-flex justify-content-center flex-shrink-0 mb-4">
                                            <a class="btn btn-light rounded-pill py-3 px-4 px-md-5 me-2" href="#"><i class="fas fa-play-circle me-2"></i> Watch Video</a>
                                            <a class="btn btn-primary rounded-pill py-3 px-4 px-md-5 ms-2" href="#">Learn More</a>
                                        </div>
                                        <div class="d-flex align-items-center justify-content-center">
                                            <h2 class="text-white me-2">Follow Us:</h2>
                                            <div class="d-flex justify-content-end ms-2">
                                                <a class="btn btn-md-square btn-light rounded-circle me-2" href=""><i class="fab fa-facebook-f"></i></a>
                                                <a class="btn btn-md-square btn-light rounded-circle mx-2" href=""><i class="fab fa-twitter"></i></a>
                                                <a class="btn btn-md-square btn-light rounded-circle mx-2" href=""><i class="fab fa-instagram"></i></a>
                                                <a class="btn btn-md-square btn-light rounded-circle ms-2" href=""><i class="fab fa-linkedin-in"></i></a>
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

            {/*<!-- Header End -->*/}
        {/*<!-- Navbar & Hero End -->*/}

        {/*<!-- Market Snapshot Start -->*/}
        <div class="container-fluid service py-5">
            <div class="container py-5">
                <div class="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{maxwidth: '800px'}}>
                    {/*<h4 class="text-primary">Our Services</h4>*/}
                    <h1 class="display-5 mb-4">Market Snapshot </h1>
                    {/*<p class="mb-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur adipisci facilis cupiditate recusandae aperiam temporibus corporis itaque quis facere, numquam, ad culpa deserunt sint dolorem autem obcaecati, ipsam mollitia hic.*/}
                    {/*</p>*/}
                </div>
                <div class="row g-4">

                    <div className="col-md-6 col-lg-6 wow fadeInUp" data-wow-delay="0.6s">
                        <div className="service-item">
                                <Stockchart symbol="NIFTY 50" volume={false} levelFlag={true} labels={true}/>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 wow fadeInUp" data-wow-delay="0.6s">
                        <div className="service-item">
                                <Stockchart symbol="NIFTY BANK" volume={false} levelFlag={true} labels={true}/>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 wow fadeInUp" data-wow-delay="0.6s">
                        <div className="service-item">
                                <Stockchart symbol="INDIA VIX" volume={false} levelFlag={true} labels={true}/>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 wow fadeInUp" data-wow-delay="0.6s">
                        <div className="service-item">
                                <Stockchart symbol="USDINR" volume={false} levelFlag={true} labels={true}/>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 wow fadeInUp" data-wow-delay="0.6s">
                        <div className="service-item">
                                <Stockchart symbol="CRUDE OIL" volume={false} levelFlag={true} labels={true}/>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 wow fadeInUp" data-wow-delay="0.6s">
                        <div className="service-item">
                                <Stockchart symbol="GOLD" volume={false} levelFlag={true} labels={true}/>
                        </div>
                    </div>
                    {/*<div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.4s">*/}
                    {/*    <div class="service-item">*/}
                    {/*        <div class="service-img">*/}
                    {/*            <img src="img/service-2.jpg" class="img-fluid rounded-top w-100" alt="Image"/>*/}
                    {/*        </div>*/}
                    {/*        <div class="rounded-bottom p-4">*/}
                    {/*            <a href="#" class="h4 d-inline-block mb-4">Financial Advisory</a>*/}
                    {/*            <p class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, sint? Excepturi facilis neque nesciunt similique officiis veritatis,*/}
                    {/*            </p>*/}
                    {/*            <a class="btn btn-primary rounded-pill py-2 px-4" href="#">Learn More</a>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.6s">*/}
                    {/*    <div class="service-item">*/}
                    {/*        <div class="service-img">*/}
                    {/*            <img src="img/service-3.jpg" class="img-fluid rounded-top w-100" alt="Image"/>*/}
                    {/*        </div>*/}
                    {/*        <div class="rounded-bottom p-4">*/}
                    {/*            <a href="#" class="h4 d-inline-block mb-4">Managements</a>*/}
                    {/*            <p class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, sint? Excepturi facilis neque nesciunt similique officiis veritatis,*/}
                    {/*            </p>*/}
                    {/*            <a class="btn btn-primary rounded-pill py-2 px-4" href="#">Learn More</a>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.2s">*/}
                    {/*    <div class="service-item">*/}
                    {/*        <div class="service-img">*/}
                    {/*            <img src="img/service-4.jpg" class="img-fluid rounded-top w-100" alt="Image"/>*/}
                    {/*        </div>*/}
                    {/*        <div class="rounded-bottom p-4">*/}
                    {/*            <a href="#" class="h4 d-inline-block mb-4">Supply Optimization</a>*/}
                    {/*            <p class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, sint? Excepturi facilis neque nesciunt similique officiis veritatis,*/}
                    {/*            </p>*/}
                    {/*            <a class="btn btn-primary rounded-pill py-2 px-4" href="#">Learn More</a>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.4s">*/}
                    {/*    <div class="service-item">*/}
                    {/*        <div class="service-img">*/}
                    {/*            <img src="img/service-5.jpg" class="img-fluid rounded-top w-100" alt="Image"/>*/}
                    {/*        </div>*/}
                    {/*        <div class="rounded-bottom p-4">*/}
                    {/*            <a href="#" class="h4 d-inline-block mb-4">Hr Consulting</a>*/}
                    {/*            <p class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, sint? Excepturi facilis neque nesciunt similique officiis veritatis,*/}
                    {/*            </p>*/}
                    {/*            <a class="btn btn-primary rounded-pill py-2 px-4" href="#">Learn More</a>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.6s">*/}
                    {/*    <div class="service-item">*/}
                    {/*        <div class="service-img">*/}
                    {/*            <img src="img/service-6.jpg" class="img-fluid rounded-top w-100" alt="Image"/>*/}
                    {/*        </div>*/}
                    {/*        <div class="rounded-bottom p-4">*/}
                    {/*            <a href="#" class="h4 d-inline-block mb-4">Marketing Consulting</a>*/}
                    {/*            <p class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, sint? Excepturi facilis neque nesciunt similique officiis veritatis,*/}
                    {/*            </p>*/}
                    {/*            <a class="btn btn-primary rounded-pill py-2 px-4" href="#">Learn More</a>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
        {/*<!-- Market Snapshot End -->*/}

        {/*<!-- Sector Landscape Start -->*/}
      <div className="container-fluid service py-5">
                <div className="container py-5">
                    <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s"
                         style={{maxwidth: '800px'}}>
                        {/*<h4 class="text-primary">Our Services</h4>*/}
                        <h1 className="display-5 mb-4">Sector </h1>
                        {/*<p class="mb-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur adipisci facilis cupiditate recusandae aperiam temporibus corporis itaque quis facere, numquam, ad culpa deserunt sint dolorem autem obcaecati, ipsam mollitia hic.*/}
                        {/*</p>*/}
                    </div>
                    <div className="row g-4">
                        <div className="service-item" >
                            <Chartgrid rows={6} cols={3} symbols={["NIFTY 50", "NIFTY BANK", "NIFTY SMALLCAP 100",
                "NIFTY MIDCAP 100", "NIFTY PRIVATE BANK", "NIFTY PSU BANK", "NIFTY IT", "NIFTY AUTO",
                "NIFTY PHARMA", "NIFTY FMCG", "NIFTY FINANCIAL SERVICES", "NIFTY REALTY",
                "NIFTY HEALTHCARE INDEX", "NIFTY INDIA CONSUMPTION", "NIFTY INFRASTRUCTURE", "NIFTY COMMODITIES",
                "NIFTY ENERGY", "NIFTY METAL"
                ]} chartkind={['line']} charttype={['price']}/>
                        </div>
                    </div>
                </div>
            </div>
        {/*<!-- Sector Landscape End -->*/}

        {/*<!-- OI Tree Start -->*/}
            <div className="container-fluid service py-5">
                <div className="container py-5">
                    <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s"
                         style={{maxwidth: '800px'}}>
                        {/*<h4 class="text-primary">Our Services</h4>*/}
                        <h1 className="display-5 mb-4">Option Interest Analysis </h1>
                        {/*<p class="mb-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur adipisci facilis cupiditate recusandae aperiam temporibus corporis itaque quis facere, numquam, ad culpa deserunt sint dolorem autem obcaecati, ipsam mollitia hic.*/}
                        {/*</p>*/}
                    </div>
                    <div className="row g-4">

                        {/*<div className="col-md-12 col-lg-12 wow fadeInUp" data-wow-delay="0.6s">*/}
                            <div className="service-item">
                            <Chartgrid rows={1} cols={1} symbols={["NIFTY"]} charttype={['oi']}/>
                            </div>
                        {/*</div>*/}
                        {/*<div className="col-md-12 col-lg-12 wow fadeInUp" data-wow-delay="0.6s">*/}
                            <div className="service-item">
                              <Chartgrid rows={1} cols={1} symbols={["BANKNIFTY"]} charttype={['oi']}/>
                            </div>
                    </div>
                        {/*</div>*/}
                    </div>
                </div>
        {/*<!-- OI Tree End -->*/}


        {/*<!-- Tech Analysis Start -->*/}
            <div className="container-fluid service py-5">
                <div className="container py-5">
                    <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s"
                         style={{maxwidth: '800px'}}>
                        {/*<h4 class="text-primary">Our Services</h4>*/}
                        <h1 className="display-5 mb-4">Technical Analysis Snapshot </h1>
                        {/*<p class="mb-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur adipisci facilis cupiditate recusandae aperiam temporibus corporis itaque quis facere, numquam, ad culpa deserunt sint dolorem autem obcaecati, ipsam mollitia hic.*/}
                        {/*</p>*/}
                    </div>
                    <div className="row g-4">

                        {/*<div className="col-md-12 col-lg-12 wow fadeInUp" data-wow-delay="0.6s">*/}
                            <div className="service-item">
                            <DisplayTable table='ta' symbol='nifty_50'/>
                            </div>
                        {/*</div>*/}
                        {/*<div className="col-md-12 col-lg-12 wow fadeInUp" data-wow-delay="0.6s">*/}
                    </div>
                        {/*</div>*/}
                </div>
            </div>
        {/*<!-- Tech Analysis End -->*/}

        {/*<!-- Option Analysis Start -->*/}
            <div className="container-fluid service py-5">
                <div className="container py-5">
                    <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s"
                         style={{maxwidth: '800px'}}>
                        {/*<h4 class="text-primary">Our Services</h4>*/}
                        <h1 className="display-5 mb-4">Nifty 50 Option Analysis</h1>
                        {/*<p class="mb-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur adipisci facilis cupiditate recusandae aperiam temporibus corporis itaque quis facere, numquam, ad culpa deserunt sint dolorem autem obcaecati, ipsam mollitia hic.*/}
                        {/*</p>*/}
                    </div>
                    <div className="row g-4">

                        {/*<div className="col-md-12 col-lg-12 wow fadeInUp" data-wow-delay="0.6s">*/}
                            <div className="service-item">
                                <MarketOption symbol='NIFTY'/>
                            </div>
                        {/*</div>*/}
                        {/*<div className="col-md-12 col-lg-12 wow fadeInUp" data-wow-delay="0.6s">*/}
                    </div>
                        {/*</div>*/}
                </div>
            </div>


            <div className="container-fluid service py-5">
                <div className="container py-5">
                    <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s"
                         style={{maxwidth: '800px'}}>
                        {/*<h4 class="text-primary">Our Services</h4>*/}
                        <h1 className="display-5 mb-4">Nifty Bank Option Analysis</h1>
                        {/*<p class="mb-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur adipisci facilis cupiditate recusandae aperiam temporibus corporis itaque quis facere, numquam, ad culpa deserunt sint dolorem autem obcaecati, ipsam mollitia hic.*/}
                        {/*</p>*/}
                    </div>
                    <div className="row g-4">

                        {/*<div className="col-md-12 col-lg-12 wow fadeInUp" data-wow-delay="0.6s">*/}
                            <div className="service-item">
                                <MarketOption symbol='BANKNIFTY'/>
                            </div>
                        {/*</div>*/}
                        {/*<div className="col-md-12 col-lg-12 wow fadeInUp" data-wow-delay="0.6s">*/}
                    </div>
                        {/*</div>*/}
                </div>
            </div>
        {/*<!-- Option Analysis End -->*/}


        {/*}<!-- Footer Start -->*/}
        <Footer/>
        {/*<!-- Footer End -->*/}

        {/*}<!-- Back to Top -->*/}
        <a href="#" class="btn btn-primary btn-lg-square rounded-circle back-to-top"><i class="fa fa-arrow-up"></i></a>

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
        {/*<script src="../public/lib/wow/wow.min.js"></script>*/}
        {/*<script src="../public/lib/easing/easing.min.js"></script>*/}
        {/*<script src="../public/lib/waypoints/waypoints.min.js"></script>*/}
        {/*<script src="../public/lib/counterup/counterup.min.js"></script>*/}
        {/*<script src="../public/lib/lightbox/js/lightbox.min.js"></script>*/}
        {/*<script src="../public/lib/owlcarousel/owl.carousel.min.js"></script>*/}

        <script src="lib/wow/wow.min.js"></script>
        <script src="lib/easing/easing.min.js"></script>
        <script src="waypoints/waypoints.min.js"></script>
        <script src="counterup/counterup.min.js"></script>
        <script src="lightbox/js/lightbox.min.js"></script>
        <script src="lib/owlcarousel/owl.carousel.min.js"></script>
        <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
        {/*<!-- CSS -->*/}
        {/*<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"/>*/}

        {/*<!-- JS -->*/}
        {/*<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>*/}
        {/*<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"></script>*/}

        {/*<script src="../public/js/main.js"></script>*/}
        <script src="js/main.js"></script>

        <script src="index.js" defer></script>

        {/*</body>*/}
        {/*<h1>Stock Price Analysis</h1>*/}
      {/*<Stockchart symbol="TATASTEEL" volume={false} levelFlag={true}/>*/}
      {/*/!*<Stockchart symbol="NIFTY FMCG" candles={false} smaFlag={false} metric={['return']} />*!/*/}
      {/*<Stockchart symbol="IOC" levelFlag={true} volume={true}/>*/}
      {/*<Stockchart symbol="SBIN" levelFlag={true} volume={true}/>*/}
      {/*<OiTree symbol="SBIN"/>*/}


      {/*<StockChartest />*/}
    </div>
  );
}

export default MarketPage;
