import React from 'react';
import Plot from 'react-plotly.js';

const DynamicSubplots = ({ stockData }) => {
  const traces = [];
  const layout = {
    title: 'Dynamic Candlestick Subplots',
    grid: { rows: stockData.length, columns: 1, pattern: 'independent' },
    height: 300 * stockData.length, // Adjust the height dynamically based on the number of subplots
  };

  stockData.forEach((stock, index) => {
    const trace = {
      x: stock.map((d) => d.date),
      open: stock.map((d) => d.open),
      high: stock.map((d) => d.high),
      low: stock.map((d) => d.low),
      close: stock.map((d) => d.close),
      type: 'candlestick',
      name: `Stock ${index + 1}`,
      xaxis: `x${index + 1}`,
      yaxis: `y${index + 1}`,
    };
    traces.push(trace);

    // Define the axes for each subplot
    layout[`xaxis${index + 1}`] = {
      title: 'Date',
      anchor: `y${index + 1}`,
    };
    layout[`yaxis${index + 1}`] = {
      title: 'Price',
      anchor: `x${index + 1}`,
    };
  });

  return (
    <Plot
      data={traces}
      layout={layout}
      config={{ responsive: true }}
    />
  );
};

export default DynamicSubplots;
