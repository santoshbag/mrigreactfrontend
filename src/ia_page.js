// import logo from './logo.svg';
import './App.css';
import './lib/animate/animate.min.css';
import './lib/lightbox/css/lightbox.min.css';
import './lib/owlcarousel/assets/owl.carousel.min.css';
import './css/bootstrap.min.css';
import './css/style.css';

//Image Imports
import ss1 from './img/ss1.jpg'
import ss2 from './img/ss2.jpg'
import os1 from './img/os1.jpg'

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
import NAV from "./pages/nav";
import Topbar from "./pages/topbar";
import Footer from "./pages/footer";
import OptionPricing from "./components/optionpricer";
import MarketOption from "./components/marketoptions";
import Carousel from "./pages/carousel";


function IAPage() {
  return (
      <div>


        {/*<!-- Navbar & Hero Start -->*/}
        <div class="container-fluid position-relative p-0">
            <NAV activetag="service"/>
            <Carousel activetag="service"/>
            {/*<!-- Header Start -->*/}
            <div class="container-fluid bg-breadcrumb">
                <div class="container text-center py-5" style={{maxwidth: '500px'}}>
                    <h4 class="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">Investment Advisory</h4>
                    <h4 className="text-white display-8 mb-4 wow fadeInDown" data-wow-delay="0.1s">
                        Advisory services and tools to help you make better Investment Decisions.
                    </h4>
                    {/*<ol class="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">*/}
                    {/*    <li class="breadcrumb-item"><a href="index1.html">Home</a></li>*/}
                    {/*    <li class="breadcrumb-item"><a href="#">Pages</a></li>*/}
                    {/*    <li class="breadcrumb-item active text-primary">Service</li>*/}
                    {/*</ol>*/}
                </div>
            </div>
        </div>
            {/*<!-- Header End -->*/}
        {/*<!-- Navbar & Hero End -->*/}

        {/*<!-- Market Snapshot Start -->*/}
        <div class="container-fluid service py-5">
            <div class="container py-5">
                <div class="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{maxwidth: '800px'}}>
                    {/*<h4 class="text-primary">Our Services</h4>*/}
                    {/*<h1 class="display-5 mb-4">Market Snapshot </h1>*/}
                    {/*<p class="mb-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur adipisci facilis cupiditate recusandae aperiam temporibus corporis itaque quis facere, numquam, ad culpa deserunt sint dolorem autem obcaecati, ipsam mollitia hic.*/}
                    {/*</p>*/}
                </div>
                <div class="row g-4">

                    <div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.4s">
                        <div class="service-item">
                            <div class="service-img">
                                {/*<img src={`${process.env.PUBLIC_URL}/img/ss1.jpg`} class="img-fluid rounded-top w-100" alt="Image"/>*/}
                                <img src={ss1} class="img-fluid rounded-top w-100" alt="Image"/>
                            </div>
                            <div class="rounded-bottom p-4">
                                <a href="/ss/" class="h4 d-inline-block mb-4">Stock Strategies</a>
                                <p class="mb-4">
                                    We have our proprietary Strategy themes for stock investments. These themes are based on wide spectrum of investment philosophies to cater to
                                    various objectives and risk appetites. These strategies are updated weekly along with performance monitoring and benchmarking
                                </p>
                                <a class="btn btn-primary rounded-pill py-2 px-4" href="/ss/">Learn More</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.6s">
                        <div class="service-item">
                            <div class="service-img">
                                {/*<img src={`${process.env.PUBLIC_URL}/img/os1.jpg`} class="img-fluid rounded-top w-100" alt="Image"/>*/}
                                <img src={os1} class="img-fluid rounded-top w-100" alt="Image"/>
                            </div>
                            <div class="rounded-bottom p-4">
                                <a href="/os/" class="h4 d-inline-block mb-4">Option Strategies</a>
                                <p class="mb-4">
                                    Popular market strategies like Covered Calls,
                                    Bull and Bear Spreads. Actionable and winning option picks for strategy executions. This is complemented by our powerful option
                                    analyzer platform for the strategy performance and risk analysis.
                                </p>
                                <a class="btn btn-primary rounded-pill py-2 px-4" href="/os/">Learn More</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.2s">
                        <div class="service-item">
                            <div class="service-img">
                                {/*<img src={`${process.env.PUBLIC_URL}/img/ss1.jpg`} class="img-fluid rounded-top w-100" alt="Image"/>*/}
                                <img src={ss1} class="img-fluid rounded-top w-100" alt="Image"/>
                            </div>
                            <div class="rounded-bottom p-4">
                                <a href="/research/" class="h4 d-inline-block mb-4">Stock Research</a>
                                <p class="mb-4">
                                    Stock research tool provides comprehensive information and analysis on the latest price movements, return profiles for various periods.
                                    It is complemented with important Technical Indicators and respective graphs. Fundamental parameters and a historic evolution is provided.
                                </p>
                                <a class="btn btn-primary rounded-pill py-2 px-4" href="/research/">Learn More</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        {/*<!-- Market Snapshot End -->*/}

        {/*<!-- Tech Analysis Start -->*/}
            <div className="container-fluid service py-5">
                <div className="container py-5">

                    <div className="row g-4">

                        {/*<div className="col-md-12 col-lg-12 wow fadeInUp" data-wow-delay="0.6s">*/}
                            <div className="service-item">
                            <MarketOption symbol="NIFTY"/>
                            </div>
                        {/*</div>*/}
                        {/*<div className="col-md-12 col-lg-12 wow fadeInUp" data-wow-delay="0.6s">*/}
                    </div>
                    <br></br><br></br><br></br>

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

        {/*}<!-- Back to Top -->*/}
        <a href="#" class="btn btn-primary btn-lg-square rounded-circle back-to-top"><i class="fa fa-arrow-up"></i></a>

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
        <script src="../public/lib/wow/wow.min.js"></script>
        <script src="../public/lib/easing/easing.min.js"></script>
        <script src="../public/lib/waypoints/waypoints.min.js"></script>
        <script src="../public/lib/counterup/counterup.min.js"></script>
        <script src="../public/lib/lightbox/js/lightbox.min.js"></script>
        <script src="../public/lib/owlcarousel/owl.carousel.min.js"></script>


        <script src="../public/js/main.js"></script>
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

export default IAPage;
