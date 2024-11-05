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



function MFPage() {
  const { mfsymbol } = useParams(); // Fetch the stock symbol from the URL params
  const [mfPage, setmfPage] = useState(null);
  const [mfPrices, setmfPrices] = useState(null);
  const [mfReturns, setmfReturns] = useState(null);

  // console.log('MF PAGE 0 '+ mfsymbol);

    //
    // {
    //     console.log('MF PAGE 1');
    //     fetchPage("mfpage", mfsymbol)
    //         .then(data => {
    //             const mfPage = JSON.parse(data)
    //             setmfPage(mfPage);
    //             console.log('MF PAGE 2', mfPage);
    //         })
    // }
  useEffect(() =>
      // Fetch the stock data from an API
      {
          fetchPage("mfpage", mfsymbol)
      .then(data => {
          const mfPage = JSON.parse(data)
          setmfPage(mfPage);
          console.log('MF PAGE 2',mfPage);
          const mfPrices = mfPage != null ? mfPage.ohlcv != null ? [JSON.parse(mfPage.ohlcv)] : []: [];
          setmfPrices(mfPrices);
          console.log('MF NAVS',mfPrices);

          const mfReturns = mfPage != null ? mfPage.stk_ret != null ? [JSON.parse(mfPage.stk_ret)] : []: [];
          setmfReturns(mfReturns);
          console.log('MF RETS',mfReturns);

      })
      },[mfsymbol])



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
            <NAV activetag="service"/>

            {/*<!-- Header Start -->*/}
            <div class="container-fluid bg-breadcrumb">
                <div class="container text-center py-5" style={{maxwidth: '500px'}}>
                    <h4 class="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">{(mfPage != null) ? (mfPage.stock_desc != null ? mfPage.scheme_name : "Mutual Funds") : "Mutual Funds"} </h4>
                    <h4 className="text-white display-8 mb-4 wow fadeInDown" data-wow-delay="0.1s">{(mfPage != null) ? mfPage.stock_desc : ""} </h4>
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

                {(mfPage != null) ? (mfPage.stock_desc == null ?
                 <div>
                  <h4>Top Funds by AUM</h4>
                    <div className="col-md-6 col-lg-12 wow fadeInUp" data-wow-delay="0.6s">
                        <div className="service-item">
                            <p className="mb-" align='middle'>Top MFs by AUM</p>
                            <DataTable data={JSON.parse(mfPage.topmfslist_aum)}/>
                        </div>
                     </div>
                 </div>
                        : "" ): <div> Loading data...</div>}

                {(mfPage != null) ? (mfPage.stock_desc == null ?
                 <div>
                  <h4>Top Funds by Return</h4>
                    <div className="col-md-6 col-lg-12 wow fadeInUp" data-wow-delay="0.6s">
                        <div className="service-item">
                            <p className="mb-" align='middle'>Top MFs by Return</p>
                            <DataTable data={JSON.parse(mfPage.topmfslist_ret)}/>
                        </div>
                     </div>
                     </div>
                        : "") : <div> Loading data...</div>}

                    {(mfPage != null) ?
                        (mfPage['price_list'] != null) ?
                        // mfPage.price_list
                    <div className="col-md-6 col-lg-12 wow fadeInUp" data-wow-delay="0.6s">
                        <div className="service-item">
                            <p className="mb-6" align='middle'>Nav</p>
                            <DataTable data={JSON.parse(mfPage.price_list)}/>
                        </div>
                    </div>
                            : ""
                    : ""}


                    {(mfPage != null) ?
                        (mfPage['ohlcv'] != null) ?
                        // mfPage.price_list
                    <div className="col-md-6 col-lg-12 wow fadeInUp" data-wow-delay="0.6s">
                        <div className="service-item">
                            <p className="mb-6" align='middle'>Nav</p>
                             <DynamicStockCharts graphdata={mfPrices} metric="price" />
                        </div>
                    </div>
                            : ""
                    : ""}


                    {(mfPage != null) ?
                        (mfPage['return_list'] != null) ?
                        // mfPage.price_list
                    <div className="col-md-6 col-lg-12 wow fadeInUp" data-wow-delay="0.6s">
                        <div className="service-item">
                            <p className="mb-6" align='middle'>Returns</p>
                            <DataTable data={JSON.parse(mfPage.return_list)}/>
                        </div>
                    </div>
                            : ""
                    : ""}


                    {(mfPage != null) ?
                        (mfPage['stk_ret'] != null) ?
                        // mfPage.price_list
                    <div className="col-md-6 col-lg-12 wow fadeInUp" data-wow-delay="0.6s">
                        <div className="service-item">
                            <p className="mb-6" align='middle'>Nav</p>
                             <DynamicStockCharts graphdata={mfReturns} metric="return" />
                        </div>
                    </div>
                            : ""
                    : ""}


                   {/* <div className="col-md-6 col-lg-12 wow fadeInUp" data-wow-delay="0.6s">*/}
                   {/*     <div className="service-item">*/}
                   {/*         <Stockchart symbol={symbol} volume={true} levelFlag={true}/>*/}
                   {/*     </div>*/}
                   {/*  </div>*/}

                   {/* <h4>Risk & Return</h4>*/}
                   {/* {(mfPage != null) ?*/}
                   {/* <div className="col-md-6 col-lg-12 wow fadeInUp" data-wow-delay="0.6s">*/}
                   {/*     <div className="service-item">*/}
                   {/*         <p className="mb-" align='middle'>Returns</p>*/}
                   {/*         <DataTable data={JSON.parse(mfPage.return_list)}/>*/}
                   {/*     </div>*/}
                   {/*  </div>*/}
                   {/*  : "" }*/}

                   {/* {(mfPage != null) ?*/}
                   {/* <div className="col-md-6 col-lg-12 wow fadeInUp" data-wow-delay="0.6s">*/}
                   {/*     <div className="service-item">*/}
                   {/*         <p className="mb-" align='middle'>Risk</p>*/}
                   {/*         <DataTable data={JSON.parse(mfPage.risk_list)}/>*/}
                   {/*     </div>*/}
                   {/*  </div>*/}
                   {/*     : ""}*/}

                   {/* <div className="col-md-6 col-lg-12 wow fadeInUp" data-wow-delay="0.6s">*/}
                   {/*     <div className="service-item">*/}
                   {/*          <DynamicStockCharts stocks={[symbol,'NIFTY 50']} metric="return" />*/}
                   {/*     </div>*/}
                   {/*  </div>*/}

                   {/* <h4>Financial Statements</h4>*/}
                   {/* {(mfPage != null) ?*/}
                   {/* <div className="col-md-6 col-lg-12 wow fadeInUp" data-wow-delay="0.6s">*/}
                   {/*     <div className="service-item">*/}
                   {/*         <p className="mb-" align='middle'>Financial Ratios</p>*/}
                   {/*         <DataTable data={JSON.parse(mfPage.ratios)}/>*/}
                   {/*     </div>*/}
                   {/*  </div>*/}
                   {/*     : ""}*/}

                   {/* {(mfPage != null) ?*/}
                   {/* <div className="col-md-6 col-lg-12 wow fadeInUp" data-wow-delay="0.6s">*/}
                   {/*     <div className="service-item">*/}
                   {/*         <p className="mb-" align='middle'>Income Statement</p>*/}
                   {/*         <DataTable data={JSON.parse(mfPage.income_statement)}/>*/}
                   {/*     </div>*/}
                   {/*  </div>*/}
                   {/*     : ""}*/}

                   {/* {(mfPage != null) ?*/}
                   {/* <div className="col-md-6 col-lg-12 wow fadeInUp" data-wow-delay="0.6s">*/}
                   {/*     <div className="service-item">*/}
                   {/*         <p className="mb-" align='middle'>Balance Sheet</p>*/}
                   {/*         <DataTable data={JSON.parse(mfPage.balance_sheet)}/>*/}
                   {/*     </div>*/}
                   {/*  </div>*/}
                   {/*     : ""}*/}
                   {/* <h4>News</h4>*/}
                   {/* {(mfPage != null) ?*/}
                   {/*         mfPage.news.map((newsitem,index) => (*/}
                   {/*         <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay="0.6s">*/}
                   {/*             <div className="service-item" >*/}
                   {/*             /!*<div height='200px'>*!/*/}
                   {/*              <p className="px-3 py-2">{newsitem[0]}</p>*/}
                   {/*                 <a href={newsitem[1]} className="h5 d-inline-block mb-4 px-3" target="_blank">{newsitem[2]}</a>*/}
                   {/*             </div>*/}
                   {/*         </div>*/}
                   {/*              ))*/}
                   {/*:""}*/}
                   {/* <div></div>*/}
                   {/* <h4>Option Interest Levels</h4>*/}

                   {/* {(mfPage != null) ?*/}
                   {/* <div className="col-md-6 col-lg-12 wow fadeInUp" data-wow-delay="0.6s">*/}
                   {/*     <div className="service-item">*/}
                   {/*       <Chartgrid rows={1} cols={1} symbols={[symbol]} charttype={['oi']}/>*/}
                   {/*     </div>*/}
                   {/*  </div>*/}
                   {/*     : ""}*/}

                </div>
            </div>
        </div>
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

export default MFPage;
