import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import axios from 'axios';

const CandlestickChart = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint
    axios.get('http://127.0.0.1:8000/api/stockdata/HDFCBANK/1y')
      .then(response => {
        // Assuming the API returns data in the format [timestamp, open, high, low, close]
        // console.log(response.data)
        const data = JSON.parse(response.data).map(item => [
          // new Date(item.timestamp).getTime(), // Convert to timestamp in milliseconds
          new Date(item.date).getTime(), // Convert to timestamp in milliseconds
          // item.date,
          item.open,
          item.high,
          item.low,
          item.close
        ]);
        console.log(data)
        setChartData(data);
      })
      .catch(error => {
        console.error('Error fetching the stock data:', error);
      });
  }, []);

  const options = {
    title: {
      text: 'Candlestick Chart'
    },
         plotOptions: {
     candlestick: {
         color: 'pink',
         lineColor: 'red',
         upColor: 'lightgreen',
         upLineColor: 'green',
     }
  },
    series: [{
      type: 'candlestick',
      name: 'Stock Price',
      data: chartData
    }],
    xAxis: {
      type: 'datetime'
    }
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

export default CandlestickChart;

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
