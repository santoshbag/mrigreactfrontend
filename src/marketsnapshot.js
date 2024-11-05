import logo from './logo.svg';
import './App.css';

// src/App.js
import React from 'react';
import LineChart from './LineChart';
import CandlestickChart from './candlestick'
import ConvertAndPrint from "./convertnprint";
import Stockchart from "./components/stockchart_plotly";
import OiTree from "./components/levelchart_plotly";
import DynamicSubplots from "./components/testplotly";






function marketsnapshot() {
  return (
    <div className="App">
      {/*<h1>Stock Price Analysis</h1>*/}
      <Stockchart symbol="TATASTEEL" volume={false} levelFlag={true}/>
      {/*<Stockchart symbol="NIFTY FMCG" candles={false} smaFlag={false} metric={['return']} />*/}
      <Stockchart symbol="IOC" levelFlag={true} volume={true}/>
      <Stockchart symbol="SBIN" levelFlag={true} volume={true}/>
      {/*<OiTree symbol="SBIN"/>*/}


      {/*<StockChartest />*/}

    </div>
  );
}

export default marketsnapshot;
