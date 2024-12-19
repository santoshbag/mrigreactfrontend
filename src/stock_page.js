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
import NAV from "./pages/nav";
import TopBar from "./pages/topbar";
import Footer from "./pages/footer";
import MarketOption from "./components/marketoptions";
import Carousel from "./pages/carousel";
import StockPredict from "./components/Stock_Predict";



function StockPage() {
  const { symbol } = useParams(); // Fetch the stock symbol from the URL params
  const [stkPage, setstkPage] = useState(null);

  useEffect(() =>
      // Fetch the stock data from an API
      {   console.log('STOCK PAGE 1');
          fetchPage("stockpage", symbol)
      .then(data => {
          const stkPage = JSON.parse(data)
          setstkPage(stkPage);
          console.log('STOCK PAGE 2',stkPage);
      })
      },[symbol])

  return (
      <div>
        {/*<head>*/}

        {/*<!-- Navbar & Hero Start -->*/}
        <div class="container-fluid position-relative p-0">
            <NAV activetag="service"/>
            <Carousel activetag="service"/>

            {/*<!-- Header Start -->*/}
            <div class="container-fluid bg-breadcrumb">
                <div class="container text-center py-5" style={{maxwidth: '500px'}}>
                    <h4 class="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">{symbol} </h4>
                    <h4 className="text-white display-8 mb-4 wow fadeInDown" data-wow-delay="0.1s">{(stkPage != null) ? stkPage.stock_desc : ""} </h4>
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
                    {(stkPage != null) ?
                        // stkPage.price_list
                    <div className="col-md-6 col-lg-12 wow fadeInUp" data-wow-delay="0.6s">
                        <div className="service-item">
                            <DataTable data={JSON.parse(stkPage.price_list)}/>
                        </div>
                    </div>
                    : ""}

                    <div className="col-md-6 col-lg-12 wow fadeInUp" data-wow-delay="0.6s">
                        <div className="service-item">
                            <Stockchart symbol={symbol} volume={true} levelFlag={true}/>
                        </div>
                     </div>

                    <h4>Risk & Return</h4>
                    {(stkPage != null) ?
                    <div className="col-md-6 col-lg-12 wow fadeInUp" data-wow-delay="0.6s">
                        <div className="service-item">
                            <p className="mb-" align='middle'>Returns</p>
                            <DataTable data={JSON.parse(stkPage.return_list)}/>
                        </div>
                     </div>
                     : "" }

                    {(stkPage != null) ?
                    <div className="col-md-6 col-lg-12 wow fadeInUp" data-wow-delay="0.6s">
                        <div className="service-item">
                            <p className="mb-" align='middle'>Risk</p>
                            <DataTable data={JSON.parse(stkPage.risk_list)}/>
                        </div>
                     </div>
                        : ""}

                    <div className="col-md-6 col-lg-12 wow fadeInUp" data-wow-delay="0.6s">
                        <div className="service-item">
                             <DynamicStockCharts stocks={[symbol,'NIFTY 50']} metric="return" />
                        </div>
                     </div>

                    <h4>Financial Statements</h4>
                    {(stkPage != null) ?
                    <div className="col-md-6 col-lg-12 wow fadeInUp" data-wow-delay="0.6s">
                        <div className="service-item">
                            <p className="mb-6" align='middle'>Financial Ratios</p>
                            <DataTable data={JSON.parse(stkPage.ratios)}/>
                        </div>
                     </div>
                        : ""}

                    {(stkPage != null) ?
                    <div className="col-md-6 col-lg-12 wow fadeInUp" data-wow-delay="0.6s">
                        <div className="service-item">
                            <p className="mb-" align='middle'>Income Statement</p>
                            <DataTable data={JSON.parse(stkPage.income_statement)}/>
                        </div>
                     </div>
                        : ""}

                    {(stkPage != null) ?
                    <div className="col-md-6 col-lg-12 wow fadeInUp" data-wow-delay="0.6s">
                        <div className="service-item">
                            <p className="mb-" align='middle'>Balance Sheet</p>
                            <DataTable data={JSON.parse(stkPage.balance_sheet)}/>
                        </div>
                     </div>
                        : ""}
                    <h4>News</h4>
                    {(stkPage != null) ?
                            stkPage.news.map((newsitem,index) => (
                            <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay="0.6s">
                                <div className="service-item" >
                                {/*<div height='200px'>*/}
                                 <p className="px-3 py-2">{newsitem[0]}</p>
                                    <a href={newsitem[1]} className="h5 d-inline-block mb-4 px-3" target="_blank">{newsitem[2]}</a>
                                </div>
                            </div>
                                 ))
                   :""}
                    <div></div>
                    <h4>Option Interest Levels</h4>

                    {(stkPage != null) ?
                    <div className="col-md-6 col-lg-12 wow fadeInUp" data-wow-delay="0.6s">
                        <div className="service-item">
                          <Chartgrid rows={1} cols={1} symbols={[symbol]} charttype={['oi']}/>
                        </div>
                     </div>
                        : ""}

                    <div></div>
                    <h4>AI Stock Prediction (LTSM Model)</h4>

                    {(stkPage != null) ?
                    <div className="col-md-6 col-lg-12 wow fadeInUp" data-wow-delay="0.6s">
                        <div className="service-item">
                          <StockPredict symbol={symbol}/>
                        </div>
                     </div>
                        : ""}

                    <div></div>
                    <h4>Available Option Analytics</h4>

                    {(stkPage != null) ?
                    <div className="col-md-6 col-lg-12 wow fadeInUp" data-wow-delay="0.6s">
                        <div className="service-item">
                          <MarketOption symbol={symbol}/>
                        </div>
                     </div>
                        : ""}
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

export default StockPage;
