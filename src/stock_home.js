    // import logo from './logo.svg';
import './App.css';
import './lib/animate/animate.min.css';
import './lib/lightbox/css/lightbox.min.css';
import './lib/owlcarousel/assets/owl.carousel.min.css';
import './css/bootstrap.min.css';
import './css/style.css';



// src/App.js
import React, {useEffect, useState} from 'react';
// import LineChart from './LineChart';
// import CandlestickChart from './candlestick'
// import ConvertAndPrint from "./convertnprint";
import Stockchart from "./components/stockchart_plotly";
import OiTree from "./components/levelchart_plotly";
// import DynamicSubplots from "./components/testplotly";
import Chartgrid from "./components/chartgrid";
import TableDisplay from "./components/tableDisplay";
import DisplayTable from "./components/tableDisplay";
import {useParams} from "react-router-dom";
import StockSearch from "./components/search";
import {fetchMarketMovers, fetchPage} from "./api";
import DataTable from "./components/datatable";
import DynamicStockCharts from "./components/dynamicStockCharts_plotly";
import {fetchNews} from "./api";
import NAV from "./pages/nav";
import TopBar from "./pages/topbar";
import Footer from "./pages/footer";



function StockHome() {
  const [movers, setMovers] = useState(null);

  useEffect(() =>
      // Fetch the stock data from an API
      {   console.log('STOCK PAGE 1');
          fetchMarketMovers()
      .then(data => {
          const movers = JSON.parse(data)
          setMovers(movers);
          console.log('Movers',movers);
      })
      },[])

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
        <TopBar/>
        {/*<div>*/}
        {/*<!-- Topbar End -->*/}

        {/*<!-- Navbar & Hero Start -->*/}
        <div class="container-fluid position-relative p-0">
            <NAV activetag="services"/>
            {/*<!-- Header Start -->*/}
            <div class="container-fluid bg-breadcrumb">
                <div class="container text-center py-5" style={{maxwidth: '500px'}}>
                    <h4 class="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">Stocks</h4>
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
                {/*<div class="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{maxwidth: '800px'}}>*/}
                {/*    /!*<h4 class="text-primary">Our Services</h4>*!/*/}
                {/*    /!*<h1 class="display-5 mb-4">Market Snapshot </h1>*!/*/}
                {/*    /!*<p class="mb-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur adipisci facilis cupiditate recusandae aperiam temporibus corporis itaque quis facere, numquam, ad culpa deserunt sint dolorem autem obcaecati, ipsam mollitia hic.*!/*/}
                {/*    /!*</p>*!/*/}
                {/*</div>*/}
                <div className="row g-4">
                {(movers != null) ?
                    Object.keys(movers).map((key) => (
                                    <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay="0.6s">
                                        <div className="service-item" >
                                        {/*<div height='200px'>*/}
                                            <p className="px-3 py-2">{key.charAt(0).toUpperCase() + key.slice(1)}</p>
                                            <DataTable table='movers' data={JSON.parse(movers[key])}/>
                                        </div>
                                    </div>
                        ))
                   :""}
                   </div>
                </div>
            </div>
        {/*<!-- Tech Analysis Start -->*/}
            <div className="container-fluid service py-5">
                <div className="container py-5">
                    <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s"
                         style={{maxwidth: '800px'}}>
                        {/*<h4 class="text-primary">Our Services</h4>*/}
                        <h5 className="display-5 mb-4">Technical Analysis Snapshot </h5>
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
        {/*}<!-- Footer Start -->*/}
        <Footer/>
        {/*<!-- Footer End -->*/}

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
        </div>

  );
}

export default StockHome;
