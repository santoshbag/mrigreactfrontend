// import logo from './logo.svg';
import './App.css';
import './lib/animate/animate.min.css';
import './lib/lightbox/css/lightbox.min.css';
import './lib/owlcarousel/assets/owl.carousel.min.css';
import './css/bootstrap.min.css';
import './css/style.css';
import './fin_calc.css';



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
import {useLocation, useParams} from "react-router-dom";
import StockSearch from "./components/search";
import {fetchPage} from "./api";
import DataTable from "./components/datatable";
import DynamicStockCharts from "./components/dynamicStockCharts_plotly";
import NAV from "./pages/nav";
import TopBar from "./pages/topbar";
import Footer from "./pages/footer";
import MarketOption from "./components/marketoptions";
import RatesCalculator from "./components/ratesCalculator";
import BondCalculator from "./components/BondCalculator";
import Bonds from "./components/BondCalculator";



function QuantPage() {
  const [activeTab, setActiveTab] = useState("Home");

  const location = useLocation();
  const tabs = ['Rates','Bonds','Options','Swaps'];

    const renderContent = () => {
        switch (activeTab) {
            case "Rates":
                // return <div>Welcome to the Home Page!</div>;
                return (
                    <div className="container-fluid service py-5">
                        <div className="container py-5">
                            <div className="row g-4">
                                <div className="col-md-6 col-lg-12 wow fadeInUp" data-wow-delay="0.6s">
                                    <div className="service-item">
                                        <RatesCalculator/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case "Bonds":
                // return <div>This is the Profile Page.</div>;
                return (
                    <div className="container-fluid service py-5">
                        <div className="container py-5">
                            <div className="row g-4">
                                <div className="col-md-6 col-lg-12 wow fadeInUp" data-wow-delay="0.6s">
                                    <div className="service-item">
                                        <Bonds/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case "Options":
                // return <div>Welcome to the Home Page!</div>;
                return (
                    <div className="container-fluid service py-5">
                        <div className="container py-5">
                            <div className="row g-4">
                                <div className="col-md-6 col-lg-12 wow fadeInUp" data-wow-delay="0.6s">
                                    <div className="service-item">
                                        <MarketOption symbol=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case "Swaps":
                return <div>Welcome to Swaps Page.</div>;
            default:
                return (
                    <div className="container-fluid service py-5">
                        <div className="container py-5">
                            <div className="row g-4">
                                <div className="col-md-6 col-lg-12 wow fadeInUp" data-wow-delay="0.6s">
                                    <div className="service-item">
                                        <RatesCalculator/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
        }
    };

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
            <NAV activetag="service"/>

            {/*<!-- Header Start -->*/}
            <div class="container-fluid bg-breadcrumb">
                <div class="container text-center py-5" style={{maxwidth: '500px'}}>
                    <h4 class="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">Quantitative Calculators </h4>
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

        <div className="FinCalc">
            <div className="tab-container">
               {tabs.map((tab) => (
                    <div
                        key={tab}
                        className={`tab ${activeTab === tab ? "active" : ""}`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </div>
                ))}
                {/*<div*/}
                {/*    className={`tab ${activeTab === "Rates" ? "active" : ""}`}*/}
                {/*    onClick={() => setActiveTab("Rates")}*/}
                {/*>*/}
                {/*    Rates*/}
                {/*</div>*/}
                {/*<div*/}
                {/*    className={`tab ${activeTab === "Bonds" ? "active" : ""}`}*/}
                {/*    onClick={() => setActiveTab("Bonds")}*/}
                {/*>*/}
                {/*    Bonds*/}
                {/*</div>*/}
                {/*<div*/}
                {/*    className={`tab ${activeTab === "Swaps" ? "active" : ""}`}*/}
                {/*    onClick={() => setActiveTab("Swaps")}*/}
                {/*>*/}
                {/*    Swaps*/}
                {/*</div>*/}
            </div>
            <div className="tab-content">
                {renderContent()}
            </div>
        </div>


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

export default QuantPage;
