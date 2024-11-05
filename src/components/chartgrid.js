import React from 'react';
import Plot from 'react-plotly.js';
import './ChartGrid.css';
import Stockchart from "./stockchart_plotly";
import OiTree from "./levelchart_plotly";  // Add CSS for grid styling

// Utility function to create random data for charts
const generateRandomData = (type) => {
  const xValues = Array.from({ length: 50 }, (_, i) => i + 1);
  const yValues = Array.from({ length: 50 }, () => Math.random() * 100);

  if (type === 'candlestick') {
    // Create candlestick data (open, high, low, close)
    return {
      x: xValues,
      open: yValues.map(y => y - 5),
      high: yValues.map(y => y + 10),
      low: yValues.map(y => y - 10),
      close: yValues,
      type: 'candlestick',
    };
  }

  return {
    x: xValues,
    y: yValues,
    type: type === 'area' ? 'scatter' : 'line',
    fill: type === 'area' ? 'tozeroy' : 'none',
  };
};

const ChartGrid = ({ rows, cols,symbols=[],charttype=['price'], chartkind=['candles']}) => {
  // Function to generate the grid of charts
  // ChartType can be 'price' for PriceVol charts, 'oi' for OITree
  // metric can be 'candles', 'line'
  const renderGrid = () => {
    const charts = [];

    // Create n x m grid of charts
    var ctr = 0;
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        if (charttype.includes('price')) {
          charts.push(
              <div className="chart-container" key={`chart-${row}-${col}`}>
                <Stockchart
                    symbol={symbols[ctr]} volume={false} levelFlag={false}
                    candles={chartkind.includes('candles') ? true : false} labels={false}/>
              </div>
          );
        } else {
          charts.push(
              <div className="chart-container" key={`chart-${row}-${col}`}>
                {<OiTree
                    symbol={symbols[ctr]} />
                }
              </div>
          );
        }
        ctr = ctr + 1;
      }
    }

    return charts;
  };

  return (
    <div className="chart-grid"  style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
      {renderGrid()}
    </div>
  );
};

export default ChartGrid;
