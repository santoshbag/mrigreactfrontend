import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';
import {fetchStockPrice} from "../api";

const DynamicStockCharts = ({ stocks = [],graphdata = [],metric = 'price' }) => {
  const [stockData, setStockData] = useState(null);
  const [loading, setLoading] = useState(true);

  const traces = [];
  // const layout = {};


  useEffect(() => {
    const fetchAllStockData = async () => {
      setLoading(true);

      const fetchedData = await Promise.all(
          stocks.map(async (symbol) => {
            const stock = await fetchStockPrice(symbol);
            // return { symbol, data: stock };
            // return {symbol, data : JSON.parse(stock)};
            return (JSON.parse(stock));
          })
      );

      setStockData(fetchedData); // Set all fetched stock data in state
      setLoading(false);
    };
      if (graphdata.length === 0) {
        fetchAllStockData();
      }else{
        setStockData(graphdata);
        setLoading(false);
      }

  }, [stocks]);


  const preparePlotData = (metric) => {
    console.log('STK DATA 1', stockData);

    if (stockData != null) {
      console.log('STK DATA 2', stockData);
      // console.log('STK DATA Ex', stockDataExample);
      // Iterate over each stock in the data to create traces

      stockData.forEach((stock, index) => {

        if (metric === "price") {
          const trace = {
            x: stock.map((d) => new Date(d.date).toLocaleDateString()),
            // open: stock.map((d) => d.open),
            // high: stock.map((d) => d.high),
            // low: stock.map((d) => d.low),
            y: stock.map((d) => d.close),
            type: 'scatter',  // You can change to 'scatter', 'line' based on need
            mode: 'lines',
            name: stock[0].symbol,
          };
          traces.push(trace);

        }

        // Calculate cumulative returns
        let cumulative = 1;
        if (metric === "return") {
          console.log('metric', metric)
          const trace = {
            x: stock.map((d) => new Date(d.date).toLocaleDateString()),
            y: stock.map((d) => {cumulative += (d.daily_log_returns != null  ? d.daily_log_returns : d.daily_logreturns);  ; return cumulative;}) , // Calculating cumulative return from daily returns
            type: 'scatter',
            mode: 'lines',
            name: stock[0].symbol,
            // yaxis: 'y2', // Put cumulative return on the second y-axis
          };
          traces.push(trace);

          console.log('Returns', trace)
          // return trace;
        }
        ;
        // console.log('trace', stock);

        // traces.push(trace);
      });
      // setTraces(traces);
      console.log('traces', traces);

      // Layout dynamically adjusts based on number of stocks
      // const layout = {};

      // const layout = {
      //   title: 'Dynamic Stock Charts',
      //   showlegend: true,
      //   xaxis: {
      //     title: 'Date',
      //     showticklabels: true,
      //     nticks: 20,
      //     tickangle: -45,
      //   },
      //   yaxis: {
      //     title: 'Stock Price',
      //   },
      //   // height: 300 * stockData.length, // Adjust height dynamically
      //   // grid: {rows: stockData.length, columns: 1, pattern: 'independent'}, // Optional for subplots
      // };
      // setLayout(layout)
    }
  }
    const layout = {
    title: metric.charAt(0).toUpperCase() + metric.slice(1),
    showlegend: stocks.length > 1 ? true : false,
    xaxis: {
      // title: 'Date',
      showticklabels: true,
      nticks: 20,
      tickangle: -45,
    },
    yaxis: {
      title: metric == "return" ? 'Cumulative '+metric.charAt(0).toUpperCase() + metric.slice(1) :metric.charAt(0).toUpperCase() + metric.slice(1),
    },
    // height: 300 * stockData.length, // Adjust height dynamically
    // grid: {rows: stockData.length, columns: 1, pattern: 'independent'}, // Optional for subplots
  };
  preparePlotData(metric)

    if (loading) {
    return <div>Loading...</div>;
  }
    return (
        <Plot
            data={traces}
            layout={layout}
            useResizeHandler={true}  // Automatically resize the chart
            style={{ width: '100%', height: '100%' }}  // Full width/height of container
            config={{responsive: true}}
        />
    );
  }

// Sample usage of the component
const stockDataExample = [
  [
    { date: '2024-01-01', open: 100, high: 110, low: 90, close: 105 },
    { date: '2024-01-02', open: 105, high: 115, low: 95, close: 110 },
    // more data points for stock 1
  ],
  [
    { date: '2024-01-01', open: 200, high: 210, low: 180, close: 205 },
    { date: '2024-01-02', open: 205, high: 220, low: 190, close: 215 },
    // more data points for stock 2
  ],
  // Add more stocks here as needed
];

export default DynamicStockCharts;

