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

import Login from "./components/userlogin";
import Register from "./components/userregistration";
import SocialLogin from "./components/socialuserlogin";
import OptionPricing from "./components/optionpricer";
import OS from "./os";
import StackedForm from "./components/raforms";
import SpotRateForm from "./components/spotrateform";
import Rates from "./components/ratesCalculator";
import Bonds from "./components/BondCalculator";

function Test() {
  return (
    <div className="App">
      {/*<h1>Stock Price Analysis</h1>*/}
      {/*<DynamicStockCharts stocks={['TATASTEEL','TATAMOTORS','SBIN']}/>*/}
      {/*<Stockchart symbol="NIFTY FMCG" candles={false} smaFlag={false} metric={['return']} />*/}
      {/*<Stockchart symbol="IOC" levelFlag={true} volume={true}/>*/}
      {/*<Datatable table="ta" symbol="nifty_50"/>*/}
      {/*<OptionPricing/>*/}
        <OS/>
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
