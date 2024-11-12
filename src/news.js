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
import {fetchPage} from "./api";
import DataTable from "./components/datatable";
import DynamicStockCharts from "./components/dynamicStockCharts_plotly";
import {fetchNews} from "./api";
import NAV from "./pages/nav";
import TopBar from "./pages/topbar";
import Footer from "./pages/footer";
    import Carousel from "./pages/carousel";



function NewsPage() {
  const [news, setNews] = useState(null);

  useEffect(() =>
      // Fetch the stock data from an API
      {   console.log('STOCK PAGE 1');
          fetchNews()
      .then(data => {

          const news = JSON.parse(data)
          setNews(news);
          console.log('News',news);
      })
      },[])

  return (
      <div>

        {/*<!-- Navbar & Hero Start -->*/}
        <div class="container-fluid position-relative p-0">
            <NAV activetag="news"/>
            <Carousel activetag="news"/>
            {/*<!-- Header Start -->*/}
            <div class="container-fluid bg-breadcrumb">
                <div class="container text-center py-5" style={{maxwidth: '500px'}}>
                    <h4 class="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">Market News </h4>
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

                {(news != null) ?
                    Object.keys(news).map((key) => (
                            <div className="row g-4">
                                <h4 class=" display-6 mb-3 wow fadeInDown ">{key}</h4>
                                {news[key].map((newsitem,index) => (
                                    <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay="0.6s">
                                        <div className="service-item" >
                                        {/*<div height='200px'>*/}
                                            <p className="px-3 py-2">{newsitem[0]}</p>
                                            <a  href={newsitem[3]} className="h5 d-inline-block mb-4 px-3" target="_blank">{newsitem[1]}</a>
                                        </div>
                                    </div>
                                 ))}
                                <div></div>
                            </div>
                        ))
                   :""}
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

export default NewsPage;
