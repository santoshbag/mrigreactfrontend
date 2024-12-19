import logo from './logo.svg';
import './App.css';

// src/App.js
import React from 'react';
import LineChart from './LineChart';
import CandlestickChart from './candlestick'
import ConvertAndPrint from "./convertnprint";
import Stockchart from "./components/stockchart_plotly";
import MarketPage from "./market_page";
import OiTree from "./components/levelchart_plotly";
import DynamicSubplots from "./components/testplotly";
import Datatable from "./components/datatable";
import DisplayTable from "./components/tableDisplay";
import DynamicStockCharts from "./components/dynamicStockCharts_plotly";

// import Login from "./components/userlogin";
// import Register from "./components/userregistration";
import SocialLogin from "./components/socialuserlogin";
import OptionPricing from "./components/optionpricer";
import OS from "./os";
import StackedForm from "./components/raforms";
import SpotRateForm from "./components/spotrateform";
import Rates from "./components/ratesCalculator";
import Bonds from "./components/BondCalculator";
import HeaderCarousel from "./pages/header_carousel";
import SectorAnalysis from "./components/Sector_Analysis";
import StockPredict from "./components/Stock_Predict";
import SectorAn from "./components/sectorAnalysis";
import Login from "./components/user/user_login";
import Register from "./components/user/user_registration";
import PortfolioManager from "./components/portfolio/portfolio_manager";
import CheckoutButton from "./components/payment/pay";

function Test() {
  return (
    <div className="App">
      {/*<h1>Stock Price Analysis</h1>*/}
      {/*<DynamicStockCharts stocks={['TATASTEEL','TATAMOTORS','SBIN']}/>*/}
      {/*<Stockchart symbol="NIFTY FMCG" candles={false} smaFlag={false} metric={['return']} />*/}
      {/*<Stockchart symbol="IOC" levelFlag={true} volume={true}/>*/}
      {/*<Datatable table="ta" symbol="nifty_50"/>*/}
      {/*<OptionPricing/>*/}
      {/*  <HeaderCarousel/>*/}
        <CheckoutButton paymentAmount={5.25} order_no={"test_order"}/>
        {/*<Bonds/>*/}
      {/*<Register/>*/}
      {/*<SocialLogin/>*/}
      {/*<Stockchart symbol="SBIN" levelFlag={true} volume={true}/>*/}
      {/*<OiTree symbol="SBIN"/>*/}
      {/*<StockChartest />*/}
    </div>

  );
}

export default Test;
