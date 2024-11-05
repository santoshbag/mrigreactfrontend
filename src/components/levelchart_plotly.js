import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';
// import { makeSubplot } from 'plotly.js/lib/subplots';
// import { make_subplots } from 'plotly.js-dist-min';

import {fetchStockOITree} from "../api";

import axios from 'axios';

const OiTree = ({symbol}) => {
  // const [stockData, setStockData] = useState({
  //   dates: [],
  //   open: [],
  //   high: [],
  //   low: [],
  //   close: [],
  //   volume: [],
  //   sma: [],
  // });

  const [strikes, setstrikes] = useState(null);
  const [oi_ce, setoi_ce] = useState(null);
  const [oi_pe, setoi_pe] = useState(null);
  const [plot, setPlot] = useState(null);
  const [traces, setTraces] = useState(null);
  const [layout, setlayout] = useState(null);
  const [border, setborder] = useState(null);

  useEffect(() =>
      // Fetch the stock data from an API
      { fetchStockOITree(symbol)
      .then(data => {
        // const response = await axios.get('API_ENDPOINT');
        const tree = JSON.parse(data);
        var keys = Object.keys(tree);

        const traces = [];
        var plot = [];
        const border = [];
        const layout = {
            title: symbol + ' PCR - ' + Number(tree['pcr']).toFixed(2) + ' Max Pain - ' + Number(tree['max_pain']).toFixed(2),
            grid: { rows: 1, columns: keys.length -2, pattern: 'independent' },
            // type:'category',// Ensures that Strike Prices are shown as categorical labels
            bargap : 0.1,  // Gap between bars
            bargroupgap : 0.2, // Gap between groups of bars (if multiple series)
            barmode: 'relative',
            // width: 300 * keys.length, // Dynamically adjust height
            // height: 150 * keys.length, // Dynamically adjust height

        };
        // console.log(layout)
        for (let i = 0;i < keys.length-2;i++) {
            const strikes = tree[keys[i].toString()]['strikes'];
            const oi_ce = tree[keys[i].toString()]['oi_ce'];
            const oi_pe = tree[keys[i].toString()]['oi_pe'];

            setstrikes(strikes);
            setoi_ce(oi_ce);
            setoi_pe(oi_pe);
            var trace =                 {
                    x: oi_ce,  // X-axis for Open Interest (OI)
                    // x2:oi_pe,

                    y: strikes,  // Y-axis for Strike Prices
                    type: 'bar',
                    orientation: 'h',  // Horizontal bars
                    marker: {
                        color: 'blue',  // Bar color
                    },
                    name: 'CE Open Interest',
                    showlegend : i == keys.length -3 ? true : false,
                  xaxis: `x${i + 1}`,
                  yaxis: `y${i + 1}`,
                }
            traces.push(trace);

            trace =                 {
                    x: oi_pe,  // X-axis for Open Interest (OI)
                    // x2:oi_pe,

                    y: strikes,  // Y-axis for Strike Prices
                    type: 'bar',
                    orientation: 'h',  // Horizontal bars
                    marker: {
                        color: 'green',  // Bar color
                    },
                    name: 'PE Open Interest',
                    showlegend : i == keys.length -3 ? true : false,

                  xaxis: `x${i + 1}`,
                  yaxis: `y${i + 1}`,
                }
            traces.push(trace);

            // console.log('TREE');
            // console.log(traces);
            layout[`xaxis${i + 1}`] = {
                title: 'Open Interest (OI)',
                anchor: `y${i + 1}`,
                // domain: [0.05, 0.95], // Add padding to leave space for border

            };
            layout[`yaxis${i + 1}`] = {
                title: 'Strike Price',
                anchor: `x${i + 1}`,
                  // domain: [(1 - (i + 1) / keys.length-2) + 0.05, 1 - i / keys.length -2 - 0.05],

            };
            // layout['autosize'] = true;
            // layout['responsive'] = true;

            border.push({
                  type: 'rect',
                  xref: `x${i + 1} domain`, // Reference to the subplot's x domain
                  yref: `y${i + 1} domain`, // Reference to the subplot's y domain
                  x0: 0, x1: 1, // From start to end of the subplot horizontally
                  y0: 0, y1: 1, // From start to end of the subplot vertically
                  line: {
                    color: 'black',
                    width: 2,
              },
            });
        }
        setborder(border)
        // layout.shapes = border
        setTraces(traces);
        setlayout(layout);
        })

        }, [symbol]);

    return(
            <Plot
      data={traces}
      layout={layout}
      config={{ responsive: true }}
      style={{ width: '100%', height: '100%' }}
    />
    );

};
export default OiTree;
