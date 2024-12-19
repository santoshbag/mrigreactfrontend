// import logo from './logo.svg';
import './App.css';
import './lib/animate/animate.min.css';
import './lib/lightbox/css/lightbox.min.css';
import './lib/owlcarousel/assets/owl.carousel.min.css';
import './css/bootstrap.min.css';
import './css/style.css';



// src/App.js
import React, {useEffect, useState} from 'react';

import {useParams} from "react-router-dom";
import StockSearch from "./components/search";
import {fetchPage} from "./api";
import DataTable from "./components/datatable";
import DynamicStockCharts from "./components/dynamicStockCharts_plotly";
import NAV from "./pages/nav";
import Topbar from "./pages/topbar";
import Footer from "./pages/footer";
import Carousel from "./pages/carousel";
import PortfolioManager from "./components/portfolio/portfolio_manager";



function PortfolioPage() {

  return (
      <div>

        {/*<!-- Navbar & Hero Start -->*/}
        <div class="container-fluid position-relative p-0">
            <NAV activetag="service"/>
            <Carousel activetag="service"/>
            {/*<!-- Header Start -->*/}
            <div class="container-fluid bg-breadcrumb">
                <div class="container text-center py-5" style={{maxwidth: '500px'}}>
                    <h4 class="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">User Portfolios </h4>
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
                <div class="row g-4">

                 {/*<div>*/}
                    {/*<div className="col-md-6 col-lg-12 wow fadeInUp" data-wow-delay="0.6s">*/}
                        <div className="service-item">
                            <PortfolioManager/>
                        </div>
                     {/*</div>*/}
                 {/*</div>*/}
                </div>
            </div>
        </div>

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

export default PortfolioPage;
