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
import Carousel from "./pages/carousel";

function MarketPage() {
  return (
      <div>

        {/*<!-- Navbar & Hero Start -->*/}
        <div class="container-fluid position-relative p-0">
            <NAV activetag="marketpage"/>
            <Carousel activetag="marketpage"/>
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
