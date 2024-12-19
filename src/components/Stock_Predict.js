import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';
import {fetchSecAnalysis, fetchStockPredict} from "../api";
import DynamicStockCharts from "./dynamicStockCharts_plotly";

function StockPredict({symbol}) {
  const [data, setData] = useState(null);
  console.log("Predicting for Stock",symbol);
  useEffect(() => {
    fetchStockPredict(symbol)
      .then(data => setData(JSON.parse(data)))
      .catch(error => console.error("Error fetching data:", error));
    console.log(data);
  }, [symbol]);

  return data ? (
          <Plot
      data={[
        {
          x: data.actual_price.x.map(date => new Date(date).toLocaleDateString()),
          y: data.actual_price.y,
          type: "scatter",
          mode: "lines",
          name: "Actual Price",
          line: { color: "light blue" },
        },
        {
          x: data.predicted_price.x.map(date => new Date(date).toLocaleDateString()),
          y: data.predicted_price.y,
          type: "scatter",
          mode: "lines",
          name: "Predicted Price (LTSM Model) ",
          line: { color: "orange" },
        },
        {
          x: data.future_price.x.map(date => new Date(date).toLocaleDateString()),
          y: data.future_price.y,
          type: "scatter",
          mode: "lines",
          name: "Future Price (LTSM Model)",
          line: { color: "orange",dash: "dot" },
        },
      ]}
      layout={{
        // width: 1000,
        // height: 600,
        title: symbol + " Price Prediction using AI (LTSM Model) ",
        xaxis: { title: "Date",
                nticks: 20, // Adjust the number of ticks shown
        tickangle: -45,},
        yaxis: { title: "Price" },

      }}
        style={{ width: '100%', height: '100%' }}  // Full width/height of container

    />
  ) : (
    <p>Loading data...</p>
  );
}

export default StockPredict;