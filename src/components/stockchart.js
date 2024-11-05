import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import Indicators from 'highcharts/indicators/indicators';
import { fetchStockPrice} from "../api";
import axios from 'axios';

const StockChart = ({symbol}) => {
  const [chartData, setChartData] = useState(null);
  const [chartVolData, setChartVolData] = useState(null);
  const [chart_20_SMA_Data, setChart_20_SMA_Data] = useState(null);
  const [chart_60_SMA_Data, setChart_60_SMA_Data] = useState(null);
  const [chart_100_SMA_Data, setChart_100_SMA_Data] = useState(null);


  useEffect(() => { fetchStockPrice(symbol)
      .then(data => {
        const stkdata_price = JSON.parse(data).map(item => [
          // new Date(item.timestamp).getTime(), // Convert to timestamp in milliseconds
          new Date(item.date).getTime(), // Convert to timestamp in milliseconds
          // item.date,
          item.open,
          item.high,
          item.low,
          item.close
        ]);
        // console.log(stkdata_price)

        setChartData(stkdata_price);

        const stkdata_vol = JSON.parse(data).map(item => [
          // new Date(item.timestamp).getTime(), // Convert to timestamp in milliseconds
          new Date(item.date).getTime(), // Convert to timestamp in milliseconds
          // item.date,
          item.volume
        ]);
        // console.log(stkdata_vol)
        // console.log("VOL DATA")
        // console.log(stkdata_vol)
        setChartVolData(stkdata_vol);

        const stkdata_20_SMA = JSON.parse(data).map(item => [
          // new Date(item.timestamp).getTime(), // Convert to timestamp in milliseconds
          new Date(item.date).getTime(), // Convert to timestamp in milliseconds
          // item.date,
          item.SMA_20
        ]);
        // console.log("SMA DATA")
        // console.log(stkdata_20_SMA)
        setChart_20_SMA_Data(stkdata_20_SMA);

        const stkdata_60_SMA = JSON.parse(data).map(item => [
          // new Date(item.timestamp).getTime(), // Convert to timestamp in milliseconds
          new Date(item.date).getTime(), // Convert to timestamp in milliseconds
          // item.date,
          item.SMA_60
        ]);
        // console.log("SMA DATA")
        // console.log(stkdata_20_SMA)
        setChart_60_SMA_Data(stkdata_60_SMA);

        const stkdata_100_SMA = JSON.parse(data).map(item => [
          // new Date(item.timestamp).getTime(), // Convert to timestamp in milliseconds
          new Date(item.date).getTime(), // Convert to timestamp in milliseconds
          // item.date,
          item.SMA_100
        ]);
        // console.log("SMA DATA")
        // console.log(stkdata_20_SMA)
        setChart_100_SMA_Data(stkdata_100_SMA);
      });
  }, [symbol]);

  const options = {
    title: {
      text: symbol + ' Chart'
    },
      plotOptions: {
     candlestick: {
         color: 'red',
         lineColor: 'red',
         upColor: 'green',
         upLineColor: 'green',
     }
  },
    yAxis: [{
        labels: {
            align: 'right',
            x: -3
        },
        title: {
            text: 'Price'
        },
        height: '73%',
        lineWidth: 2,
        resize: {
            enabled: true
        }
    }, {
        labels: {
            align: 'right',
            x: -3
        },
        title: {
            text: 'Volume'
        },
        top: '75%',
        height: '25%',
        offset: 0,
        lineWidth: 2
    }],
    tooltip: {
        split: true
    },
    series: [{
      type: 'candlestick',
      name: 'Stock Price',
      data: chartData,
      tooltip: {
            valueDecimals: 2
        }
    },
    {
        type: 'column',
        name: 'Volume',
        data: chartVolData,
        yAxis: 1
    },
    {
        // type: 'sma',
        name: 'SMA 20',
        data: chart_20_SMA_Data,
        linkedTo: 'Stock Price',
        tooltip: {
            valueDecimals: 2
        }
    },
    {
        // type: 'sma',
        name: 'SMA 60',
        data: chart_60_SMA_Data,
        linkedTo: 'Stock Price',
        tooltip: {
            valueDecimals: 2
        }
    },
    {
        // type: 'sma',
        name: 'SMA 100',
        data: chart_100_SMA_Data,
        linkedTo: 'Stock Price',
        tooltip: {
            valueDecimals: 2
        }
    }
    ],
    xAxis: {
      type: 'datetime'
    },
        rangeSelector: {
            selected: 1
        },
  };

  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        constructorType={'stockChart'}
        options={options}
      />
    </div>
  );
};

export default StockChart;

// const CandlestickChart = () => {
//   const options = {
//     title: {
//       text: 'Candlestick Chart'
//     },
//     plotOptions: {
//     candlestick: {
//         color: 'pink',
//         lineColor: 'red',
//         upColor: 'lightgreen',
//         upLineColor: 'green',
//     }
//   },
//     series: [{
//       type: 'candlestick',
//       name: 'AAPL Stock Price',
//       data: [
//         // [timestamp, open, high, low, close]
//         [1596758400000, 435.19, 437.39, 434.34, 435.12],
//         [1596844800000, 435.62, 437.98, 433.94, 437.50],
//         [1596931200000, 438.22, 439.92, 436.79, 438.66],
//         [1597017600000, 437.86, 439.64, 435.12, 435.55],
//         [1597104000000, 435.40, 437.98, 434.34, 437.50]
//       ]
//     }]
//   };
//
//   return (
//     <div>
//       <HighchartsReact
//         highcharts={Highcharts}
//         constructorType={'stockChart'}
//         options={options}
//       />
//     </div>
//   );
// };
//
// export default CandlestickChart;
