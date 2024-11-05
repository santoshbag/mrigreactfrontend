import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';
import {fetchStockLevels, fetchStockPrice} from "../api";
import axios from 'axios';

// Function to calculate min and max of high and low prices
const getPriceRange = (highPrices, lowPrices) => {
  if ((highPrices == null) || (lowPrices == null)) {
      return []
  }
  else{
  const maxPrice = Math.max(...highPrices);
  const minPrice = Math.min(...lowPrices);
  return [minPrice, maxPrice];
}
};
const StockChart = ({symbol,volume=false,levelFlag=false,candles=true,smaFlag=true,labels=true,metric=[]}) => {
  // const [stockData, setStockData] = useState({
  //   dates: [],
  //   open: [],
  //   high: [],
  //   low: [],
  //   close: [],
  //   volume: [],
  //   sma: [],
  // });
  const [dates, setDatesData] = useState(null);
  const [openP, setOpenData] = useState(null);
  const [highP, setHighData] = useState(null);
  const [lowP, setLowData] = useState(null);
  const [closeP, setCloseData] = useState(null);
  const [volumeP, setVolumeData] = useState(null);
  const [volBarColors, setvolBarColors] = useState(null);
  const [levels, setLevels] = useState(null);
  const [horizontalLines, sethorizontalLines] = useState(null);
  const [returns, setreturns] = useState(null);


  const [sma, setSMAData] = useState(null);

  useEffect(() =>
      // Fetch the stock data from an API
      { fetchStockPrice(symbol)
      .then(data => {
      // const response = await axios.get('API_ENDPOINT');
       const dates = JSON.parse(data).map(item =>
          // new Date(item.timestamp).getTime(), // Convert to timestamp in milliseconds
          new Date(item.date).toLocaleDateString(), // Convert to timestamp in milliseconds
          // item.date
        );
        // console.log(dates)
        setDatesData(dates);

        const openP = JSON.parse(data).map(item =>
          item.open
        );
        // console.log(stkdata_vol)
        // console.log("VOL DATA")
        // console.log(openP)
        setOpenData(openP);

        const highP = JSON.parse(data).map(item =>
          item.high
        );
        // console.log(stkdata_vol)
        // console.log("VOL DATA")
        // console.log(highP)
        setHighData(highP);

        const lowP = JSON.parse(data).map(item =>
          item.low
        );
        // console.log(stkdata_vol)
        // console.log("VOL DATA")
        // console.log(lowP)
        setLowData(lowP);

        const closeP = JSON.parse(data).map(item =>
          item.close
        );

          if (metric.includes('return')){
            const returns = closeP.map((price, index) =>
                index === 0 ? 0: Math.log(price/closeP[0])
              );
            setreturns(returns);
            // console.log(returns);
          }
        // console.log(stkdata_vol)
        // console.log("VOL DATA")
        // console.log(closeP);
        setCloseData(closeP);

        const volumeP = JSON.parse(data).map(item =>
          item.volume
        );

          const volBarColors = volumeP.map((price, index) =>
            index === 0 || price >= volumeP[index - 1] ? 'green' : 'red'
          );
                // console.log(stkdata_vol)
        // console.log("VOL DATA")
        // console.log(volumeP)
        setVolumeData(volumeP);
        setvolBarColors(volBarColors);

        const sma = JSON.parse(data).map(item =>
          item.SMA_20
        );
        // console.log(stkdata_vol)
        // console.log("VOL DATA")
        // console.log(stkdata_vol)
        setSMAData(sma);
  });

  if (levelFlag)
  {fetchStockLevels(symbol)
      .then(data => {
        const levels = JSON.parse(data)
        const horizontalLines = levels.map((value, index) => ({
        type: 'line',
        x0: 0,
        y0: value,
        x1: 1,
        y1: value,
        xref: 'paper',
        yref: 'y',
        line: {
          color: 'lightblue', //index % 2 === 0 ? 'red' : 'blue',  // Alternate between red and blue for the lines
          width: 2,
          dash: 'solid',  // You can change the style here (dash, dot, solid)
        },
        }));
        // console.log(stkdata_vol)
        // console.log("LEVEL DATA")
        // console.log(horizontalLines)
        sethorizontalLines(horizontalLines);})}
          }, [symbol]);

    // Calculate the y-axis price range (min low and max high)
  const [minPrice, maxPrice] = getPriceRange(highP, lowP);

  return(
    // <div>
    <Plot
      data={[
        // Candlestick chart for stock prices
        candles ? {
          x: dates,
          open: openP,
          high: highP,
          low: lowP,
          close: closeP,
          type: 'candlestick',
          xaxis: 'x',
          yaxis: 'y',
          name: 'Candlestick',
        } : {},
        metric.includes('return') ? {
          x: dates,
          // y: closeP,
          y: returns,
          type: 'scatter',
          mode: 'lines',
          fill: 'tozeroy',  // Fills the area under the line to the zero on Y-axis
          line: { color: 'blue' },
          name: symbol,
        } : {},
        metric.includes('price') ? {
          x: dates,
          y: closeP,
          // y: returns,
          type: 'scatter',
          mode: 'lines',
          fill: 'tozeroy',  // Fills the area under the line to the zero on Y-axis
          line: { color: 'blue' },
          name: symbol,
        } : {},

        // SMA line (3-day moving average)
        smaFlag ? {
          x: dates,
          y: sma,
          type: 'scatter',
          mode: 'lines',
          line: { color: 'blue' },
          name: '20-Day SMA',
        }: {},
        // levels (3-day moving average)

        //Volume bar chart
          volume ? {
          x: dates,
          y: volumeP,
          type: 'bar',
          xaxis: 'x2',
          yaxis: 'y2',
          name: 'Volume',
          // marker: { color: 'rgba(100, 200, 102, 0.7)' },
          marker: { color: volBarColors },
        } : {},
      ]}
      layout={{
        title: symbol + ' Chart',
        grid: { rows: 2, columns: 1, pattern: 'independent' }, // Two independent rows for the charts
        xaxis: { rangeslider : {visible : false},showticklabels: false,domain: [0, 1]}, // Full width for both charts
        yaxis: { title: 'Price',showticklabels:  labels,domain: [0.2, 1],
        range: [minPrice, maxPrice], // Set range dynamically based on price data
        },
        xaxis2: {
        title: 'Date',
        anchor: 'y2',
        showticklabels: labels,
        nticks: 20, // Adjust the number of ticks shown
        tickangle: -45,
        },
        yaxis2: {
          title: 'Volume',
          overlaying: 'y2',
          domain: [0, 0.2],
          side: 'right',
          showgrid: labels,
          // range: [0, Math.max(volumeP) * 2], // Scale volume axis
        },
        shapes: horizontalLines, // Insert all lines into the shapes array
        showlegend: false,
        autosize: true,
        // height: 400, width: 600,
        responsive: true,
//        margin: { t: 30, b: 30, l: 30, r: 30 },  // Adjust margins for better fit
        }}
        useResizeHandler={true}  // Automatically resize the chart
        style={{ width: '100%', height: '100%' }}  // Full width/height of container
      config={{ responsive: true }}
    />
// </div>
);
  // Render your chart as before but using the dynamic data.
};
export default StockChart;
